

// // Select Add to Cart buttons and quantity selectors
// let cartButtons = document.querySelectorAll("[id^='btn']");
// let quantitySelectors = document.querySelectorAll("[id^='quantity-selector']");
// let Nocart = document.getElementById("nocart");
// let cart = document.getElementById("cart");
// let cartItems = document.getElementById("cart-items");
// let cartCount = document.getElementById("cart-count");
// let totalAmountElement = document.getElementById("order-total"); // Total Amount Display
// let confirmOrder=document.getElementById("confirm-order")

// let totalOrders = 0; // Total number of items in the cart
// let totalAmount = 0; // Total cost of items in the cart

// // Products and Prices arrays
// let products = ["Waffle with Berries", "Vanilla Bean Crème Brûlée", "Classic Tiramisu", "Pistachio Baklava", "Lemon Meringue Pie", "Red Velvet Cake"];
// let prices = [6.50, 7.00, 8.00, 5.50, 4.00, 5.00];

// // Loop through each product
// cartButtons.forEach((cartBtn, index) => {
//   const quantitySelector = quantitySelectors[index];
//   const quantityDisplay = document.querySelector(`#quantity-${index + 1}`);
//   let quantity = 1; // Default quantity for each product

//   // Add to Cart button functionality
//   cartBtn.addEventListener("click", () => {
//     cartBtn.classList.add("hidden"); // Hide Add to Cart button
//     quantitySelector.classList.remove("hidden"); // Show quantity selector
//     quantityDisplay.textContent = quantity; // Display quantity

//     Nocart.classList.add("hidden");
//     cart.classList.remove("hidden");

//     // Create and display product in the cart
//     const product = document.createElement("div");
//     product.classList.add("product");
//     product.id = `product-${index}`;
//     product.innerHTML = `
//       <div class="orders flex justify-between">
//         <div class="part1">
//           <div class="name">${products[index]}</div>
//           <div class="price-Quantity flex gap-4">
//             <div id="cart-quantity-${index}" class="quantity">x${quantity}</div>
          
            
//             <div class="priceeach">${(prices[index] ).toFixed(2)} $</div>
//             <div class="price">${(prices[index] * quantity).toFixed(2)} $</div>
//           </div>
//         </div>
//         <div class="part2">
//           <div id="remove-${index}" class="imge border-black rounded-3xl">
//             <img src="assets/images/icon-remove-item.svg" alt="Remove" />
//           </div>
//         </div>
//       </div>
//     `;
//     cartItems.appendChild(product);

    

//     // Update cart summary
//     totalOrders += quantity;
//     totalAmount += prices[index] * quantity;
//     cartCount.textContent = totalOrders;
//     totalAmountElement.textContent = `$${totalAmount.toFixed(2)}`;

//     // Remove functionality
//     document.getElementById(`remove-${index}`).addEventListener("click", () => {
//       // Remove product from cart
//       const productElement = document.getElementById(`product-${index}`);
//       if (productElement) {
//         productElement.remove();
//       }

//       // Update cart summary
//       totalOrders -= quantity;
//       totalAmount -= prices[index] * quantity;
//       cartCount.textContent = totalOrders;
//       totalAmountElement.textContent = `$${totalAmount.toFixed(2)}`;

//       // Reset Add to Cart button and quantity selector
//       cartBtn.classList.remove("hidden");
//       quantitySelector.classList.add("hidden");
//       quantity = 1;
//       quantityDisplay.textContent = quantity;

//       // Show empty cart message
//       if (totalOrders === 0) {
//         Nocart.classList.remove("hidden");
//         cart.classList.add("hidden");
//       }
//     });
//   });

//   // Increase quantity functionality
//   document.getElementById(`increase-${index + 1}`).addEventListener("click", () => {
//     quantity++;
//     quantityDisplay.textContent = quantity;

//     // Update quantity and total amount in the cart
//     const cartQuantity = document.getElementById(`cart-quantity-${index}`);
//     if (cartQuantity) {
//       cartQuantity.textContent = `x${quantity}`;
//     }
//     const productPrice = document.querySelector(`#product-${index} .price`);
//     if (productPrice) {
//       productPrice.textContent = `${(prices[index] * quantity).toFixed(2)} $`;
//     }

//     totalOrders++;
//     totalAmount += prices[index];
//     cartCount.textContent = totalOrders;
//     totalAmountElement.textContent = `$${totalAmount.toFixed(2)}`;
//   });

//   // Decrease quantity functionality
//   document.getElementById(`decrease-${index + 1}`).addEventListener("click", () => {
//     if (quantity > 1) {
//       quantity--;
//       quantityDisplay.textContent = quantity;

//       // Update quantity and total amount in the cart
//       const cartQuantity = document.getElementById(`cart-quantity-${index}`);
//       if (cartQuantity) {
//         cartQuantity.textContent = `x${quantity}`;
//       }
//       const productPrice = document.querySelector(`#product-${index} .price`);
//       if (productPrice) {
//         productPrice.textContent = `${(prices[index] * quantity).toFixed(2)} $`;
//       }

//       totalOrders--;
//       totalAmount -= prices[index];
//       cartCount.textContent = totalOrders;
//       totalAmountElement.textContent = `$${totalAmount.toFixed(2)}`;
//     }
//   });
// });

