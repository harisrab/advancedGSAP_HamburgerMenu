import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import gsap from "gsap";

import dallas from "../images/dallas.webp";
import austin from "../images/austin.webp";
import beijing from "../images/beijing.webp";
import newyork from "../images/newyork.webp";
import sanfrancisco from "../images/sanfrancisco.webp";

const cities = [
	{ name: "Dallas", image: dallas },
	{ name: "Beijing", image: beijing },
	{ name: "New York", image: newyork },
	{ name: "Austin", image: austin },
	{ name: "San Francisco", image: sanfrancisco },
];

const Hamburger = ({ state }) => {
	let menu = useRef(null);
	let blackBG = useRef(null);
	let mainMenuLayer = useRef(null);
	let cityBG = useRef(null);
	let line1 = useRef(null);
	let line2 = useRef(null);
	let line3 = useRef(null);
	let info = useRef(null);

	useEffect(() => {
		if (state.clicked === false) {
			// Close the menu

			gsap.to([mainMenuLayer, blackBG], {
				duration: 0.8,
				height: 0,
				ease: "power3.inOut",
				stagger: {
					amount: 0.07,
				},
			});

			gsap.to(menu, {
				duration: 1,
				css: { display: "none" },
			});

			console.log("Menu Being Closed");
		} else if (
			state.clicked === true ||
			(state.initial === false && state.clicked === true)
		) {
			// Open the menu
			console.log("Menu Being Opened");

			gsap.to(menu, {
				duration: 0,
				css: { display: "block" },
			});

			gsap.to([blackBG, mainMenuLayer], {
				duration: 0,
				opacity: 1,
				height: "100%",
			});

			staggerReveal(blackBG, mainMenuLayer);
			fadeInUp(info);
			staggerText(line1, line2, line3);

			// gsap.to([blackBG, mainMenuLayer], {
			// 	duration: 0.8,
			// 	height: "100%",
			// 	ease: "power3.inOut",
			// 	stagger: {
			// 		amount: 0.07,
			// 	},
			// 	display: "block",
			// });
		}
	}, [state]);

	const staggerReveal = (node1, node2) => {
		gsap.from([node1, node2], {
			duration: 0.5,
			height: 0,
			transformOrigin: "right top",
			skewY: 1,
			ease: "power3.inOut",
			stagger: {
				amount: 0.1,
			},
		});
	};

	const staggerText = (node1, node2, node3) => {
		gsap.from([node1, node2, node3], {
			duration: 0.8,
			y: 200,
			delay: 0.1,
			ease: "power3.inOut",
			stagger: {
				amount: 0.3,
			},
		});
	};

	const fadeInUp = (node) => {
		gsap.from(node, {
			duration: 1.2,
			y: 60,
			opacity: 0,
			transformOrigin: "right bottom",
			skewY: 2,
			ease: "power3.inOut",
		});
	};

	const revealBG = (city) => {
		gsap.to(cityBG, {
			duration: 0,
			background: `url(${city})`,
			backgroundSize: "cover",
		});
		gsap.to(cityBG, {
			duration: 0.4,
			opacity: 1,
			ease: "power3.inOut",
		});
		gsap.from(cityBG, {
			duration: 0.4,
			skewY: 2,
			transformOrigin: "right top",
			ease: "power3.inOut",
		});
	};

	const leaveBG = () => {
		gsap.to(cityBG, {
			opacity: 0,
			duration: 0.4,
		});
	};

	const handleHover = (e) => {
		gsap.to(e.target, {
			duration: 0.3,
			y: 3,
			skewX: 4,
			ease: "power3.inOut",
		});
	};

	const handleHoverExit = (e) => {
		gsap.to(e.target, {
			duration: 0.3,
			y: -3,
			skewX: 0,
			ease: "power3.inOut",
		});
	};
	return (
		<Menu ref={(el) => (menu = el)}>
			<Wrapper>
				<BlackBackground ref={(el) => (blackBG = el)}></BlackBackground>
				<MainMenuLayer ref={(el) => (mainMenuLayer = el)}>
					<CityBackground
						ref={(el) => (cityBG = el)}
					></CityBackground>

					<MenuList>
						<ul>
							<li>
								<LinkTag
									ref={(el) => (line1 = el)}
									to="/opportunities"
									onMouseEnter={handleHover}
									onMouseLeave={handleHoverExit}
								>
									Opportunities
								</LinkTag>
							</li>
							<li>
								<LinkTag
									ref={(el) => (line2 = el)}
									to="/solutions"
									onMouseEnter={handleHover}
									onMouseLeave={handleHoverExit}
								>
									Solutions
								</LinkTag>
							</li>
							<li>
								<LinkTag
									ref={(el) => (line3 = el)}
									to="/contact-us"
									onMouseEnter={handleHover}
									onMouseLeave={handleHoverExit}
								>
									Contact us
								</LinkTag>
							</li>
						</ul>
					</MenuList>

					<CityLinks>
						<ul>
							<p>Locations:</p>

							{cities.map((city, i) => {
								return (
									<li key={i}>
										<CityLinkTag
											className="city"
											onMouseEnter={() =>
												revealBG(city.image)
											}
											onMouseLeave={leaveBG}
										>
											{city.name}
										</CityLinkTag>
									</li>
								);
							})}
						</ul>
					</CityLinks>

					<Blurb ref={(el) => (info = el)}>
						<h2>Our Promise</h2>
						<p>
							Hey there my name is Akram, I am a Front end
							developer and UI Designer. I'm here to hopefully
							educated people on how to code projects that
							actually look good. My stack mainly consist of
							react.js and node.js. For UI design I like to use
							adobe XD as my go to. If you have any suggestions on
							tutorials you would like to see feel free to DM me
						</p>
					</Blurb>
				</MainMenuLayer>
			</Wrapper>
		</Menu>
	);
};

