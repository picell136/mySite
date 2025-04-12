
// Приветственная кнопка

document.querySelector(".say-hello").addEventListener("click", function () {
    randomNumber = Math.floor(Math.random() * 6) + 1;
    let sayHi = new Audio("./sounds/hello_button/sound_" + String(randomNumber) + ".mp3");
        sayHi.play();
    buttonAnimation(this.classList.value);
})

function buttonAnimation (currentClass) {
    let activeButton = document.querySelector("." + currentClass);
    activeButton.classList.add("pressed")
    setTimeout(function(){                          // функция "отжатия" кнопки в обратное состояние
        activeButton.classList.remove("pressed");
    }, 1000)
}

// Обнаруживаем нажатие клавиатуры 

document.addEventListener("keydown", function () {
    buttonAnimation();
})


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

