// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	build: {
	    postcss: {
		    postcssOptions: {
		      	plugins: {
			        tailwindcss: {},
			        autoprefixer: {},
			    }
		    }
	    },
	},
	meta: {
		title: "Nuxt 3",
	},
	css: [
	    '@/assets/css/tailwind.css',
	],
})