export default Hamburger;

const Menu = styled.div`
	display: none;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;

	height: 100%;
	width: 100%;

	z-index: 18;
`;

const Wrapper = styled.div`
	position: relative;

	height: 100%;
	width: 100%;
`;

const BlackBackground = styled.div`
	background-color: #070707;
	position: absolute;

	height: 100%;
	width: 100%;
	z-index: 18;
`;

const MainMenuLayer = styled.div`
	position: absolute;
	background-color: #ad0000;

	height: 100%;
	width: 100%;
	z-index: 19;

	overflow: hidden;

	@keyframes cameraPan {
		0% {
			background-position: 0% 0%;
		}
		25% {
			background-position: 40% 10%;
		}
		50% {
			background-position: 0% 10%;
		}
		75% {
			background-position: 10% 40%;
		}
		100% {
			background-position: 0% 0%;
		}
	}
`;

const CityBackground = styled.div`
	position: absolute;
	/* display: none; */

	opacity: 0;

	top: 0;
	bottom: 0;
	left: 0;
	right: 0;

	height: 100%;
	width: 100%;

	z-index: -1;

	background-repeat: no-repeat;
	background-size: cover;

	animation: cameraPan 30s infinite;
`;

const MenuList = styled.div`
	position: absolute;

	top: 150px;
	left: 16.5%;

	ul {
		display: flex;
		flex-direction: column;

		list-style: none;

		li {
			height: 135px;
			position: relative;
			overflow: hidden;
			width: 800px;
		}
	}
`;

const LinkTag = styled(Link)`
	position: absolute;
	text-decoration: none;
	color: white;
	font-size: 6rem;
	font-weight: 700;
	width: 800px;
	transition: 0.3s ease-out;

	&:visited {
		color: white;
	}

	&:hover {
		color: black;
	}
`;

const CityLinkTag = styled(Link)`
	text-decoration: none;
	color: white;
	font-size: 0.8rem;
	font-weight: 400;

	&:visited {
		color: white;
	}
`;

const CityLinks = styled.div`
	ul {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		list-style: none;

		height: 15px;

		position: absolute;

		top: 650px;
		left: 16.5%;

		p {
			font-weight: 600;
			font-size: 15px;
			color: white;
		}
		li {
			margin-left: 60px;

			display: flex;
			align-items: center;
			overflow: hidden;
		}
	}

	.city {
		transition: 0.2s ease-out;
	}

	.city:hover {
		background-color: black;
		color: white;
		padding: 15px;
	}
`;

const Blurb = styled.div`
	position: absolute;

	width: 400px;
	color: white;

	top: 280px;
	right: 150px;

	h2 {
		font-size: 20px;
		margin-bottom: 15px;
	}

	p {
		font-size: 15px;
	}
`;
