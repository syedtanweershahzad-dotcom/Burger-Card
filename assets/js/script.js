function showPopup(message) {
  const popup = document.getElementById("popup");
  popup.innerText = message;
  popup.style.display = "block";

  setTimeout(() => {
    popup.style.display = "none";
  }, 2000);
}

/* Copy Promo Code */
function copyCode() {
  navigator.clipboard.writeText("BOH232");
  showPopup("Promo Code Copied!");
}

/* Order Button */
function orderNow() {
  showPopup("Order Placed Successfully 🍔");
}
