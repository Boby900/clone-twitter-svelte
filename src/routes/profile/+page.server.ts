import type { PageServerLoad } from './$types';
import { userTable } from '$lib/server/schema';
import { db } from '$lib/server/db';
import { isNotNull } from 'drizzle-orm';
import { redirect } from '@sveltejs/kit';


export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) {
		return redirect(302, '/');
	}
	const users = await db.select().from(userTable).where(isNotNull(userTable.github_avatar_url));
	return {
		
		user: event.locals.user,
		users
	};
};
