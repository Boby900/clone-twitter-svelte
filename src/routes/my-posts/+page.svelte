<script>
	export let data;
	import * as Card from '$lib/components/ui/card';
	// console.log( data.post.length);
	let bar = async (postId)=>{
		
	
		console.log(`clicked ${postId}`);
	}
	
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
					<div class="bg-slate-600 cursor-pointer" >👍 <span class="bg-none">2</span></div>	
							
					<div class="bg-slate-600 cursor-pointer"  on:click={()=> bar(post.id)}>🚮</div>					
				</div>
			</Card.Content>
		</Card.Root>
	{/each}
</div>
