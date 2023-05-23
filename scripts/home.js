console.log('Hola desde consola');

function carrousel() {
    const images = ["back1.jpg", "back2.jpg", "back3.jpg", "back4.jpg", "back5.jpg"];
    const background = document.querySelector(".home__background--image");
    let index = -1;
    let counter = 0;
    const interval = setInterval(()=>{
        index += 1;
        if ((index >= 0) && (index <= 4)){
            counter += 1;
            console.log('counter: ', counter);
            const url = `./assets/${images[index]}`
            background.src = url;
            console.log(url);
        }
        else {
            index = -1;
        }
        if (counter === 14) {
            clearInterval(interval);
        }

    }, 2000);


}
document.addEventListener("DOMContentLoaded", carrousel);
