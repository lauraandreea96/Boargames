document.querySelectorAll('.product-img-item').forEach(e => {
    e.addEventListener('click', () => {
        let img = e.querySelector('img').getAttribute('src')
        document.querySelector('#product-img > img').setAttribute('src', img)
    })
})

document.querySelector('#view-all-description').addEventListener('click', () => {
    let content = document.querySelector('.product-detail-description-content')
    content.classList.toggle('active')
    document.querySelector('#view-all-description').innerHTML = content.classList.contains('active') ? 'view less' : 'view all'
})

let products = [
    {
        name: 'A Thief\'s Fortune',
        image1: './img/A Thief\'s Fortune-1.jpg',
        image2: './img/A Thief\'s Fortune-2.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Arcadia Quest Inferno',
        image1: './img/Arcadia Quest-1.jpg',
        image2: './img/Arcadia Quest-2.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Azul: Stained Glass of Sintra',
        image1: './img/Azul-1.jpg',
        image2: './img/Azul-2.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Akrotiri',
        image1: './img/Akrotiri-1.jpg',
        image2: './img/Akrotiri-2.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Dead of Winter',
        image1: './img/Dead of Winter-1.png',
        image2: './img/Dead of Winter-2.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Beat That',
        image1: './img/Beat That-1.png',
        image2: './img/Beat That-2.jpg',
        old_price: '400',
        curr_price: '300'
    },
]

let product_list = document.querySelector('#related-products')

renderProducts = (products) => {
    products.forEach(e => {
        let prod = `
            <div class="product-card">
                <div class="product-card-img">
                    <img src="${e.image1}" alt="">
                    <img src="${e.image2}" alt="">
                </div>
                <div class="product-card-info">
                    <div class="product-btn">
                        <button class="btn-flat btn-hover btn-shop-now">shop now</button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-cart-add'></i>
                        </button>
                        <button class="btn-flat btn-hover btn-cart-fav">
                            <i class='bx bxs-heart'></i>
                        </button>
                    </div>
                    <div class="product-card-name">
                        ${e.name}
                    </div>
                    <div class="product-card-price">
                        <span><del>${e.old_price}</del></span>
                        <span class="curr-price">${e.curr_price}</span>
                    </div>
                </div>
            </div>
        `
        product_list.insertAdjacentHTML("beforeend", prod)
    })
}

renderProducts(products)