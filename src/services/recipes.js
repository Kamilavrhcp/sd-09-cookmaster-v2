const recipesModel = require('../model/recipes');

const registerRecipe = async (name, ingredients, preparation, userId) => {
  const response = await recipesModel.registerRecipe({ name, ingredients, preparation, userId });
  if (!response) return { status: 400, payload: { message: 'Error' } };
  return { status: 201, payload: { recipe: response } };
};

const getRecipes = async () => {
  const response = await recipesModel.getRecipes();
  return { status: 200, payload: response };
};

const getRecipeById = async (id) => {
  const response = await recipesModel.getRecipeById(id);
  if (!response) return { status: 404, payload: { message: 'recipe not found' } };
  return { status: 200, payload: response };
};

const editRecipeById = async (id, newData) => {
  const response = await recipesModel.editRecipeById(id, newData);
  if (!response) return { status: 404, payload: { message: 'recipe not found' } };
  return { status: 200, payload: response };
};

const deleteRecipeById = async (id) => {
  const response = await recipesModel.deleteRecipeById(id);
  if (!response) return { status: 404, payload: { message: 'recipe not found' } };
  return { status: 204, payload: response };
};

const addPictureOnRecipe = async (id) => {
  await recipesModel.addPictureOnRecipe(id, `localhost:3000/src/uploads/${id}.jpeg`);
  const response = await recipesModel.getRecipeById(id);
  return { status: 200, payload: response };
};
module.exports = {
  registerRecipe,
  getRecipes,
  getRecipeById,
  editRecipeById,
  deleteRecipeById,
  addPictureOnRecipe };
