const checkbox = document.querySelector("input");
const prices = document.querySelectorAll(".price-number");

prices.forEach(function (price) {
  checkbox.addEventListener("click", function () {
    if (checkbox.checked) {
      return (price.textContent = parseInt(price.textContent) * 10);
    } else {
      return (price.textContent = parseInt(price.textContent / 10));
    }
  });
});
