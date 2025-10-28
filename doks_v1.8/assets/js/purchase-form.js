// Loaded & Executed on the purchase page only

//TomSlide allows filtering in country text box
import TomSelect from 'tom-select';

document.addEventListener('DOMContentLoaded', () => {
  const select = document.querySelector('#country');
  if (select && !select.tomselect) {
    new TomSelect(select, {
      create: false,
      sortField: { field: 'text', direction: 'asc' },
      placeholder: 'Select your country'
    });
  }
});


//updating developer slider
const devSlider = document.getElementById('developers');
const devValue = document.getElementById('developers-value');
const devScale = [1, 2, 3, 4, 5, 6, 7, 8, 9, '10+'];

devSlider.addEventListener('input', () => {
  devValue.textContent = devScale[devSlider.value];
});

//updating customer slider
const customerSlider = document.getElementById('customers');
const customerValue = document.getElementById('customers-value');
const customerScale = [10, 20, 50, 100, 200, 300, 500, 1000, 2000, '5000+'];

customerSlider.addEventListener('input', () => {
  customerValue.textContent = customerScale[customerSlider.value];
});

//Price calculation

document.addEventListener("DOMContentLoaded", function () {
  const licenseType = document.getElementById("licensetype");
  const developers = document.getElementById("developers");
  const isSaaS = document.getElementById("isSaaS");
  const smallCompany = document.getElementById("smallCompany");
  const country = document.getElementById("country");
  const customersRow = document.getElementById("customers-row");
  const priceDisplay = document.getElementById("license-price");
  const vatInfo = document.getElementById("vat-info-row");

  const payNowText = document.getElementById("pay-now-text");
  const payNowButton = document.getElementById("pay-now-button");
  const requestText = document.getElementById("request-text");
  const requestButton = document.getElementById("request-button");

  const devScale = [1,2,3,4,5,6,7,8,9,'10+'];

  function updateFormState() {
    const type = licenseType.value;
    const devScaled = devScale[parseInt(developers.value, 10)];
    const isTenPlus = devScaled === '10+';
    const devCount = typeof devScaled === 'number' ? devScaled : null;
    const saas = isSaaS.checked;
    const small = smallCompany.checked;
    const countryValue = country.value;

    // Toggle customer slider visibility
    customersRow.style.display = (type === "purchaseenterprise") ? "" : "none";

    // Determine price logic
    let priceText = "Get a quote";
    let isPayable = false;
    let netPrice = 0;
    let vatApplied = false;

    if (type === "purchasecompany" && !saas && !small && !isTenPlus && devCount >= 1 && devCount <= 9) {
      netPrice = devCount * 999;
      isPayable = true;

      if (countryValue === "Germany") {
        vatApplied = true;
        const grossPrice = netPrice * 1.19;
        priceText = `€ ${grossPrice.toLocaleString("de-DE", {minimumFractionDigits: 2})}`;
      } else {
        priceText = `€ ${netPrice.toLocaleString("de-DE")}`;
      }
    }

    // Update price display
    priceDisplay.textContent = priceText;

    // VAT info text
    if (isPayable) {
      vatInfo.style.display = "";
      const infoText = vatApplied
        ? "Total including 19% VAT"
        : "Total without VAT (Reverse charge may apply)";
      document.getElementById("vat-info").textContent = infoText;
    } else {
      vatInfo.style.display = "none";
    }

    // Toggle Pay Now / Request sections
    if (isPayable) {
      payNowText.style.display = "";
      payNowButton.style.display = "";
      requestText.style.display = "none";
      requestButton.style.display = "none";
    } else {
      payNowText.style.display = "none";
      payNowButton.style.display = "none";
      requestText.style.display = "";
      requestButton.style.display = "";
    }
  }

  // Initial setup
  updateFormState();

  // Event listeners
  [licenseType, developers, isSaaS, smallCompany, country].forEach(el => {
    el.addEventListener("change", updateFormState);
    el.addEventListener("input", updateFormState);
  });
});

