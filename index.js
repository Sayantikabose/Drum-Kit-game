var buttons = document.querySelectorAll(".drum");
buttons.forEach(function(b) { b.addEventListener("click", handle_click) });

function handle_click() {
    var btncode = this.innerHTML;
    makeSound(btncode);
    btnAnimation(btncode);

}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    btnAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;

        default:
            alert("press anything else");
            break;
    }
}

function btnAnimation(currentKey) {
    var activebtn = document.querySelector("." + currentKey);
    activebtn.classList.add("pressed");


    setTimeout(function() {
        activebtn.classList.remove("pressed");
    }, 200);
}