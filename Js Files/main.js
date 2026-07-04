var rowDate = document.getElementById("rowDate");
var listingrediants = document.getElementById("listingrediants");
var listInstructons = document.getElementById("listInstructons");
var chefTipsList = document.getElementById("chefTipsList");
var fCalory = document.getElementById("fCalory");
var fProtien = document.getElementById("fProtien");
var fCarbo = document.getElementById("fCarbo");
var fFat = document.getElementById("fFat");
var fFiber = document.getElementById("fFiber");
var fSodium = document.getElementById("fSodium");
var alertMsg = document.getElementById("alertMsg");

var meals = [
  {
    fImg: "./Images/burgers.jpg",
    fRate: 4.6,
    fRevTotal: 421,
    fDurPrepareTime: 15,
    fCookTime: 20,
    fItemServing: 4,
    fIngrediants: [
      "500g ground beef (80/20)",
      "4 burger buns",
      "4 slices cheddar cheese",
      "Lettuce leaves & Tomato slices",
      "Red onion, sliced & Pickles",
      "Burger sauce or condiments",
    ],
    fLevel: "Easy",
    fCountry: "American",
    fTitle: "Classic Beef Burger",
    fDiscription: "Juicy homemade burger with all the fixings",
    finstruction: [
      "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
      "Season patties generously with salt and pepper on both sides.",
      "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
      "Add cheese slices in the last minute of cooking and cover to melt.",
      "Toast burger buns lightly on the grill or in a pan.",
    ],
    fNutrition: {
      fCalories: 650,
      fProtein: 38,
      fCarbo: 42,
      fFat: 35,
      fFiber: 2,
      fSodium: 920,
    },
    fChefTips: [
      "Don't press down on burgers while cooking - keeps them juicy",
      "Make indent in center to prevent burger from puffing up",
      "Let patties rest for 2-3 minutes before serving",
      "Toast buns for better texture and flavor",
    ],
  },
  {
    fImg: "./Images/pizza food.jpg",
    fRate: 4.9,
    fRevTotal: 612,
    fDurPrepareTime: 20,
    fCookTime: 15,
    fItemServing: 3,
    fIngrediants: [
      "Pizza dough (ready or homemade)",
      "1/2 cup tomato pizza sauce",
      "2 cups shredded mozzarella",
      "Fresh basil leaves",
      "1 tbsp olive oil",
    ],
    fLevel: "Medium",
    fCountry: "Italian",
    fTitle: "Margherita Pizza",
    fDiscription: "Classic Italian pizza with fresh basil and mozzarella",
    finstruction: [
      "Preheat oven to 250°C and stretch dough on a floured surface.",
      "Spread tomato sauce evenly leaving 1cm border.",
      "Add mozzarella cheese evenly over the sauce.",
      "Bake for 12-15 minutes until crust is golden and cheese is bubbly.",
      "Top with fresh basil and drizzle olive oil before serving.",
    ],
    fNutrition: {
      fCalories: 480,
      fProtein: 22,
      fCarbo: 58,
      fFat: 18,
      fFiber: 3,
      fSodium: 860,
    },
    fChefTips: [
      "Use a pizza stone for a crispier crust",
      "Add fresh basil after baking, not before",
      "Less sauce is more - don't overload the pizza",
      "Let dough come to room temperature before stretching",
    ],
  },
  {
    fImg: "./Images/meat food.jpg",
    fRate: 4.8,
    fRevTotal: 521,
    fDurPrepareTime: 30,
    fCookTime: 50,
    fItemServing: 6,
    fIngrediants: [
      "9 lasagna sheets",
      "500g ground beef",
      "400g crushed tomatoes",
      "2 cups béchamel sauce",
      "150g mozzarella",
      "50g parmesan",
      "1 onion & 3 garlic cloves",
      "Olive oil, basil & oregano",
    ],
    fLevel: "Hard",
    fCountry: "Italian",
    fTitle: "Classic Lasagna",
    fDiscription: "Layered pasta with rich meat sauce and béchamel",
    finstruction: [
      "Cook ground beef with onion and garlic until browned.",
      "Add crushed tomatoes and herbs, simmer for 20 minutes.",
      "Prepare béchamel: melt butter, add flour, whisk in milk until thick.",
      "Layer: meat sauce, lasagna sheet, béchamel, cheese. Repeat.",
      "Top with cheese and bake at 180°C for 35-40 minutes.",
    ],
    fNutrition: {
      fCalories: 620,
      fProtein: 34,
      fCarbo: 55,
      fFat: 28,
      fFiber: 4,
      fSodium: 940,
    },
    fChefTips: [
      "Let lasagna rest 15 minutes before cutting for clean slices",
      "Cover with foil for first 25 minutes to prevent drying out",
      "Make béchamel slightly thinner - it thickens while baking",
    ],
  },
  {
    fImg: "./Images/potato food.jpg",
    fRate: 4.7,
    fRevTotal: 278,
    fDurPrepareTime: 20,
    fCookTime: 30,
    fItemServing: 4,
    fIngrediants: [
      "8 chicken wings",
      "3 tbsp hot sauce",
      "2 tbsp melted butter",
      "1 tsp garlic powder",
      "Salt, pepper & paprika",
      "Blue cheese dip for serving",
      "Celery sticks",
    ],
    fLevel: "Medium",
    fCountry: "American",
    fTitle: "Buffalo Chicken Wings",
    fDiscription: "Crispy spicy wings with tangy buffalo sauce",
    finstruction: [
      "Pat wings dry and season with salt, pepper, paprika, and garlic powder.",
      "Bake at 220°C for 25-30 minutes, flipping halfway through.",
      "Mix hot sauce with melted butter.",
      "Toss baked wings in buffalo sauce until fully coated.",
      "Serve with blue cheese dip and celery sticks.",
    ],
    fNutrition: {
      fCalories: 420,
      fProtein: 32,
      fCarbo: 8,
      fFat: 28,
      fFiber: 0,
      fSodium: 1040,
    },
    fChefTips: [
      "Pat wings completely dry for maximum crispiness",
      "Toss in sauce right before serving to keep them crispy",
      "Double bake for restaurant-style crunch",
    ],
  },
  {
    fImg: "./Images/Tiramisu food.jpg",
    fRate: 4.9,
    fRevTotal: 678,
    fDurPrepareTime: 30,
    fCookTime: 0,
    fItemServing: 6,
    fIngrediants: [
      "500g mascarpone cheese",
      "4 egg yolks",
      "5 tbsp sugar",
      "300ml strong espresso, cooled",
      "200g savoiardi ladyfinger biscuits",
      "Cocoa powder for dusting",
    ],
    fLevel: "Medium",
    fCountry: "Italian",
    fTitle: "Tiramisu",
    fDiscription: "Iconic Italian dessert with coffee and mascarpone",
    finstruction: [
      "Whisk egg yolks with sugar until pale and creamy.",
      "Fold in mascarpone cheese until smooth.",
      "Quickly dip ladyfingers in cooled espresso and layer in dish.",
      "Spread mascarpone cream over ladyfingers. Repeat layers.",
      "Dust with cocoa powder and refrigerate for at least 4 hours.",
    ],
    fNutrition: {
      fCalories: 390,
      fProtein: 8,
      fCarbo: 34,
      fFat: 25,
      fFiber: 1,
      fSodium: 120,
    },
    fChefTips: [
      "Don't soak ladyfingers too long - a quick dip is enough",
      "Refrigerate overnight for best flavor",
      "Use strong espresso, not instant coffee",
    ],
  },
  {
    fImg: "./Images/Spaghetti food.jpg",
    fRate: 4.7,
    fRevTotal: 445,
    fDurPrepareTime: 15,
    fCookTime: 20,
    fItemServing: 4,
    fIngrediants: [
      "400g spaghetti",
      "200g pancetta or bacon",
      "4 egg yolks",
      "1 whole egg",
      "100g grated Pecorino Romano",
      "Salt & black pepper",
    ],
    fLevel: "Medium",
    fCountry: "Italian",
    fTitle: "Spaghetti Carbonara",
    fDiscription: "Authentic Roman pasta with eggs, cheese and pancetta",
    finstruction: [
      "Cook spaghetti in salted boiling water until al dente. Reserve 1 cup pasta water.",
      "Fry pancetta over medium heat until crispy.",
      "Whisk egg yolks, whole egg, and Pecorino with black pepper.",
      "Toss drained pasta with pancetta off the heat.",
      "Add egg mixture and pasta water, toss quickly to create creamy sauce.",
    ],
    fNutrition: {
      fCalories: 580,
      fProtein: 28,
      fCarbo: 62,
      fFat: 24,
      fFiber: 3,
      fSodium: 780,
    },
    fChefTips: [
      "Never add cream - real carbonara uses only eggs and cheese",
      "Remove pan from heat before adding egg mixture to avoid scrambling",
      "Use pasta water to control the sauce consistency",
    ],
  },
  {
    fImg: "./Images/Mac and Cheese food.jpg",
    fRate: 4.6,
    fRevTotal: 389,
    fDurPrepareTime: 20,
    fCookTime: 40,
    fItemServing: 6,
    fIngrediants: [
      "500g macaroni pasta",
      "2 cups shredded cheddar",
      "1 cup shredded mozzarella",
      "2 cups whole milk",
      "3 tbsp butter",
      "3 tbsp flour",
      "Salt, pepper & mustard powder",
    ],
    fLevel: "Medium",
    fCountry: "American",
    fTitle: "Mac and Cheese",
    fDiscription: "Creamy baked macaroni and cheese comfort food",
    finstruction: [
      "Cook macaroni until al dente. Drain and set aside.",
      "Melt butter, add flour and stir for 1 minute to make a roux.",
      "Gradually whisk in milk until smooth and thickened.",
      "Stir in cheeses until melted. Season with salt, pepper, mustard powder.",
      "Mix with pasta, pour into baking dish, top with cheese and bake at 180°C for 20 minutes.",
    ],
    fNutrition: {
      fCalories: 540,
      fProtein: 24,
      fCarbo: 58,
      fFat: 22,
      fFiber: 2,
      fSodium: 870,
    },
    fChefTips: [
      "Use a mix of cheeses for deeper flavor",
      "Add breadcrumbs on top before baking for a crunchy crust",
      "Don't overcook the pasta - it continues cooking in the oven",
      "Add a pinch of cayenne for a subtle kick",
    ],
  },
  {
    fImg: "./Images/BBQ Grilled food.jpg",
    fRate: 4.3,
    fRevTotal: 167,
    fDurPrepareTime: 10,
    fCookTime: 40,
    fItemServing: 4,
    fIngrediants: [
      "4 chicken breasts",
      "1 cup BBQ sauce",
      "1 tbsp olive oil",
      "1 tsp garlic powder",
      "1 tsp smoked paprika",
      "Salt & pepper",
    ],
    fLevel: "Easy",
    fCountry: "American",
    fTitle: "BBQ Grilled Chicken",
    fDiscription: "Smoky grilled chicken glazed with BBQ sauce",
    finstruction: [
      "Mix olive oil, garlic powder, paprika, salt and pepper. Rub on chicken.",
      "Marinate for at least 30 minutes in the fridge.",
      "Preheat grill to medium-high heat.",
      "Grill chicken 6-7 minutes per side, brushing BBQ sauce in last 2 minutes.",
      "Let rest 5 minutes before serving.",
    ],
    fNutrition: {
      fCalories: 370,
      fProtein: 42,
      fCarbo: 18,
      fFat: 12,
      fFiber: 0,
      fSodium: 740,
    },
    fChefTips: [
      "Marinate overnight for maximum flavor",
      "Brush BBQ sauce only at the end to prevent burning",
      "Let chicken rest before cutting to keep juices in",
    ],
  },
  {
    fImg: "./Images/Pasta.jpg",
    fRate: 4.8,
    fRevTotal: 489,
    fDurPrepareTime: 10,
    fCookTime: 25,
    fItemServing: 4,
    fIngrediants: [
      "400g penne or rigatoni",
      "200g pancetta or guanciale",
      "400g crushed tomatoes",
      "1 onion, diced",
      "2 garlic cloves",
      "1/2 tsp chili flakes",
      "Pecorino cheese & olive oil",
    ],
    fLevel: "Easy",
    fCountry: "Italian",
    fTitle: "Pasta all'Amatriciana",
    fDiscription: "Roman pasta with guanciale, tomato and Pecorino",
    finstruction: [
      "Cook pancetta in a pan until crispy. Remove and set aside.",
      "Sauté onion and garlic in pancetta fat. Add chili flakes.",
      "Add crushed tomatoes and simmer for 15 minutes.",
      "Cook pasta al dente, reserve 1/2 cup pasta water before draining.",
      "Toss pasta in sauce with pancetta. Top with Pecorino.",
    ],
    fNutrition: {
      fCalories: 510,
      fProtein: 22,
      fCarbo: 60,
      fFat: 18,
      fFiber: 4,
      fSodium: 890,
    },
    fChefTips: [
      "Use guanciale instead of pancetta for authentic flavor",
      "Don't rinse pasta after cooking - starch helps sauce stick",
      "Add pasta water gradually to control sauce thickness",
    ],
  },
  {
    fImg: "./Images/Chocolate Milkshake food.jpg",
    fRate: 4.8,
    fRevTotal: 503,
    fDurPrepareTime: 10,
    fCookTime: 5,
    fItemServing: 2,
    fIngrediants: [
      "2 cups vanilla ice cream",
      "1/2 cup whole milk",
      "3 tbsp chocolate syrup",
      "Whipped cream",
      "Maraschino cherries",
    ],
    fLevel: "Easy",
    fCountry: "American",
    fTitle: "Chocolate Milkshake",
    fDiscription: "Thick and creamy classic American milkshake",
    finstruction: [
      "Add ice cream, milk, and chocolate syrup into a blender.",
      "Blend on high speed for 30-45 seconds until smooth.",
      "Pour into chilled glasses.",
      "Top with whipped cream and a cherry.",
    ],
    fNutrition: {
      fCalories: 480,
      fProtein: 9,
      fCarbo: 72,
      fFat: 18,
      fFiber: 1,
      fSodium: 200,
    },
    fChefTips: [
      "Use frozen milk cubes instead of regular milk for thicker shake",
      "Chill the glasses in the freezer before pouring",
      "Add a pinch of salt to enhance the chocolate flavor",
    ],
  },
  {
    fImg: "./Images/Fettuccine Alfredo food.jpg",
    fRate: 4.6,
    fRevTotal: 298,
    fDurPrepareTime: 10,
    fCookTime: 20,
    fItemServing: 2,
    fIngrediants: [
      "200g fettuccine pasta",
      "1 cup heavy cream",
      "100g grated Parmesan",
      "3 tbsp unsalted butter",
      "2 cloves garlic, minced",
      "Salt, pepper & fresh parsley",
    ],
    fLevel: "Easy",
    fCountry: "Italian",
    fTitle: "Fettuccine Alfredo",
    fDiscription: "Silky pasta in a rich buttery Parmesan cream sauce",
    finstruction: [
      "Cook fettuccine in salted water until al dente. Reserve 1/2 cup pasta water.",
      "Melt butter in a pan, sauté garlic for 1 minute.",
      "Pour in heavy cream and simmer for 3-4 minutes.",
      "Stir in Parmesan until melted and sauce is smooth.",
      "Toss fettuccine in sauce with a splash of pasta water. Garnish with parsley.",
    ],
    fNutrition: {
      fCalories: 720,
      fProtein: 24,
      fCarbo: 64,
      fFat: 42,
      fFiber: 2,
      fSodium: 680,
    },
    fChefTips: [
      "Use freshly grated Parmesan - pre-grated doesn't melt as well",
      "Don't let the cream boil - just a gentle simmer",
      "Add pasta water to loosen the sauce if it gets too thick",
      "Serve immediately - Alfredo thickens quickly as it cools",
    ],
  },
  {
    fImg: "./Images/Pepperoni Pizza food.jpg",
    fRate: 4.8,
    fRevTotal: 534,
    fDurPrepareTime: 15,
    fCookTime: 15,
    fItemServing: 3,
    fIngrediants: [
      "Pizza dough",
      "1/2 cup tomato sauce",
      "150g pepperoni slices",
      "2 cups shredded mozzarella",
      "1 tsp oregano",
      "1/2 tsp chili flakes",
      "1 tbsp olive oil",
    ],
    fLevel: "Medium",
    fCountry: "American",
    fTitle: "Pepperoni Pizza",
    fDiscription: "Crispy pizza loaded with spicy pepperoni",
    finstruction: [
      "Preheat oven to 250°C with baking tray inside.",
      "Stretch dough into a round shape on a floured surface.",
      "Spread tomato sauce, then mozzarella, then pepperoni.",
      "Sprinkle oregano and chili flakes, drizzle olive oil.",
      "Bake for 12-15 minutes until crust is golden and pepperoni edges are crispy.",
    ],
    fNutrition: {
      fCalories: 560,
      fProtein: 26,
      fCarbo: 52,
      fFat: 28,
      fFiber: 2,
      fSodium: 1100,
    },
    fChefTips: [
      "Preheat the baking tray for a crispier base",
      "Layer cheese under and over pepperoni to hold toppings",
      "Use low-moisture mozzarella to avoid soggy pizza",
    ],
  },
];

