


    var sidenavbar = document.getElementById("sidenavbar")
    var menuIcon = document.getElementById("menuicon")
    var closenav = document.getElementById("close-nav")

    menuIcon.addEventListener("click", function () {
        sidenavbar.style.right = 0
    })

    closenav.addEventListener("click", function () {
        sidenavbar.style.right = "-50%"
    })

    // Product search functionality
    var productcontainer = document.getElementById("productcontainer")
    var search = document.getElementById("search")
    var productlist = productcontainer.querySelectorAll("div")

    search.addEventListener("keyup", function (event) {
        var enteredvalue = event.target.value.toUpperCase()

        for (let count = 0; count < productlist.length; count++) {
            var productname = productlist[count].querySelector("p").textContent;

            if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
                productlist[count].style.display = "none"
            } else {
                productlist[count].style.display = "block"
            }
        }
    })

