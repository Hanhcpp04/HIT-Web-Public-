document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("login-container").style.display = "none";
    document.getElementById("product-container").style.display = "block";
});
