// extra ram cost
function significantButton(chargeOption, ramCost) {
  const buttonCost = document.getElementById(chargeOption);
  const buttonCostText = buttonCost.innerText;
  buttonCost.innerText = ramCost;
  updateFinalPrice();
}

function updateFinalPrice() {
  const memoryCost = document.getElementById("memoryPrice").innerText;
  const storageCost = document.getElementById("storagePrice").innerText;
  const deliveryPrice = document.getElementById("deliveryPrice").innerText;
  const totalPrice = document.getElementById("totalPrice");
  const ekdomTotalPrice = document.getElementById("ekdomTotal");
  totalPrice.innerText =
    1299 +
    parseInt(memoryCost) +
    parseInt(storageCost) +
    parseInt(deliveryPrice);
  // 1299 is the direct cost of docuemnt.getElementById("basePrice").innertext
  //   bonus 1: Overall Total at the bottom
  ekdomTotalPrice.innerText = totalPrice.innerText;
}

// memory section
document.getElementById("RamButton16gb").addEventListener("click", function () {
  significantButton("memoryPrice", 180);
  updateFinalPrice();
});
document.getElementById("RamButton8gb").addEventListener("click", function () {
  significantButton("memoryPrice", 0);
  updateFinalPrice();
});

// storage section
document
  .getElementById("storageButton512GB")
  .addEventListener("click", function () {
    significantButton("storagePrice", 100);
    updateFinalPrice();
  });
document
  .getElementById("storageButton1TB")
  .addEventListener("click", function () {
    significantButton("storagePrice", 180);
    updateFinalPrice();
  });
document
  .getElementById("storageButton256GB")
  .addEventListener("click", function () {
    significantButton("storagePrice", 0);
    updateFinalPrice();
  });

// delivery section
document.getElementById("moneyDelivery").addEventListener("click", function () {
  significantButton("deliveryPrice", 20);
  updateFinalPrice();
});
document.getElementById("freeDelivery").addEventListener("click", function () {
  significantButton("deliveryPrice", 0);
  updateFinalPrice();
});

// bonus 2: Promo Code Section
document
  .getElementById("promocodeButton")
  .addEventListener("click", function () {
    const promoCode = document.getElementById("promocodeInput").value;
    if (promoCode == "stevekaku") {
      const finalPriceValue = parseInt(
        document.getElementById("totalPrice").innerText
      );
      const afterDiscount = 0.8 * finalPriceValue;
      document.getElementById("totalPrice").innerText = afterDiscount;
      document.getElementById("ekdomTotal").innerText = afterDiscount;
    } else {
      alert("invalid promo code!");
    }
  });
