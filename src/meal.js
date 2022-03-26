function nameMenuItem(item) {
  return `Delicious ${item}`;
};



function createMenuItem(menuName, dollarAmt, mealTime) {
  var menuItem = {
    name: menuName,
    price: dollarAmt,
    type: mealTime,
  };
  return menuItem;
};



function addIngredients(toAdd, ingredients) {
    if (ingredients.includes(toAdd)) {
      return ingredients;
    } else {
  return ingredients.push(toAdd);
  };
};



function formatPrice(initialPrice) {
  return `$${initialPrice}`;
};



function decreasePrice(originalPrice) {
  return originalPrice * .9;
};



function createRecipe(menuItem, ingredients, mealTime) {
  var recipe = {
    title: menuItem,
    ingredients: ingredients,
    type: mealTime,
  };
  return recipe;
};



module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
