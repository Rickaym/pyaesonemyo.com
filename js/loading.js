window.onload = function () {
  document.querySelector(".frame-wrapper").classList.remove("hidden");
  const loadingWrapper = document.getElementById("loading-wrapper");
  loadingWrapper.classList.add("fade-away");
  setTimeout(() => {
    loadingWrapper.remove();
  }, 1000);
};
