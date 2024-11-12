"use client";

import { useEffect, useState } from "react";
import { obterUsuarioPorId, Usuario, excluirUsuarioPorId } from "../../services/api";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Conta() {
  const [usuario, setUsuario] = useState<Usuario | null>(null); 
  const router = useRouter();

  useEffect(() => {
    // Recuperando o ID do usuário do localStorage
    const userId = localStorage.getItem("id_usuario");

    if (!userId) {
      alert("Usuário não logado. Redirecionando para a página de login.");
      router.push("/login");
      return;
    }

    async function fetchUsuario() {
      try {
        const id_usuario = userId ? parseInt(userId, 10) : null; // Certificando-se de que o userId não seja null
        if (!id_usuario) {
          throw new Error("ID do usuário inválido.");
        }
        const dadosUsuario = await obterUsuarioPorId(id_usuario);
        setUsuario(dadosUsuario);
      } catch (error) {
        console.error("Erro ao carregar os dados do usuário:", error);
        alert("Erro ao carregar dados do usuário. Tente novamente mais tarde.");
      }
    }

    fetchUsuario();
  }, [router]);

  if (!usuario) {
    return <p>Carregando...</p>;
  }

  async function handleExcluirConta() {
    if (confirm("Tem certeza de que deseja excluir sua conta? Esta ação não pode ser desfeita.")) {
      try {
        const userId = localStorage.getItem("id_usuario");
        if (!userId) {
          alert("Usuário não encontrado.");
          return;
        }

        const id_usuario = parseInt(userId, 10); // Aqui, o ID é convertido de forma segura
        if (isNaN(id_usuario)) {
          throw new Error("ID de usuário inválido.");
        }

        await excluirUsuarioPorId(id_usuario);
        localStorage.removeItem("id_usuario"); // Remover o ID do localStorage
        alert("Conta excluída com sucesso.");
        router.push("/"); // Redirecionar para a página inicial
      } catch (error) {
        console.error("Erro ao excluir a conta:", error);
        alert("Erro ao excluir a conta. Tente novamente.");
      }
    }
  }

  return (
    <div id="container_main_conta">
      <div id="container_conta">
        <h1 className="titulo_conta">Minha Conta</h1>
        <p className="texto_conta">Abaixo estão seus dados cadastrados no sistema:</p>
        <ul className="ul_conta">
          <li><strong>Nome:</strong> {usuario.nome}</li> 
          <li><strong>Email:</strong> {usuario.email}</li> 
          <li><strong>CPF:</strong> {usuario.cpf}</li>
          <li className="ultimo_li"><strong>Senha:</strong> {usuario.senha}</li> 
        </ul>
        <div className="botoes_conta">
          <Link href='/perfil/editar-conta' className='link_editar_conta'>Editar</Link>
          <button className="btn_excluir_conta" onClick={handleExcluirConta}>Excluir Conta</button>
        </div>
      </div>
    </div>
  );
}
