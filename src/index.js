import React from "react";
import ReactDOM from "react-dom";
//component file
import TodoContainer from "./components/TodoContainer";
import AppContextProvider from './context/AppContext';
import "./App.css";

const App = () => {
    return (
        <AppContextProvider>
            <TodoContainer />
        </AppContextProvider>
    )
};

ReactDOM.render(<App />, document.getElementById("root"));
