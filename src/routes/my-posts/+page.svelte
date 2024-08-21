<script>
	export let data;
	import * as Card from '$lib/components/ui/card';
	import { Pencil } from 'lucide-svelte';
	import journal from '$lib/assets/journal-person-on-a-rocket-in-space.png';
</script>


	{#if data.post.length > 0}
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 m-4  rounded-lg shadow-lg">
		{#each data.post as post}
		  <Card.Root class=" rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
			<Card.Header class="p-4  text-white">
			  <Card.Title class="text-lg font-semibold text-gray-100">{post.content}</Card.Title>
			</Card.Header>
			<Card.Content class="p-4 text-gray-300">
			  <div class="w-full h-48 flex items-center justify-center rounded-lg">
				<span>No Image Available</span>
			  </div>
			</Card.Content>
			<Card.Content class="p-4">
			  <div class="flex justify-between items-center">
				<a href="/my-posts/{post.id}" class="text-yellow-500 hover:text-yellow-400">
				  <Pencil strokeWidth="3" color="#afba17" />
				</a>
			  </div>
			</Card.Content>
		  </Card.Root>
		{/each}
	  </div>
	  
	{:else}
		<div
			class="flex  flex-col items-center justify-center text-center p-4 m-4 border rounded-lg border-gray-300 border-dashed"
		>
			<div>
				<img  src={journal} alt="no-posts" />

				<h2 class="text-2xl font-semibold text-gray-400">No Posts Yet</h2>
				<p class=" p-2 m-2 text-gray-200">
					It seems there are no posts at the moment. Start creating one to share with the community!
				</p>
				<a
					href="/post"
					class="mt-4 p-2 m-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600"
				>
					Create Your First Post
				</a>
			</div>
		</div>
	{/if}

