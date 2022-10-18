const currentDate = document.querySelector(".current-date");

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
  currentDate.innerHTML = `${months[currMonth]} ${currYear}`;
};

renderCalendar();
