import mysql from 'mysql2/promise';

interface Options{
    query: string;
    values?: any[]; 
}

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root', 
    database: 'portfolio', 
    port: 3307,
    password: '5040',
});

export const sql = async ({query, values}: Options) => {
    const [rows] = await pool.query(query, values);
    
    return rows;
}