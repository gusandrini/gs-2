export type TipoCadastro = {
    id_usuario: number,
    cpf: string,
    nome: string,
    senha: string;
    email: string;
}

export type TipoEnergia = {
    id_es: number;
    tp_energia: string;
    localizacao_geografica: string;
    energia_mensal: number; // Alterado para number
    obj_implementacao: string;
    orcamento: number; // Alterado para number
    necessidade_atendimento: string;
    usuario_es: string;
    preferencia_contato: string;
    contato: string;
};


export type TipoConta = {
    id_economia: number,
    consumo_mensal_energia: string,
    custo_energia: string,
    economia_es: string;
    economia_total: string;
}