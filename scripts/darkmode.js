function toggleDarkMode(newState) {
    if (newState == "on") {
        DarkReader.enable();
        document.querySelector('.on').style.display = "block"
        document.querySelector('.button').style.backgroundColor="rgb(125, 64, 138)";
        document.querySelector('.gh').style.filter="invert(1)"

    }
    
    if (newState === 'off') {
        DarkReader.disable();
        document.querySelector('.gh').style.filter="invert(0)"
        document.querySelector('.button').style.backgroundColor="white";
        document.querySelector('.on').style.display = 'none'

    }
}


document.querySelector(".off").addEventListener("click", function () {
    toggleDarkMode("on");
});
document.querySelector(".on").addEventListener("click", function () {
    toggleDarkMode("off");
});

toggleDarkMode(newState = "off")