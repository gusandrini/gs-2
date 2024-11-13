export type TipoCadastro = {
    id_usuario: number,
    cpf: string,
    nome: string,
    senha: string;
    email: string;
}

export type TipoEnergia = {
    id_es: number,
    tp_energia: string,
    localizacao_geografica: string,
    energia_mensal: string;
    obj_implantacao: string;
    orcamento: string;
    necessidade_orcamento: string;
    usuario_es: string;
    preferencia_contato: string;
    contato: string;
}
