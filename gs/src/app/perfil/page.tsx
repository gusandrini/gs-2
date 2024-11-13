"use client";
import { TipoCadastro } from '@/types/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function EditarExcluirUsuario() {
  const [mensagemFeedback, setMensagemFeedback] = useState('');
  const navigate = useRouter();
  const [usuario, setUsuario] = useState<TipoCadastro>({
    id_usuario: 0,
    nome: "",
    email: "",
    cpf: "",
    senha: "",
  });
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    // Recupera os dados do usuário do localStorage
    const usuarioLocal = localStorage.getItem("usuario");

    if (usuarioLocal) {
      const usuarioData = JSON.parse(usuarioLocal);
      setUsuario(usuarioData);
      setIsEditMode(true); // Definindo que o modo de edição está ativado
    }
  }, []);

  const handleChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evento.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    try {
      const url = `http://localhost:8080/usuario/${usuario.id_usuario}`;

      const response = await fetch(url, {
        method: "PUT", // Sempre usa PUT
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id_usuario: Number(usuario.id_usuario),
          nome: usuario.nome,
          email: usuario.email,
          cpd: usuario.cpf,
          senha: usuario.senha,
        })
      });

      if (response.ok) {
        alert("Conta editada com sucesso!");
        setUsuario({
          id_usuario: 0,
          nome: "",
          email: "",
          cpf: "",
          senha: "",
        });
        navigate.push("/perfil");
      } else {
        const errorText = await response.json();
        setMensagemFeedback(`Erro: ${errorText.message || 'Erro desconhecido.'}`);
      }
    } catch (error) {
      if (error instanceof Error) {
        setMensagemFeedback(`Falha no processo: ${error.message}`);
      } else {
        setMensagemFeedback(`Falha no processo: Um erro desconhecido ocorreu.`);
      }
      console.error("Erro na requisição:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8080/usuario/${usuario.id_usuario}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert("Usuário removido com sucesso!");
        localStorage.removeItem("usuario"); // Remove os dados do usuário após exclusão
        navigate.push("/cadastro");
      }
    } catch (error) {
      console.error("Falha ao remover usuário.", error);
    }
  };

  return (
    <div className="editar-excluir-page">
      <h2 className="titulo">Editar ou Excluir Conta</h2>
      <form onSubmit={handleSubmit} className="input-area">
        <label htmlFor="idNome">Nome completo:</label>
        <input
          type="text"
          id="idNome"
          name="nome"
          placeholder="Nome completo"
          value={usuario.nome}
          onChange={handleChange}
          required
        />

        <label htmlFor="idEmail">Email:</label>
        <input
          type="email"
          id="idEmail"
          name="email"
          placeholder="Email"
          value={usuario.email}
          onChange={handleChange}
          required
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        />

        <label htmlFor="idCpf">CPF:</label>
        <input
          type="text"
          id="idCpf"
          name="cpf"
          placeholder="CPF"
          value={usuario.cpf}
          onChange={handleChange}
          required
          pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
        />

        <label htmlFor="idSenha">Senha:</label>
        <input
          type="password"
          id="idSenha"
          name="senha"
          placeholder="Senha"
          value={usuario.senha}
          onChange={handleChange}
          required
          pattern=".{8,}"
          title="A senha deve ter no mínimo 8 caracteres."
        />

        <button type="submit" className="botao-atualizar">Atualizar Dados</button>
      </form>

      <button onClick={handleDelete} className="botao-excluir">Excluir Conta</button>

      <p className={mensagemFeedback.includes('sucesso') ? 'mensagem-sucesso' : 'mensagem-erro'}>
        {mensagemFeedback}
      </p>

      <p className="login">
        <Link href="/perfil" className="voltar-perfil">Voltar para o Perfil</Link>
      </p>
    </div>
  );
}
