<template>
	<div>
		<form class="w-5/12 mx-auto	shadow-xl mt-5 p-5 rounded-md" @submit.prevent="userLogin()">
			<label class="block">
				<p class="bg-red-400 text-white p-3" v-if="loginError">{{loginError}}</p>
				<span class="block text-sm font-medium text-slate-700">Username</span>
				<!-- Using form state modifers, the classes can be identical for every input -->
				<input type="text" v-model="loginForm.username" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 nvalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500	"/>
			</label>
			<label class="block">
				<span class="block text-sm font-medium text-slate-700">Password</span>
				<!-- Using form state modifers, the classes can be identical for every input -->
				<input type="password" v-model="loginForm.password" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 nvalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>
			</label>
		  	<button type="submit" class="px-8 py-2 mt-3 bg-indigo-500 rounded-full text-white">
				<span v-if="isLoading">Loading...</span>
				<span v-else>Login</span>
			</button>
		  <!-- ... -->
		</form>
	</div>
</template>


<script setup>
	const isLoading = ref(false);
	const loginForm = reactive({
		username: 'eve.holt@reqres.in',
		password: 'cityslicka'
	});
	const loginError = ref(null);

	async function userLogin(){
		if(isLoading.value) return;

		isLoading.value = true;
		const {data, error} = await useFetch('https://reqres.in/api/login', {
			method: 'post',
			body: loginForm,
		});
		isLoading.value = false;

		if(error.value){
			loginError.value = error.value.data.error;
			setTimeout(()=>{loginError.value = null}, 10000)
			return;
		}
		useAuth().value.isAuthenticated = true;
		navigateTo('/profile');
	}
</script>