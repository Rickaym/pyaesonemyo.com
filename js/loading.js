window.addEventListener("load", function () {
  const loading = document.getElementById("loading-screen");
  loading.classList.add("fade-away");
  setTimeout(() => {
    loading.remove();
  }, 700);
});

// ensure the loading screen is removed after 5 second
// regardless of whether the page is fully loaded
setTimeout(() => {
  const loading = document.getElementById("loading-screen");
  if (loading) {
    loading.remove();
  }
}, 5000)