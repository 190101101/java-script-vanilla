const API_KEY = "275d58779ccf4e22af03e792e8819fff";

const recipeListEl = document.getElementById('recipe-list');

const getRecipes = async () => {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
  );

  const data = await response.json();
  return data.recipes;
}

const displayRecipes = (recipes) => {
  recipeListEl.innerHTML = '';

  recipes.forEach((recipe) => {
    const recipeItemEl = document.createElement('li');
    recipeItemEl.classList.add('recipe-item');

    const recipeImageEl = document.createElement('img');
    recipeImageEl.src  = recipe.image;
    recipeImageEl.alt  = 'recipe image';

    const recipeTitleEl = document.createElement('h2');
    recipeTitleEl.innerText  = recipe.title;

    const recipeIngredientsEl = document.createElement('p');
    recipeIngredientsEl.innerText  = `
      <strong>Ingredients:</strong> 
      ${recipe.extendedIngredients.map((ingredient) => {
        return ingredient.original
      }).join(', ')}
    `;

    const recipeLinkEl = document.createElement('a');
    recipeLinkEl.href = recipe.sourceUrl;
    recipeLinkEl.innerText = 'View Recipe';

    recipeItemEl.append(recipeImageEl);
    recipeItemEl.append(recipeTitleEl);
    recipeItemEl.append(recipeIngredientsEl);
    recipeItemEl.append(recipeLinkEl);
    
    recipeListEl.append(recipeItemEl);
  });

  console.log(recipeIngredientsEl);
  console.log(recipes);
}

const init = async () => {
  const recipes = await getRecipes();
  displayRecipes(recipes);
}

init();
