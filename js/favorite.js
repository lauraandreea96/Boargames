let grid = document.querySelector(".grid-container");


// let productCard = document.querySelectorAll(".product-card");
let product_list_fav = document.querySelector('#related-products-fav')

// productCard.forEach(product => {
//     product.addEventListener('click', function(e){
//         if(e.target.classList.contains(""bxs-heart"")){
//             console.log("added");
//             let prod = e.target.closest(".product-card");
//             product_list_fav.insertAdjacentHTML("beforeend", prod);
//         }
//     });


// })

grid.addEventListener("click", function(e){
    if(e.target.classList.contains("bxs-heart")){
        console.log("added");
        let prod = e.target.closest(".product-card");
        // product_list_fav.insertAdjacentHTML("beforeend", prod);
        // product_list_fav.Child(prod);
        console.log(prod);
    }
})






   