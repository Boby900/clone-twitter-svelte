import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) {
		return "this is bob"
	}
	return {
		
		user: event.locals.user
	};
};
