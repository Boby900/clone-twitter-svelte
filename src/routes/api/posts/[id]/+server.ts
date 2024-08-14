import { json } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { mypostsTable } from '$lib/server/schema';
import { eq, sql } from 'drizzle-orm';
// export function GET() {
// 	const number = Math.floor(Math.random() * 6) + 1;

// 	return json(number);
// }


export async function POST({ params }: { params: { id: string } }) {
	
	try {
		const  { id }  = params;
	console.log(id);
        await db
            .update(mypostsTable)
            .set({ likes: sql`${mypostsTable.likes} + 1` }) // Example field update
            .where(eq(mypostsTable.id, id))

         

        return json({ success: true, message: `Post with ID ${id} updated successfully.` }, { status: 200 });
    } catch (error) {
        console.error('Error updating post:', error);
        return json({ success: false, error: 'Failed to update post' }, { status: 500 });
    }
}
