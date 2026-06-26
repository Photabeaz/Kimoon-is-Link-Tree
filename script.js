const links = {
  donate: 'https://www.example.com/donate',
  privateServer: 'https://www.roblox.com/share?code=b0c38ff86e246d4589b407a941031d0a&type=Server'
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
