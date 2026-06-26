const links = {
  donate: 'https://sociabuzz.com/lyunarch/tribe',
  privateServer: 'https://www.roblox.com/share?code=1cb253206155394ea4a4041ebb993c97&type=Server'
};

function openLink(key) {
  const url = links[key];
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-link-key]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      openLink(button.getAttribute('data-link-key'));
    });
  });
});
