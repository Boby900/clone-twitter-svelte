<script>
	import { Button } from '$lib/components/ui/button/index';
</script>
<div class="flex justify-center text-2xl p-4 m-4">
	<div>
		<form method="POST">
			<div class="p-2 m-2">
				<textarea
					name="content"
					placeholder="share your thoughts"
					class="bg-black"
					rows="8"
					cols="66"
					id=""
				></textarea>
			</div>

			<div class="p-2 m-2 text-center">
				<Button type="submit" class="font-bold bg-black text-white hover:text-black">Post</Button>
			</div>
		</form>
	</div>
</div>
