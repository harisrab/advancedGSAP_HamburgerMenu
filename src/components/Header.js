import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import { withRouter } from "react-router";

const Header = ({ history }) => {
	// state for menu
	const [state, setState] = useState({
		initial: false,
		clicked: null,
		menuName: "Menu",
	});

	// state for disabling menu button
	const [disabled, setDisabled] = useState(false);

	// useEffect for changing pages
	useEffect(() => {
		history.listen(() => {
			setState({
				initial: null,
				clicked: false,
				menuName: "Menu",
			});
		});
	}, [history]);
	const handleMenu = () => {
		disableMenu();

		if (state.initial === false) {
			setState({ initial: null, clicked: true, menuName: "Closed" });

			console.log(0);
		} else if (state.clicked === true && state.initial === null) {
			setState({
				initial: null,
				clicked: !state.clicked,
				menuName: "Menu",
			});

			console.log(1);
		} else if (state.clicked === false && state.initial === null) {
			setState({
				initial: null,
				clicked: !state.clicked,
				menuName: "Closed",
			});
			console.log(2);
		}
	};

	const disableMenu = () => {
		setDisabled(!disabled);

		setTimeout(() => {
			setDisabled(false);
		}, 1000);
	};

	return (
		<>
			<HeaderWrapper>
				<LeftWrapper>
					<Link className="logo" to="/">
						HAMBRG
					</Link>
				</LeftWrapper>
				<RightWrapper>
					<button disabled={disabled} onClick={handleMenu}>
						MENU
					</button>
				</RightWrapper>
			</HeaderWrapper>
			<Hamburger state={state} />
		</>
	);
};

export default withRouter(Header);

const HeaderWrapper = styled.div`
	width: 100%;
	height: 80px;

	display: flex;
	flex-direction: row;
	justify-content: space-between;

	position: absolute;
	z-index: 20;
`;

const LeftWrapper = styled.div`
	height: 100%;
	width: 20%;

	display: flex;
	justify-content: flex-end;
	align-items: center;

	.logo {
		font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
			Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
			sans-serif;
		font-weight: 800;
		font-size: 0.9rem;
		text-decoration: none;

		&:visited {
			color: black;
		}

		&:hover {
			cursor: pointer;
		}
	}
`;

const RightWrapper = styled.div`
	height: 100%;
	width: 20%;

	display: flex;
	align-items: center;
	justify-content: flex-start;

	button {
		background: none;
		border: none;
		color: black;
		font-weight: 600;
		transition: 0.2s ease-out;

		&:hover {
			cursor: pointer;
			color: #363636;
			font-weight: 700;
		}
	}
`;
