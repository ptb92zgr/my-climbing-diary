import React from "react"
import styled from "styled-components"

const StyledRockFinder = styled.div`
	background-color: #666;
`

const StyledFiderForm = styled.form`
	margin: 10px 0 10px 0;
`

const StyledFinderSelect = styled.select`
	margin: 10px 0 10px 0;
`

function RockFinder() {
	return (
		<StyledRockFinder>
			To jest wyszukiwarka skał
			<StyledFiderForm>
				<label>
					Wybierz rejon:
					<StyledFinderSelect>
						<option value={"niewybrany"}>-</option>
						<option>Jura Północna</option>
						<option>Jura Południowa</option>
						<option>Sokoliki</option>
					</StyledFinderSelect>
				</label>
			</StyledFiderForm>
			<StyledFiderForm>
				<label>
					Wybierz okolicę:
					<StyledFinderSelect>
						<option value={"niewybrany"}>-</option>
						<option>Suliszowice</option>
						<option>Trzebieniów</option>
						<option>Mirów</option>
					</StyledFinderSelect>
				</label>
			</StyledFiderForm>
			<StyledFiderForm>
				<label>
					Wybierz skałę:
					<StyledFinderSelect>
						<option value={"niewybrany"}>-</option>
						<option>Knur</option>
						<option>Słoneczna</option>
						<option>Szara skała</option>
					</StyledFinderSelect>
				</label>
			</StyledFiderForm>
		</StyledRockFinder>
	)
}

export default RockFinder
