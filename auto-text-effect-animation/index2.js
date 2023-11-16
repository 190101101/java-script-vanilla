const careers = ["youtube", "web developer", "freelancer", "instructor"];
let careerIndex = 0;
let characterIndex = 0;
let word;

const updateText = () => {
  characterIndex++;

  word = careers[careerIndex].slice(0, characterIndex);
  console.log(word);

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
