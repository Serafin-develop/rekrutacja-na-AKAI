const pokemonsContainer = document.querySelector(".pokemons");

function template(pokemonData){
  const template = document.createElement("div");
  for(var i = 0; i<pokemonData.types.length; i++){
    template.classList.add(pokemonData.types[i]);
  }
  template.classList.add("pokemon-card")

  const div = document.createElement("div");
  div.append(pokemonData.name);

  const image = document.createElement("img"); 
  image.src = pokemonData.image; 


  template.setAttribute("id", pokemonData.name)
  template.appendChild(div);
  template.appendChild(image); 
  
  return template; 
}
 

function renderPokemons(pokemons) {
  
  for(var i = 0 ; i <pokemons.length; i++){
    pokemonsContainer.appendChild(template(pokemons[i])); 
  }

}

function filterPokemons(pokemons) {

  for(var i = 0 ; i <pokemons.length; i++)
  {
    var visible = false; 
    //sprawdzanie czy dany pokemon jest danego typu 
    for(var a = 0; a <pokemons[i].types.length; a++){
      if(checkedPokeomnTypes.get(pokemons[i].types[a]))
      {
        visible = true; 
        break;
      }
    }
    //sprawdzanie czy dany pokemon ma w nazwie wyszukiwaną frazę 
    if(inputText.value.trim() != "" && visible == true)
    {
      if(pokemons[i].name.toLowerCase().indexOf(inputText.value.toLowerCase()) >= 0 ){
        visible = true; 
      }else{
        visible = false; 
      }
    }
    //ustawianie widoczności karty pokemona 
    var pokemon = document.getElementById(pokemons[i].name)
    if(visible){
      pokemon.style.display = null
    } else {
      pokemon.style.display = "none"; 
    }
  }
}


var checkedPokeomnTypes = new Map(); 
const form = document.querySelector("form");
var inputCheck = form.querySelectorAll('input[type=checkbox]'); 
var inputText = document.getElementById("pokemon-name"); 

renderPokemons(pokemons);

function submitForm(event) {
  event.preventDefault();
  for(var k =0 ; k<inputCheck.length; k++){
    checkedPokeomnTypes.set(inputCheck[k].id,inputCheck[k].checked );  
  }

  filterPokemons(pokemons);
}

form.addEventListener("submit", submitForm); 