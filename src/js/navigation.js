import refs from './refs';
// eslint-disable-next-line no-console
console.log(refs.openMenuBtn, refs.navigationList);

const toggleMobileMenu = () => {
  refs.openMenuBtn.classList.toggle('active');
  refs.navigation.classList.toggle('open');
  refs.body.classList.toggle('scroll_lock');
};

if (refs.openMenuBtn) {
  refs.openMenuBtn.addEventListener('click', toggleMobileMenu);
}
