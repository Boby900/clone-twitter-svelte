<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	
   console.log(data);
	
</script>

<div class="flex flex-col items-center justify-center">
	<div class="p-4 m-4">
		<img
			src={data.users[0].github_avatar_url}
			class="rounded-full h-[200px] w-[200px] border border-rose-30"
			alt="Your avatar"
		/>
	</div>
	<div></div>
	<div class="p-4 m-4">
		<p> {`Hi, ${data.users[0].username}`}</p>
	</div>
</div>
