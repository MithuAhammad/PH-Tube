function getTimeString(time) {
  // get hour and rest second
  const hour = parseInt(time / 3600);
  let remainingSecond = time % 3600;
  const minute = parseInt(remainingSecond / 60);
  remainingSecond = remainingSecond % 60;
  return `${hour} hour ${minute} minute ${remainingSecond} second ago`;
}

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
    card.classList = "card card-compact";
    card.innerHTML = `
     <figure class="h-[200px] relative">
    <img
      src=${video.thumbnail}
      class= "h-full w-full object-cover"
      alt="Shoes" />
      ${
        video.others.posted_date?.length == 0
          ? ""
          : `<span class="absolute right-2 bottom-2 bg-black rounded-full object-cover text-white">${ getTimeString(video.others.posted_date)}</span>`
      }
      
  </figure>
   <div class="px-0 py-2 flex gap-2">
        <div>
         <img class="w-10 h-10 rounded-full object-cover" src="${
           video.authors[0].profile_picture
         }" alt="" />  
         </div>
         <div>
         <h2 class="font-bold">${video.title}</h2>
         <div class="flex items-center gap-2">
          <p class="text-gray-400">${video.authors[0].profile_name}</p>
          ${
            video.authors[0].verified
              ? `<img class="w-5" src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png" alt="" />`
              : ""
          }
         </div>
        </div>
   </div>
    <p></p>
</div>
     
    `;
    videoContainer.append(card);
  });
};

loadCategories();
loadVideos();
