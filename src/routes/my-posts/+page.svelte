<script>
	export let data;
	import * as Card from '$lib/components/ui/card';
	import { Pencil } from 'lucide-svelte';
</script>

<div class="text-center text-2xl p-2 m-2">Welcome to my-posts page</div>

<div class="grid-cols-3 grid gap-3 p-4 m-4">
	{#each data.post as post}
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
	{/each}
</div>
