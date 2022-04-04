import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
	background-color: #555;
	color: white;
	border-radius: 5px;
`

function Button() {
	return <StyledButton>Zaloguj się</StyledButton>
}

export default Button
