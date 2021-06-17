import React from "react";
import styled from "styled-components";

function Opportunities() {
	return (
		<Container>
			<p>We offer you oppurtunies.</p>
		</Container>
	);
}

export default Opportunities;

const Container = styled.div`
	display: flex;
	height: 100%;
	width: 100%;

	align-items: flex-start;
	justify-content: center;

	position: relative;

	p {
		margin-top: 50px;
	}
`;
