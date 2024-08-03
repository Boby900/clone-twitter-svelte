export const ssr = false
// import { asc, between, count, eq, getTableColumns, sql } from 'drizzle-orm';
import { postTable } from '$lib/server/schema';
import { db } from '$lib/server/db';


export const load = async() =>{

    const post = await db.select().from(postTable);
    console.log(typeof post)
    return {...post}
    
}

load()