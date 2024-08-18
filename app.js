const rotatePencil = document.querySelector("#pencil");
let rotation = 0;

//For spacebar spinner
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    rotation += 485;
    rotatePencil.style.transform = `rotate(${rotation}deg) scale(1.7)`;

    setTimeout(() => {
      rotatePencil.style.transform = `rotate(${rotation}deg) scale(1)`;
    }, 900);
  }
});

//If mouse click lang this code may enlargement din
rotatePencil.addEventListener("click", () => {
  rotatePencil.style.transform = `rotate(${rotation}deg) scale(1.7)`;
  rotation += 485;

  setTimeout(() => {
    rotatePencil.style.transform = `rotate(${rotation}deg) scale(1)`;
  }, 900);
});

//for dragging the pencil
// var pickPencil;

// const move = function (element) {
//   const elements = document.querySelectorAll(".element");

//   elements.forEach((element) => {
//     element.addEventListener("mousedown", () => {
//       element.style.position = "absolute";
//       pickPencil = element;

//       document.onmousemove = (e) => {
//         var x = e.pageX;
//         var y = e.pageY;

//         pickPencil.style.left = x + "px";
//         pickPencil.style.top = y + "px";
//       };
//     });
//   });
//   document.onmouseup = function (e) {
//     pickPencil = null;
//   };
// };
