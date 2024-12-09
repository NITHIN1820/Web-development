
// Select Add to Cart buttons and quantity selectors
let cartButtons = document.querySelectorAll("[id^='btn']");
let quantitySelectors = document.querySelectorAll("[id^='quantity-selector']");
let Nocart = document.getElementById("nocart");
let cart = document.getElementById("cart");
let cartItems = document.getElementById("cart-items");
let cartCount = document.getElementById("cart-count");


let totalOrders = 0; // Track the total number of products in the cart

let products=["Waffle with Berries","Vanilla Bean Crème Brûlée","Classic Tiramisu","Pistachio Baklava","Lemon Meringue Pie","Red Velvet Cake"]
let prices=[6.50, 7.00,8.00,5.50,4.00,5.00]

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

    Nocart.classList.add("hidden");
    cart.classList.remove("hidden");

    // Update total orders
    totalOrders += quantity;
    cartCount.textContent = totalOrders;


    // info of order
    const product=document.createElement("div");
product.classList.add("product")

// adding content to product
product.innerHTML=`<div class="orders flex justify-between">

              <div class="part1">
                <div class="name">${products[index]}</div>
                <div class="price-Quantity flex gap-4">
                  <div class="quantity">x${quantity}</div>
                  <div class="price"> ${prices[index]} $ </div>
                </div>
              </div>
              <div class="part2">

            <div class="imge border-black rounded-3xl"><img src="assets/images/icon-remove-item.svg" alt="" srcset=""></div>

              </div>
             </div>`;
cartItems.appendChild(product);
  });

  // Increment quantity
  document.getElementById(`increase-${index + 1}`).addEventListener("click", () => {
    quantity++;
    quantityDisplay.textContent = quantity;

    // Update total orders
    totalOrders++;
    cartCount.textContent = totalOrders;
  });

  // Decrement quantity
  document.getElementById(`decrease-${index + 1}`).addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      quantityDisplay.textContent = quantity;

      // Update total orders
      totalOrders--;
      cartCount.textContent = totalOrders;
    }
  });
});





