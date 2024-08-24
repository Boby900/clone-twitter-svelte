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

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 m-4">
	{#each data.post as post}
		{#if post.id == params.slug}
			<Card.Root class="shadow-md rounded-lg overflow-hidden">
				<Card.Header class="p-4 border-b">
					<Card.Title class="text-xl font-semibold">{post.content}</Card.Title>
				</Card.Header>
				<Card.Content class="p-4">
					<img src="{post.imageUrl}" alt="{post.content}" class="w-full h-auto" />
				</Card.Content>
				<Card.Content class="p-4 border-t">
					<div class="flex flex-col md:flex-row justify-between items-center gap-4">
						<div>
							<AlertDialog.Root>
								<AlertDialog.Trigger>
									<button class="p-2 text-blue-500 hover:text-blue-700">
										<Trash2 color="#2f76a2" />
									</button>
								</AlertDialog.Trigger>
								<AlertDialog.Content>
									<AlertDialog.Header>
										<AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
										<AlertDialog.Description>
											This action cannot be undone. This will permanently delete your post and
											remove your data from our servers.
										</AlertDialog.Description>
									</AlertDialog.Header>
									<AlertDialog.Footer>
										<AlertDialog.Cancel class="px-4 py-2 text-gray-600 hover:text-gray-800">Cancel</AlertDialog.Cancel>
										<AlertDialog.Action>
											<form method="POST" use:enhance>
												<button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
													Continue
												</button>
											</form>
										</AlertDialog.Action>
									</AlertDialog.Footer>
								</AlertDialog.Content>
							</AlertDialog.Root>
						</div>
						<div class="flex items-center gap-2">
							<button on:click={fetchData} class="p-2 text-red-500 hover:text-red-700">
								<Heart strokeWidth="3" color="#ba171f" />
							</button>
							{#if post.likes !== 0}
								<div class="text-lg font-medium">
									<p>{post.likes}</p>
								</div>
							{/if}
						</div>
					</div>
				</Card.Content>
			</Card.Root>
		{/if}
	{/each}
</div>
