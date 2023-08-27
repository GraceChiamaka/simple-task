import { createGlobalStyle } from 'styled-components';
import { theme } from '.';

const GlobalStyles = createGlobalStyle`
	*, *::before, *::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box; 
	}
    
	body{
		font-family: "Nunito Sans", sans-serif;
		font-size: 1rem;
	}

	a {
		text-decoration:none;
	}

	p{
		margin-bottom:0;
	}

	&::-webkit-scrollbar {
		width: 3px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${theme.colors.dark[100]};
	}
`;

export default GlobalStyles;