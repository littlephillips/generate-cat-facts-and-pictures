    //eventlisteners

    document.addEventListener('DOMContentLoaded', () => {
      
      let catGeneration = document.getElementById("cat-generator");
      catGeneration.addEventListener('click', generateCats)
    
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
        })
    
      }
    
      //switch light to dark mode
    
        function darkMode(e){
          if(document.body.style.backgroundColor == "rgb(10, 15, 34)"){
            document.body.style.backgroundColor = "#606A74"
          } else {
            document.body.style.backgroundColor = "rgb(10, 15, 34)"
          }
    
          if(buttonSwitch.textContent == "dark mode"){
            buttonSwitch.textContent = "light mode"
         } else {
            buttonSwitch.textContent = "dark mode"
         }
    
        }
    
    })
    