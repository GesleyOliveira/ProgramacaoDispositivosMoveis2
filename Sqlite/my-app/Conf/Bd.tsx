import * as SQLite from 'expo-sqlite';

async function Banco() {
  try{
    const db = await SQLite.openDatabaseAsync('fatecVotorantim');
    console.log('Banco de dados aberto com sucesso');
    return db;
  } catch (error) {
        console.error('Erro ao abrir o banco de dados:', error);
        throw error; //
  }
}

async function createTabela(db: SQLite.SQLiteDatabase) {
  try {
    await db.execAsync(
      `PRAGMA journal_mode=WAL;
      CREATE TABLE IF NOT EXISTS USUARIO (
        ID_US INTEGER PRIMARY KEY AUTOINCREMENT,
        NOME_US VARCHAR(100),
        EMAIL_US VARCHAR(100)
      );
    `);
    console.log('Tabela criada com sucesso');
  } catch (error) {
    console.error('Erro ao criar tabela:', error);
  }
}

async function insertUsuario(
    db: SQLite.SQLiteDatabase, nome: string, email: string) {
    
    try {
        await db.runAsync(
            `INSERT INTO USUARIO (NOME_US, EMAIL_US) VALUES (?, ?)`,
            [nome, email]
        );
        console.log('Usuário inserido com sucesso');
    } catch (error) {
        console.error('Erro ao inserir usuário:', error);
    }
}

async function selectUsuario(db: SQLite.SQLiteDatabase) {
    try {
        const resultado = await db.getAllAsync(
            `SELECT * FROM USUARIO`
        );
        console.log('Usuários selecionados com sucesso:', result);
        return resultado;
    } catch (error) {
        console.error('Erro ao selecionar usuários:', error);
    }  
}


export {Banco, createTabela, insertUsuario};