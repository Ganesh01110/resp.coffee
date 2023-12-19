// for menu activation
let navbar =document.querySelector('.navbar');

document.querySelector('.header .icons i:nth-child(3)').onclick = () =>{
    navbar.classList.toggle('active');
    cartIrem.classList.remove('active');
    searchItem.classList.remove('active');
}

// for cart activation
let cartIrem =document.querySelector('.cart-item-container');

document.querySelector('.header .icons i:nth-child(2)').onclick = () =>{
    cartIrem.classList.toggle('active');
    navbar.classList.remove('active');
    searchItem.classList.remove('active');
}

// for search activation
let searchItem =document.querySelector('.search-form');

document.querySelector('.header .icons i:nth-child(1)').onclick = () =>{
    searchItem.classList.toggle('active');
    navbar.classList.remove('active');
    cartIrem.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    cartIrem.classList.remove('active');
    searchItem.classList.remove('active');

}