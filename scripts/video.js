// 1. Fetch , Load and Show Categories on html

// Create Load Categories
const loadCategories = () => {
  //   fetch data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((err) => console.log(err));
};
/*
 {
      "category_id": "1001",
      "category": "Music"
    }
*/
// Create Display Categories
const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");
  categories.forEach((item) => {
    console.log(item);
    // Create a button
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;
    // add button to category
    categoryContainer.append(button);
  });
};

loadCategories();