// Select Add to Cart buttons and quantity selectors
let cartButtons = document.querySelectorAll("[id^='btn']");
let quantitySelectors = document.querySelectorAll("[id^='quantity-selector']");
let Nocart = document.getElementById("nocart");
let cart = document.getElementById("cart");
let cartItems = document.getElementById("cart-items");
let cartCount = document.getElementById("cart-count");
let totalAmountElement = document.getElementById("order-total"); // Total Amount Display
let confirmOrderButton = document.getElementById("confirm-order"); // Confirm Order Button
let orderModal = document.getElementById("order-modal"); // Order Summary Modal
let orderSummary = document.getElementById("order-summary"); // Summary Content
let startNewOrderButton = document.getElementById("start-new-order"); // Start New Order Button

let totalOrders = 0; // Total number of items in the cart
let totalAmount = 0; // Total cost of items in the cart

// Products and Prices arrays
let products = ["Waffle with Berries", "Vanilla Bean Crème Brûlée", "Classic Tiramisu", "Pistachio Baklava", "Lemon Meringue Pie", "Red Velvet Cake"];
let prices = [6.50, 7.00, 8.00, 5.50, 4.00, 5.00];

// Loop through each product
cartButtons.forEach((cartBtn, index) => {
  const quantitySelector = quantitySelectors[index];
  const quantityDisplay = document.querySelector(`#quantity-${index + 1}`);
  let quantity = 1; // Default quantity for each product

  // Add to Cart button functionality
  cartBtn.addEventListener("click", () => {
    cartBtn.classList.add("hidden"); // Hide Add to Cart button
    quantitySelector.classList.remove("hidden"); // Show quantity selector
    quantityDisplay.textContent = quantity; // Display quantity

    Nocart.classList.add("hidden");
    cart.classList.remove("hidden");

    // Create and display product in the cart
    const product = document.createElement("div");
    product.classList.add("product");
    product.id = `product-${index}`;
    product.innerHTML = `
      <div class="orders flex justify-between">
        <div class="part1">
          <div class="name">${products[index]}</div>
          <div class="price-Quantity flex gap-4">
            <div id="cart-quantity-${index}" class="quantity">x${quantity}</div>
            <div class="price">${(prices[index] * quantity).toFixed(2)} $</div>
          </div>
        </div>
        <div class="part2">
          <div id="remove-${index}" class="imge border-black rounded-3xl">
            <img src="assets/images/icon-remove-item.svg" alt="Remove" />
          </div>
        </div>
      </div>
    `;
    cartItems.appendChild(product);

    // Update cart summary
    totalOrders += quantity;
    totalAmount += prices[index] * quantity;
    cartCount.textContent = totalOrders;
    totalAmountElement.textContent = `$${totalAmount.toFixed(2)}`;

    // Remove functionality
    document.getElementById(`remove-${index}`).addEventListener("click", () => {
      // Remove product from cart
      const productElement = document.getElementById(`product-${index}`);
      if (productElement) {
        productElement.remove();
      }

      // Update cart summary
      totalOrders -= quantity;
      totalAmount -= prices[index] * quantity;
      cartCount.textContent = totalOrders;
      totalAmountElement.textContent = `$${totalAmount.toFixed(2)}`;

      // Reset Add to Cart button and quantity selector
      cartBtn.classList.remove("hidden");
      quantitySelector.classList.add("hidden");
      quantity = 1;
      quantityDisplay.textContent = quantity;

      // Show empty cart message
      if (totalOrders === 0) {
        Nocart.classList.remove("hidden");
        cart.classList.add("hidden");
      }
    });
  });

  // Increase quantity functionality
  document.getElementById(`increase-${index + 1}`).addEventListener("click", () => {
    quantity++;
    quantityDisplay.textContent = quantity;

    // Update quantity and total amount in the cart
    const cartQuantity = document.getElementById(`cart-quantity-${index}`);
    if (cartQuantity) {
      cartQuantity.textContent = `x${quantity}`;
    }
    const productPrice = document.querySelector(`#product-${index} .price`);
    if (productPrice) {
      productPrice.textContent = `${(prices[index] * quantity).toFixed(2)} $`;
    }

    totalOrders++;
    totalAmount += prices[index];
    cartCount.textContent = totalOrders;
    totalAmountElement.textContent = `$${totalAmount.toFixed(2)}`;
  });

  // Decrease quantity functionality
  document.getElementById(`decrease-${index + 1}`).addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      quantityDisplay.textContent = quantity;

      // Update quantity and total amount in the cart
      const cartQuantity = document.getElementById(`cart-quantity-${index}`);
      if (cartQuantity) {
        cartQuantity.textContent = `x${quantity}`;
      }
      const productPrice = document.querySelector(`#product-${index} .price`);
      if (productPrice) {
        productPrice.textContent = `${(prices[index] * quantity).toFixed(2)} $`;
      }

      totalOrders--;
      totalAmount -= prices[index];
      cartCount.textContent = totalOrders;
      totalAmountElement.textContent = `$${totalAmount.toFixed(2)}`;
    }
  });
});

// Confirm Order functionality
confirmOrderButton.addEventListener("click", () => {
  // Populate order summary modal
  orderSummary.innerHTML = cartItems.innerHTML;

  // Display total amount in modal
  const totalSummary = document.createElement("div");
  totalSummary.innerHTML = `<div><strong>Order Total: $${totalAmount.toFixed(2)}</strong></div>`;
  orderSummary.appendChild(totalSummary);

  // Show order modal
  orderModal.classList.remove("hidden");

  // Reset cart
  cartItems.innerHTML = "";
  cartCount.textContent = 0;
  totalAmountElement.textContent = "$0.00";
  totalOrders = 0;
  totalAmount = 0;
  Nocart.classList.remove("hidden");
  cart.classList.add("hidden");
});

// Start New Order functionality
startNewOrderButton.addEventListener("click", () => {
  orderModal.classList.add("hidden");
});

