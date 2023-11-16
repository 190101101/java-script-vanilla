const formEl = document.querySelector(".form");
const btnEl = document.getElementById("btn");
const birthDayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

const calculateAge = () => {
  const birthdayValue = birthDayEl.value;
  if (birthdayValue === "") {
    alert("please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year old"}`;
  }
};

const getAge = (birthdayValue) => {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }
  return age;
};

btnEl.addEventListener("click", calculateAge);

formEl.addEventListener("keydown", (e) => {
  if (e.code === "Enter" || e.code === "NumpadEnter") {
    calculateAge();
  }
});
