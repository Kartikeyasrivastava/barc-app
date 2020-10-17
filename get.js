const colorArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


// Random HEX color generator
const rdmColor = () => {
  let color = "#";
  while (color.length < 7) {
    color += colorArray[Math.round(Math.random() * 15)];
  }
  return color;
};

const createModalbutton = $("#grid-submit");
const listShow = $(".list-show-modal-button");

const warningText = $(".grid-generator p");
const sizePicker = document.querySelector("#sizePicker");
const physical_properties=document.querySelector("#physical_properties");
let color = rdmColor();
$(".fill-btn").css("background-color", color);

// Canvas grid generating function
function makeGrid() {
  console.log("Making grid");

  // getting sizes
  let width = $("#input_width").val();
  let height = $("#input_height").val();
  let xdiv = $("#width_length").val();
  let ydiv = $("#height_length").val();


  //take scale of 10
  let new_width = (width * xdiv);
  var nw = new_width.toString();
  let new_height = (height * ydiv);
  var nh = new_height.toString();
  
  $("#pixel_canvas").remove();
  $(".control-panel").after('<table id="pixel_canvas"></table>');

  var elem = document.querySelector('#pixel_canvas');
  elem.style.width = nw + "cm";
  elem.style.height = nh + "cm";
  

  // grid generator
  for (let row = 1; row <= height; row += 1) {
    $("#pixel_canvas").append(`<tr id='${row}'></tr>`);
    for (let columns = 1; columns <= width; columns += 1) {
      $(`#${row}`).append("<td></td>");
    }
  }
  coords.innerHTML = "Mesh generation completed <p>The Result is :" + width * height ;
  
//document.getElementById("coords").hidden=display;
}
//physical properties


/*function myFunctiom()
{
  let properties= $("#physical_submit").val();
}*/
/*function makephysical() {
  console.log("start");
  let properties = $("#phases").val();

  $("#pixel_canvas").remove();
  $(".control-panel").after('<table id="pixel_canvas" width="500cm" height="500cm"></table>');

  for (let row = 1; row <= 6; row += 1) {
    $("#pixel_canvas").append(`<tr id='${row}'></tr>`);
    for (let columns = 1; columns <= properties; columns += 1) {
      $(`#${row}`).append("<td></td>");
    }
  }

}*/
//end physical properties

for (var i = 0; i < 200; i++)
  for (var j = 0; j < 200; j++)
  {
   // fill our array here
  }
// grid submit button event

sizePicker.addEventListener("submit", function(e) {
  e.preventDefault();
  makeGrid();
});
//end

//physcical properties call funtion
/*physical_properties.addEventListener("submit", function(e) {
 e.preventDefault();
 makephysical();
});*/
//ends

// grid multiplication
/*function multiplyBy()
{
        num1 = document.getElementById("input_width").value;
        num2 = document.getElementById("input_height").value;
        document.getElementById("result").innerHTML = num1 * num2;
}*/
//grid multiplication ends


//length converter
function LengthConverter(valNum) {
  document.getElementById("outputMeters").innerHTML=valNum/3.2808;
}
function LengthConverter1(valNum) {
  document.getElementById("outputMeters").innerHTML=valNum/3.2808;
}
//document.onclick = function(e) { // shows click coordinates
  //coords.innerHTML = e.clientX + ':' + e.clientY;};
// end

//countour plots
var data = [{
  z: [[997, 0.0014, 4072, 0.61519, 0],
       [5750, 0, 710, 3.7, 10000],
      ],
  x: [-9, -6, -5 , -3, -1],
  y: [0, 1, 4, 5, 7],
  type: 'contour'
}];

var layout = {
  title: 'Setting the X and Y Coordinates in a Contour Plot'
};
Plotly.newPlot('myDiv',data, layout);



