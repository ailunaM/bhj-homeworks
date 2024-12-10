const hasTooltips = Array.from(document.getElementsByClassName('has-tooltip'));

hasTooltips.forEach((hasTooltip) => {
  hasTooltip.addEventListener('click', (e) => {
    e.preventDefault();
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
      tooltip.remove();
    }
    const title = hasTooltip.getAttribute('title');
    let html = `
       <div class="tooltip tooltip_active">
      ${title}
    </div>`;

    hasTooltip.insertAdjacentHTML('beforeend', html);
  });
});
