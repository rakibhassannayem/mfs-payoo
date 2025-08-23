const validPin = 1234;
// add money features
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const accountNumber = getInputValue("account-number");
    const amount = getInputValueNumber("add-amount");
    const pin = getInputValueNumber("add-pin");
    const availableBalance = getInnerText("available-balance");

    if (accountNumber.length !== 11) {
      alert("Please enter a valid account number!");
      return;
    }
    if (pin !== validPin) {
      alert("Please enter a valid pin number!");
      return;
    }

    const totalNewBalance = availableBalance + amount;
    setInnerText(totalNewBalance);
  });

// cashout features
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const agentNumber = getInputValue("agent-number");
  const pin = getInputValueNumber("cashout-pin");
  const availableBalance = getInnerText("available-balance");
  const amount = getInputValueNumber("cashout-amount");

  if (agentNumber.length !== 11) {
    alert("Please enter a valid agent number!");
    return;
  }
  if (pin !== validPin) {
    alert("Please enter a valid pin number!");
    return;
  }

  const totalNewBalance = availableBalance - amount;
  setInnerText(totalNewBalance);
});

// transfer features
document.getElementById("transfer-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const userAccountNumber = getInputValue("user-account-number");
  const pin = getInputValueNumber("transfer-pin");
  const availableBalance = getInnerText("available-balance");
  const amount = getInputValueNumber("transfer-amount");

  if (userAccountNumber.length !== 11) {
    alert("Please enter a valid user account number!");
    return;
  }
  if (pin !== validPin) {
    alert("Please enter a valid pin number!");
    return;
  }

  const totalNewBalance = availableBalance - amount;
  setInnerText(totalNewBalance);
});

// toggling
document.getElementById("add-money").addEventListener("click", function () {
  document.getElementById("cashout-parent").style.display = "none";
  document.getElementById("transfer-parent").style.display = "none";
  document.getElementById("add-money-parent").style.display = "block";
});
document.getElementById("cashout").addEventListener("click", function () {
  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("transfer-parent").style.display = "none";
  document.getElementById("cashout-parent").style.display = "block";
});
document.getElementById("transfer").addEventListener("click", function () {
  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("cashout-parent").style.display = "none";
  document.getElementById("transfer-parent").style.display = "block";
});

// funcitons to get input values
function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  return inputFieldValue;
}
function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);
  return inputFieldValueNumber;
}
// functions to get innerTexts
function getInnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);
  return elementValueNumber;
}
// // functions to set innerTexts
function setInnerText(value) {
  const newValue = document.getElementById("available-balance");
  newValue.innerText = value;
}
