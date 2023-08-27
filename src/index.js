import React from "react";
import ReactDOM from "react-dom";
//component file
import TodoContainer from "./components/TodoContainer";
import AppContextProvider from "./context/AppContext";
import { ThemeProvider } from 'styled-components';
import { theme } from "./theme";
import GlobalStyles from './theme/GlobalStyles';

const App = () => {
	return (
		<AppContextProvider>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<TodoContainer />
			</ThemeProvider>
		</AppContextProvider>
	)
}

ReactDOM.render(<App />, document.getElementById("root"));
