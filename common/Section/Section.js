import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { getTheme } from 'colors'
import BackgroundImage from 'common/BackgroundImage'

const Div = styled.div`
    color: ${(props) => props.textColor};
    background: ${(props) => (props.backgroundColor ? props.backgroundColor : 'transparent')};
    position: relative;
`
const DivInner = styled.div`
    max-width: 600px;
    background: ${(props) => (props.backgroundColor ? props.backgroundColor : 'transparent')};
    padding: ${(props) => (props.skinny ? '10px' : '40px 10px')};
    margin: 0 auto;
    position: relative;
`

const Section = (props) => {
    const { themeName, skinny, backgroundImage, fullbleed } = props
    const theme = getTheme(themeName)

    return (
        <Div textColor={theme.TEXT} backgroundColor={fullbleed && theme.BACKGROUND}>
            <BackgroundImage backgroundImage={backgroundImage}>
                <DivInner backgroundColor={!fullbleed && theme.BACKGROUND} skinny={skinny}>
                    {props.children}
                </DivInner>
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
    fullbleed: true,
}

export default Section
