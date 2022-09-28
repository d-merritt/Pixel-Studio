

const container = document.querySelector(".grid-container");
const colorpicker = document.getElementById("colorpicker");
const gridnumber = document.getElementById("gridnum");
let size = gridnumber.value;
const reset = document.getElementById("btn");
const save = document.getElementById("picbtn");

//Main Grid

let color = false;

function gridboxes(size) {
  container.style.setProperty("--size", size);
  for (let i = 0; i < size * size; i++) {
    const newGrid = document.createElement("div");
    newGrid.classList.add("grid-items");

    newGrid.addEventListener("mouseover", function () {
      if (!color) return;
      newGrid.style.backgroundColor = colorpicker.value;
    });

    newGrid.addEventListener("mousedown", function () {
      newGrid.style.backgroundColor = colorpicker.value;
    });

    newGrid.addEventListener("click", function () {
      newGrid.style.backgroundColor = colorpicker.value;
    });

    window.addEventListener("mousedown", function () {
      color = true;
    });

    window.addEventListener("mouseup", function () {
      color = false;
    });

    container.appendChild(newGrid);
  }
}

//Reset "Clear" Button

function reset2() {
  container.innerHTML = " ";
  gridboxes(size);
}

reset.addEventListener("click", reset2);

gridnumber.addEventListener("change", function () {
  size = gridnumber.value;
  reset2();
});

gridboxes(size);

//Save Button

picbtn.addEventListener("click", function () {
domtoimage.toBlob(document.querySelector(".grid-container"))
    .then(function (blob) {
        window.saveAs(blob, 'my-drawing.png');
    });
  })
