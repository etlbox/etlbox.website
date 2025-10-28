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
  const licenseType   = document.getElementById("licensetype");
  const developers    = document.getElementById("developers");
  const isSaaS        = document.getElementById("isSaaS");
  const smallCompany  = document.getElementById("smallCompany");
  const country       = document.getElementById("country");

  const customersRow  = document.getElementById("customers-row");
  const priceDisplay  = document.getElementById("license-price");
  const vatInfoRow    = document.getElementById("vat-info-row");
  const vatInfoText   = document.getElementById("vat-info");

  const payNowText    = document.getElementById("pay-now-text");
  const payNowButton  = document.getElementById("pay-now-button");
  const requestText   = document.getElementById("request-text");
  const requestButton = document.getElementById("request-button");

  const devScale = [1, 2, 3, 4, 5, 6, 7, 8, 9, '10+'];

  function setInvisible(el, yes) {
    if (!el) return;
    el.classList.toggle("invisible", yes);
  }

  function setHidden(el, yes) {
    if (!el) return;
    el.classList.toggle("d-none", yes);
  }

  function updateFormState() {
    const type       = licenseType.value;
    const devScaled  = devScale[parseInt(developers.value, 10)];
    const isTenPlus  = devScaled === '10+';
    const devCount   = typeof devScaled === 'number' ? devScaled : null;
    const saas       = isSaaS.checked;
    const small      = smallCompany.checked;
    const countryVal = country.value;

    // Customers block (Platz behalten)
    // -> sichtbar bei Enterprise ODER Company + SaaS
    const showCustomers = (type === "purchaseenterprise") || (type === "purchasecompany" && saas);
    setInvisible(customersRow, !showCustomers);

    // Preislogik
    let isPayable = false;
    let priceText = "Get a quote";
    let vatApplied = false;

    if (type === "purchasecompany" && !saas && !small && !isTenPlus && devCount >= 1 && devCount <= 9) {
      let net = devCount * 999;
      if (countryVal === "Germany") {
        vatApplied = true;
        priceText = `€ ${(net * 1.19).toLocaleString("de-DE", { minimumFractionDigits: 2 })}`;
      } else {
        priceText = `€ ${net.toLocaleString("de-DE")}`;
      }
      isPayable = true;
    }

    priceDisplay.textContent = priceText;

    // VAT Info (Platz behalten)
    if (isPayable) {
      setInvisible(vatInfoRow, false);
      vatInfoText.textContent = vatApplied
        ? "Total including 19% VAT"
        : "Total without VAT (Reverse charge may apply)";
    } else {
      setInvisible(vatInfoRow, false);
      vatInfoText.textContent = "Please get a quote for pricing details.";
    }

    // Pay Now vs Request (echtes Umschalten)
    setHidden(payNowText,   !isPayable);
    setHidden(payNowButton, !isPayable);
    setHidden(requestText,   isPayable);
    setHidden(requestButton, isPayable);
  }

  updateFormState();

  [licenseType, developers, isSaaS, smallCompany, country].forEach(el => {
    el.addEventListener("change", updateFormState);
    el.addEventListener("input", updateFormState);
  });
});
