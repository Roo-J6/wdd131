document.addEventListener("DOMContentLoaded", () => {
    // Set footer year and last modified date
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;

    // Responsive Hamburger Menu
    const menuButton = document.getElementById("menu-button");
    const navMenu = document.getElementById("nav-menu");

    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        menuButton.textContent = navMenu.classList.contains("show") ? "✖" : "☰";
    });

    // Temple Filtering
    const filterButtons = document.querySelectorAll("nav a"); // Select all filter buttons
    const templeFigures = document.querySelectorAll(".temple-grid figure"); // Select all temple figures

    filterButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent page reload

            const category = event.target.getAttribute("data-filter"); // Get filter category

            templeFigures.forEach(figure => {
                if (category === "home") {
                    figure.style.display = "block"; // Show all images when "Home" is clicked
                } else {
                    const templeType = figure.getAttribute("data-type"); // Get the temple's category
                    if (templeType === category) {
                        figure.style.display = "block"; // Show if matches category
                    } else {
                        figure.style.display = "none"; // Hide if it does not match
                    }
                }
            });
        });
    });
});
