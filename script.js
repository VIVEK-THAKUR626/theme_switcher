const toggle = document.getElementById("toggle")

toggle.addEventListener("click",() => {
    if(toggle.className === "light"){
        const darkThemeColor = `rgb(${47},${48},${48})`;
        document.body.style.backgroundColor = darkThemeColor;
        toggle.textContent = "SWITCH TO LIGHT";
        toggle.className = "dark";
    }else if(toggle.className === "dark"){
        const lightThemeColor = `rgb(${255},${255},${255})`;
        document.body.style.backgroundColor = lightThemeColor;
        toggle.textContent = "SWITCH TO DARK";
        toggle.className = "light";
    }
})