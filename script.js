document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".btn-start");
    let heartInterval;

    btn.addEventListener("mouseenter", () => {
      heartInterval = setInterval(() => {
        // Cycle class name to force restart
        btn.classList.remove("heart-flying");
        void btn.offsetWidth; // force reflow
        btn.classList.add("heart-flying");
      }, 1000); // repeat every 1 sec
    });

    btn.addEventListener("mouseleave", () => {
      clearInterval(heartInterval);
      btn.classList.remove("heart-flying");
    });
  });
