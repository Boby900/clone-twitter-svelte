export const ssr = false
import { mypostsTable } from '$lib/server/schema';
import { db } from '$lib/server/db';
import type { Actions } from './$types';
import { eq } from 'drizzle-orm';

export const load = async() =>{


    const post = await db.select().from(mypostsTable);
   
    return {post}
}



export const actions: Actions = {
	default: async ({params}) => {
      
        console.log(params.slug)
        await db.delete(mypostsTable).where(eq(mypostsTable.id,params.slug))
        console.log("button clicked")
	},
} 