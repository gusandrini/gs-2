// pages/perfil.tsx
"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Usuario {
  id_usuario: number;
  nome: string;
  email: string;
  cpf: string;
  tipoDocumento: string;
  documento: string;
}

const Perfil = () => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Verifica se o usuário está autenticado
    const userData = sessionStorage.getItem("usuario");

    if (userData) {
      // Converte o JSON armazenado em um objeto
      setUsuario(JSON.parse(userData));
    } else {
      // Redireciona para a página de login se o usuário não estiver autenticado
      router.push("/login");
    }
  }, [router]);

  // Se o usuário não estiver autenticado, não renderiza nada
  if (!usuario) return null;

  return (
    <div className="perfil_page">
      <h2>Dados do Usuário</h2>
      <p><strong>ID:</strong> {usuario.id_usuario}</p>
      <p><strong>Nome:</strong> {usuario.nome}</p>
      <p><strong>Email:</strong> {usuario.email}</p>
      <p><strong>CPF:</strong> {usuario.cpf}</p>
      <p><strong>Tipo de Documento:</strong> {usuario.tipoDocumento}</p>
      <p><strong>Documento:</strong> {usuario.documento}</p>
    </div>
  );
};

export default Perfil;
