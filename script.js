let cartCount = 0;

const cartCounter = document.getElementById("cart-count");
const addButtons = document.querySelectorAll(".add-cart");

addButtons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        cartCounter.textContent = cartCount;

        button.textContent = "Added ✓";
        button.style.background = "#28a745";

        setTimeout(() => {
            button.textContent = "Add to Cart";
            button.style.background = "#111";
        }, 1000);
    });
});