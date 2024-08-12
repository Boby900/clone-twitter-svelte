import { json } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { mypostsTable } from '$lib/server/schema';
import { eq } from 'drizzle-orm';
// export function GET() {
// 	const number = Math.floor(Math.random() * 6) + 1;

// 	return json(number);
// }


export async function POST({ request, cookies }) {
	const { description } = await request.json();

	const userid = cookies.get('userid');
	console.log(description, userid);
	// const { id } = await db.createTodo({ userid, description });

	// return json({ id }, { status: 201 });
}
