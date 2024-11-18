const tooltip = document.querySelector('.tooltip')
const hasTooltip = Array.from(document.getElementsByClassName('has-tooltip'))

hasTooltip.addEventListener('click', (e) => {
    e.preventDefault()

    const title = hasTooltip.getAttibute('title')

    tooltip.textContent = title
    tooltip.classList.add('tooltip_active')
})