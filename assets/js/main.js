$(document).ready(function() {

  function searchPokemon() {
    var pokeapi = "https://pokeapi.co/api/v2/pokemon/";
    var pokemon = $("#name").val();
    var url1 = pokeapi + pokemon + "/";

    var pokeapi2 = "https://pokeapi.co/api/v2/pokemon-species/";
    var url2 = pokeapi2 + pokemon + "/";

    var prevPok;
    var prevPokUrl;

    $.ajax({url: url1, success: function(x) {

      $(".one").html("id: " + x.id);
      $(".two").html("name: " + x.name);

      $(".imgOne").attr("src", x.sprites.front_default);

      if(x.moves.length == 1) { //checks if pokemon only has 1 move
        $(".m0").html("move 1: " + x.moves[0].move.name);
        $(".m1").html("move 2: none");
        $(".m2").html("move 3: none");
        $(".m3").html("move 4: none");
        $(".changeMove").html("");

      } else {
        $(".m0").html("move 1: " + x.moves[0].move.name);
        $(".m1").html("move 2: " + x.moves[1].move.name);
        $(".m2").html("move 3: " + x.moves[2].move.name);
        $(".m3").html("move 4: " + x.moves[3].move.name);
        $(".changeMove").html("<button id='changeMove'>change stats</button>");
        $("#changeMove").click(function() {
          $(".m0").html("move 1: " + x.moves[parseInt(Math.random() * x.moves.length)].move.name);
          $(".m1").html("move 2: " + x.moves[parseInt(Math.random() * x.moves.length)].move.name);
          $(".m2").html("move 3: " + x.moves[parseInt(Math.random() * x.moves.length)].move.name);
          $(".m3").html("move 4: " + x.moves[parseInt(Math.random() * x.moves.length)].move.name);
        }); //end function
      }

      $.ajax({url: url2, success: function(y) {
        if(y.evolves_from_species != null) { //checks if pokemon evolves from another pokemon

          $(".prevPok").html("name: " + y.evolves_from_species.name);
          prevPok = x.id - 1;
          prevPokUrl = pokeapi + prevPok + "/";

          $.ajax({url: prevPokUrl, success: function(z) {
            $(".prevPokImg").attr("src", z.sprites.front_default);

          }}) //end 3rd ajax

        } else { //removes previous search results if it doesn't evolve from another pokemon
          $(".prevPokImg").attr("src", "");
          $(".prevPok").html("none");
        }


      }}); //end 2nd ajax


    }}); //end 1st ajax



  } //end searchPokemon

  $(".search").click(searchPokemon);
  $("#name").on('keypress',function(e) {
    if(e.which == 13) {
      e.preventDefault();
      $(".search").trigger("click");
    }
  });
});
