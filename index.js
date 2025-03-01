function getRandomDog(){
    fetch("https://dog.ceo/api/breeds/image/random").then((res)=> {
        console.log(res);
        return res.json();
    }).then => {
        console.log(data);
        document.querySelector("#dog-image").src = data.message;
    });
}

function getSpecificDog() {
    let breed = document.querySelector("breed")
}