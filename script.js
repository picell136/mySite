'use strict';

document.addEventListener('DOMContentLoaded', () => {

                // Приветственная кнопка
    document.querySelector(".say-hello").addEventListener("click", function () {
        let randomNumber = Math.floor(Math.random() * 6) + 1;
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


                //  Модальное окно  //

    const   modal_notification = document.querySelector('.modal_notification'),
            modalTrigger = document.querySelectorAll('[data-modal]'),
            modalCloseBtn = document.querySelector('[data-close]'),
            modal_img = document.querySelector('modal-img'),
            modal = document.querySelector('.modal');

    // Открываем модальное окно   

    function openModal() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';    // Фиксирует окно (нельзя прокручивать)
        modal_notification.innerHTML = randomizer();
        
    }

    modalTrigger.forEach(item => {
        item.addEventListener('click', openModal);
    });

    // Закрываем модальное окно  
    
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    modalCloseBtn.addEventListener('click', closeModal);    // при клике на крестик окно закроется

    modal.addEventListener('click', (event) => {            // при клике на фон
        const target = event.target;                        // модальное окно закроется
        if (target === modal) {
            closeModal();
        }
    });


    modal.addEventListener('click', closeModal);

    // Кнопка проверки на пидора (рандомайзер) //

    function randomizer() {   
        let x = Math.floor(Math.random() * 100) + 1;    // будет выводить случ. числа от 1 до 100
         if (x < 25) {
            return `${x}%, ты совсем не пидор`; 
        }
        else if (x >= 25 && x < 50) {
            return `${x}%, ну не сказать что ты пидор`; 
        }
        else if (x >= 50 && x < 75) {
            return `Ты на ${x}% пидор. Какая мерзость.`; 
        }
        else if (x >= 75) {
            return `Ты, полноценный, на ${x}% пидор`; 
                
              }
    };

    // Табы
 
    const   tabs = document.querySelectorAll('.tabheader__item'),
            tabsContent = document.querySelectorAll('.tabcontent'),
            tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
    tabsContent.forEach(item => {
    item.style.display = 'none';
    });

    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active')
    })
    }

    function showTabContent(i) {
    tabsContent[i].style.display = 'block';
    tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent(0);

    tabsParent.addEventListener('click', (event) => {

    const target = event.target;

    if (target && target.classList.contains('tabheader__item')){
        tabs.forEach((item, i) => {
            if (target == item) {
                hideTabContent();
                showTabContent(i);
            }
        });
    }
    });


});

