const list = document.querySelector(".container-list");
const addBtn = document.querySelector(".container-add__btn");
const item = [""];
const listItems = [];
let dragStartIndex;

function createList() {
  [...item].forEach((item, index) => {
    const listItem = document.createElement("li");

    listItem.classList.add("container-list__item");
    listItem.setAttribute("data-index", listItems.length);
    listItem.innerHTML = `
        <div class="draggable" >
        <span class="number" draggable="false">${listItems.length + 1}</span>
        <div class="container-list__item-drag">
            <img src="drag.png" alt="" draggable="true" >
        </div>
        <input type="text" class="container-list__item-inp">
        <div class="container-list__item-delete" onclick="delRow(this)">
            <img src="delete.png" alt="" draggable="false" >
        </div>
        </div>
      `;
    listItems.push(listItem);
    list.appendChild(listItem);
  });
  addEventListeners();
}


// ////////////////////////////////////// drag and drop /////////////////////////////////

function dragStart() {
  dragStartIndex = +this.closest("li").getAttribute("data-index");
  this.classList.add("drag");
}
function dragEnter() { }
function dragLeave() {
  this.classList.remove("dragging");

}
function dragOver(e) {
  e.preventDefault();
  if (!this.classList.contains("drag")) {
    this.classList.add("dragging");
  }
}

function dragDrop() {
  const dragListItems = document.querySelectorAll(".container-list li");
  dragEndIndex = +this.getAttribute("data-index");
  swapItems(dragStartIndex, dragEndIndex);

  dragListItems.forEach((item, index) => {
    item.classList.remove("dragging");
    item.classList.remove("drag");
  });
}

function swapItems(fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector(".draggable");
  const itemTwo = listItems[toIndex].querySelector(".draggable");
  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}

function addEventListeners() {
  const draggables = document.querySelectorAll(".container-list__item");
  const dragListItems = document.querySelectorAll(".container-list li");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", dragStart);
  });

  dragListItems.forEach((item) => {
    item.addEventListener("dragover", dragOver);
    item.addEventListener("drop", dragDrop);
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragleave", dragLeave);
  });
}

// ///////////////////////////////// add new row /////////////////////////////////////

addBtn.addEventListener("click", function (e) {
  e.preventDefault;
  createList();
});

// ///////////////////////////////////// delete row ///////////////////////////////////

const delRow = function (item) {
  const listItem = item.parentNode.parentNode;
  const idx = listItems.indexOf(listItem)
  listItems.splice(idx, 1);
  listItem.remove(listItem);
  const dragListItems = document.querySelectorAll(".container-list__item");
  const num = document.querySelectorAll(".number");
  num.forEach((item, index) => {
    item.innerHTML = index + 1;
  });

  dragListItems.forEach((item, index) => {
    item.setAttribute("data-index", index);
  });
};


////////////////////////////////////////////////////////////////////////////////////

// const list = $(".container-list");
// const addBtn = document.querySelector(".container-add__btn");
// const item = $(["", "", ""]);
// const listItems = $([]);
// let dragStartIndex;


// function createList() {
//   $.each(item, function (item, index) {
//     const listItem = document.createElement("li");

//     // list.addClass("container-list__item");
//     //     listItem.setAttribute("data-index", listItems.length);
//     //     listItem.innerHTML = `
//     //         <div class="draggable" >
//     //         <span class="number" draggable="false">${listItems.length + 1}</span>
//     //         <div class="container-list__item-drag">
//     //             <img src="drag.png" alt="" draggable="true" >
//     //         </div>
//     //         <input type="text" class="container-list__item-inp">
//     //         <div class="container-list__item-delete" onclick="delRow(this)">
//     //             <img src="delete.png" alt="" draggable="false" >
//     //         </div>
//     //         </div>
//     //       `;
//     //     listItems.push(listItem);
//     //     list.appendChild(listItem);
//     $(list).append($(listItem));

//     console.log(listItem)
//   });
//   //   // addEventListeners();
// }
// createList();

// // ////////////////////////////////////// drag and drop /////////////////////////////////

// function dragStart() {
//   dragStartIndex = +this.closest("li").getAttribute("data-index");
//   this.classList.add("drag");
// }
// function dragEnter() { }
// function dragLeave() {
//   this.classList.remove("dragging");
// }
// function dragOver(e) {
//   e.preventDefault();
//   if (!this.classList.contains("drag")) {
//     this.classList.add("dragging");
//   }
// }

// function dragDrop() {
//   const dragListItems = document.querySelectorAll(".container-list li");
//   dragEndIndex = +this.getAttribute("data-index");
//   swapItems(dragStartIndex, dragEndIndex);

//   dragListItems.forEach((item, index) => {
//     item.classList.remove("dragging");
//     item.classList.remove("drag");
//   });
// }

// function swapItems(fromIndex, toIndex) {
//   const itemOne = listItems[fromIndex].querySelector(".draggable");
//   const itemTwo = listItems[toIndex].querySelector(".draggable");
//   listItems[fromIndex].appendChild(itemTwo);
//   listItems[toIndex].appendChild(itemOne);
// }

// function addEventListeners() {
//   const draggables = document.querySelectorAll(".container-list__item");
//   const dragListItems = document.querySelectorAll(".container-list li");

//   draggables.forEach((draggable) => {
//     draggable.addEventListener("dragstart", dragStart);
//   });

//   dragListItems.forEach((item) => {
//     item.addEventListener("dragover", dragOver);
//     item.addEventListener("drop", dragDrop);
//     item.addEventListener("dragenter", dragEnter);
//     item.addEventListener("dragleave", dragLeave);
//   });
// }

// // ///////////////////////////////// add new row /////////////////////////////////////

// addBtn.addEventListener("click", function (e) {
//   e.preventDefault;
//   createList();
// });

// // ///////////////////////////////////// delete row ///////////////////////////////////

// const delRow = function (item) {
//   const listItem = item.parentNode.parentNode;
//   const idx = listItems.indexOf(listItem)
//   listItems.splice(idx, 1);
//   listItem.remove(listItem);
//   const dragListItems = document.querySelectorAll(".container-list__item");
//   const num = document.querySelectorAll(".number");
//   num.forEach((item, index) => {
//     item.innerHTML = index + 1;
//   });

//   dragListItems.forEach((item, index) => {
//     item.setAttribute("data-index", index);
//   });
// };
