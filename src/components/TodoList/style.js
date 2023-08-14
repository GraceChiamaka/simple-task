import styled from 'styled-components';


export const StyledTaskItem = styled.div`
	margin-bottom: 3rem;
	max-height: 500px;
	overflow-y: auto;
	padding: 0 1rem 0;
	&::-webkit-scrollbar{
		width: 6px;
	}
	&::-webkit-scrollbar-thumb {
		background: #1f1f1f;
	}

	&::-webkit-scrollbar-track {
		background: #eaeaea;
	}
`;