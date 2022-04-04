import React from "react"
import styled from "styled-components"
import AuthForm from "../AuthForm/AuthForm"

const StyledHeader = styled.header`
	background-color: green;
	height: 100px;
`

function Header() {
	return (
		<StyledHeader>
			To jest Header
			<AuthForm />
		</StyledHeader>
	)
}

export default Header
