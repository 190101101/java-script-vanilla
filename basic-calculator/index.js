const button = document.querySelectorAll("button");
const inputField = document.getElementById("result");

for (let i = 0; i < button.length; i++) {
  console.log(button[i]);
  button[i].addEventListener("click", (e) => {
    const buttonValue = button[i].textContent;
    console.log(buttonValue);

    if (buttonValue === "C") {
        clearResult();
    } else if (buttonValue === "=") {
        calculateResult();
    } else {
        appendValue(buttonValue);
    }
  });
}

const clearResult = () => {
  inputField.value = "";
};

const calculateResult = () => {
  inputField.value = eval(inputField.value);
};

const appendValue = (buttonValue) => {
  inputField.value += buttonValue;
};
