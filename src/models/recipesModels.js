const { ObjectId } = require('mongodb');
const connection = require('./connection');

const insertRecipe = async (recipeInfo) => {
  const result = await connection()
    .then((db) => db.collection('recipes').insertOne({ ...recipeInfo }));

  return result.insertedId;
};

const postNewRecipe = async (recipeInfo) => {
  const result = await insertRecipe(recipeInfo);

  return result;
};

const getAllRecipes = async () => {
  const result = await connection()
    .then((db) => db.collection('recipes').find({}).toArray());
  return result;
};

const getRecipeById = async (id) => {
  const result = await connection()
    .then((db) => db.collection('recipes').findOne({ _id: ObjectId(id) }))
    .catch((error) => ({ error: error.message }));

    return result;
};

const updateRecipe = async (data) => {
  const { id, ...payload } = data;

  const { modifiedCount } = await connection()
    .then((db) => db.collection('recipes').updateOne({ _id: ObjectId(id) }, { $set: payload }));
  return { modifiedCount };
};

module.exports = {
  postNewRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
};