class CardBoard extends HTMLElement{
    connectedCallback(){
        const xRoot = this.innerHTML = '<div id="cbo" class="cardboard"><div>empty</div><div>empty</div></div>';
        this.addButton("New Card");
    }

   addButton(label){
        var xDiv = document.createElement("div");
        xDiv.classList.add("button-1");
        var xtemp = document.createElement("input");
        xtemp.type = "button";
        xtemp.value = label;
        xtemp.addEventListener("click",()=>{
            this.addNewCard();
        });
        xDiv.appendChild(xtemp);
        
        this.appendChild(xDiv);
   }

   addNewCard(){
        const newCard = document.createElement('div');
              newCard.innerHTML = 'Empty';
              newCard.classList.add("cardItem");
              newCard.addEventListener('click',function(){
                  document.getElementById("cbo").appendChild(newCard);
            });
            document.getElementById("cbo").appendChild(newCard);
        }
}
customElements.define('card-board',CardBoard);