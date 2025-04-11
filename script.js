
// Приветственная кнопка

document.querySelector(".say-hello").addEventListener("click", function () {

    randomNumber = Math.floor(Math.random() * 6) + 1;

    let sayHi = new Audio("./sounds/hello_button/sound_" + String(randomNumber) + ".mp3");
        sayHi.play();
    console.log(sayHi);

})

// document.addEventListener("click", function () {
//     buttonAnimation(event.key);
// })


// Кнопка проверки на пидора (рандомайзер) //

  document.querySelector(".faggot").addEventListener("click", function () {   
    x = Math.floor(Math.random() * 100) + 1;    // будет выводить случ. числа от 1 до 100
    if (x < 25) {
        alert(`${x}%, ты совсем не пидор`); 
    }
    else if (x >= 25 && x < 50) {
        alert(`${x}%, ну не сказать что ты пидор`); 
    }
    else if (x >= 50 && x < 75) {
        alert(`Ты на ${x}% пидор. Какая мерзость.`); 
    }
    else if (x >= 75) {
        alert(`Ты, полноценный, на ${x}% пидор`); 
    }
  });

