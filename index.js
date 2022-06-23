    //eventlisteners

    
    document.addEventListener('DOMContentLoaded', () => {
    //cat images
    let catGeneration = document.getElementById("cat-generator");
    catGeneration.addEventListener('click', generateCats)
  
    //cat facts
    let catFactGenerator = document.getElementById("cat-fact-generator");
    catFactGenerator.addEventListener('click', generateCatFacts)

    //light modes
    const buttonSwitch = document.getElementById("modes");
    buttonSwitch.addEventListener('click', darkMode);


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

    //generating cat facts
    
  function generateCatFacts(){
    let menu = document.getElementById('cat-data-container')
    menu.innerHTML = ''

    fetch('https://brianiswu-cat-facts-v1.p.rapidapi.com/facts', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'abd9343adfmsh3034d615139dff9p193554jsn3b451274579c',
        'X-RapidAPI-Host': 'brianiswu-cat-facts-v1.p.rapidapi.com'
        },
    })

    .then(res => res.json())
    .then(data => {
      let menu = document.getElementById('cat-data-container')
      menu.innerHTML = ''
      for (elem of data){
          let li = document.createElement('li')
          li.textContent = elem.text
          menu.append(li)
           menu.style.border = "1px solid #adadaa"
      }
    })
  }


  //switch light to dark mode
  

  function darkMode(e){
    if(document.body.style.backgroundColor == "rgb(10, 15, 34)"){
      document.body.style.backgroundColor = "#606A74"
    } else {
      document.body.style.backgroundColor = "rgb(10, 15, 34)"
    }

    if(buttonSwitch.textContent == "light mode"){
      buttonSwitch.textContent = "dark mode"
   } else {
      buttonSwitch.textContent = "light mode"
   }

  }
})   