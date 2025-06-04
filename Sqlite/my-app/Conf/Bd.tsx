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
        console.log('Usuários selecionados com sucesso:', resultado);
        return resultado;
    } catch (error) {
        console.error('Erro ao selecionar usuários:', error);
    }  
}

async function selectUsuarioById(
    db: SQLite.SQLiteDatabase, id: number) {
    
    try {
        const resultado = await db.getFirstAsync(
            `SELECT * FROM USUARIO WHERE ID_US = ?`, id
        );
       
        console.log('Usuário selecionado com sucesso:', resultado);
        return resultado;
    } catch (error) {
        console.error('Erro ao selecionar usuário por ID:', error);
    }
}

async function deleteUsuarioById(
    db: SQLite.SQLiteDatabase, id: number) {
    
    try {
        await db.runAsync(
            `DELETE FROM USUARIO WHERE ID_US = ?`, id
        );
        console.log('Usuário deletado com sucesso');
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
    }
}

async function updateUsuario(
    db: SQLite.SQLiteDatabase, id: number, nome: string, email: string) {
    try {
        await db.runAsync(
            `UPDATE USUARIO SET NOME_US = ?, EMAIL_US = ? WHERE ID_US = ?`,
            [id, nome, email]
        );
        console.log('Usuário atualizado com sucesso');
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
    }
}

export {Banco, createTabela, insertUsuario, selectUsuario, selectUsuarioById, deleteUsuarioById, updateUsuario};