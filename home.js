const validPin = 1234;
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const accountNumber = document.getElementById("account-number").value;
    const amount = getInputValueNumber("add-amount")
    const pin = getInputValueNumber("add-pin")

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    if (accountNumber.length !== 11) {
      alert("Please enter a valid account number!");
      return;
    }

    if (pin !== validPin) {
      alert("Please enter a valid pin number!");
      return;
    }

    const totalNewBalance = availableBalance + amount;

    document.getElementById("available-balance").innerText = totalNewBalance;
  });

// toggling

document.getElementById("add-money").addEventListener("click", function () {
  document.getElementById("cashout-parent").style.display = "none";
  document.getElementById("add-money-parent").style.display = "block";
});
document.getElementById("cashout").addEventListener("click", function () {
  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("cashout-parent").style.display = "block";
});

function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);
  return inputFieldValueNumber;
}
