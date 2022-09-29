const themes = {
    dark: 'dark',
    light: 'light',
}

const palettes = {
    light: 'light',
    neutral: 'neutral',
    dark: 'dark',
}

const opacityLevels = {
    low: 'low',
    normal: 'normal',
}

const lightTheme = {
    backgroundOpacityLevel: opacityLevels.low,
    lightPalette: {
        backgroundColor: '#FFFFFF',
        textColor: '#000',
    },
    neutralPalette: {
        backgroundColor: '#F8F8F8',
        textColor: '#000',
    },
    darkPalette: {
        backgroundColor: '#EFEFEF',
        textColor: '#000',
    },
}

const darkTheme = {
    backgroundOpacityLevel: opacityLevels.normal,
    lightPalette: {
        backgroundColor: '#404040',
        textColor: '#fff',
    },
    neutralPalette: {
        backgroundColor: '#202020',
        textColor: '#fff',
    },
    darkPalette: {
        backgroundColor: '#000000',
        textColor: '#fff',
    },
}

const getBackgroundColor = (theme, palette) => {
    switch (palette) {
        case palettes.light:
            return theme.lightPalette.backgroundColor
        case palettes.neutral:
            return theme.neutralPalette.backgroundColor
        case palettes.dark:
            return theme.darkPalette.backgroundColor
        default:
            return theme.lightPalette.backgroundColor
    }
}

const getTextColor = (theme, palette) => {
    switch (palette) {
        case palettes.light:
            return theme.lightPalette.textColor
        case palettes.neutral:
            return theme.neutralPalette.textColor
        case palettes.dark:
            return theme.darkPalette.textColor
        default:
            return theme.lightPalette.textColor
    }
}

const getTheme = (themeName) => {
    if (themeName === themes.light) {
        return lightTheme
    }

    return darkTheme
}

export { getTheme, themes, palettes, getBackgroundColor, getTextColor, opacityLevels }
