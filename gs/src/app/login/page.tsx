"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

// Definindo uma interface para o tipo de usuário
interface Usuario {
  email: string;
  senha: string;
  // Adicione outras propriedades conforme necessário
}

const Login = () => {
  const [mensagem, setMensagem] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [usuarios, setUsuarios] = useState<Usuario[]>([]); // Aplicando o tipo de usuário
  const navigate = useRouter();

  useEffect(() => {
    // Verificar no localStorage se o usuário já está logado
    const user = localStorage.getItem("usuario");
    if (user) {
      navigate.push("/"); // Redireciona para a página inicial se o usuário já estiver logado
    }

    // Chama a API para buscar os usuários
    const chamadaApi = async () => {
      try {
        const response = await fetch('http://localhost:8080/usuario');
        if (!response.ok) {
          throw new Error('Erro ao buscar usuários');
        }
        const data = await response.json();
        setUsuarios(data);
      } catch (error) {
        console.error("Falha na listagem", error);
        setMensagem("Erro ao carregar dados. Tente novamente mais tarde.");
      }
    };

    chamadaApi();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Agora TypeScript sabe que cada usuário tem as propriedades `email` e `senha`
    const usuario = usuarios.find(user => user.email === email && user.senha === senha);

    if (usuario) {
      // Salva o usuário no localStorage e sessionStorage após o login bem-sucedido
      localStorage.setItem("usuario", JSON.stringify(usuario)); // Persistente
      sessionStorage.setItem("usuario", JSON.stringify(usuario)); // Temporário

      setMensagem("Login bem-sucedido!");

      // Redireciona o usuário após 2 segundos
      setTimeout(() => {
        navigate.push("/"); // Redireciona para a página inicial
      }, 2000);
    } else {
      setMensagem("Email ou senha inválidos.");
      setTimeout(() => {
        setMensagem('');
      }, 3000);
    }
  };

  return (
    <div className="wrapper">
      <h2 className='login_h2'>Bem-vindo!</h2>
      <form onSubmit={handleSubmit} className="input-area">
        <input
          type="email"
          id="idEmail"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$"
        />

        <input
          type="password"
          id="idSenha"
          name="senha"
          placeholder="Senha"
          required
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button type="submit" className="b_login">Entrar</button>
        <p>
          Não tem uma conta?
          <Link href="/cadastro" className="f_cadastro">Cadastre-se</Link>
        </p>
      </form>

      {/* Exibe mensagem de sucesso ou erro */}
      <p id="mensagem" className={mensagem.includes('sucesso') ? 'sucesso' : 'erro'}>{mensagem}</p>
    </div>
  );
};

export default Login;
