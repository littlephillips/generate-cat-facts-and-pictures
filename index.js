    //eventlisteners

    document.addEventListener('DOMContentLoaded', () => {

    let catGeneration = document.getElementById("cat-generator");
    catGeneration.addEventListener('click', generateCats)
  
    //cat fact
    //light modes


  //fetch requests

  function generateCats(){
    let catsContainer = document.getElementById('cat-image-container');
    catsContainer.innerHTML = ''

    fetch("https://api.thecatapi.com/v1/images/search")
    .then(res => res.json())
    .then(data => {
      let cats = data[0].url
      let catImageElem = document.createElement('img')
      catImageElem.setAttribute('src', `${cats}`)

      let catsContainer = document.querySelector('#cat-image-container')
      catsContainer.appendChild(catImageElem)
      catsContainer.style.border = "2px solid #adadaa"

    })

  }



    })   