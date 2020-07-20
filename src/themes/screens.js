export const size = {
    xs: 420,
    sm: 576,
    md: 768,
    lg: 992,
    lgx: 1024,
    xl: 1200,
}

const screen = {
    xs: `(max-width: ${size.xs}px)`,
    sm: `(max-width: ${size.sm}px)`,
    md: `(max-width: ${size.md}px)`,
    lg: `(max-width: ${size.lg}px)`,
    lgx: `(max-width: ${size.lgx}px)`,
    xl: `(max-width: ${size.xl}px)`,
    xxl: `(min-width: ${size.xl}px)`,
}

export default screen
