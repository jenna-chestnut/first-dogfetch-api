const getDogPics = (breed) => {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayDogs(responseJson))
    .catch(error => console.log('sorry!' + error))
}

const displayDogs = (responseJson) => {
    $('.dogpics').html("");
        $('.dogpics').append(
            `<img src=${responseJson.message} alt="dogpic">`
        )
    }

const getNumber = () => {
    $('main').on('submit', event => {
    event.preventDefault();
    let breed = $('#breed').val();
    getDogPics(breed);
  })
}

const main = () => {
    getNumber();
    console.log('app is live!');
}

$(main);