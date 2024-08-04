<script lang="ts">
	import { enhance } from "$app/forms";

	import type { ActionData } from "./$types";

	export let form: ActionData;
</script>

<h1 class="text-center text-2xl">Create an account</h1>
<div class="flex  justify-center m-2 p-2 text-2xl">
	<div >
		<form class="p-2 m-2" method="post" use:enhance>
			<label for="username">Username</label>
			<input name="username" id="username" /><br />
			<label for="password">Password</label>
			<input type="password" name="password" id="password" /><br />
			<button class="pt-4">Continue</button>
			<p>{form?.message ?? ""}</p>
		</form>
		<a href="/login" class="ml-5">Sign in</a>
	</div>
</div>
