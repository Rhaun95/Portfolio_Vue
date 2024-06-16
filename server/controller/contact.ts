import {H3Event} from 'h3' ;
import * as contactModel from '~~/server/model/contact' ;

export const read = async () => {
    try {
        const result = await contactModel.read();
        return{
            data : result
        };
    } catch {
        throw createError({
            statusCode: 500, 
            statusMessage: 'Failed to read contact'
        });
    }
};


export const detail = async (evt : H3Event) => {
    try {
        const result = await contactModel.detail(evt.context.params?.id as string);
        return{
            data : result
        };
    } catch {
        throw createError({
            statusCode: 500, 
            statusMessage: 'Failed to detailed view of contact'
        });
    }
};

export const create = async (evt: H3Event) => {
    try {
        const body = await readBody(evt);
        const result = await contactModel.create({
            email: body.email,
            subject: body.subject || null,
            message: body.message
        });
        return{
            data : result
        };
    } catch {
        throw createError({
            statusCode: 500, 
            statusMessage: 'Failed to create contact'
        });
    }
};
