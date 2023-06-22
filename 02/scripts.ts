type Item = {
    nome: string,
    descricao: string,
    valor: number
}

type Cartao = {
    numero: number,
    validade: string,
    nome: string,
    cvv: number
}

type Carrinho = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: 'credito' | 'Debito',
    cartao: Cartao
}

type Endereco = {
    cep: string,
    rua: string,
    bairro: string,
    cidade: string,
    estado: string
}

// Forma simples de fazer

// type NovoCarrinho = {
//     item: Item,
//     qtd: number,
//     desconto: number,
//     frete: number,
//     tipoTransacao: Lowercase<'credito' | 'Debito'>,
//     cartao: Cartao,
//     endereco: Endereco
// }

type NovoCarrinho = Omit<Carrinho, "tipoTransacao"> & {
    tipoTransacao: Lowercase<'credito' | 'Debito'>,
    endereco: Endereco
}