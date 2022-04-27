let SignInBtn = document.getElementById("sign-in"); //ссылка на окно входа
let SignUpBtn = document.getElementById("sign-up"); //ссылка на регистрацию
let closeWindow = document.getElementById("create"); //кнопка СОЗДАТЬ
let registrate = document.getElementById("registrate"); //кнопка СОЗДАТЬ
let go = document.getElementById("go"); //кнопка ВОЙТИ
let go2 = document.getElementById("go2"); //кнопка регистрация
let SignInWindow = document.querySelector(".popup-signin"); //модальное окно ВХОД
let SignUpWindow = document.querySelector(".popup-registration"); //модальное окно РЕГИСТРАЦИЯ
let HeroFinder = document.querySelector(".hero__finder"); //поиск номера
let bgHero = document.querySelector(".hero");




//------------------------------------------------//
//                  Форма входа                   //
//------------------------------------------------//

//при нажатии на кнопку ВОЙТИ, открывается форма для входа
SignInBtn.addEventListener('click', (event) =>{
  bgHero.classList.add('bgHero');
  HeroFinder.classList.add('is-close');
  SignInWindow.classList.add('is-open');
});
//при нажатии на кнопку СОЗДАТЬ, открывается форма регистрации и закрывается модальное окно ВХОД
closeWindow.addEventListener('click', (event) =>{
  SignInWindow.classList.remove('is-open');
  SignUpWindow.classList.add('is-open');
});
//при нажатии на кнопку ВОЙТИ (формы), выход на главный экран
go.addEventListener('click', (event) =>{
  /*
  bgHero.classList.remove('bgHero');
  SignInWindow.classList.remove('is-open');
  HeroFinder.classList.remove('is-close');
  */

  let fail = false;
  let email = form.email.value;
  let password = form.password.value;
  let adr_pattern = /[0-9a-z_-]+@[0-9a-z_].[a-z]{2,5}/i;

  if (email == ""){
    fail = "введите email";
  }
  else if (adr_pattern.test(email) == false){
    fail = "вы ввели email неправильно";
  }
  else if (password == ""){
    fail = "Введите пароль";
  }
  else if (password !== "privet"){
    fail = "Пароль неверный";
  }
  if(fail){
    alert (fail);
  }
  else{
    window.location = "http://google.com";
  }

});

/*

function valid(form){
  let fail = false;
  let email = form.email.value;
  let password = form.password.value;
  let adr_pattern = /[0-9a-z_-]+@[0-9a-z_].[a-z]{2,5}/i;

  if (adr_pattern.test(email) == false){
    fail = "вы ввели email неправильно";
  }
  else if (password == ""){
    fail = "Введите пароль";
  }
  else if (password !== "privet"){
    fail = "Пароль неверный";
  }
  if(fail){
    alert (fail);
  }
  else{
    window.location = "http://google.com";
  }

}*/

//------------------------------------------------//
//                Форма регистрации               //
//------------------------------------------------//


//при нажатии на кнопку РЕГИСТРАЦИЯ, открывается форма регистрации
SignUpBtn.addEventListener('click', (event) =>{
  bgHero.classList.add('bgHero');
  HeroFinder.classList.add('is-close');
  SignUpWindow.classList.add('is-open');
});
//при нажатии на кнопку ЗАРЕГИСТРИРОВАТЬСЯ (формы), выход на главный экран
registrate.addEventListener('click', (event) =>{
  bgHero.classList.remove('bgHero');
  SignUpWindow.classList.remove('is-open');
  HeroFinder.classList.remove('is-close');
});
//при нажатии на кнопку РЕГИСТРАЦИЯ, открывается форма регистрации
go2.addEventListener('click', (event) =>{
  SignUpWindow.classList.remove('is-open');
  SignInWindow.classList.add('is-open');

});


//------------------------------------------------//
//                   Календарь                    //
//------------------------------------------------//


let PopupCal = document.querySelector(".popup-cal");
let cal_arrow = document.getElementById("cal_arrow");
let cal_arrow2 = document.getElementById("cal_arrow_2");
let choose = document.getElementById("choose");



cal_arrow.addEventListener('click', (event) =>{
  PopupCal.classList.add('is-open');
});

cal_arrow_2.addEventListener('click', (event) =>{
  PopupCal.classList.add('is-open');
});

choose.addEventListener('click', (event) =>{
  PopupCal.classList.add('is-open');
});

window.onclick = function(event) {
  if (event.target == PopupCal){
    PopupCal.classList.remove('is-open');
  }
}

//------------------------------------------------//
//                      Гости                     //
//------------------------------------------------//

let PopupGuests = document.querySelector(".popup-guests");
let guests = document.getElementById("guests");
let Use = document.getElementById("use");

guests.addEventListener('click', (event) =>{
  PopupGuests.classList.add('is-open');
});
Use.addEventListener('click', (event) =>{
  PopupGuests.classList.remove('is-open');
});
