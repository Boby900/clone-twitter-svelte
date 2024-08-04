export const ssr = false
// import { asc, between, count, eq, getTableColumns, sql } from 'drizzle-orm';
import { mypostsTable } from '$lib/server/schema';
import { db } from '$lib/server/db';


export const load = async() =>{

    const post = await db.select().from(mypostsTable);
    // console.log( post)
    return {post}
}

load()