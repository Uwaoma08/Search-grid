const buttons = document.querySelectorAll("button");
const overlay = document.querySelector(".over-lay");
const close = document.querySelector(".la-times");
const gridList = document.getElementById("grid-list");

//console.log(gridList)
let fetchedData = [];

function seeMore(e) {
  const moreData = document.querySelectorAll("#moreData");
  moreData.forEach((item) => {
    item.addEventListener("click", showMore);
  });
}

function showMore(e) {
  const more = e.target.dataset.more;

  const clickedItem = fetchedData.find((item) => item.id == more);

  overlay.classList.toggle("hide");
  const title = document.getElementById('title')
  title.innerHTML = clickedItem.title

  const body = document.getElementById('body')
  body.innerHTML = clickedItem.body
  //console.log(clickedItem);

}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    fetchedData = data;
    const render = data
      .map((item) => {
        return `<div class="grid-item">
        <div class="number">${item.id}</div>
        <div><h3>${item.title}</h3></div>
        <div class="test" id="moreData" data-more='${item.id}' data-title='${item.title}'>
            <i class="las la-angle-double-right"></i>
            <p>See more...</p>
        </div>
    </div>`;
      })
      .join("");
    gridList.innerHTML = render;
    //console.log(render)
    seeMore();
  });

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    overlay.classList.toggle("hide");
  });
});

close.addEventListener("click", () => {
  overlay.classList.toggle("hide");
});

const clickArea = document.querySelector('.test')

console.log(clickArea)