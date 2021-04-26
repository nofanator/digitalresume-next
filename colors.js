export const themes = {
    LIGHT: 'LIGHT',
    NEUTRAL: 'NEUTRAL',
    DARK: 'DARK'
}

const lightTheme = {
    BACKGROUND: '#404040',    
    TEXT: '#fff'
}

const neutralTheme = {
    BACKGROUND: '#202020',
    TEXT: '#fff'
}

const darkTheme = {
    BACKGROUND: '#000000',
    TEXT: '#fff'
}

export function getTheme(name) {
    switch (name) {
        case themes.LIGHT:
            return lightTheme
        case themes.DARK:
            return darkTheme
        case themes.NEUTRAL:
            return neutralTheme
        default:
            return lightTheme
    }
}

const dummy = {
    LIGHT: {
        BACKGROUND: '#404040',    
        TEXT: '#fff'
    },
    NEUTRAL: {
        BACKGROUND: '#202020',
        TEXT: '#fff'
    },
    DARK: {
        BACKGROUND: '#000000',
        TEXT: '#fff'
    }
}