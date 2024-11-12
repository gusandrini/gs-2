"use client";
import { TipoPerfil } from '@/types/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Perfil = () => {
    const [mensagemFeedback, setMensagemFeedback] = useState('');
    const navigate = useRouter();
    const [perfil, setPerfil] = useState<TipoPerfil>({
        id_usuario: 0,
        nome: "",
        email: "",
        cpf: "",
    });
    const [isEditMode, setIsEditMode] = useState(false);

    // Carrega dados do perfil do localStorage ou da API
    useEffect(() => {
        const perfilLocalStorage = localStorage.getItem("perfilUsuario");
        if (perfilLocalStorage) {
            setPerfil(JSON.parse(perfilLocalStorage));
        } else {
            chamadaApi();
        }
    }, []);

    // Função para fazer a chamada à API e pegar os dados do perfil
    const chamadaApi = async () => {
        try {
            const response = await fetch('http://localhost:8080/usuario');
            const data = await response.json();
            setPerfil(data);
            localStorage.setItem("perfilUsuario", JSON.stringify(data));  // Armazena no localStorage
        } catch (error) {
            console.error("Falha na listagem", error);
        }
    };

    // Função para lidar com a alteração dos dados no formulário
    const handleChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evento.target;
        setPerfil({ ...perfil, [name]: value });
    };

    // Função para lidar com o envio do formulário (criação ou edição)
    const handleSubmit = async (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();

        try {
            const method = isEditMode ? "PUT" : "POST";
            const url = isEditMode
                ? `http://localhost:8080/usuario/${perfil.id_usuario}`
                : 'http://localhost:8080/usuario';

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nome: perfil.nome,
                    email: perfil.email,
                    cpf: perfil.cpf,
                })
            });

            if (response.ok) {
                const data = await response.json();
                alert(isEditMode ? "Perfil editado com sucesso!" : "Perfil criado com sucesso!");
                setPerfil(data);
                localStorage.setItem("perfilUsuario", JSON.stringify(data));  // Atualiza no localStorage
                setIsEditMode(false);
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

    // Função para excluir o perfil
    const handleDelete = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:8080/usuario/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                alert("Perfil removido com sucesso!");
                localStorage.removeItem("perfilUsuario");  // Remove do localStorage
                navigate.push("/login");
            } else {
                const errorText = await response.json();
                setMensagemFeedback(`Erro ao excluir: ${errorText.message || 'Erro desconhecido.'}`);
            }
        } catch (error) {
            console.error("Falha ao remover perfil.", error);
            setMensagemFeedback("Falha ao remover perfil.");
        }
    };

    // Função para iniciar o modo de edição
    const handleEdit = (perfilSelecionado: TipoPerfil) => {
        setPerfil(perfilSelecionado);
        setIsEditMode(true);
    };

    return (
        <div>
            <div className="paginas">
                <Link href="/">Home / Perfil</Link>
            </div>

            <div className="perfil">
                <div className="titulo_introducao">
                    <h1>{isEditMode ? "Edite seu Perfil" : "Visualize ou Exclua seu Perfil"}</h1>
                </div>

                {/* Exibição de feedback se houver algum */}
                {mensagemFeedback && <div className="feedback">{mensagemFeedback}</div>}

                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nome:</label>
                        {isEditMode ? (
                            <input
                                type="text"
                                name="nome"
                                value={perfil.nome}
                                onChange={handleChange}
                                placeholder="Digite seu nome"
                                title="Insira seu nome completo"
                            />
                        ) : (
                            <span>{perfil.nome}</span>  // Exibe o nome sem possibilidade de editar
                        )}
                    </div>
                    <div>
                        <label>Email:</label>
                        {isEditMode ? (
                            <input
                                type="email"
                                name="email"
                                value={perfil.email}
                                onChange={handleChange}
                                placeholder="Digite seu email"
                                title="Insira seu email"
                            />
                        ) : (
                            <span>{perfil.email}</span>  // Exibe o email sem possibilidade de editar
                        )}
                    </div>
                    <div>
                        <label>CPF:</label>
                        {isEditMode ? (
                            <input
                                type="text"
                                name="cpf"
                                value={perfil.cpf}
                                onChange={handleChange}
                                placeholder="Digite seu CPF"
                                title="Insira seu CPF"
                                pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                                required
                            />
                        ) : (
                            <span>{perfil.cpf}</span>  // Exibe o CPF sem possibilidade de editar
                        )}
                    </div>

                    {/* Exibe o botão de salvar ou editar conforme o modo */}
                    <div>
                        {isEditMode ? (
                            <button type="submit">Salvar</button>
                        ) : (
                            <div>
                                <button type="button" onClick={() => handleEdit(perfil)}>Editar</button>
                                <button type="button" onClick={() => handleDelete(perfil.id_usuario)}>Excluir</button>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Perfil;
