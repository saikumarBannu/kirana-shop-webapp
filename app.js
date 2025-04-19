let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const div = document.createElement("div");
    div.textContent = `${item.product} - ₹${item.price}`;
    cartItems.appendChild(div);
    total += item.price;
  });
  const totalDiv = document.createElement("div");
  totalDiv.textContent = `Total: ₹${total}`;
  cartItems.appendChild(totalDiv);
}

function checkout() {
  let orderText = "I'd like to order: ";
  cart.forEach(item => {
    orderText += `${item.product} (₹${item.price}), `;
  });
  orderText = orderText.slice(0, -2); // Remove the last comma
  const phone = "919876543210"; // Replace with your shop's WhatsApp number
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(orderText)}`;
  window.open(url, "_blank");
}
