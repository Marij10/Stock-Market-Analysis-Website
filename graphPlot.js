import { getChartsData } from "./dataExport.js";

const chartValues = await getChartsData();
const ctx = document.getElementById("myChart");
let myChart;

export function renderChart(nameComp, id) {
  // console.log(nameComp);
  if (!nameComp) {
    nameComp = "AAPL";
    // id = "1y";
  }
  if (!id) {
    id = "1y";
  }
  if (myChart) {
    myChart.destroy();
  }
  let tempY = chartValues[nameComp][id]["timeStamp"];
  let yAxData = tempY.map((time) => {
    return new Date(time * 100).toLocaleDateString();
  });
  let xAxData = chartValues[nameComp][id]["value"];

  myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: yAxData,
      datasets: [
        {
          label: "",
          data: xAxData,
          borderWidth: 1,
          pointRadius: 0,
          borderColor: "green",
          borderWidth: 5,
          pointHoverBorderColor: "white",
        },
      ],
    },

    options: {
      interaction: {
        mode: "nearest", // Display tooltip for the nearest point
        intersect: false, // Do not require the cursor to be directly over a point
      },
      plugins: {
        legend: {
          display: false, // Hide the legend
        },
        tooltip: {
          enabled: true, // Enable tooltips
          callbacks: {
            label: function (context) {
              return context.parsed.y; // Show only the x-axis data in the tooltip
            },
          },
        },
      },
      interaction: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "index",
        intersect: false,
        axis: "x",
      },
      // hover: {
      //   mode: "nearest", // Enable hover effects
      //   intersect: false, // Do not require the cursor to be directly over a point
      // },
      scales: {
        y: {
          beginAtZero: 50,
          grid: {
            display: false, // Hide y-axis grid lines
          },
          ticks: {
            display: false, // Hide y-axis labels
          },
        },
        x: {
          grid: {
            display: false, // Hide y-axis grid lines
          },
          ticks: {
            display: false, // Hide x-axis labels
          },
        },
      },
    },
  });
}
