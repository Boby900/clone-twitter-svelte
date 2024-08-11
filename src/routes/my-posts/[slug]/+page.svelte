<script>
	import { Heart } from 'lucide-svelte';
	import { Trash2 } from 'lucide-svelte';
	export let data;
	import * as Card from '$lib/components/ui/card';
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	const { params } = $page;


	let number;
	
	async function add() {
		const response = await fetch('/api/posts');
		number = await response.json();
		console.log("this is the number of likes", number);
	}

</script>

<div class="text-center text-2xl p-2 m-2">Welcome to my-posts page</div>

<div class="grid-cols-3 grid gap-3 p-4 m-4">
	{#each data.post as post}
		{#if post.id == params.slug}
			<Card.Root>
				<Card.Header>
					<Card.Title>{post.content}</Card.Title>
				</Card.Header>
				<Card.Content>
					{post.imageUrl}
				</Card.Content>
				<Card.Content>
					<div class="flex m-4 gap-7 p-4 justify-between">
						<div>
							<form method="POST" use:enhance>
								<button type="submit"><Trash2 color="#2f76a2" /> </button>
							</form>
						</div>
						<div class="flex justify-between gap-2">
							<div>
								<button on:click={add} >
									<Heart strokeWidth="3" color="#ba171f" />
								</button>
							</div>
						
								{#if post.likes !== 0}
								<div>
									<p>
										{post.likes}
									</p>
								</div>
							 {/if}
						</div>
					</div>
				</Card.Content>
			</Card.Root>
		{/if}
	{/each}
</div>
