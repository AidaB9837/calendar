const currentDate = document.querySelector(".current-date");
const days = document.querySelector(".days");

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
  let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();

  let liDays = "";
  for (let i = 1; i <= lastDateOfMonth; i++) {
    liDays += `<li>${i}</li>`;
  }

  currentDate.innerHTML = `${months[currMonth]} ${currYear}`;
  days.innerHTML = liDays;
};

renderCalendar();
