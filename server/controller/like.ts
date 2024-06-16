import {H3Event} from 'h3' ;
import * as likeModel from '~~/server/model/like' ;

export const read = async (evt: H3Event) => {
    try {
        const project = evt.context.params?.project as string;
        const result = await likeModel.read(project);
        return{
            data : result[0].likes
        };
    } catch {
        throw createError({
            statusCode: 500, 
            statusMessage: 'Failed to read likes'
        });
    }
};


export const update = async (evt: H3Event) => {
    try {
        
        const project = evt.context.params?.project as string;
        const result = await likeModel.update( project);
        return{
            data: { message: 'Like count updated successfully' }
        };
    } catch {
        throw createError({
            statusCode: 500, 
            statusMessage: 'Failed to update likes'
        });
    }
};
