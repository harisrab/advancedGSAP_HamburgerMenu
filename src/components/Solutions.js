import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";

function Solutions() {
	let container = useRef(null);

	useEffect(() => {
		pageReveal();
	}, []);

	const pageReveal = () => {
		gsap.from(container, {
			opacity: 0,
			duration: 0.8,
			ease: "power3.inOut",
		});
	};
	return (
		<Container ref={(el) => (container = el)}>
			<p>Solutions that help you.</p>
		</Container>
	);
}

export default Solutions;

const Container = styled.div`
	background-color: #1919af;
	display: flex;
	height: 100%;
	width: 100%;

	opacity: 1;

	align-items: flex-start;
	justify-content: center;

	position: relative;

	p {
		margin-top: 50px;
	}
`;
