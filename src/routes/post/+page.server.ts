import type { Actions } from './$types';
export const actions: Actions ={
    default: async (event) => {
        const formData = await event.request.formData();
        const content = formData.get('content');
        console.log(content)
        console.log("this shit is working!")
    }
}