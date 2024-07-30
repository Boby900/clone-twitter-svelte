<script lang="ts">
	import { enhance } from "$app/forms";

	import type { ActionData } from "./$types";

	export let form: ActionData;
</script>

<div class="flex  justify-center m-2 p-2 text-2xl ">
	<div>
		<h1>Sign in</h1>
		<form class="p-2 m-2" method="post" use:enhance>
			<label  for="username">Username</label>
			<input name="username" id="username" /><br />
			<label for="password">Password</label>
			<input type="password" name="password" id="password" /><br />
			<button>Continue</button>
			<p>{form?.message ?? ""}</p>
		</form>
		<a href="/signup">Create an account</a>
	</div>
	
</div>
