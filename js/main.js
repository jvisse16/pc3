$(document).ready(function() {
    // URL del API
    var apiUrl = "./api/api.json";

    // Función para cargar los datos del API
    function cargarDatos() {
        $.getJSON(apiUrl, function(data) {
            $.each(data, function(index, entrenador) {
                var entrenadorHTML = "<h2>" + entrenador.entrenador + "</h2>";
                $.each(entrenador.pokemons, function(i, pokemon) {
                    var tipoColor;
                    switch (pokemon.tipo.toLowerCase()) {
                        case "planta":
                            tipoColor = "green";
                            break;
                        case "fuego":
                            tipoColor = "red";
                            break;
                        case "electrico":
                            tipoColor = "yellow";
                            break;
                        default:
                            tipoColor = "black";
                    }
                    var pokemonHTML = "<div class='pokemon' style='display: inline-block; margin-right: 20px; margin-bottom: 20px; vertical-align: top;'>";
                    pokemonHTML += "<p><strong>Nombre:</strong> " + pokemon.nombre + "</p>";
                    pokemonHTML += "<p><strong>Tipo: <span style='color:" + tipoColor + ";'>" + pokemon.tipo + "</span></strong></p>";
                    pokemonHTML += "<img src='" + pokemon.foto + "' alt='" + pokemon.nombre + "' style='width: 200px; height: auto;'>";
                    pokemonHTML += "</div>";
                    entrenadorHTML += pokemonHTML;
                });
                $("#entrenadores").append(entrenadorHTML);
            });
        });
    }

    // Cargar los datos al cargar la página
    cargarDatos();
});