function updateImage(meal) {
  document.querySelector(".image-food img").src = meal.fImg;
  document.querySelector(".reviews strong").innerHTML = meal.fRate;
  document.querySelector(".reviews p").innerHTML =
    `(${meal.fRevTotal} reviews)`;
}

function updateTimes(meal) {
  document.getElementById("prepTime").innerHTML = meal.fDurPrepareTime + " min";
  document.getElementById("prepCook").innerHTML = meal.fCookTime + " min";

  let totalTime = meal.fDurPrepareTime + meal.fCookTime;
  if (totalTime > 45) {
    alertMsg.style.display = "flex";
  } else {
    alertMsg.style.display = "none";
  }

  document.getElementById("servPepole").innerHTML =
    meal.fItemServing + " people";
}

function updateHeader(meal) {
  document.getElementById("levelFood").innerHTML = meal.fLevel;
  document.getElementById("countryFood").innerHTML = meal.fCountry;
  document.getElementById("titleFood").innerHTML = meal.fTitle;
  document.getElementById("descFood").innerHTML = meal.fDiscription;
}

function updateIngredients(meal) {
  let ingrediants = "";
  for (let i = 0; i < meal.fIngrediants.length; i++) {
    ingrediants += `
      <li class="d-flex align-items-center gap-2">
        <span>${i + 1}</span>
        <p class="my-0">${meal.fIngrediants[i]}</p>
      </li>
    `;
  }
  listingrediants.innerHTML = ingrediants;
}

