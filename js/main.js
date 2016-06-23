var numColor = 9;

function newGame() {
  var arrColor = [];
  for (var ii=0; ii < numColor; ii++) {
    arrColor[ii] = [Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256)]; //3 numbers between 0 and 255 for Red, Green and Blue
  }
  var randomPosition = Math.floor(Math.random()*numColor); //selecting one of the colors as main color randomly!!!
  var mainColor = arrColor[randomPosition];
  var mainColorStr = "box" + String(randomPosition+1);

  document.querySelector('#mainColor').innerHTML = "rgb(" + String(arrColor[randomPosition][0]) + "," + String(arrColor[randomPosition][1]) + "," + String(arrColor[randomPosition][2]) + ")";

  for (var ii=0; ii < numColor; ii++) {
    var strColor = "rgb(" + String(arrColor[ii][0]) + "," + String(arrColor[ii][1]) + "," + String(arrColor[ii][2]) + ")";
    document.querySelectorAll('.color-box')[ii].style.background = strColor;
  }

  $('.color-box').on('click', function() {
      if (this.getAttribute("id") === mainColorStr) {
        mainColorStr = "";
        console.log(this.style.background);
        $('.top-header').css("background",this.style.background);
        $('.color-box').css("visibility",'visible');
        $('.color-box').css("background",this.style.background);
        $('#resultMsg').html("Correct!");
        $('#resultMsg').css("color", "green");
      } else {
        this.style.visibility = 'hidden';
        $('#resultMsg').html("Wrong! Try Another One");
        $('#resultMsg').css("color", "red");
      }
    });
}

newGame();

$('#playAgain').on("click", function(){
  $('#resultMsg').html("");
  $('header').css("background","#2c3e50");
  $('.color-box').css("visibility",'visible');
  newGame();
});
