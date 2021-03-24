import styled from 'styled-components'

const Form = styled.form`
	margin: 2rem auto;
	width: 50%;
	label {
		display:block
	}
	label, input, button,submit {
		width: 100%;
		padding: 0.5rem 0
	} 
	.w-75 {
		width: 75%
	}
	.w-25 {
		width: 25%
	}
	input {
		border-style: solid
	}
	input {
		border-radius: 0px;
	}
	button {
		background-color: #D6FFD6;
	}
`

export default Form