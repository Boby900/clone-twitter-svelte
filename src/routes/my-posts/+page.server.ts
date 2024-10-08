import { mypostsTable } from '$lib/server/schema';
import { db } from '$lib/server/db';
import { redirect } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) {
		return redirect(302, '/');
	}
	const post = await db.select().from(mypostsTable);

	return { user: event.locals.user, post };
};
