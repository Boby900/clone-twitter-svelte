import type { Actions } from './$types';
import { postTable } from '$lib/server/schema';
import { db } from '$lib/server/db';
export const actions: Actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const content = formData.get('content');
		console.log(content);


        if (typeof content === "string" && content.trim() !== "") {
            try {
              await db.insert(postTable).values({ content: content });
      
              return { success: true };
            } catch (error) {
              console.error("Error inserting data:", error);
              return { success: false };
            }
          }


	}
};
