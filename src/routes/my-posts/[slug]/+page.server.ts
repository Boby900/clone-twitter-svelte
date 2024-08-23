import { mypostsTable } from '$lib/server/schema';
import { db } from '$lib/server/db';
import type { Actions } from './$types';
import { eq } from 'drizzle-orm';

import { redirect } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) {
		return redirect(302, '/'); 
	} else {
		const post = await db.select().from(mypostsTable);
		return { user: event.locals.user, post };
	}
};

export const actions: Actions = {
	default: async ({ params }) => {
		await db.delete(mypostsTable).where(eq(mypostsTable.id, params.slug));
	}
};