function updateInstructions(meal) {
  let instructions = "";

  for (let j = 0; j < meal.finstruction.length; j++) {
    instructions += `
     <li class="d-flex align-items-center gap-2">
        <span class = "rounded-4">${j + 1}</span>
        <p class="my-0">${meal.finstruction[j]}</p>
      </li>
    `;
  }
  listInstructons.innerHTML = instructions;
}

function updateNutrition(meal) {
  fCalory.innerHTML = meal.fNutrition.fCalories + `kcal`;
  fProtien.innerHTML = meal.fNutrition.fProtein + `g`;
  fCarbo.innerHTML = meal.fNutrition.fCarbo + `g`;
  fFat.innerHTML = meal.fNutrition.fFat + `g`;
  fFiber.innerHTML = meal.fNutrition.fFiber + `g`;
  fSodium.innerHTML = meal.fNutrition.fSodium + `mg`;
}

function updateChefTips(meal) {
  let chefTips = "";

  for (let k = 0; k < meal.fChefTips.length; k++) {
    chefTips += `
     <li class="d-flex align-items-center gap-3 my-3 py-4 ps-3 rounded-4">
                    <span><i class="fa-solid fa-circle-check"></i></span>
                    <p class="my-0">
                      ${meal.fChefTips[k]}
                    </p>
                  </li>
    `;
  }

  chefTipsList.innerHTML = chefTips;
}

function viewMeals() {
  let randomIndex = Math.floor(Math.random() * meals.length);
  let selectedMeal = meals[randomIndex];

  // تحديث الصورة
  updateImage(selectedMeal);

  // تحديث العنوان
  updateHeader(selectedMeal);
  // تحديث الأوقات
  updateTimes(selectedMeal);
  // تحديث اللسته المكونات
  updateIngredients(selectedMeal);

  // تحديث لسته التعليمات
  updateInstructions(selectedMeal);
  // تحديث لسته النيترونات
  updateNutrition(selectedMeal);
  // تحديث لسته الشيف
  updateChefTips(selectedMeal);
}
alertMsg.style.display = "none";
viewMeals();
