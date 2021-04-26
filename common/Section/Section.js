import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { getTheme } from 'colors'
import BackgroundImage from 'common/BackgroundImage'

const Div = styled.div`
    color: ${(props) => props.textColor};
    background: ${(props) => props.backgroundColor};
    position: relative;
`
const DivInner = styled.div`
    max-width: 600px;
    padding: ${(props) => (props.skinny ? '10px' : '40px 10px')};
    margin: 0 auto;
    position: relative;
`

function Section(props) {
    const { themeName, skinny, backgroundImage } = props
    const theme = getTheme(themeName)

    return (
        <Div textColor={theme.TEXT} backgroundColor={theme.BACKGROUND}>
            <BackgroundImage backgroundImage={backgroundImage}>
                <DivInner skinny={skinny}>{props.children}</DivInner>
            </BackgroundImage>
        </Div>
    )
}

Section.propTypes = {
    themeName: PropTypes.string,
    backgroundImage: PropTypes.string,
    skinny: PropTypes.bool,
}

Section.defaultProps = {
    skinny: false,
}

export default Section
