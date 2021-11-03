var whiteRook = '<i class="fas fa-chess-rook white"><span class="hidden>x</span></i>'

var blackRook = '<i class="fas fa-chess-rook black"><span class="hidden>x</span></i>'

var whiteKnight ='<i class="fas fa-chess-knight white"><span class="hidden>x</span></i>'

var blackKnight ='<i class="fas fa-chess-knight black"><span class="hidden>x</span></i>'

var whiteBishop = '<i class="fas fa-chess-bishop white"><span class="hidden>x</span></i>'

var blackBishop = '<i class="fas fa-chess-bishop black"><span class="hidden>x</span></i>'

var whiteKing ='<i class="fas fa-chess-king white"><span class="hidden>x</span></i>'

var blackKing ='<i class="fas fa-chess-king black"><span class="hidden>x</span></i>'

var whiteQueen = '<i class="fas fa-chess-queen white"><span class="hidden>x</span></i>'
var blackQueen = '<i class="fas fa-chess-queen black"><span class="hidden>x</span></i>'

var whitePawn = '<i class="fas fa-chess-pawn white"><span class="hidden>x</span></i>'

var blackPawn = '<i class="fas fa-chess-pawn black"><span class="hidden>x</span></i>'



function setBoard(){
//Clearing Entire Board
$("li").html("");

//White Pieces
$(".a1").html(whiteRook);
$(".b1").html(whiteKnight);
$(".c1").html(whiteBishop);
$(".d1").html(whiteKing);
$(".e1").html(whiteQueen);
$(".f1").html(whiteBishop);
$(".g1").html(whiteKnight);
$(".h1").html(whiteRook);

$(".a2").html(whitePawn);
$(".b2").html(whitePawn);
$(".c2").html(whitePawn);
$(".d2").html(whitePawn);
$(".e2").html(whitePawn);
$(".f2").html(whitePawn);
$(".g2").html(whitePawn);
$(".h2").html(whitePawn);

//Black Pieces
$(".a8").html(blackRook);
$(".b8").html(blackKnight);
$(".c8").html(blackBishop);
$(".d8").html(blackKing);
$(".e8").html(blackQueen);
$(".f8").html(blackBishop);
$(".g8").html(blackKnight);
$(".h8").html(blackRook);

$(".a7").html(blackPawn);
$(".b7").html(blackPawn);
$(".c7").html(blackPawn);
$(".d7").html(blackPawn);
$(".e7").html(blackPawn);
$(".f7").html(blackPawn);
$(".g7").html(blackPawn);
$(".h7").html(blackPawn);

$('li').removeClass('selected');
addEvent();
}

setBoard();
addEvent();
$('.resetBtn').on("click",setBoard);
function addEvent(){
$("li i").on("click", function(){
var currentSpace = this.parentElement.classList;
var currentPiece = this.parentElement.innerHTML;
console.log(currentPiece);
console.log(currentSpace);
$('li').removeClass('selected');
this.parentElement.classList.add("selected");
});
};

function movePiece(startingCoordinate, endingCoordinate){
var selectedPiece = String("."+startingCoordinate);
var newSpace = String("."+ endingCoordinate);
var movingPiece = document.querySelector(selectedPiece).innerHTML;
// document.querySelector(selectedPiece).classList.add("selected");
// document.querySelector(newSpace).classList.add("selected");
console.log(movingPiece);
document.querySelector(newSpace).innerHTML = movingPiece;
document.querySelector(selectedPiece).innerHTML = "";
return console.log('moved piece')
}



// $("li").on("click", function(){

// var currentPiece = this.innerHTML;
// var currentPosition = this;
// console.log(currentPiece);

// $("li").on("click", function(){

// var newPosition = this;

// newPosition.innerHTML = currentPiece;
// currentPosition.innerHTML = '';
// return;
// })



// });






