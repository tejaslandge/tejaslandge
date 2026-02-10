document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Typing Effect for Tagline
  const taglineElement = document.getElementById("typing-tagline");
  if (taglineElement) {
    const text = "Building skills, not certificates.";
    let index = 0;
    let isDeleting = false;

    function typeWriter() {
      const currentText = taglineElement.innerText;

      if (!isDeleting && index <= text.length) {
        taglineElement.innerText = text.substring(0, index);
        index++;
        setTimeout(typeWriter, 100);
      } else if (isDeleting && index >= 0) {
        taglineElement.innerText = text.substring(0, index);
        index--;
        setTimeout(typeWriter, 50);
      } else if (index > text.length) {
        isDeleting = true;
        setTimeout(typeWriter, 2000); // Wait before deleting
      } else if (index < 0) {
        isDeleting = false;
        index = 0;
        setTimeout(typeWriter, 500); // Wait before typing again
      }
    }

    // Start typing after a short delay
    setTimeout(typeWriter, 1000);
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
        // Close mobile menu if open
        if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.add("hidden");
        }
      }
    });
  });
});
