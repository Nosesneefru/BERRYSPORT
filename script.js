const products = [
    { id: 1, brand: 'nike', name: 'Nike Air Max', image: 'imagenes/botin2.jpg', description: 'Zapatillas cómodas y modernas.' },
    { id: 2, brand: 'adidas', name: 'Adidas Ultraboost', image: 'asset/img/IMG-20240323-WA0155.jpg', description: 'Ideales para correr largas distancias.' },
    { id: 3, brand: 'puma', name: 'Puma Suede', image: 'asset/img/IMG-20240323-WA0156.jpg', description: 'Clásicas y elegantes.' },
    { id: 4, brand: 'reebok', name: 'Reebok Nano X', image: 'asset/img/IMG-20240323-WA0169.jpg', description: 'Perfectas para el gimnasio.' },
    { id: 5, brand: 'nike', name: 'Nike Revolution', image: 'asset/img/IMG-20240323-WA0195.jpg', description: 'Diseño ligero y resistente.' },
    { id: 6, brand: 'nike', name: 'Nike Air Max', image: 'asset/img/IMG-20240323-WA0153.jpg', description: 'Zapatillas cómodas y modernas.' },
    { id: 7, brand: 'adidas', name: 'Adidas Ultraboost', image: 'asset/img/IMG-20240323-WA0155.jpg', description: 'Ideales para correr largas distancias.' },
    { id: 8, brand: 'puma', name: 'Puma Suede', image: 'asset/img/IMG-20240323-WA0156.jpg', description: 'Clásicas y elegantes.' },
    { id: 9, brand: 'nike', name: 'Nike Air Max', image: 'asset/img/IMG-20240323-WA0153.jpg', description: 'Zapatillas cómodas y modernas.' },
    { id: 10, brand: 'adidas', name: 'Adidas Ultraboost', image: 'asset/img/IMG-20240323-WA0155.jpg', description: 'Ideales para correr largas distancias.' },
    { id: 11, brand: 'puma', name: 'Puma Suede', image: 'asset/img/IMG-20240323-WA0156.jpg', description: 'Clásicas y elegantes.' }
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
            <p>${product.description}</p>
        `;
        catalog.appendChild(productCard);
    });
}

brandFilter.addEventListener('change', (e) => {
    renderProducts(e.target.value);
});

// Render all products on page load
renderProducts('all');