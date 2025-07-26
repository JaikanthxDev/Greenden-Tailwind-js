//selecting side navbar,menuIcon
var sidenavbar = document.getElementById("sidenavbar")
var menuIcon = document.getElementById("menuicon")
var closenav = document.getElementById("close-nav")
menuIcon.addEventListener("click",function()
{
    sidenavbar.style.right=0

})
closenav.addEventListener("click",function()
{
    sidenavbar.style.right="-50%"
})