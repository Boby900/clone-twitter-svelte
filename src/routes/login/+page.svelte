<script lang="ts">
	import { enhance } from '$app/forms';
	import Github from 'lucide-svelte/icons/github';
	import { Button } from '$lib/components/ui/button/index.js';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-sm">
		<h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-500">
			Sign in to your account
		</h2>
	</div>

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
					>Sign in</button
				>
			</div>
			<p>{form?.message ?? ''}</p>
		</form>
		<div class="text-center p-4 m-2">
			<a href="/login/github"
				><Button variant="ghost">
					<Github class="mr-2 h-4 w-4" />
					Login with GitHub
				</Button></a
			>
		</div>
		<p class="mt-10 text-center text-sm text-gray-500">
			Not a member?
			<a href="/signup" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
				>Create an account</a
			>
		</p>
	</div>
</div>
