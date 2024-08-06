export const ssr = false
// import { asc, between, count, eq, getTableColumns, sql } from 'drizzle-orm';
import { mypostsTable } from '$lib/server/schema';
import { db } from '$lib/server/db';
// import type { eq } from 'drizzle-orm';
// const existingUser = await db.query.userTable.findFirst({
//     where: eq(userTable.username, username.toLowerCase())
// })
export const load = async() =>{

    // const my-post = await db.query.mypostsTable.findFirst({where: eq(mypostsTable.id, )})

    const post = await db.select().from(mypostsTable);
    // console.log( post)
    return {post}
}

