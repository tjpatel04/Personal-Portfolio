// When DOM is ready, set up tab click handlers
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".tab-button");
  const panes = document.querySelectorAll(".skills-content");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove "active" from all buttons
      buttons.forEach((b) => b.classList.remove("active"));
      // Hide all panes
      panes.forEach((p) => p.classList.add("hidden"));

      // Add "active" to clicked tab
      btn.classList.add("active");
      // Show the corresponding pane by ID
      const target = btn.getAttribute("data-tab");
      document.getElementById(target).classList.remove("hidden");
    });
  });
});

