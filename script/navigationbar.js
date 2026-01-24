const toggle = document.getElementById("navToggle");
const drawer = document.getElementById("navDrawer");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("open");
  drawer.classList.toggle("open");
});
