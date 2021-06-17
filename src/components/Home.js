import React from "react";
import styled from "styled-components";

function Home() {
	return (
		<Container>
			<Wrapper>
				<h5>
					The <b>HAMBRG</b>, is a creative, engineer driven, global
					agency working on advancing the software, advertising and
					design communities to new heights.
				</h5>
			</Wrapper>
		</Container>
	);
}

export default Home;

const Container = styled.div`
	display: flex;
	height: 100%;
	width: 100%;

	align-items: center;

	position: relative;
`;

const Wrapper = styled.div`
	display: flex;
	height: 30%;
	width: 45%;

	position: absolute;

	left: 266px;

	h5 {
		font-size: 22px;
	}
`;
