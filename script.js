const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

document.querySelectorAll('.mike-profile-details .project-note span').forEach((credit) => {
  credit.textContent = credit.textContent.replace(/ · Spotify ↗$/, '');
});

const projectReleaseFormats = {
  '.ethan-profile-details': ['Album', 'EP', 'Single', 'Single', 'Single', 'EP'],
  '.mike-profile-details': ['Single', 'Single', 'Single', 'Single', 'Single', 'Single', 'Single', 'Single'],
};

Object.entries(projectReleaseFormats).forEach(([profile, formats]) => {
  document.querySelectorAll(`${profile} .project-note p`).forEach((label, index) => {
    const format = formats[index];
    const originalLabel = label.textContent.trim();

    if (format) label.textContent = originalLabel === format ? format : `${format} · ${originalLabel}`;
  });
});

const theKnotCredit = document.querySelector('.ethan-profile-details .work-pair:first-child .project-card:first-child .project-note span');
if (theKnotCredit) theKnotCredit.textContent = 'Produced, engineered, mixed, mastered & performed all guitar parts';
