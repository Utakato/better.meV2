export const Light = () => {
    let root = document.documentElement
    root.style.setProperty('--clr-primary-bg', 'var(--very-light-gray-blue)')
    root.style.setProperty('--clr-primary-main', 'var(--light-gray)')
    root.style.setProperty('--clr-primary-text', 'var(--very-dark-gray-blue)')
    root.style.setProperty('--clr-secondary-text', 'var(--dark-gray-blue)')
}
export const Dark = () => {
    let root = document.documentElement
    root.style.setProperty('--clr-primary-bg', 'var(--very-dark-blue)')
    root.style.setProperty('--clr-primary-main', 'var(--very-dark-des-blue)')
    root.style.setProperty('--clr-primary-text', 'var(--dk-light-gray-blue)')
    root.style.setProperty('--clr-secondary-text', 'var(--dk-dark-gray-blue)')
}