<template>
	<div>
		<h2>Product id is {{$route.params.id.replaceAll('-', ' ')}}</h2>
	</div>
</template>


<script setup>
	const route = useRoute();

	const pName = computed(() => {
		return route.params.id.replaceAll('-', ' ')
	})
</script>