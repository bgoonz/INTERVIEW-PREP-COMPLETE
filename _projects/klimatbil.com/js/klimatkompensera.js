/**
 * Removes the default button that is rendered by stripe.
 */
function RemoveStripeDefaultButton() {
  document.getElementsByClassName("stripe-button-el")[0].style.display = "none";
}

RemoveStripeDefaultButton();

let treeAmount = 0;
let usingGasoline = true;

function UpdateTotal() {
  const gasolineMultiplier = 0.00234769703; // converts liters of gasoline to co2 emission in tonnes
  const dieselMultiplier = 0.0026892715; // converts liters of diesel to co2 emission in tonnes

  let literAmount = document.getElementById("js-liter-input").value;
  SetText(".js-liter-amount", (literAmount * 1).toFixed(2));

  let emissionMultiplier = usingGasoline
    ? gasolineMultiplier
    : dieselMultiplier;
  SetText("#js-co2-emission", (literAmount * emissionMultiplier).toFixed(4));

  let customPaymentValue = document.getElementById("js-money-input").value;

  if (customPaymentValue !== "") {
    let finalAmount = Math.round(parseFloat(customPaymentValue) * 100) / 100;
    SetText("#js-custom-donation-amount", finalAmount);
    let form = document.getElementById("js-payment-form");
    form.action = `https://wt-a1a4d75d2e7f5a03df41a2e03b3cd9d7-0.sandbox.auth0-extend.com/stripe-payment?amount=${
      finalAmount * 100
    }&description=custom`;
  } else {
    let finalAmount = 0;

    if (literAmount === "" || parseFloat(literAmount) === 0) {
      SetText(".js-total-amount", finalAmount);
      SetText(".js-tree-amount", "0.0");
      return;
    }

    finalAmount = CalculateFinalAmount(literAmount, emissionMultiplier);

    SetText(".js-total-amount", finalAmount);
    let form = document.getElementById("js-payment-form");

    let fuelType = usingGasoline ? "bensin" : "diesel";

    form.action = `https://wt-a1a4d75d2e7f5a03df41a2e03b3cd9d7-0.sandbox.auth0-extend.com/stripe-payment?amount=${
      finalAmount * 100
    }&description=${literAmount}+liter+${fuelType}`;
  }
}

/**
 * Calculates the final amount with applied service and stripe fees.
 * @param {number} literAmount        - The amount of liters the user has fueled
 * @param {number} emissionMultiplier - The liters of fuel type => co2 emission multiplier
 * @returns {number} The final amount to pay
 */
function CalculateFinalAmount(literAmount, emissionMultiplier) {
  let result = 0;

  const yearlyTreeCo2Consumption = 21.7724; // in kilograms
  const dollarToSek = 9.3; // value of 1 dollar in sek

  /*  Compensation fee
    ================================================== */
  result = literAmount * emissionMultiplier; // Amount of co2 emissions in tonnes
  result *= 1000; // Amount of co2 in kg
  result /= yearlyTreeCo2Consumption; // Amount of trees that need to be planted to offset the carbon emissions.
  SetText(".js-tree-amount", result.toFixed(1)); // Display this number on the page

  result *= dollarToSek; // Amount of SEK required to buy those trees
  result = Math.ceil(result * 100) / 100; // Ceil to the 2nd decimal

  /*  Service fee
    ================================================== */
  result /= 0.9; // Add 10% service fee

  /*  Stripe fee
    ================================================== */
  result += 1.8; // Add 1.8kr
  result /= 0.986; // Add 1.4%
  result = Math.ceil(result * 100) / 100; // Ceil to the 2nd decimal

  return result;
}

/**
 * Finds all elements that matches a query and sets their innerText to the text
 * @param {string} query - The querySelector to find elements with
 * @param {string} text  - The text to set to the element's innerText
 */
function SetText(query, text) {
  document.querySelectorAll(query).forEach((element) => {
    element.innerText = text.toString();
  });
}

/**
 * Switches between using gasoline or diesel as fuel
 * @param {*} fuelTypeButton - The element that was clicked
 */
function ToggleFuelType(fuelTypeButton) {
  if (usingGasoline && fuelTypeButton.id === "js-gasoline-button") {
    return;
  }
  if (!usingGasoline && fuelTypeButton.id === "js-diesel-button") {
    return;
  }

  document.getElementById("js-gasoline-button").classList.toggle("toggled");
  document.getElementById("js-diesel-button").classList.toggle("toggled");
  usingGasoline = !usingGasoline;

  SetText(
    ".js-active-fuel-type",
    fuelTypeButton.children[1].innerText.toLowerCase()
  );
  UpdateTotal();
}
