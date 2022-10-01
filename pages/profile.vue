<template>
	<div>
		<h2>This is profile page</h2>
	</div>
</template>



<script setup>

	definePageMeta({
		middleware: ['auth']
	})
</script>