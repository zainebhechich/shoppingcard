
const totalElement = document.querySelector(".total");
const productList = document.querySelector(".list-products");

//total price automateclly
const updateTotal = () => {
  let total = 0;
  document.querySelectorAll(".card").forEach((product) => {
    const quantity = parseInt(product.querySelector(".quantity").textContent);
    const unitPrice = parseFloat(
      product.querySelector(".unit-price").textContent.replace("$", "")
    );
    total += quantity * unitPrice;
  });
  totalElement.textContent = `${total.toFixed(2)} $`;
};

// Add quantity , reduce
productList.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-plus-circle")) {
    const quantity = e.target.nextElementSibling;
    quantity.textContent = parseInt(quantity.textContent) + 1;
    updateTotal();
  }
  if (e.target.classList.contains("fa-minus-circle")) {
    const quantity = e.target.previousElementSibling;
    if (parseInt(quantity.textContent) > 0) {
      quantity.textContent = parseInt(quantity.textContent) - 1;
      updateTotal();
    }
  }

  // Like item and deleted items
  if (e.target.classList.contains("fa-heart")) {
    e.target.classList.toggle("liked");
  }

  if (e.target.classList.contains("fa-trash-alt")) {
    const product = e.target.closest(".card-body");
    product.remove();
    updateTotal();
  }
});

updateTotal();

