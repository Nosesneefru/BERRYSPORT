const products = [
    { id: 1, brand: 'nike', name: 'Nike', image: 'imagenes/Nike 02.jpg' },
    { id: 2, brand: 'adidas', name: 'Adidas F50', image: 'imagenes/Adidas f50 1.jpg' },
    { id: 3, brand: 'puma', name: 'Puma', image: 'imagenes/Puma 3.jpg'},
    { id: 4, brand: 'nike', name: 'Nike', image: 'imagenes/Nike 03.jpg' },
    { id: 5, brand: 'nike', name: 'Nike', image: 'imagenes/Nike 04.jpg'},
    { id: 6, brand: 'adidas', name: 'Adidas F50', image: 'imagenes/Adidas f504.jpg'},
    { id: 7, brand: 'puma', name: 'Puma', image: 'imagenes/PUMA 2.jpg'},
    { id: 8, brand: 'nike', name: 'Nike', image: 'imagenes/Nike 07.jpg'},
    { id: 9, brand: 'adidas', name: 'Adidas F50', image: 'imagenes/Adidas f503.jpg'},
    { id: 10, brand: 'puma', name: 'Puma', image: 'imagenes/PUMA 1.jpg'}
];

const catalog = document.getElementById('catalog');
const brandFilter = document.getElementById('brand-filter');

function renderProducts(filter) {
    catalog.innerHTML = '';
    const filteredProducts = filter === 'all' ? products : products.filter(product => product.brand === filter);

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
        `;
        catalog.appendChild(productCard);
    });
}

brandFilter.addEventListener('change', (e) => {
    renderProducts(e.target.value);
});

// Render all products on page load
renderProducts('all');