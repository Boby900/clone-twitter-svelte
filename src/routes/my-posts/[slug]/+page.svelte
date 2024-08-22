<script>
	import { Heart } from 'lucide-svelte';
	import { Trash2 } from 'lucide-svelte';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	export let data;
	import * as Card from '$lib/components/ui/card';
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	const { params } = $page;
	const id = params;
	async function fetchData() {
		const response = await fetch(`/api/posts/${id.slug}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await response.json();
	}
</script>

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
							<AlertDialog.Root>
								<AlertDialog.Trigger><Trash2 color="#2f76a2" /></AlertDialog.Trigger>
								<AlertDialog.Content>
									<AlertDialog.Header>
										<AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
										<AlertDialog.Description>
											This action cannot be undone. This will permanently delete your post and
											remove your data from our servers.
										</AlertDialog.Description>
									</AlertDialog.Header>
									<AlertDialog.Footer>
										<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
										<AlertDialog.Action
											><form method="POST" use:enhance>
												<button type="submit"> Continue</button>
											</form></AlertDialog.Action
										>
									</AlertDialog.Footer>
								</AlertDialog.Content>
							</AlertDialog.Root>
						</div>
						<div class="flex justify-between gap-2">
							<div>
								<button on:click={fetchData}>
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
