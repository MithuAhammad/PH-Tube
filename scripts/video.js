// 1. Fetch , Load and Show Categories on html

// Create Load Categories
const loadCategories = () => {
  //   fetch data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((err) => console.log(err));
};

// Create video api patch
const loadVideos = () => {
  //   fetch data
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
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
    // console.log(item);
    // Create a button
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;
    // add button to category
    categoryContainer.append(button);
  });
};
const displayVideos = (videos) => {
  const videoContainer = document.getElementById("videos");
  videos.forEach((video) => {
    const card = document.createElement("div");
    card.classList = "card card-compact ";
    card.innerHTML = `
     <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>${video.}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
    `;
    videoContainer.append(card);
  });
};

loadCategories();
loadVideos();
