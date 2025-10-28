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
  const form          = document.querySelector('form[name="purchase-form"]');
  const licenseType   = document.getElementById("licensetype");
  const developers    = document.getElementById("developers");
  const isSaaS        = document.getElementById("isSaaS");
  const smallCompany  = document.getElementById("smallCompany");
  const country       = document.getElementById("country");
  const paymentType   = document.getElementById("paymenttype");

  const customersRow  = document.getElementById("customers-row");
  const priceDisplay  = document.getElementById("license-price");
  const vatInfoRow    = document.getElementById("vat-info-row");
  const vatInfoText   = document.getElementById("vat-info");

  const payNowText    = document.getElementById("pay-now-text");
  const payNowButton  = document.getElementById("pay-now-button");
  const requestText   = document.getElementById("request-text");
  const requestButton = document.getElementById("request-button");
  const payNowBtn     = payNowButton.querySelector("button");
  const requestBtn    = requestButton.querySelector("button");

  const devScale = [1,2,3,4,5,6,7,8,9,'10+'];

  // Stripe URLs (Deutschland + International)
  const stripeDE = {
    1:"https://buy.stripe.com/28EbJ24yX6qpa9m9FSebu0G",
    2:"https://buy.stripe.com/28E4gA0iHcONchu3huebu0H",
    3:"https://buy.stripe.com/cNiaEYghFdSRgxK19mebu0I",
    4:"https://buy.stripe.com/28E14oc1pbKJ81e05iebu0J",
    5:"https://buy.stripe.com/4gMaEYaXlaGFgxK3huebu0K",
    6:"https://buy.stripe.com/5kQ9AUc1p6qpdly2dqebu0L",
    7:"https://buy.stripe.com/fZubJ27L9g0Z95i2dqebu0M",
    8:"https://buy.stripe.com/eVqeVe6H52a9gxKbO0ebu0N",
    9:"https://buy.stripe.com/fZu9AU4yX9CBdlyf0cebu0O"
  };
  const stripeINT = {
    1:"https://buy.stripe.com/00weVed5t7ut1CQ6tGebu0x",
    2:"https://buy.stripe.com/eVq28sghF5ml95i8BOebu0y",
    3:"https://buy.stripe.com/00w3cw3uT9CBchuf0cebu0z",
    4:"https://buy.stripe.com/14AdRa9ThbKJ3KY5pCebu0A",
    5:"https://buy.stripe.com/cNi9AU0iH4ihgxKf0cebu0B",
    6:"https://buy.stripe.com/4gM9AU9ThaGF6Xaf0cebu0C",
    7:"https://buy.stripe.com/28E00k5D12a90yMaJWebu0D",
    8:"https://buy.stripe.com/14A3cw1mL7ut3KY2dqebu0E",
    9:"https://buy.stripe.com/aFabJ2e9xeWVftG19mebu0F"
  };

  function setInvisible(el, yes) { if (el) el.classList.toggle("invisible", yes); }
  function setHidden(el, yes) { if (el) el.classList.toggle("d-none", yes); }

  function updateFormState() {
    const type         = licenseType.value;
    const devScaled    = devScale[parseInt(developers.value, 10)];
    const isTenPlus    = devScaled === '10+';
    const devCount     = typeof devScaled === 'number' ? devScaled : null;
    const saas         = isSaaS.checked;
    const small        = smallCompany.checked;
    const countryVal   = country.value;
    const paymentVal   = paymentType.value;

    const showCustomers = (type === "purchaseenterprise") || (type === "purchasecompany" && saas);
    setInvisible(customersRow, !showCustomers);

    let isPayable = false;
    let priceText = "Get a quote";
    let vatApplied = false;
    let payableDevCount = null;

    // PayNow nur bei Company, 1–9 Developer, kein SaaS, kein SmallCompany, CreditCard/DirectDebit
    const validPayment = paymentVal === "creditcard" || paymentVal === "directdebit";

    if (
      type === "purchasecompany" &&
      validPayment &&
      !saas &&
      !small &&
      !isTenPlus &&
      devCount >= 1 && devCount <= 9
    ) {
      let net = devCount * 999;
      if (countryVal === "Germany") {
        vatApplied = true;
        priceText = `€ ${(net * 1.19).toLocaleString("de-DE", { minimumFractionDigits: 2 })}`;
      } else {
        priceText = `€ ${net.toLocaleString("de-DE")}`;
      }
      isPayable = true;
      payableDevCount = devCount;
    }

    priceDisplay.textContent = priceText;
    setInvisible(vatInfoRow, false);
    vatInfoText.textContent = isPayable
      ? (vatApplied ? "Total including 19% VAT" : "Total without VAT (Reverse charge may apply)")
      : "Please get a quote for pricing details.";

    setHidden(payNowText,   !isPayable);
    setHidden(payNowButton, !isPayable);
    setHidden(requestText,   isPayable);
    setHidden(requestButton, isPayable);

    payNowBtn.dataset.devcount = payableDevCount;
    payNowBtn.dataset.country  = countryVal;
    payNowBtn.dataset.payable  = isPayable ? "true" : "false";
  }

  // Bootstrap-Formvalidierung
  function validateForm() {
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return false;
    }
    return true;
  }

  // Stripe redirect
  payNowBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (!validateForm()) return;

    const isPayable = payNowBtn.dataset.payable === "true";
    const devCount  = payNowBtn.dataset.devcount;
    const country   = payNowBtn.dataset.country;

    if (!isPayable || !devCount) return;

    const stripeUrl = country === "Germany" ? stripeDE[devCount] : stripeINT[devCount];
    if (stripeUrl) window.location.href = stripeUrl;
    else alert("No Stripe Checkout URL configured for this selection.");
  });

  // Netlify submit mit Validierung
  requestBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (!validateForm()) return;
    form.submit();
  });

  updateFormState();
  [licenseType, developers, isSaaS, smallCompany, country, paymentType].forEach(el => {
    el.addEventListener("change", updateFormState);
    el.addEventListener("input", updateFormState);
  });
});
