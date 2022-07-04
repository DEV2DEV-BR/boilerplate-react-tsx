import useGlobalContextProvider from "../hooks/useGlobalContextProvider";
import GlobalContext from "./GlobalContext";

type Props = {
	children: JSX.Element
}

function GlobalContextProvider(props: Props) {
	const valuesProvider = useGlobalContextProvider();

	return (
		<GlobalContext.Provider value={valuesProvider}>
			{props.children}
		</GlobalContext.Provider>
	)
}

export default GlobalContextProvider;