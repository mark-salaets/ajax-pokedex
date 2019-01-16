var name;

$(document).ready(function() {
  $('.search').click(function() {
    var xhr = new XMLHttpRequest();
    name = $('#name').val();
    console.log(name);

    xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/', true);

    xhr.onload = function() {
      if(this.status == 200) {
        var api = JSON.parse(this.responseText);
        console.log(api);
        $('.one').text('Name: ', api.name);
        $('.two').text('ID: '+ api.id);
      }
    }
  });
});



/*
$(document).on("keydown", function(event) {
  if (event.keyCode == 13)

  var xhr = new XMLHttpRequest();
  //new XHR request
  xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/', true);
  xhr.onload = function() {
    if(this.status == 200) {
      var api = JSON.parse(this.responseText);
      //random array
      var result = parseInt(Math.random() * api.results.length+1);

      console.log(api);

      //data requests
      $('h3').text(api.results[result].name);
      $('.one').attr('href', api.results[result].url);

      console.log(result);
      console.log(api.results[result]);
    }
    //give new XHR address a VAR
    var pokemonId = ('https://pokeapi.co/api/v2/pokemon/'+[result]+'/');
      console.log(pokemonId);
    //new XHR request
    xhr.open('GET', pokemonId, true);
    xhr.onload = function() {
      if(this.status == 200) {
        var api = JSON.parse(this.responseText);
        console.log(api);

        //data requests
        $('.imgOne').attr('src', api.sprites.front_default);
        $('.imgTwo').attr('src', api.sprites.back_default);
        $('.imgThree').attr('src', api.sprites.front_shiny);
        $('.imgFour').attr('src', api.sprites.back_shiny);
        $('.two').text('ID: '+ api.id);
        $('.three').text('Weight: '+ api.weight);
        $('.four').text('Height: '+ api.height);
        $('.five').text('Type 1: '+ api.types[0].type.name);
        $('.six').text('Type 2: '+ api.types[1].type.name);
      }
    }
    xhr.send();
  }
  xhr.send();
});
*/
