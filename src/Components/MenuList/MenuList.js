import React from "react"
import styled from "styled-components"

const StyledMenuList = styled.div`
	background-color: royalblue;
	width: 100%;
	display: flex;
	flex-direction: column;
	position: fixed;
	font-size:20px ;
`

const StyledMenuItem = styled.a`
	width: 33.33%;
	color: white;
	width: 100%;
	text-decoration:none;
	text-transform: uppercase;
`

function MenuList() {
	return (
		<StyledMenuList>
			<StyledMenuItem href='#'>Mój Profil</StyledMenuItem>
			<StyledMenuItem href='#'>Strona główna</StyledMenuItem>
			<StyledMenuItem href='#'>Wyloguj</StyledMenuItem>
		</StyledMenuList>
	)
}

export default MenuList
