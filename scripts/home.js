console.log('Hola desde consola');

function factorial(){
    var input = window.prompt('introduce numero');
    console.log(typeof input);
    var result = 1;
    for (var i = 1; i <= input; i++){
        result = result * i;
    }
    console.log('El factorial es: ', result);
}

function carrousel() {
    const images = ["home-background.jpg", "home-background-2.jpeg", "home-background-3.jpeg", "home-background-4.jpeg"];
    const background = document.querySelector(".home__background--image");
    let index = -1;
    let counter = 0;
    const interval = setInterval(()=>{
        index += 1;
        if ((index >= 0) && (index <= 3)){
            counter += 1;
            console.log('counter: ', counter);
            const url = `./assets/${images[index]}`
            background.src = url;
            console.log(url);
        }
        else {
            index = -1;
        }
        if (counter === 13) {
            clearInterval(interval);
        }

    }, 2000);


}
document.addEventListener("DOMContentLoaded", carrousel);
/* document.addEventListener("DOMContentLoaded", factorial); */