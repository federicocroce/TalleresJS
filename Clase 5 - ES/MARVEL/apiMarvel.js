
const filterCharacterByName = () => {
    const characterName = document.getElementById("characterName");
    document.getElementById("spinner").classList.remove("hide");
    document.getElementById("emptyResult").classList.add("hide");
    document.getElementById("list").classList.add("hide");

    characterName.value ?
        getCharactersByName(characterName)
        :
        getAllCharacters();
};

const getCharactersByName = characterName => genericGetCharacter(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${characterName.value}&ts=1&apikey=091d092638b3cf6c58f91a07dda476af&hash=0e5da09a03340c876f9348c4409d3aff`);

const getAllCharacters = () => genericGetCharacter(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=091d092638b3cf6c58f91a07dda476af&hash=0e5da09a03340c876f9348c4409d3aff`);

window.onload = function () {
    filterCharacterByName();
}


const genericGetCharacter = path => {
    fetch(path)
        .then(response => response.json()
        ).then(myJson => formatResult(myJson)
        ).catch(error => console.log(error)
        ).finally(() => document.getElementById("spinner").classList.add("hide"));
};

const formatResult = myJson => {
    const list = document.getElementById("list");
    const emptyResult = document.getElementById("emptyResult");

    while (list.firstChild) list.removeChild(list.firstChild);

    if (myJson.data.results.length != 0) {

        myJson.data.results.map((character) => {
            const row = Row(character)
            list.appendChild(row);
        });

        responseResultShow(list, emptyResult)
    }
    else {
        emptyResponseShow(list, emptyResult)
    }
};

const Row = character => {
    const li = document.createElement("li");

    li.addEventListener("click", function (event) {
        event.preventDefault();
        alert(`${character.name} aparece en : ${character.comics.available} comics`)
    });

    li.innerHTML = character.name;

    return li;
}

const responseResultShow = (list, emptyResult) => {
    emptyResult.classList.add("hide");
    list.classList.remove("hide");
}

const emptyResponseShow = (list, emptyResult) => {
    emptyResult.classList.remove("hide");
    list.classList.add("hide");
};
