import { useState } from "react";

function useGlobalContextProvider() {
	const [count, setCount] = useState(0);

	return {
		count,
		setCount
	}
}

export default useGlobalContextProvider;