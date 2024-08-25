/**
 Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить
 слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.
Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером,
где будут отображаться отзывы.
Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва
 менее 50 или более 500 символов, функция должна генерировать исключение.
При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения.
 */
const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: "1",
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: "2",
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: "3",
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: "4",
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

const contentDivEl = document.querySelector(".content");

let data = [...initialData];

data.forEach((item) => {
  const divProduct = document.createElement("div");
  divProduct.textContent = item.product;
  contentDivEl.appendChild(divProduct);

  item.reviews.forEach((review) => {
    const divReviews = document.createElement("div");
    divReviews.textContent = review.text;
    divProduct.appendChild(divReviews);
  });

  const inputEl = document.createElement("input");
  inputEl.setAttribute("type", "text");
  inputEl.classList.add("reviews");
  divProduct.appendChild(inputEl);
  const buttonEl = document.createElement("button");
  buttonEl.textContent = "Добавить отзыв";
  divProduct.appendChild(buttonEl);
});

const buttonElAll = document.querySelectorAll("button");

buttonElAll.forEach((button) => {
  button.addEventListener("click", () => {
    const index = Array.from(buttonElAll).indexOf(button);
    const text = button.previousSibling.value;
    if (text.length < 10 || text.length > 500) {
      throw new Error("Длина отзыва должна быть от 10 до 500 символов.");
    }
    const review = {
      id: Date.now().toString(),
      text,
    };
    data[index].reviews.push(review);
    const divReviews = document.createElement("div");
    divReviews.textContent = review.text;
    button.previousSibling.parentNode.insertBefore(
      divReviews,
      button.previousSibling
    );
    button.previousSibling.value = "";
  });
});
