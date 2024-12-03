
// // // // Add event listeners dynamically for each product's Add to Cart button
// // // let cartButtons = document.querySelectorAll("[id^='btn']");
// // // let quantitySelectors = document.querySelectorAll("[id^='quantity-selector']");
// // // let quantities = document.querySelectorAll("[id^='quantity']");

// // // cartButtons.forEach((cartBtn, index) => {
// // //   let quantitySelector = quantitySelectors[index];
// // //   let quantity = quantities[index];
// // //   let adding = 1; // Default quantity value for each product
  
// // //   // Event listener for Add to Cart button (show the quantity selector)
// // //   cartBtn.addEventListener("click", () => {
// // //     cartBtn.classList.add("hidden"); // Hide Add to Cart button
// // //     quantitySelector.classList.remove("hidden"); // Show quantity selector
// // //     quantity.textContent = adding; // Set the initial quantity display
// // //   });

// // //   // Get the increase and decrease buttons for this product
// // //   let increaseBtn = document.getElementById(`increase-${index + 1}`);
// // //   let decreaseBtn = document.getElementById(`decrease-${index + 1}`);
// // //   let quantityElement = document.getElementById(`quantity-${index + 1}`);
  
// // //   // Event listener for the Increase button
// // //   increaseBtn.addEventListener("click", () => {
// // //     adding += 1; // Increment quantity
// // //     quantityElement.textContent = adding; // Update displayed quantity
// // //   });

// // //   // Event listener for the Decrease button
// // //   decreaseBtn.addEventListener("click", () => {
// // //     if (adding > 1) {
// // //       adding -= 1; // Decrement quantity
// // //       quantityElement.textContent = adding; // Update displayed quantity
// // //     }
// // //   });
// // // });

// // // Add event listeners dynamically for each product's Add to Cart button
// // let cartButtons = document.querySelectorAll("[id^='btn']");
// // let quantitySelectors = document.querySelectorAll("[id^='quantity-selector']");
// // let quantities = document.querySelectorAll("[id^='quantity']");

// // cartButtons.forEach((cartBtn, index) => {
// //   let quantitySelector = quantitySelectors[index];
// //   let quantity = quantities[index];
// //   let adding = 1; // Default quantity value for each product
  
// //   // Event listener for Add to Cart button (show the quantity selector)
// //   cartBtn.addEventListener("click", () => {
// //     cartBtn.classList.add("hidden"); // Hide Add to Cart button
// //     quantitySelector.classList.remove("hidden"); // Show quantity selector
// //     quantity.textContent = adding; // Set the initial quantity display
// //   });

// //   // Get the increase and decrease buttons for this product
// //   let increaseBtn = document.getElementById(`increase-${index + 1}`);
// //   let decreaseBtn = document.getElementById(`decrease-${index + 1}`);
// //   let quantityElement = document.getElementById(`quantity-${index + 1}`);
  
// //   // Event listener for the Increase button
// //   increaseBtn.addEventListener("click", () => {
// //     adding += 1; // Increment quantity
// //     quantityElement.textContent = adding; // Update displayed quantity
// //   });

// //   // Event listener for the Decrease button
// //   decreaseBtn.addEventListener("click", () => {
// //     if (adding > 1) {
// //       adding -= 1; // Decrement quantity
// //       quantityElement.textContent = adding; // Update displayed quantity
// //     }
// //   });
// // });
// // Define a global cart object
// let cart = {};

// // Select all necessary DOM elements
// let cartButtons = document.querySelectorAll("[id^='btn']");
// let quantitySelectors = document.querySelectorAll("[id^='quantity-selector']");
// let quantities = document.querySelectorAll("[id^='quantity']");
// let cartCount = document.querySelector(".quantity"); // Update the cart count display

// cartButtons.forEach((cartBtn, index) => {
//   let quantitySelector = quantitySelectors[index];
//   let quantity = quantities[index];
//   let adding = 1; // Default quantity value for each product

//   // Event listener for Add to Cart button
//   cartBtn.addEventListener("click", () => {
//     cartBtn.classList.add("hidden"); // Hide Add to Cart button
//     quantitySelector.classList.remove("hidden"); // Show quantity selector
//     quantity.textContent = adding; // Initialize quantity display

//     // Add to global cart object
//     let productName = document.querySelectorAll(".name")[index].textContent;
//     let productPrice = parseFloat(document.querySelectorAll(".price")[index].textContent.replace("$", ""));
//     cart[productName] = { quantity: adding, price: productPrice };

//     // Update cart count display
//     updateCartCount();
//   });

//   // Get increase and decrease buttons
//   let increaseBtn = document.getElementById(`increase-${index + 1}`);
//   let decreaseBtn = document.getElementById(`decrease-${index + 1}`);
//   let quantityElement = document.getElementById(`quantity-${index + 1}`);

//   // Event listener for Increase button
//   increaseBtn.addEventListener("click", () => {
//     adding += 1;
//     quantityElement.textContent = adding; // Update displayed quantity

//     // Update global cart quantity
//     let productName = document.querySelectorAll(".name")[index].textContent;
//     cart[productName].quantity = adding;

//     // Update cart count display
//     updateCartCount();
//   });

//   // Event listener for Decrease button
//   decreaseBtn.addEventListener("click", () => {
//     if (adding > 1) {
//       adding -= 1;
//       quantityElement.textContent = adding; // Update displayed quantity

//       // Update global cart quantity
//       let productName = document.querySelectorAll(".name")[index].textContent;
//       cart[productName].quantity = adding;

//       // Update cart count display
//       updateCartCount();
//     } else {
//       // Remove product from cart and reset UI
//       let productName = document.querySelectorAll(".name")[index].textContent;
//       delete cart[productName];
//       quantitySelector.classList.add("hidden");
//       cartBtn.classList.remove("hidden");
//       updateCartCount();
//     }
//   });
// });

// // Function to update cart count display
// function updateCartCount() {
//   let totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
//   cartCount.textContent = `Your Cart (${totalItems})`;
// }

// Select Add to Cart buttons and quantity selectors
let cartButtons = document.querySelectorAll("[id^='btn']");
let quantitySelectors = document.querySelectorAll("[id^='quantity-selector']");

// Loop through all products
cartButtons.forEach((cartBtn, index) => {
  const quantitySelector = quantitySelectors[index];
  const quantityDisplay = document.querySelector(`#quantity-${index + 1}`);
  let quantity = 1; // Initial quantity

  // Add to Cart button click event
  cartBtn.addEventListener("click", () => {
    cartBtn.classList.add("hidden"); // Hide Add to Cart button
    quantitySelector.classList.remove("hidden"); // Show quantity selector
    quantityDisplay.textContent = quantity; // Update quantity display
  });

  // Increment quantity
  document.getElementById(`increase-${index + 1}`).addEventListener("click", () => {
    quantity++;
    quantityDisplay.textContent = quantity;
  });

  // Decrement quantity
  document.getElementById(`decrease-${index + 1}`).addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      quantityDisplay.textContent = quantity;
    }
  });
});
