import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { opacityLevels } from './Themes/themes'

const Div = styled.div`
    position: relative;
`

const DivBackground = styled.div`
    opacity: ${(props) => (props.opacityLevel === opacityLevels.normal ? '0.4' : '0.2')};
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-position: left;
    background-repeat: no-repeat;
`

const BackgroundImage = (props) => {
    const { children, backgroundImage, opacityLevel } = props

    if (!backgroundImage) {
        return children
    }

    return (
        <Div>
            <DivBackground
                backgroundImage={backgroundImage}
                opacityLevel={opacityLevel}
            ></DivBackground>
            <Div>{children}</Div>
        </Div>
    )
}

BackgroundImage.propTypes = {
    opacityLevel: PropTypes.oneOf([opacityLevels.low, opacityLevels.normal]),
}

BackgroundImage.defaultProps = {
    opacityLevel: opacityLevels.normal,
}

export default BackgroundImage
