// Function to show the popup
function showPopup(selectedValues) {
    const popup = document.getElementById("popup");
    const selectedValuesContainer = document.getElementById("selected-values");

    // Clear any previous content in the popup
    selectedValuesContainer.innerHTML = "";

    // Loop through the selected values and labels
    for (const field of selectedValues) {
        const label = document.querySelector(`label[for="${field.name}"]`).textContent;
        const value = field.value;
        const div = document.createElement("div");
        div.innerHTML = `<strong>${label}:</strong> ${value}`;
        selectedValuesContainer.appendChild(div);
    }

    // Display the popup
    popup.style.display = "block";
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}

// Event listener for the close button in the popup
document.getElementById("close-popup").addEventListener("click", closePopup);
