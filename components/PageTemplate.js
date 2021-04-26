import React from 'react'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

html {

}

body {
    background-color: #000;
    color: #fff;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;

    font-family: 'Inconsolata', monospace;
    font-size: 16px;
    line-height: 1.2;

    h1, h2 {
        font-family: 'Play', sans-serif;
        font-weight: 700;
        margin: 0 0 20px;
        line-height: 1;
    }

    h2 {
        margin: 0 0 16px;
    }
     
    h3 {
        margin: 0 0 12px;
        font-weight: 700;
    }

    a {
        text-decoration: underline;
        text-transform: uppercase;
        cursor: pointer;
        color: inherit;
        font-weight: 700;
    }
}
`

function PageTemplate(props) {
    const { children } = props
    return (
        <React.Fragment>
            <GlobalStyle />
            <Head>
                <title>Chris Knopf's Digital Resume</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link
                    href="//fonts.googleapis.com/css?family=Inconsolata:400,700|Play:400,700"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="//cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
                />
                <link
                    href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                    rel="stylesheet"
                />
            </Head>
            <div>{children}</div>
        </React.Fragment>
    )
}

export default PageTemplate
