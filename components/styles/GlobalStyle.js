import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	html, body {
		padding: 0;
  		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	}
	button {
		font-size: 1rem;
		font-weight: bold;
		margin-top: 0.5rem;
		border: none;
	}
`

export default GlobalStyle;