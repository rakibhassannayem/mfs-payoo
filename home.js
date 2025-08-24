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

// Bonus features
document.getElementById("bonus-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const coupon = getInputValue("coupon");
  const availableBalance = getInnerText("available-balance");

  if (coupon.length !== 6) {
    alert("The coupon must be 6 digits");
    return;
  }else{
    alert("Congratulations! you've won 500tk.")
  }

  const totalNewBalance = availableBalance + 500;
  setInnerText(totalNewBalance);
});

// toggling
document.getElementById("add-money").addEventListener("click", function () {
  handleToggle("add-money-parent");
  handleButtonToggle("add-money");
});

document.getElementById("cashout").addEventListener("click", function () {
  handleToggle("cashout-parent");
  handleButtonToggle("cashout");
});

document.getElementById("transfer").addEventListener("click", function () {
  handleToggle("transfer-parent");
  handleButtonToggle("transfer");
});

document.getElementById("bonus").addEventListener("click", function () {
  handleToggle("bonus-parent");
  handleButtonToggle("bonus");
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
// functions to set innerTexts
function setInnerText(value) {
  const newValue = document.getElementById("available-balance");
  newValue.innerText = value;
}

//function to handle toggle
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// function to toggle buttons
function handleButtonToggle(id) {
  const formBtns = document.getElementsByClassName("main-btn");

  for (const btn of formBtns) {
    btn.classList.remove("border-blue-700", "bg-[#0874f20d]");
    btn.classList.add("border-[#0808081A]");
  }
  document
    .getElementById(id)
    .classList.add("border-blue-700", "bg-[#0874f20d]");
}
