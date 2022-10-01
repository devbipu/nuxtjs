<template>
	<header class="flex justify-between px-3">
		<div>
			<Nuxt-link to="/">Home</Nuxt-link>
			<Nuxt-link to="/about">About</Nuxt-link>
			<Nuxt-link to="/products">Products</Nuxt-link>
			<Nuxt-link to="/contact">Contact</Nuxt-link>
			<span class="shopCard">
				<a href="#" @click="showCard()">Card ({{card.length}})</a>
				<div v-if="showCardItem">
					<h3 v-for="item in card" :key="item.name">{{item.name}}</h3>
				</div>
			</span>
			<span>Page visited {{usePageVisit}}</span>
			</div>
		<div>
			<Nuxt-link to="/login" v-if="isAuth.isAuthenticated == false">Login</Nuxt-link>
			<div class="inline-block"  v-if="isAuth.isAuthenticated">	
				<Nuxt-link to="/profile">Profile</Nuxt-link>
				<button @click="logOut()" class="pr-1">Logout</button>
			</div>
		</div>
	</header>
</template>

<script setup>
	const card = useCard();
	const isAuth = useAuth();
	const usePageVisit = usePageVisitCounter();
	function logOut(){
		isAuth.value.isAuthenticated = false;
		navigateTo('/login')
	}
</script>

<script>
	export default{
		name: "Navbar",
		data(){
			return{
				showCardItem: false,
			}
		},
		methods: {
			showCard(){
				if(this.showCardItem == false) {
					this.showCardItem = true;
				}else{
					this.showCardItem = false;
				}
			}
		}
	}
</script>


<style>
	.shopCard{
		position: relative;
	}
	.shopCard div {
	    position: absolute;
	    background: white;
	    padding: 10px 30px;
	    border-radius: 10px;
	    top: 33px;
	    left: 0;
	    width: 200px;
	    box-shadow: 1px 1px 10px #000000a6;
	}
</style>