<script>
	import { Button } from '$lib/components/ui/button/index';
	import thinker from '$lib/assets/joy-young-man-thinking.png'
</script>
<div class="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#2C3E50] to-[#4CA1AF] p-6">
	<div class="w-full max-w-xl bg-gray-900 rounded-lg shadow-lg p-6">
		<h2 class="text-3xl font-semibold text-gray-100 mb-4 text-center">Share Your Thoughts</h2>
		
		<form method="POST">
			<div class="mb-4">
				<textarea
					name="content"
					placeholder="What's on your mind?"
					class="w-full p-4 text-gray-300 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none shadow-inner"
					rows="8"
					cols="66"
				></textarea>
			</div>

			<div class="text-center">
				<Button type="submit" class="px-6 py-3 font-bold bg-teal-600 text-white rounded-lg shadow-lg hover:bg-teal-700">
					Post
				</Button>
			</div>
		</form>

		<div class="mt-6 text-center">
			<img src={thinker} alt="Reflecting" class="w-32 h-32 mx-auto opacity-75" />
		</div>
	</div>
</div>