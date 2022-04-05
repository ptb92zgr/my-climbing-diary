import React from "react"
import styled from "styled-components"
import AuthForm from "../AuthForm/AuthForm"
import Background from "../../assets/images/background-app.jpg"
import Searchbar from "../Searchbar/Searchbar"

const StyledHeader = styled.header`
	background: url(${Background});
	background-size: cover;
	background-position: center;
	width: 100vw;
	height: 300px;
	display: flex;
	flex-direction: column;
	font-size: 60px;
	text-transform: uppercase;
	color: white;
	justify-content: center;
	align-content: center;
`

function Header() {
	return (
		<StyledHeader>
			<AuthForm />
			<Searchbar />
			My Climbing Diary
		</StyledHeader>
	)
}

export default Header
