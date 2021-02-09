export default function appWrapper() {
  const footer = document.createElement('footer');
  footer.id = "footer";
  footer.innerText = "Coded by M. Bambalan";
  const container = document.getElementById('container');
  document.body.insertBefore(footer, container.nextSibling);

  const githubIcon = document.createElement('i');
  githubIcon.classList.add('fa', 'fa-github-square');
  document.body.insertBefore(githubIcon, footer.nextSibling)
  githubIcon.addEventListener('mouseenter', () => {
      const msg = document.createElement('div');
      msg.classList.add('msg', 'show-msg');
      msg.innerText = "View github repo!"
      document.body.insertBefore(msg, githubIcon.nextSibling);
  })
  githubIcon.addEventListener('mouseleave', () => {
      const msg = document.querySelector('.msg');
      msg.classList.remove('show-msg');
      msg.remove();
  })
  githubIcon.addEventListener('click', () => {
      window.location.href = "https://github.com/Madobyte/rock-paper-scissors";
  })
}