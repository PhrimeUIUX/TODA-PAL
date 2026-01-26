document.addEventListener("DOMContentLoaded", () => {
  const ctaButtons = document.querySelectorAll(".reviews-cta");
  const heroSection = document.getElementById("hero-section");

  if (!heroSection || !ctaButtons.length) return;

  const scrollToHero = () => {
    heroSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  ctaButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      scrollToHero();
    });
  });
});
