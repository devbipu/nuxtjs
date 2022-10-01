export default defineNuxtRouteMiddleware(() => {
	const usePageVisit = usePageVisitCounter();
	usePageVisit.value++;
})