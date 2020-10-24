document.addEventListener("DOMContentLoaded", () => {
    console.log("hello world");

    let xhr = new XMLHttpRequest();
    xhr.open("GET", 'https://fakestoreapi.com/products', true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function (e) {
        if (this.status === 200) {
            let result = JSON.parse(this.responseText);
            console.log(result);

            displayDetails(result);


        } else {
            console.log(e);
        }
    }
    xhr.send();

    let shoppingCart = [];


    function displayDetails(results) {

        let productMenu = document.querySelector("#products");


        results.forEach(result => {

            let rowDiv = document.createElement("div");
            rowDiv.setAttribute("class","col-sm");
            let card = document.createElement("div");
            card.setAttribute("class", "card");
            let cardIMG = document.createElement("img");
            cardIMG.setAttribute("class", "card-img-top");
            cardIMG.setAttribute("src", result.image);
            cardIMG.style.width = "150px";
            cardIMG.style.height = "150px";
            let cardBody = document.createElement("div");
            cardBody.setAttribute("class", "card-body")
            let cardHead = document.createElement("h3");
            cardHead.setAttribute("class", "card-title")
            cardHead.innerHTML = result.title;
            let cardText = document.createElement("p");
            cardText.setAttribute("class", "card-text");
            //cardText.innerHTML = result.description;

            let buttonGroup = document.createElement("div");
            buttonGroup.setAttribute("class", "btn-group");
            let cardButton1 = document.createElement("button");
            cardButton1.setAttribute("class", "btn btn-primary large");
            cardButton1.innerHTML = "ADD TO BASKET";
            cardButton1.addEventListener("click", (e) => {
                console.log("i was pressed");
                console.log(`Buying products : ${result.id}`);

                shoppingCart.push(result);

                console.log(shoppingCart);


            });

            cardBody.appendChild(cardText);
            card.appendChild(cardHead);
            card.appendChild(cardIMG);
            card.appendChild(cardBody);
            buttonGroup.appendChild(cardButton1);
            cardBody.appendChild(buttonGroup);
            rowDiv.appendChild(card);
            productMenu.appendChild(rowDiv);


        });


        let cart = document.querySelector("#cart");
        cart.addEventListener("click", showBasket);

        function showBasket() {

            console.log("i was entered")

            shoppingCart.forEach(item => {

                console.log(item.id);



            });

            modal.appendChild(modalHeader);
            modal.appendChild(modalDialog);
            modal.appendChild(modalContent);
            modal.appendChild(modalBody);
            modal.appendChild(modalFooter);


        }


        showBasket();


    }

            let modal = document.createElement("div");
            modal.setAttribute("class", "modal fade");
            modal.setAttribute("tabindex", "-1");
            modal.setAttribute("role", "dialog");
            modal.setAttribute( "id","exampleModal")
           
            let modalDialog = document.createElement("div");
            modalDialog.setAttribute("class", "modal-dialog");
            modalDialog.setAttribute("role", "document");

            let modalContent = document.createElement("div");
            modalContent.setAttribute("class", "modal-content");
            
            let modalHeader = document.createElement("div");
            modalHeader.setAttribute("class", "modal-header");
            
            let title = document.createElement("h5");
            title.setAttribute("class", "modal-title");

            let modalClose = document.createElement("button");
            modalClose.setAttribute("type", "button");
            modalClose.setAttribute("class", "close");
            modalClose.setAttribute("data-dismiss","modal" );
            modalClose.setAttribute("aria-label","Close");

            
            let modalBody = document.createElement("div");
            modalBody.setAttribute("class", "modal-body");
            let modalFooter = document.createElement("div");
            modalFooter.setAttribute("class", "modal-footer");
            let button1 = document.createElement("div");
            button1.setAttribute("type", "button");
            button1.setAttribute("class", "btn btn-primary");
            button1.innerHTML  = "hello";
            let button2 = document.createElement("div");
            button2.setAttribute("type", "button");
            button2.setAttribute("class", "btn btn-primary");
            button2.innerHTML  = "hello";










            




});