<script lang="ts">
	import { enhance } from "$app/forms";

	import type { ActionData } from "./$types";

	export let form: ActionData;
</script>

<div class="flex  justify-center m-2 p-2 text-2xl ">
	<div>
		
		<form class="p-2 m-2" method="post" use:enhance>
		
			<input name="username" placeholder="username" id="username" /><br />

			<input type="password" placeholder="password" name="password" id="password" /><br />
			<button class="pt-4">Continue</button>
			<p>{form?.message ?? ""}</p>
		</form>
		<a href="/signup">Create an account</a>
	</div>
	
</div>
