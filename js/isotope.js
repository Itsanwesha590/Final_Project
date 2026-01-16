document.addEventListener("DOMContentLoaded", function () {
    var grid = document.querySelector(".grid");

    var iso = new Isotope(grid, {
        itemSelector: ".team-item",
        layoutMode: "fitRows",
        getSortData: {
            name: "p"
        }
    });

    let searchValue = "";
    let deptValue = "*";

    function applyFilters() {
        iso.arrange({
            filter: function (itemElem) {
                let name = itemElem.querySelector("p").innerText.toLowerCase();
                let dept = itemElem.getAttribute("data-dept");

                let matchSearch = name.includes(searchValue);
                let matchDept = deptValue === "*" || dept === deptValue;

                return matchSearch && matchDept;
            }
        });
    }

    // Search filter
    document.getElementById("teamSearch").addEventListener("keyup", function () {
        searchValue = this.value.toLowerCase();
        applyFilters();
    });

    // Dropdown filter
    document.querySelectorAll(".dropdown-item").forEach(function (item) {
        item.addEventListener("click", function (e) {
            e.preventDefault(); 
            deptValue = this.getAttribute("data-filter");
            applyFilters();
        });
    });
});