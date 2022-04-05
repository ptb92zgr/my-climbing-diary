import React, { useState } from "react"
import styled from "styled-components"

const StyledInput = styled.input`
	width: 400px;
`
const StylledBtn = styled.button`
	width: 70px;
`

function Searchbar() {
	const [term, setTerm] = useState("")

	const search = () => {
		console.log("szukaj", term)
	}

	return (
		<div>
			<StyledInput
				value={term}
				onChange={e => setTerm(e.target.value)}
				type='text'
				placeholder='Szukaj...'
			/>
			<StylledBtn onClick={search}>Szukaj</StylledBtn>
		</div>
	)
}

export default Searchbar
