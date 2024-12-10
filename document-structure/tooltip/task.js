const hasTooltips = Array.from(document.getElementsByClassName('has-tooltip'));
let activeTooltip = null;

hasTooltips.forEach((hasTooltip) => {
  hasTooltip.addEventListener('click', (e) => {
    e.preventDefault();

    const title = hasTooltip.getAttribute('title');
    const existingTooltip = document.querySelector('.tooltip');

    if (existingTooltip) {
      if (activeTooltip === hasTooltip) {
        existingTooltip.remove();
        activeTooltip = null;
        return;
      } else {
        existingTooltip.remove();
      }
    }

    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip tooltip_active';
    tooltip.textContent = title;
    document.body.appendChild(tooltip);

    const linkRect = hasTooltip.getBoundingClientRect();
    tooltip.style.left = `${linkRect.left}px`;
    tooltip.style.top = `${linkRect.bottom}px`;

    activeTooltip = hasTooltip;
  });
});
