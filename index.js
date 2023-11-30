const leftScroll = document.getElementById("left-scroll");
const rightScroll = document.getElementById("right-scroll");
const mainWrapper = document.getElementById("card-wrapper");

let images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1701187887029-907bed510db6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1682685797365-41f45b562c0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1682685797365-41f45b562c0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D",
  },
  ,
];

console.log(images.length);
let currentIndex = 0;
const imageWidth = 500;

mainWrapper.style.width = (images.length + 1) * imageWidth + "px";

images.forEach((item, i) => {
  const indexBtn = document.createElement("button");
  indexBtn.className = "index-btn";

  indexBtn.addEventListener("click", () => {
    mainWrapper.style.left = i * -imageWidth;
  });
  mainWrapper.appendChild(indexBtn);
  const imageDiv = document.createElement("div");
  const imageWrapper = document.createElement("img");
  imageDiv.className = "image";
  imageWrapper.style.width = "100%";
  imageWrapper.style.height = "100%";
  imageWrapper.src = item.url;
  mainWrapper.appendChild(imageDiv);
  imageDiv.appendChild(imageWrapper);
});

rightScroll.addEventListener("click", () => {
  //console.log("Right Clicked");
  if (currentIndex < images.length - 1) {
    currentIndex++;
    mainWrapper.style.left = currentIndex * -imageWidth + "px";
  } else {
    // (currentIndex >= images.length - 1)
    currentIndex == 0;
    mainWrapper.style.left = currentIndex * -imageWidth + "px";
  }
});

leftScroll.addEventListener("click", () => {
  if (currentIndex == 0) {
    currentIndex = images.length - 1;
    mainWrapper.style.left = currentIndex * -imageWidth + "px";
  } else {
    currentIndex--;

    mainWrapper.style.left = currentIndex * -imageWidth + "px";
  }
});
