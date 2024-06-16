import {sql} from '~~/server/db';

export type LikeModel = {
    id: number;
    project: string;
    likes: number;
}

export const read = async(project : string): Promise<LikeModel[]> => {
    const result = await sql({
        query: 'SELECT likes FROM project_likes WHERE project = ?',
        values: [project]
    })as LikeModel[];

    return result;

}

export const update = async (project: string) => {
    await sql({
        query: `
        UPDATE project_likes
        SET likes = likes + 1
        WHERE project = ?`
        ,
        values: [project]
    });
}

