document.getElementById("regForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("msg").innerText =
        "Registration successful! See you for coffee ☕";
});
