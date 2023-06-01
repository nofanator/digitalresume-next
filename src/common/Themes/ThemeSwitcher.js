import React from 'react'
import Section from '../Section'
import { palettes, themes, getBackgroundColor, getTextColor, getTheme } from './themes'

import styled from 'styled-components'

const ToggleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    .label {
        margin-left: 6px;
    }
`

const LightDarkToggl = styled.div`
    cursor: pointer;
    display: inline-flex;
    justify-content: ${(props) => (props.isDark ? 'flex-end' : 'flex-start')};
    border-radius: 20px;
    padding: 2px;
    width: 30px;
    height: 15px;
    background-color: ${(props) =>
        props.isDark
            ? getBackgroundColor(props.theme, palettes.dark)
            : getBackgroundColor(props.theme, palettes.dark)};

    .inner {
        border-radius: 50%;
        width: 15px;
        height: 15px;
        background-color: ${(props) =>
            props.isDark
                ? getTextColor(props.theme, palettes.neutral)
                : getTextColor(props.theme, palettes.neutral)};
    }
`

const ThemeSwitcher = (props) => {
    const { theme, toggleTheme } = props

    return (
        <Section skinny palette={palettes.dark}>
            <ToggleContainer>
                <LightDarkToggl
                    theme={
                        theme.name === themes.dark ? getTheme(themes.light) : getTheme(themes.dark)
                    }
                    isDark={theme.name === themes.dark}
                    onClick={toggleTheme}
                >
                    <div className="inner" />
                </LightDarkToggl>
                <div className="label">
                    Switch to {theme.name === themes.dark ? themes.light : themes.dark} Theme
                </div>
            </ToggleContainer>
        </Section>
    )
}

export default ThemeSwitcher
