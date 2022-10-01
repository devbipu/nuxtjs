<template>
	<div class="container">
		<h2>All products</h2>

		<div class="grid grid-cols-8 items-stretch gap-5 mt-3 ">

			<nuxt-link v-for="product in products" :key="product.id" :to="`/products/${product.name}`" class="shadow-lg border rounded-lg p-3">
				<img :src="product.img" class="w-100">
				<h3 class="text-xl">{{product.name}}</h3>
			</nuxt-link>
		</div>
	</div>
</template>


<script setup>
	// const products = ['iphone-11', 'iphone-12', 'iphone-12-pro']
	const products = [
		{
			id: 1,
			name: 'iphone-11',
			img: '/assets/img/iphone11.webp'
		},
		{
			id: 2,
			name: 'iphone-12',
			img: '/assets/img/iphone12.webp'
		},
		{
			id: 3,
			name: 'iphone-13',
			img: '/assets/img/iphone13.webp'
		},
	]
</script>