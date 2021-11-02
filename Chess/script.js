var whiteRook = '<i class="fas fa-chess-rook white"></i>'

var blackRook = '<i class="fas fa-chess-rook black"></i>'

var whiteKnight ='<i class="fas fa-chess-knight white"></i>'

var blackKnight ='<i class="fas fa-chess-knight black"></i>'

var whiteBishop = '<i class="fas fa-chess-bishop white"></i>'

var blackBishop = '<i class="fas fa-chess-bishop black"></i>'

var whiteKing ='<i class="fas fa-chess-king white"></i>'

var blackKing ='<i class="fas fa-chess-king black"></i>'

var whiteQueen = '<i class="fas fa-chess-queen white"></i>'
var blackQueen = '<i class="fas fa-chess-queen black"></i>'

var whitePawn = '<i class="fas fa-chess-pawn white"></i>'

var blackPawn = '<i class="fas fa-chess-pawn black"></i>'



function setBoard(){
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
}

