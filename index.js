const getDogPics = (num) => {
    fetch(`https://dog.ceo/api/breeds/image/random/` + num)
    .then(response => response.json())
    .then(responseJson => displayDogs(responseJson))
    .catch(error => console.log('sorry! an error :-('))
}

const displayDogs = (responseJson) => {
    $('.dogpics').html("");
    responseJson.message.forEach(el => {
        $('.dogpics').append(
            `<img src=${el} alt="dogpic">`
        )
    })
}

const getNumber = () => {
    $('main').on('submit', event => {
    event.preventDefault();
    let num = $('#num').val();
    getDogPics(num);
  })
}

const main = () => {
    getNumber();
    console.log('app is live!');
}

$(main);