import React, { useState } from "react"
import styled from "styled-components"
import MenuList from "../MenuList/MenuList"

const StyledMenu = styled.nav``
const StylledMenuBtn = styled.button`
	position: fixed;
	right: 0;
	width: 60px;
	height: 60px;
	z-index: 9999;
	color:white ;
	text-transform: uppercase;
	border:none ;
	background: none;
	font-size:18px ;
`

function Menu() {
	const [show, setShow] = useState(true)

	return (
		<div>
			{show ? <MenuList /> : null}
			<StyledMenu>
				<StylledMenuBtn onClick={() => setShow(!show)}>Menu</StylledMenuBtn>
			</StyledMenu>
		</div>
	)
}

export default Menu
