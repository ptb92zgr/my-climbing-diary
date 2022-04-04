import React from "react"
import styled from "styled-components"
import MenuList from "../MenuList/MenuList"

const StyledMenu = styled.div`
	background-color: yellow;
	height: 60px;
`

function Menu() {
	return (
		<div>
			<StyledMenu>To jest Menu</StyledMenu>
			<MenuList />
		</div>
	)
}

export default Menu
