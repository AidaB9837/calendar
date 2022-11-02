const currentDate = document.querySelector(".current-date");
const days = document.querySelector(".days");
const prevNextIcons = document.querySelectorAll(".icons span");

//getting new date, current year and month
let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const renderCalendar = () => {
  let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay(); //getting first day of month
  let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(); //getting last date of month
  let lastDateOFMonth = new Date(currYear, currMonth, 0).getDate(); //getting last date of previous month
  let liDays = "";

  for (let i = firstDayOfMonth; i > 0; i--) {
    liDays += `<li class="inactive">${lastDateOFMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateOfMonth; i++) {
    liDays += `<li>${i}</li>`;
  }

  currentDate.innerHTML = `${months[currMonth]} ${currYear}`;
  days.innerHTML = liDays;
};

renderCalendar();

prevNextIcons.forEach((icon) => {
  //adding click event on both icons
  icon.addEventListener("click", () => {
    //if clicked icon is previous icon then decrement current month by 1, else, increment it by 1
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

    renderCalendar();
  });
});
