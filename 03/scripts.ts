type Conn = {
    username: string,
    password: string,
    host: string,
    port: string,
    dbname: string
}

type Conexao = {
    driver: string,
    url: string
}

const conexao = (dados: Conn): Readonly<Conexao> => {
    const { username, password, host, port, dbname } = dados;
    return {
        driver: 'postgres',
        url: `postgresql://${username}:${password}@${host}:${port}/${dbname}`
    };
}

const conecta = conexao({
    username: 'leo',
    password: '123',
    host: 'localhost',
    port: '5432',
    dbname: 'principal'
})

conecta.driver = 'mysql'; //A função da forma que está até agora permite que o campo driver seja alterado, e vamos impedir isso

