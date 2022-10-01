export const useCard = () => useState(() => []);


export const useAuth = () => 
	useState(() => ({
		isAuthenticated: false,
	})
);


export const usePageVisitCounter = () => useState(() => 0);