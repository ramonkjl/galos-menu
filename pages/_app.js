import { createGlobalStyle, ThemeProvider } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'

const theme = {
  colors: {
    primary: '#0070f3',
    second: '#00ff00',
    third: '#00ff88'
  },
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: yellow;
  }
  .jumbotron{
    padding: 0;
    border-radius: 0;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.primary};
  }

  .card{
    margin: 0.5rem;
  }

  .card-body{
    text-align:center;
  }

  .menu-cards{
    margin-top: 2rem !important;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
