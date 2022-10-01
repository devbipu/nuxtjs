<template>
	<div>
		<Head>
			<Title>Nuxt 3 - {{$route.name.charAt(0).toUpperCase()+ $route.name.slice(1)}}</Title>
		</Head>
		<Navbar />
		<div class="container">
			<slot></slot>
		</div>
	</div>
</template>


<script>
	export default{
		
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	header {
	    background: #dddddd;
	    padding: 10px 0px;
	}
	header a{
		font-size: 18px;
		padding:  0px 10px;
	}

	.container{
		max-width: 100%;
		padding: 0px 40px;
		padding-top: 20px;
		margin:  0 auto;
	}
</style>

<!-- 
<script setup>
	const router = useRoute();
	// useHead({
	// 	title: router.path
	// })

	// watch(router, (newValue, oldValue) => {
	// 		useHead({
	// 			title: (newValue.fullPath) != "/" ? newValue.fullPath.charAt(1).toUpperCase()+newValue.fullPath.replaceAll('/', '').slice(1) : 'Home',
	// 		})
	// 	}
	// )

</script> -->