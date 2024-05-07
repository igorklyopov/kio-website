const copyrightYearRef = document.querySelector('[data-name="copyright-year"]');
const getCopyrightYear = () => {
  copyrightYearRef.textContent = new Date().getFullYear();
};

export default getCopyrightYear;
