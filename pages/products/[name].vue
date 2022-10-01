<template>
	<div class="flex w-50 border rounded-lg p-3">
		<div>
			<img src="/assets/img/150x200.png">
			<h2>Product Name is - {{$route.params.name.replaceAll('-', ' ')}}</h2>
		</div>
		<div>
			<button class="px-3 ml-2 py-2 bg-sky-500 rounded-lg hover:bg-sky-700" @click="addToCard()">
				<span v-if="isInCard()">Remove from Card</span>
				<span v-else>Add to Card</span>
			</button>
		</div>
	</div>
</template>


<script setup>
	const route = useRoute();

	// const pName = computed(() => {
	// 	return route.params.name.replaceAll('-', ' ')
	// })

	const card = useCard();
	function isInCard(){
		return !! card.value.find((ct) => ct.name === route.params.name)
	}

	function addToCard(){
		// const found = card.value.find((ct) => ct.name === route.params.name)
		if(!isInCard()){
			card.value.push({
				name: route.params.name,
			})
		}else{
			card.value = card.value.filter((ct) => ct.name !== route.params.name);
		}
		console.log(card.value)
	}
	console.log(route.params)
</script>