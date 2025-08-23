document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const mobileNumber = 12345678910;
  const pin = 1234;

  const mobileNumberValue = parseInt(
    document.getElementById("mobile-number").value
  );
  const pinNumberValue = parseInt(document.getElementById("pin-number").value);

  if (mobileNumber === mobileNumberValue && pin === pinNumberValue) {
    window.location.href="./home.html"
  } else {
    alert("Invalid credential!");
  }
});
