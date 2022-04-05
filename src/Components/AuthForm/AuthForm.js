import React from "react"
import styled from "styled-components"
import Button from "../Button/Button"

const StyledAuthForm = styled.form``

const StyledInput = styled.input`
	background-color: #999;
	margin: 5px 10px 5px 10px;
	color: white;
	border-radius: 5px;
`

function AuthForm() {
	return (
		<StyledAuthForm>
			<StyledInput type='email' placeholder='Email' />
			<StyledInput type='password' placeholder='Hasło' />
			<Button></Button>
		</StyledAuthForm>
	)
}

export default AuthForm
