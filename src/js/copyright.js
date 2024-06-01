const copyrightYearRef = document.querySelector('[data-name="copyright-year"]');
const getCopyrightYear = () => {
  const currentYear = new Date().getFullYear();

  copyrightYearRef.dateTime = currentYear;
  copyrightYearRef.textContent = currentYear;
};

export default getCopyrightYear;
