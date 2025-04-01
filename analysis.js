// Sidebar navigation functionality:
const navItems = document.querySelectorAll('.nav-item');
const contentSections = document.querySelectorAll('.content-section');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(i => i.classList.remove('active'));
    contentSections.forEach(sec => sec.style.display = 'none');

    item.classList.add('active');
    const targetId = item.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.style.display = 'block';
    }
  });
});

// Global function to create a gradient dynamically
function createGradient(ctx) {
    let gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(57, 255, 186, 1)");  // Neon Cyan (Top)
    gradient.addColorStop(1, "rgba(77, 110, 98, 0.3)");  // Hot Pink (Bottom)
    return gradient;
}

// Sample data (Replace with backend data later)
const sampleLineData = {
  labels: ["0h", "1h", "2h", "3h", "4h", "5h", "6h"],
  datasets: [{
    label: "Sample Data",
    data: [12, 19, 3, 5, 2, 3, 10],
    borderColor: "#39ff14",
    backgroundColor: "rgba(57, 255, 20, 0.2)",
    tension: 0.4
  }]
};

// Traffic Flow Line Chart
const vehicleCountCtx = document.getElementById("vehicleCountChart").getContext("2d");
new Chart(vehicleCountCtx, {
  type: "line",
  data: {
    labels: ["0h", "1h", "2h", "3h", "4h", "5h", "6h"],
    datasets: [{
      label: "Traffic Flow",
      data: [10, 50, 80, 200, 180, 120, 90], 
      borderColor: "#39ffba",
      borderWidth: 2,
      backgroundColor: createGradient(vehicleCountCtx), 
      tension: 0.8,
      fill: true,
      pointRadius: 0
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      x: { ticks: { color: "#fff" }, grid: { color: "rgba(255, 255, 255, 0.1)" }},
      y: { ticks: { color: "#fff" }, grid: { color: "rgba(255, 255, 255, 0.1)" }}
    }
  }
});



// Function to create gradients for each segment
const pieChartCtx = document.getElementById("vehicleCategoryChart").getContext("2d");

function createPieGradients(ctx, segments) {
  const gradients = [];
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;

  const colors = [
    ["#71dad7", "#39ffba"], // Light cyan to neon green
    ["#39ffba", "#1ca29e"], // Neon green to teal
    ["#1ca29e", "#084a58"], // Teal to dark cyan
    ["#084a58", "#003b46"]  // Dark cyan to deep teal
  ];

  for (let i = 0; i < segments; i++) {
    let gradient = ctx.createLinearGradient(width / 2, 0, width / 2, height);
    gradient.addColorStop(0, colors[i][0]);
    gradient.addColorStop(1, colors[i][1]);
    gradients.push(gradient);
  }

  return gradients;
}

// Create the Doughnut Chart with Gradients
const pieChart = new Chart(pieChartCtx, {
  type: "doughnut",
  data: {
    labels: ["A", "B", "C", "D"],
    datasets: [{
      label: "Traffic Data",
      data: [50, 100, 150, 200],
      backgroundColor: createPieGradients(pieChartCtx, 4), // Apply gradients
      borderColor: "#000",
      borderWidth: 2,
    }]
  },
  options: {
    responsive: true,
    cutout: "60%", // Adjusts the inner hole size
    plugins: {
      legend: { display: true, position: "top", labels: { color: "#fff" } }
    }
  }
});



// Traffic Density Chart
const trafficDensityCtx = document.getElementById("trafficDensityChart").getContext("2d");
new Chart(trafficDensityCtx, {
  type: "bar",
  data: {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [{
      label: "Traffic Density",
      data: [120, 180, 100, 220, 150],
      backgroundColor: createGradient(trafficDensityCtx),
      borderColor: "#39ffba",
      borderWidth: 2,
      borderRadius: 5,
      barThickness: 60
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      x: { ticks: { color: "#fff" }, grid: { color: "rgba(255, 255, 255, 0.1)" }},
      y: { ticks: { color: "#fff" }, grid: { color: "rgba(255, 255, 255, 0.1)" }}
    }
  }
});

// High-Speed Vehicles Chart
const highSpeedCtx = document.getElementById("highSpeedChart").getContext("2d");
new Chart(highSpeedCtx, {
  type: "bar",
  data: {
    labels: ["80-100 km/h", "100-120 km/h", "120-140 km/h", "140+ km/h"],
    datasets: [{
      label: "High-Speed Vehicles",
      data: [10, 15, 20, 5],
      backgroundColor: createGradient(highSpeedCtx),
      borderColor: "#39ffba",
      borderWidth: 2,
      borderRadius: 5,
      barThickness: 60
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      x: { ticks: { color: "#fff" }, grid: { color: "rgba(255, 255, 255, 0.1)" }},
      y: { ticks: { color: "#fff" }, grid: { color: "rgba(255, 255, 255, 0.1)" }}
    }
  }
});

// Speed Distribution Chart
const speedDistributionCtx = document.getElementById("speedDistributionChart").getContext("2d");
new Chart(speedDistributionCtx, {
  type: "bar",
  data: {
    labels: ["10-20 km/h", "20-40 km/h", "40-60 km/h", "60-80 km/h", "80+ km/h"],
    datasets: [{
      label: "Speed Distribution",
      data: [15, 30, 25, 20, 10],
      backgroundColor: createGradient(speedDistributionCtx),
      borderColor: "#39ffba",
      borderWidth: 2,
      borderRadius: 5,
      barThickness: 60
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      x: { ticks: { color: "#fff" }, grid: { color: "rgba(255, 255, 255, 0.1)" }},
      y: { ticks: { color: "#fff" }, grid: { color: "rgba(255, 255, 255, 0.1)" }}
    }
  }
});

// Placeholder for backend integration
document.getElementById('loadDataBtn').addEventListener('click', function() {
  alert('Load Data functionality will be integrated with the backend.');
});
