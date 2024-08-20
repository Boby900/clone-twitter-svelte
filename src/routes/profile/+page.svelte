<script lang="ts">
	import type { PageData } from './$types';
	import bob from '$lib/assets/icons8-x-64.png';
	export let data: PageData;
	let imageUrl: string = '';
   let name: string = '';
	async function fetchData() {
		const response = await fetch(`/api`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await response.json();
		if (data[0].github_avatar_url && data[0].username !== '') {
			imageUrl = data[0].github_avatar_url;
         name = `Hii, ${data[0].username}`;
		}
		console.log(data);
	}
</script>

<div class="flex flex-col items-center justify-center">
	<div class="p-4 m-4">
		<img
			src={imageUrl}
			class="rounded-full h-[200px] w-[200px] border border-rose-30"
			alt="Your avatar"
		/>
	</div>
	<div></div>
	<div class="p-4 m-4">
		<p> {name}</p>
		<button on:click={fetchData} class="bg-rose-500 text-white p-2 rounded-md">Edit Profile</button>
	</div>
</div>
