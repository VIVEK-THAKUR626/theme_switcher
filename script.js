const toggle = document.getElementById("toggle")
const aboutElements = document.querySelectorAll(".about")
const icon = document.getElementById("icon")

const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#f2a218" d="M178.2-10.1c7.4-3.1 15.8-2.2 22.5 2.2l87.8 58.2 87.8-58.2c6.7-4.4 15.1-5.2 22.5-2.2S411.4-.5 413 7.3l20.9 103.2 103.2 20.9c7.8 1.6 14.4 7 17.4 14.3s2.2 15.8-2.2 22.5l-58.2 87.8 58.2 87.8c4.4 6.7 5.2 15.1 2.2 22.5s-9.6 12.8-17.4 14.3L433.8 401.4 413 504.7c-1.6 7.8-7 14.4-14.3 17.4s-15.8 2.2-22.5-2.2l-87.8-58.2-87.8 58.2c-6.7 4.4-15.1 5.2-22.5 2.2s-12.8-9.6-14.3-17.4L143 401.4 39.7 380.5c-7.8-1.6-14.4-7-17.4-14.3s-2.2-15.8 2.2-22.5L82.7 256 24.5 168.2c-4.4-6.7-5.2-15.1-2.2-22.5s9.6-12.8 17.4-14.3L143 110.6 163.9 7.3c1.6-7.8 7-14.4 14.3-17.4zM207.6 256a80.4 80.4 0 1 1 160.8 0 80.4 80.4 0 1 1 -160.8 0zm208.8 0a128.4 128.4 0 1 0 -256.8 0 128.4 128.4 0 1 0 256.8 0z"/></svg>`;
const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"/></svg>`;

toggle.addEventListener("click",() => {
    if(toggle.className === "light"){
        const darkThemeColor = `rgb(${47},${48},${48})`;
        document.body.style.backgroundColor = darkThemeColor;

        const darkFontColor = `rgb(${200},${200},${200})`;

        aboutElements.forEach(element => {
            element.style.fontFamily = 'Special Gothic Expanded One';
            element.style.color = darkFontColor;
        });

        icon.innerHTML = sunIcon;
        toggle.className = "dark";

    }else if(toggle.className === "dark"){
        const lightThemeColor = `rgb(${255},${255},${255})`;
        document.body.style.backgroundColor = lightThemeColor;

        const lightFontColor = `rgb(${0},${0},${0})`;

        aboutElements.forEach(element => {
            element.style.fontFamily = 'Nunito';
            element.style.color = lightFontColor;
        });

        icon.innerHTML = moonIcon;
        toggle.className = "light";
    }
})

