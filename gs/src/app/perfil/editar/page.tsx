"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { atualizarUsuarioPorId, Usuario, obterUsuarioPorId } from "../../../services/api";

export default function EditarConta() {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [loading, setLoading] = useState(true); 
  const router = useRouter();

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      alert("Usuário não logado. Redirecionando para a página de login.");
      router.push("/");
      return;
    }

    async function fetchUsuario() {
      try {
        const idUsuario = userId ? parseInt(userId, 10) : 0; 
        const dadosUsuario = await obterUsuarioPorId(idUsuario); 
        setUsuario(dadosUsuario);
      } catch (error) {
        console.error("Erro ao carregar os dados do usuário:", error);
        alert("Erro ao carregar dados do usuário. Tente novamente mais tarde.");
      } finally {
        setLoading(false); 
      }
    }

    fetchUsuario();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (usuario) {
      try {
        await atualizarUsuarioPorId(usuario.id_usuario, usuario); 
        alert("Dados atualizados com sucesso!");
        router.push("/perfil"); 
      } catch (error) {
        console.error("Erro ao atualizar dados do usuário:", error);
        alert("Erro ao atualizar dados do usuário. Tente novamente.");
      }
    } else {
      alert("Nenhum dado de usuário encontrado para atualização.");
    }
  };

  if (loading) {
    return <p>Carregando...</p>; 
  }

  if (!usuario) {
    return <p>Nenhum usuário encontrado.</p>; 
  }

  return (
<div id="container_main_editar_conta">
  <div id="container_editar_conta">
    <h1 className="titulo_editar_conta">Atualização de Conta</h1>
    <form onSubmit={handleSubmit}>
      <p className="texto_conta">Atualize os campos abaixo:</p>
      
      <ul className="ul_editar_conta">
        <li className="li_editar_conta">
          <label htmlFor="idNome"><strong>Nome:</strong></label>
          <input
            type="text"
            name="nome"
            id="idNome"
            className="input"
            value={usuario.nome}
            required
            onChange={(e) => setUsuario({ ...usuario, nome: e.target.value })}
          />
        </li>
        <li className="li_editar_conta">
          <label htmlFor="idEmail"><strong>Email:</strong></label>
          <input
            type="email"
            name="email"
            id="idEmail"
            className="input"
            value={usuario.email}
            required
            onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
          />
        </li>
        <li className="li_editar_conta">
          <label htmlFor="idCPF"><strong>CPF:</strong></label>
          <input
            type="text"
            name="cpf"
            id="idCPF"
            className="input"
            value={usuario.cpf}
            required
            onChange={(e) => setUsuario({ ...usuario, cpf: e.target.value })}
          />
        </li>
        <li className="ultimo_li li_editar_conta">
          <label htmlFor="idSenha"><strong>Senha:</strong></label>
          <input
            type="text"
            name="senha"
            id="idSenha"
            className="input"
            value={usuario.senha}
            required
            onChange={(e) => setUsuario({ ...usuario, senha: e.target.value })}
          />
        </li>
      </ul>

      <button type="submit" className="link_editar_conta">Atualizar</button>
    </form>
  </div>
</div>

  );
}
