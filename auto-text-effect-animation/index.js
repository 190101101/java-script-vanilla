const container = document.querySelector(".container");
const careers = ["youtube", "web developer", "freelancer", "instructor"];
let careerIndex = 0;
let characterIndex = 0;

const updateText = () => {
  characterIndex++;
  container.innerHTML = `<h1>i am ${
    careers[careerIndex].slice(0, 1) === "i" ? "and" : "a"
  } ${careers[careerIndex].slice(0, characterIndex)}
  </h1>`;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 300);
};

updateText();
