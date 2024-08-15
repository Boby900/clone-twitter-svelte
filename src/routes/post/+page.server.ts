import type { Actions } from './$types';
import { mypostsTable } from '$lib/server/schema';
import { db } from '$lib/server/db';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { generateId } from 'lucia';

export const actions: Actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const content = formData.get('content');
		const id = generateId(15);

		if (typeof content === 'string' && content.trim() !== '') {
			try {
				await db.insert(mypostsTable).values({ content: content, id: id });

				return { success: true };
			} catch (error) {
				console.error('Error inserting data:', error);
				return { success: false };
			}
		}
	}
};

export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) {
		return redirect(302, '/');
	}
	const post = await db.select().from(mypostsTable);

	return { user: event.locals.user, post };
};
