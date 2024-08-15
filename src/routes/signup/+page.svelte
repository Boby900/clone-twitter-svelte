<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/ui/button/index.js';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<h1 class="text-center text-2xl">Create an account</h1>

<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
	<form class="space-y-6" method="post" use:enhance>
		<div>
			<label for="username" class="block text-sm font-medium leading-6 text-gray-500"
				>User Name</label
			>
			<div class="mt-2">
				<input
					name="username"
					id="username"
					required
					class="block w-full rounded-md border-0 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				/>
			</div>
		</div>

		<div>
			<div class="flex items-center justify-between">
				<label for="password" class="block text-sm font-medium leading-6 text-gray-500"
					>Password</label
				>
			</div>
			<div class="mt-2">
				<input
					type="password"
					name="password"
					id="password"
					required
					class="block w-full rounded-md border-0 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				/>
			</div>
		</div>

		<div>
			<button
				type="submit"
				class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>Create an account</button
			>
		</div>
		<p>{form?.message ?? ''}</p>
	</form>
</div>
