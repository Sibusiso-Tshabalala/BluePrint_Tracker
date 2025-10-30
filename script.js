// Sidebar navigation
const navItems = document.querySelectorAll(".nav li");
const pages = document.querySelectorAll(".page");

navItems.forEach(item => {
  item.addEventListener("click", () => {
    navItems.forEach(i => i.classList.remove("active"));
    pages.forEach(p => p.classList.remove("active"));

    item.classList.add("active");
    const target = item.getAttribute("data-page");
    document.getElementById(target).classList.add("active");
  });
});

// Chart.js Data
const barCtx = document.getElementById("barChart");
const pieCtx = document.getElementById("pieChart");

new Chart(barCtx, {
  type: "bar",
  data: {
    labels: ["Idea", "Pilot", "Scaled"],
    datasets: [{
      label: "Ideas",
      data: [3, 2, 3],
      backgroundColor: ["#d4af37", "#c8b16a", "#072e21"]
    }]
  },
  options: { plugins: { legend: { display: false } } }
});

new Chart(pieCtx, {
  type: "doughnut",
  data: {
    labels: ["Idea", "Pilot", "Scaled"],
    datasets: [{
      data: [3, 2, 3],
      backgroundColor: ["#d4af37", "#c8b16a", "#072e21"]
    }]
  },
  options: {
    plugins: { legend: { position: "bottom" } }
  }
});
