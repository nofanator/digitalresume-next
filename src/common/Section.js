import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BackgroundImage from '@/common/BackgroundImage'
import { ThemeContext, getBackgroundColor, getTextColor } from './Themes'
import { pageStyles } from './pageStyles'

const Div = styled.div`
    color: ${(props) => props.textColor};
    background: ${(props) => (props.backgroundColor ? props.backgroundColor : 'transparent')};
    position: relative;
`
const DivInner = styled.div`
    max-width: ${(props) => props.width}px;
    background: ${(props) => (props.backgroundColor ? props.backgroundColor : 'transparent')};
    padding: ${(props) => (props.skinny ? '10px' : '40px 10px')};
    margin: 0 auto;
    position: relative;
`

const Section = (props) => {
    const { palette, skinny, backgroundImage, fullbleed, style } = props

    const theme = useContext(ThemeContext)
    const backgroundColor = getBackgroundColor(theme, palette)
    const textColor = getTextColor(theme, palette)

    return (
        <Div textColor={textColor} backgroundColor={fullbleed && backgroundColor}>
            <BackgroundImage
                backgroundImage={backgroundImage}
                opacityLevel={theme.backgroundOpacityLevel}
            >
                <DivInner
                    backgroundColor={!fullbleed && backgroundColor}
                    skinny={skinny}
                    width={style === pageStyles.horizontal ? 800 : 600}
                >
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
    palette: PropTypes.string,
    style: PropTypes.oneOf([pageStyles.normal, pageStyles.horizontal]),
}

Section.defaultProps = {
    skinny: false,
    fullbleed: true,
    style: pageStyles.normal,
}

export default Section
