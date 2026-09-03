document.addEventListener('DOMContentLoaded', () => {
  const promoCodeElem = document.getElementById('promoCode');
  const orderBtnElem = document.getElementById('orderBtn');

  if (promoCodeElem) {
    promoCodeElem.addEventListener('click', copyCode);
  }

  if (orderBtnElem) {
    orderBtnElem.addEventListener('click', orderNow);
  }
});

let popupTimeout;

function showPopup(message) {
  const popup = document.getElementById('popup');
  if (!popup) return;

  popup.innerText = message;
  popup.style.display = 'block';

  clearTimeout(popupTimeout);
  popupTimeout = setTimeout(() => {
    popup.style.display = 'none';
  }, 2500);
}

function copyCode() {
  const codeText = document.getElementById('promoCode').innerText;
  navigator.clipboard.writeText(codeText)
    .then(() => {
      showPopup('Promo code copied!');
    })
    .catch(() => {
      showPopup('Failed to copy code');
    });
}

function orderNow() {
  showPopup('Redirecting to order page...');
}