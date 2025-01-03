import express from "express";
import bodyParser from "body-parser";
const recipe = '[{"snack_recipes":[{"name":"Puff-Puff","description":"A popular Nigerian deep-fried dough snack.","ingredients":["2 cups all-purpose flour","2 teaspoons dry yeast","1/4 cup sugar","1/2 teaspoon salt","1 1/4 cups warm water","Vegetable oil for frying"],"instructions":["In a large bowl, mix the flour, sugar, yeast, and salt.","Gradually add the warm water and mix until a smooth, sticky dough forms.","Cover the bowl with a clean cloth and let the dough rise for 1 hour until it doubles in size.","Heat vegetable oil in a deep fryer or pan over medium heat.","Scoop small portions of the dough into the hot oil and fry until golden brown on all sides.","Remove from oil and drain on paper towels. Serve warm."]},{"name":"Chicken Pie","description":"A savory pastry filled with seasoned chicken and vegetables.","ingredients":["2 cups all-purpose flour","1/2 cup butter","1/4 cup cold water","1/2 teaspoon salt","1 cup cooked shredded chicken","1/2 cup diced carrots","1/2 cup diced potatoes","1 small onion, chopped","1 teaspoon curry powder","1/2 teaspoon thyme","Salt and pepper to taste","1 egg for glazing"],"instructions":["In a bowl, mix the flour and salt. Add butter and mix until crumbly.","Gradually add cold water and knead into a dough. Refrigerate for 30 minutes.","In a pan, sauté onions until soft, then add chicken, carrots, potatoes, curry powder, thyme, salt, and pepper. Cook until vegetables are tender.","Roll out the dough and cut into circles. Place filling in the center of each circle.","Fold the dough over the filling to form a half-moon and seal the edges with a fork.","Brush with beaten egg and bake at 375°F (190°C) for 25-30 minutes until golden brown."]},{"name":"Egg Roll","description":"A delicious snack of boiled eggs wrapped in dough and deep-fried.","ingredients":["2 cups all-purpose flour","2 tablespoons sugar","1/4 teaspoon salt","1 teaspoon baking powder","1/4 cup butter","1/3 cup milk","6 boiled eggs, peeled","Vegetable oil for frying"],"instructions":["In a bowl, mix the flour, sugar, salt, and baking powder. Add butter and mix until crumbly.","Gradually add milk and knead into a soft dough. Divide the dough into 6 equal parts.","Flatten each dough piece and wrap it around a boiled egg, sealing the edges.","Heat vegetable oil in a deep fryer or pan over medium heat.","Fry the wrapped eggs until golden brown on all sides.","Remove from oil and drain on paper towels. Serve warm."]}]}]';
const parsedRecipe = JSON.parse(recipe); //parse once
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs"); // setting ejs as templating engine
let data;

app.get("/", (req, res) => {
  res.render("index.ejs", { african_recipe: data });
});

app.post("/recipe", (req, res) => {
  switch (req.body.choice) {
    case "puff":
      data = parsedRecipe[0].snack_recipes[0];
      break;
    case "chickenpie":
      data =parsedRecipe[0].snack_recipes[1];
      break;
    case "eggroll":
      data = parsedRecipe[0].snack_recipes[2];
      break;
    default:
      data = null;
      break;
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
