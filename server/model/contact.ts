import {sql} from '~~/server/db';

export type ContactModel = {
    id: number;
    email: string;
    subject: string;
    message: string;
}

export const read = async() => {
    const result = await sql({
        query: 'SELECT * FROM contact'
    });

    return result as ContactModel[];

}

export const detail = async(id : string) => {
    const result = await sql({
        query: 'SELECT * FROM contact where id = ?',
        values: [id]
    })as any;


    return result.legnth === 1 ? result[0] as ContactModel : null;

}

export const create = async (data: Pick<ContactModel, 'email' | 'message' | 'subject'>) => {
    const result = await sql({
        query: 
        'INSERT INTO contact (email, subject, message) VALUES (?, ?, ?)',
        values: [
            data.email, 
            data.subject || null,
            data.message
        ]
    }) as any;


    return result.affectedRows === 1 ? { insertId: result.insertId } : null;
}

