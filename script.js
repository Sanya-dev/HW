// Задача1
//  Project10. Buttons. При нажатии на кнопку менять цвет body.
//     У вас должен быть слушатель для всех кнопок. По нажатию на каждую кнопку отображаете в консоли "клик"
//     По нажатию на каждую кнопку, считывать атрибут id нажатой кнопки
//     Менять фона body на считанный атрибут id.
//     Добавить кнопку blue и orange. 



let Buttons = document.querySelectorAll(".item");
let colors = ["OrangeRed", "SteelBlue", "MistyRose", "Brown", "SeaGreen"];

for (let i = 0; i < Buttons.length; i++) {
  Buttons[i].addEventListener("click", function () {
      let buttonRead = Buttons[i].getAttribute("id");
      console.log("Click", buttonRead);
    if (buttonRead == "img") {
      document.body.style.background = `url(./8.jpg)`;
    } else if (buttonRead == "random") {
      document.body.style.background =
        colors[Math.floor(Math.random() * colors.length)];
    } else {
      document.body.style.background = buttonRead;
    }
  });
}




// 2. Создать 5 тегов <p> в html. Из массива let texts = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"]
//     для каждого тега p добавить соотв-ю текст. innerText
// let texts = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"]

// let text = document.querySelectorAll("p")

// for (let i = 0; i < text.length; i++) {
//     text[i].innerText = texts[i]    
// }





// // 3. Есть массив 
//     В html создаем 3 тега a - <a href=""></a> x3. Для каждого из трех, 
//         добавить link в href и title внутрь тега из массива arr
// let arr = [
//     {
//         link : "https://google.com",
//         title : "Ссылка на гугл"
//     },
//     {
//         link : "https://instagram.com",
//         title : "Ссылка на инстаграм"
//     },
//     {
//         link : "https://facebook.com",
//         title : "Ссылка на фейсбук"
//     }
// ]

// let link = document.querySelectorAll("a")
// for (let i = 0; i < link.length; i++) {
//     link[i].setAttribute("href", arr[i].link)
//     link[i].innerText = arr[i].title
// }



// 4. Создать две кнопки - <button>PLUS</button>, <button>MINUS</button>
//     Создать тег p с начальным значением - 0. 
//     При клике на buttonPlus увеличивать значение в теге p на 1
//     При клике на buttonMinus уменьшать значение в теге p на 1
//     addEventListener. innerText. 
// */



let minus = document.querySelector("#minus")
let plus = document.querySelector("#plus")
let text = document.querySelector(".num")

minus.addEventListener("click" , function () {
    text.innerText =  Number(text.innerText) - 1
})
plus.addEventListener("click" , function () {
    text.innerText =  Number(text.innerText)  + 1
})
