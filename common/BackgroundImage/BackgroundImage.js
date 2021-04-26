import React from 'react'

import styled from 'styled-components'

const Div = styled.div`
    position: relative;
`

const DivBackground = styled.div`
    opacity: .4;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;   
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-position: left middle;
    background-repeat: no-repeat;
`

function BackgroundImage(props) {
    const { children, backgroundImage } = props

    if (!backgroundImage) {
        return children
    }

    return (
        <Div>
            <DivBackground backgroundImage={ backgroundImage }>
            </DivBackground>
            <Div>
                { children }
            </Div>
        </Div>
    )
}

export default BackgroundImage