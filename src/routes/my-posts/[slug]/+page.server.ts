export const ssr = false
import { mypostsTable } from '$lib/server/schema';
import { db } from '$lib/server/db';

export const load = async() =>{


    const post = await db.select().from(mypostsTable);
   
    return {post}
}

