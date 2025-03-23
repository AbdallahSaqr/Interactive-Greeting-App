// Wait until the page is fully loaded
window.onload = function () {
    setTimeout(function () {
        alert("Please enter your name!");
    }, 2000);

    let greeting = document.getElementById("greeting");
    let nameInput = document.getElementById("name");
    let enterNameBtn = document.getElementById("enterName");
    let clearNameBtn = document.getElementById("clearName");
    let colorPicker = document.getElementById("colorPicker");

    // Retrieve stored values from localStorage
    let storedName = localStorage.getItem("userName");
    let storedColor = localStorage.getItem("userColor");

    // If a name exists in localStorage, update the UI
    if (storedName) {
        greeting.textContent = `Hello, ${storedName}!`;
        nameInput.value = storedName; // Fill input field
    }

    // If a color exists in localStorage, apply it
    if (storedColor) {
        greeting.style.color = storedColor;
        colorPicker.value = storedColor; // Set color picker
    }

    // Handle "Enter Name" button click
    enterNameBtn.onclick = function () {
        let userName = nameInput.value.trim();
        let selectedColor = colorPicker.value;

        if (!userName) {
            alert("Please enter your name!");
            return;
        }

        // Save the name and color to localStorage
        localStorage.setItem("userName", userName);
        localStorage.setItem("userColor", selectedColor);

        // Update heading and color
        greeting.textContent = `Hello, ${userName}!`;
        greeting.style.color = selectedColor;
    };

    // Handle "Clear Name" button click
    clearNameBtn.onclick = function () {
        // Remove stored data
        localStorage.removeItem("userName");
        localStorage.removeItem("userColor");

        // Reset UI
        greeting.textContent = "Hello!";
        nameInput.value = "";
        greeting.style.color = ""; // Reset text color
        colorPicker.value = "#000000"; // Reset color picker to default (black)
    };
};
