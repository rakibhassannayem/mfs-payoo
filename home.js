document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.href="./index.html"
});

const validPin = 1234;
const transactionData = [];
// add money features
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const accountNumber = getInputValue("account-number");
    if (accountNumber.length !== 11) {
      alert("Please enter a valid account number!");
      return;
    }

    const amount = getInputValueNumber("add-amount");
    if (amount < 1) {
      alert("Invalid amount!");
      return;
    }

    const pin = getInputValueNumber("add-pin");
    if (pin !== validPin) {
      alert("Please enter a valid pin number!");
      return;
    }

    const availableBalance = getInnerText("available-balance");

    const totalNewBalance = availableBalance + amount;
    setInnerText(totalNewBalance);

    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };
    transactionData.push(data);
  });

// cashout features
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const agentNumber = getInputValue("agent-number");
  const pin = getInputValueNumber("cashout-pin");
  const availableBalance = getInnerText("available-balance");
  const amount = getInputValueNumber("cashout-amount");

  if (amount < 1 || amount < availableBalance) {
    alert("Invalid amount!");
    return;
  }
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

  const data = {
    name: "Cash Out",
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
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

  const data = {
    name: "Transfer",
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
});

// Bonus features
document.getElementById("bonus-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const coupon = getInputValue("coupon");
  const availableBalance = getInnerText("available-balance");

  if (coupon.length !== 6) {
    alert("The coupon must be 6 digits");
    return;
  } else {
    alert("Congratulations! you've won 500tk.");
  }

  const totalNewBalance = availableBalance + 500;
  setInnerText(totalNewBalance);

  const data = {
    name: "Bonus",
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
});

// pay-bill features
document.getElementById("pay-bill-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const billerAccountNumber = getInputValue("biller-account-number");
  const amount = getInputValueNumber("pay-bill-amount");
  const pin = getInputValueNumber("pay-bill-pin");
  const availableBalance = getInnerText("available-balance");

  if (billerAccountNumber.length !== 11) {
    alert("Please enter a valid account number!");
    return;
  }
  if (pin !== validPin) {
    alert("Please enter a valid pin number!");
    return;
  }

  const totalNewBalance = availableBalance - amount;
  setInnerText(totalNewBalance);

  const data = {
    name: "Pay Bill",
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
});

// transaction features
document.getElementById("transaction").addEventListener("click", function (e) {
  e.preventDefault();
  const transactionContainer = document.getElementById("transaction-container");

  transactionContainer.innerText = "";

  for (const data of transactionData) {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="border-2 border-[#0808081A] p-3 bg-white flex items-center justify-between rounded-xl mb-2">
          <div class="flex items-center gap-2">
            <div class="p-3 rounded-full bg-[#0808080D]">
              <img src="./assets/wallet1.png" alt="" class="mx-auto" />
            </div>
            <div class="text-[#080808]/70">
              <h1 class="text-lg font-semibold">${data.name}</h1>
              <p class="text-xs">${data.date}</p>
            </div>
          </div>
          <i class="fa-solid fa-ellipsis-vertical cursor-pointer"></i>
        </div>
    `;

    transactionContainer.appendChild(div);
  }
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

document.getElementById("pay-bill").addEventListener("click", function () {
  handleToggle("pay-bill-parent");
  handleButtonToggle("pay-bill");
});

document.getElementById("transaction").addEventListener("click", function () {
  handleToggle("transaction-parent");
  handleButtonToggle("transaction");
});

// funciton to get input values
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
// function to get innerTexts
function getInnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);
  return elementValueNumber;
}
// function to set innerTexts
function setInnerText(value) {
  const newValue = document.getElementById("available-balance");
  newValue.innerText = value;
}

// function to handle toggle
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
