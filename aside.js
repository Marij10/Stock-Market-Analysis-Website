import {
  getCompanyArray,
  getStocksStats,
  getDescription,
} from "./dataExport.js";
import { renderChart } from "./graphPlot.js";

const renderChartHere = renderChart();
const result = await getCompanyArray();
const obj = await getStocksStats();
const desc = await getDescription();

let infoContainer = document.querySelector(".info-container");
let desCompanyName = document.querySelector(".companyName");
let desPrice = document.querySelector(".des-price");
let desProfit = document.querySelector(".des-trend-percent");
let description = document.querySelector(".description");
let myChart = document.getElementById("myChart");
let graphBtns = document.getElementsByClassName("buttons-Graph");

export let currentCompName;

// Displaying the list
result.forEach((company) => {
  let info = document.createElement("div");
  info.classList.add("info");

  let compName = document.createElement("button");
  compName.classList.add("company-name");
  compName.textContent = company;
  info.appendChild(compName);

  compName.addEventListener("click", () => {
    if (!compName.classList.contains("selected")) {
      if (document.querySelector(".selected")) {
        let select = document.querySelector(".selected");
        select.classList.remove("selected");
      }
      compName.classList.add("selected");
      currentCompName = compName.textContent;

      descriptionDisplay(compName.textContent);

      // console.log(currentCompName);
      renderChart(compName.textContent);
      giveIdToDurBtn(compName.textContent);
    } else {
      compName.classList.remove("selected");
    }
  });

  let price = document.createElement("p");
  price.classList.add("price");
  price.textContent = `$${obj[0][company]["bookValue"].toFixed(2)}`;
  info.appendChild(price);

  let trendPercent = document.createElement("p");
  trendPercent.classList.add("trend-percent");
  trendPercent.textContent = `${obj[0][company]["profit"].toFixed(2)}%`;
  info.appendChild(trendPercent);

  infoContainer.appendChild(info);
});

function descriptionDisplay(company) {
  desCompanyName.textContent = company;
  desPrice.textContent = `$${obj[0][company]["bookValue"].toFixed(2)} `;
  desProfit.textContent = `${obj[0][company]["profit"].toFixed(2)}%`;
  description.textContent = `${desc[company]["summary"]}`;
}

function giveIdToDurBtn(company) {
  Array.from(graphBtns).forEach((btn) => {
    btn.value = company;
  });
}

Array.from(graphBtns).forEach((btn) => {
  btn.addEventListener("click", () => {
    renderChart(btn.value, btn.textContent);
  });
});
