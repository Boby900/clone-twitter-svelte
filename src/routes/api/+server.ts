import { json } from '@sveltejs/kit';
import { userTable } from '$lib/server/schema';
import { db } from '$lib/server/db';
import { eq, isNotNull } from 'drizzle-orm';

export async function GET() {

    const users = await db.select().from(userTable).where(isNotNull(userTable.github_avatar_url));
	return json(users);
}





