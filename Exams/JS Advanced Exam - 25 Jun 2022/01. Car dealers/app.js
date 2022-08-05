window.addEventListener("load", solve);

function solve() {
  let publishBtn = document.getElementById("publish");
  let total = 0;

  publishBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let makeInput = document.getElementById("make");
    let modelInput = document.getElementById("model");
    let productionYearInput = document.getElementById("year");
    let fuelInput = document.getElementById("fuel").value;
    let originalCostInput = document.getElementById("original-cost");
    let sellingPriceInput = document.getElementById("selling-price");

    if (makeInput.value === "" || modelInput.value === "" || productionYearInput.value === "" || fuelInput.value === "" || originalCostInput.value === "" || sellingPriceInput.value === "" || Number(originalCostInput.value) > Number(sellingPriceInput.value)) {
      return;
    }
    let carsTable = document.getElementById("table-body");
    let trEl = document.createElement("tr");
    trEl.classList.add("row");

    let makeTd = document.createElement("td");
    let modelTd = document.createElement("td");
    let productionYearTd = document.createElement("td");
    let fuelTd = document.createElement("td");
    let orCostTd = document.createElement("td");
    let sellingPriceTd = document.createElement("td");
    let btnsTd = document.createElement("td");
    let editBtn = document.createElement("button");
    editBtn.classList.add("action-btn");
    editBtn.innerHTML = "Edit";
    let sellBtn = document.createElement("button");
    sellBtn.classList.add("action-btn");
    sellBtn.innerHTML = "Sell";
    btnsTd.appendChild(editBtn);
    btnsTd.appendChild(sellBtn);

    makeTd.innerHTML = makeInput.value;
    modelTd.innerHTML = modelInput.value;
    productionYearTd.innerHTML = productionYearInput.value;
    fuelTd.innerHTML = fuelInput;
    orCostTd.innerHTML = originalCostInput.value;
    sellingPriceTd.innerHTML = sellingPriceInput.value;

    trEl.appendChild(makeTd);
    trEl.appendChild(modelTd);
    trEl.appendChild(productionYearTd);
    trEl.appendChild(fuelTd);
    trEl.appendChild(orCostTd);
    trEl.appendChild(sellingPriceTd);
    trEl.appendChild(btnsTd);

    carsTable.appendChild(trEl);

    makeInput.value = "";
    modelInput.value = "";
    originalCostInput.value = "";
    sellingPriceInput.value = "";

    editBtn.addEventListener("click", () => {
      makeInput.value = makeTd.innerHTML;
      modelInput.value = modelTd.innerHTML;
      productionYearInput.value = productionYearTd.innerHTML;
      fuelInput.value = fuelTd.innerHTML;
      originalCostInput.value = orCostTd.innerHTML;
      sellingPriceInput.value = sellingPriceTd.innerHTML;
      editBtn.parentElement.parentElement.remove();
    });

    sellBtn.addEventListener("click", () => {
      let soldCarsList = document.getElementById("cars-list");
      let liEl = document.createElement("li");
      liEl.classList.add("each-list");
      
      let makeModelSpan = document.createElement("span");
      let productionYearSpan = document.createElement("span");
      let sellOriginalPriceDiffSpan = document.createElement("span");

      makeModelSpan.innerHTML = `${makeTd.innerHTML} ${modelTd.innerHTML}`;
      productionYearSpan.innerHTML = productionYearTd.innerHTML;
      sellOriginalPriceDiffSpan.innerHTML = `${Number(sellingPriceTd.innerHTML) - Number(orCostTd.innerHTML)}`;
      total += Number(sellingPriceTd.innerHTML) - Number(orCostTd.innerHTML);
      liEl.appendChild(makeModelSpan);
      liEl.appendChild(productionYearSpan);
      liEl.appendChild(sellOriginalPriceDiffSpan);

      soldCarsList.appendChild(liEl);
      let profit = document.getElementById("profit");
      profit.innerHTML = total.toFixed(2);
      sellBtn.parentElement.parentElement.remove()
    })
  })
}

// working but judge gives me 7/100 ?