// 1. Fetch , Load and Show Categories on html

// Create Load Categories
const loadCategories = () => {
  //   fetch data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((err) => console.log(err))
};

// Create Display Categories
const displayCategories = (data) => {
  console.log(data)
};

loadCategories();
