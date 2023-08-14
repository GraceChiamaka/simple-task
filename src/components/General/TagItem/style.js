import styled from 'styled-components';

export const StyledTag = styled.div`
	display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    padding: 2px 12px;
	gap: 4px;
	font-size: 12px;
	height:28px;
	color: #1f1f1f;

	button{
		width: 15px;
		height:15px;
		background: transparent !important;
		border: 1px solid #1f1f1f !important;
		outline: none;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}
	img{
		width: 10px;
		object-fit: contain;
	}
`;
