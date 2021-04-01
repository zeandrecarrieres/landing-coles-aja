const colesContainer = document.querySelector('.coles-items')


const url = "http://localhost:3001/product";
let dados = fetch(url) //404 error
.then(response => response.json())
.then(data => getItems(data))
.catch(err => console.error(err));



function getItems(products){
        products.map((item)=>{
            let itensContainer = document.createElement('div')
            itensContainer.classList.add('cole-item')
            colesContainer.appendChild(itensContainer)
            let titleItens = document.createElement('h3')
            titleItens.classList.add('cole-title-item')
            itensContainer.appendChild(titleItens)
            titleItens.innerHTML = item.title_01

            let textItens = document.createElement('p')
            textItens.classList.add('cole-text-item')
            itensContainer.appendChild(textItens)
            textItens.innerHTML = item.description_01

            let buttonItem = document.createElement('button')
            buttonItem.classList.add('cole-button-item')
            buttonItem.innerHTML = "Acheter"
            itensContainer.appendChild(buttonItem)


            

            
        })

        
    }
      
   
             
    

   


