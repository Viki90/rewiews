// local reviews data
const reviews = [
  {
    id: 1,
    name: "jane doe",
    job: "web developer",
    img:
      "https://placekitten.com/640/360",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  },
  {
    id: 2,
    name: "joe doe",
    job: "web designer",
    img:
      "https://placebear.com/640/360",
    text:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 3,
    name: "peter doe",
    job: "intern",
    img:
      "https://picsum.photos/640/360",
    text:
      "orem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions.",
  },
  {
    id: 4,
    name: "jane anderson",
    job: "the boss",
    img:
      "https://loremflickr.com/640/360",
    text:
      "re are many variations of passages of Lorem Ipsum available, but the majority ha. ",
  },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function() {
  showPerson(currentItem);
});

// show person based on item
function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person
nextBtn.addEventListener('click', function(){
  currentItem++;
  if(currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

//show previous person
prevBtn.addEventListener('click', function(){
  currentItem--;
  if(currentItem < 0) {
    currentItem = reviews.length -1;
  }
  showPerson();
});

// show random person
randomBtn.addEventListener('click', function() {
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showPerson();
})