const API_URL = "http://localhost:8080/usuario";

// Interface para o usuário
export interface Usuario {
  id_usuario: number;
  cpf: string;
  nome: string;
  senha: string;
  email: string;
}

// Função para obter os dados de um usuário específico pelo ID
export async function obterUsuarioPorId(id_usuario: number): Promise<Usuario> {
  try {
    const response = await fetch(`${API_URL}/${id_usuario}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao buscar os dados do usuário.");
    }

    return await response.json(); // Retorna os dados do usuário
  } catch (error) {
    console.error("Erro ao buscar usuário por ID:", error);
    throw error;
  }
}

// Função para atualizar dados do usuário
export async function atualizarUsuarioPorId(id_usuario: number, usuario: Usuario) {
  try {
    const response = await fetch(`${API_URL}/${id_usuario}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario), // Passando o objeto completo de usuário
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Erro ao atualizar usuário:", errorText);
      throw new Error(`Erro ao atualizar usuário: ${errorText}`);
    }

    return await response.json(); // Retorna os dados atualizados do usuário
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    console.error("Detalhes do erro:", error); // Logando o erro completo
    throw error;
  }
}

// Função para excluir um usuário pelo ID
export async function excluirUsuarioPorId(id_usuario: number) {
  try {
    const response = await fetch(`${API_URL}/${id_usuario}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao excluir o usuário.");
    }

    return true; // Retorna true se a exclusão foi bem-sucedida
  } catch (error) {
    console.error("Erro ao excluir o usuário:", error);
    throw error;
  }
}
