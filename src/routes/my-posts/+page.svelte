<script>
	export let data;
	import * as Card from '$lib/components/ui/card';
	import { Pencil } from 'lucide-svelte';
	import journal from '$lib/assets/journal-person-on-a-rocket-in-space.png';
</script>


	{#if data.post.length > 0}
		{#each data.post as post}
		<div class="grid-cols-3 grid gap-3 p-4 m-4">
			<Card.Root>
				<Card.Header>
					<Card.Title>{post.content}</Card.Title>
				</Card.Header>
				<Card.Content>
					{post.imageUrl}
				</Card.Content>
				<Card.Content>
					<div class="flex justify-around">
						<div>
							<a href="/my-posts/{post.id}">
								<Pencil strokeWidth="3" color="#afba17" />
							</a>
						</div>
					</div>
				</Card.Content>
			</Card.Root>
		</div>
		{/each}
	
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

