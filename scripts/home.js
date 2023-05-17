console.log('Hola desde consola');
function carrousel() {
    const colors = ["home-background", "home-background-2", "home-background-3", "home-background-4"];
    const background = document.querySelector(".home__background--image");
    let index = -1;
    const interval = setInterval(()=>{
        index += 1;
        if ((index >= 0) && (index <= 3)){
            const url = `./assets/${colors[index]}`
            background.style.backgroundImage = url;
            console.log(url);
        }
        else {
            index = -1;
        }

    }, 2000);
    interval();
}
document.addEventListener("DOMContentLoaded", ()=>{
    const images = ["home-background.jpg", "home-background-2.jpeg", "home-background-3.jpeg", "home-background-4.jpeg"];
    const background = document.querySelector(".home__background--image");
    let index = -1;
    setInterval(()=>{
        index += 1;
        if ((index >= 0) && (index <= 3)){
            const url = `./assets/${images[index]}`
            background.src = url;
            console.log(url);
        }
        else {
            index = -1;
        }

    }, 2000);
});
