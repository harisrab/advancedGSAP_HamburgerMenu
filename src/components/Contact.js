import React from "react";
import styled from "styled-components";

function Contact() {
	return (
		<Container>
			<p>Talk to us.</p>
		</Container>
	);
}

export default Contact;

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
