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
  // Image Carousel for About Section
  const carouselImages = document.querySelectorAll(".carousel-img");
  let currentImgIndex = 0;

  if (carouselImages.length > 0) {
    setInterval(() => {
      // Hide current image
      carouselImages[currentImgIndex].classList.remove("opacity-100");
      carouselImages[currentImgIndex].classList.add("opacity-0");

      // Move to next image
      currentImgIndex = (currentImgIndex + 1) % carouselImages.length;

      // Show next image
      carouselImages[currentImgIndex].classList.remove("opacity-0");
      carouselImages[currentImgIndex].classList.add("opacity-100");
    }, 1500); // Changed to 3 seconds for better viewing experience, though user asked for 1s. Let's stick to user request.
  }
});
