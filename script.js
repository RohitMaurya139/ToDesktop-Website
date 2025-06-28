


function handleMenu() {
  const navdialog = document.getElementById("nav_dialog");
  navdialog.classList.toggle("hidden");
}
document.addEventListener("DOMContentLoaded", () => {
  const initialOffset = {
    line1: -192, // -48 * 4
    line2: 144, // 36 * 4
    line3: -192, // same as line1 for now
  };

  function setUpIntersectionObserver(element, id, isLTR, speed) {
    let animationFrame;

    const intersectionCallback = (entries) => {
      if (entries[0].isIntersecting) {
        window.addEventListener("scroll", scrollHandler);
      } else {
        window.removeEventListener("scroll", scrollHandler);
        cancelAnimationFrame(animationFrame);
      }
    };

    const observer = new IntersectionObserver(intersectionCallback, {
      threshold: 0.1,
    });

    observer.observe(element);

    function scrollHandler() {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const scrollOffset =
          (window.innerHeight - element.getBoundingClientRect().top) * speed;
        const offset = initialOffset[id] ?? 0;
        const finalTranslate = isLTR
          ? offset + scrollOffset
          : -(offset + scrollOffset);
        element.style.transform = `translateX(${finalTranslate}px)`;
      });
    }
  }

  const line1 = document.getElementById("line1");
  const line2 = document.getElementById("line2");
  const line3 = document.getElementById("line3");
  const line4 = document.getElementById("line4");

  setUpIntersectionObserver(line1, "line1", true, 0.2);
  setUpIntersectionObserver(line2, "line2", false, 0.25);
  setUpIntersectionObserver(line3, "line3", true, 0.2);
  setUpIntersectionObserver(line4, "line4", true, 0.8);
});

 

  document.addEventListener("DOMContentLoaded", function () {
    const dtElements = document.querySelectorAll("dt");

    dtElements.forEach((dt) => {
      dt.addEventListener("click", () => {
        const ddId = dt.getAttribute("aria-controls");
        const dd = document.getElementById(ddId);
        const icon = dt.querySelector("i");

        if (dd) {
          dd.classList.toggle("hidden");
        }

        if (icon) {
          icon.classList.toggle("-rotate-180");
        }
      });
    });
  });




 