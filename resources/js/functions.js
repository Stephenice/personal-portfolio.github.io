"use strict";
const loadMore = document.querySelector("#loadMore");

loadMore.addEventListener("click", (e) => {
  const elementList = [...document.querySelectorAll(".portfolio-showcase li")];
  for (const index in elementList) {
    elementList[index].style.display = "block";
    console.log(e);
    //Load more button will be hidden after list fully loaded
    e.target.style.display = "none";
  }
});
