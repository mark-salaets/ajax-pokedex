

$(document).ready(function() {

  function searchPokemon() {
    var pokeapi = "https://pokeapi.co/api/v2/pokemon/";
    var pokemon = $("#name").val();
    var url1 = pokeapi + pokemon + "/";

    var pokeapi2 = "https://pokeapi.co/api/v2/pokemon-species/";
    var url2 = pokeapi2 + pokemon + "/";



    $.ajax({url: url1, success: function(x) {
      console.log(x.id);
      $(".one").html("id: " + x.id);
      $(".two").html("name: " + x.name);
      $(".imgOne").attr("src", x.sprites.front_default);
      $(".m1").html("move 1: " + x.moves[0].move.name);
      $(".m2").html("move 2: " + x.moves[1].move.name);
      $(".m3").html("move 3: " + x.moves[2].move.name);
      $(".m4").html("move 4: " + x.moves[3].move.name);

      $.ajax({url: url2, success: function(y) {
        if(y.evolves_from_species != null) {

          console.log(y.evolves_from_species.name);

        }


      }}); //end 2nd ajax


    }}); //end 1st ajax



  } //end searchPokemon



  $(".search").click(searchPokemon);
 });
