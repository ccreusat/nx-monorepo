export function useScrollToTop() {
  const refToTop = document.querySelector('html');

  const scrollToTop = () => {
    refToTop && refToTop.scrollIntoView();
  };
  return scrollToTop;
}

export default useScrollToTop;
