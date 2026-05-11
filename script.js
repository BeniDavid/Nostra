const products = [
    {
        id: 1,
        name: 'Floral Summer Shirt',
        occasion: 'Summer Party',
        color: 'Red',
        arrival: 'New',
        price: 220,
        rating: 4,
        tag: 'Trending',
        image: 'https://picsum.photos/seed/nostra1/600/600',
        description: 'Lightweight shirt with floral pattern for sunny days.'
    },
    {
        id: 2,
        name: 'Summer Green',
        occasion: 'Beach',
        color: 'Green',
        arrival: 'Old',
        price: 260,
        rating: 4,
        tag: 'Beach',
        image: 'https://picsum.photos/seed/nostra2/600/600',
        description: 'Breezy green shirt made for beach strolls and warm evenings.'
    },
    {
        id: 3,
        name: 'Party Floral Shirt',
        occasion: 'Party',
        color: 'White',
        arrival: 'New',
        price: 399,
        rating: 5,
        tag: 'Party',
        image: 'https://picsum.photos/seed/nostra3/600/600',
        description: 'Bold floral shirt designed for evening occasions and celebrations.'
    },
    {
        id: 4,
        name: 'Beach Shirt',
        occasion: 'Beach',
        color: 'Blue',
        arrival: 'New',
        price: 579,
        rating: 5,
        tag: 'New',
        image: 'https://picsum.photos/seed/nostra4/600/600',
        description: 'Cool beach shirt with airy fabric and easy fit.'
    },
    {
        id: 5,
        name: 'Shirt Party Red',
        occasion: 'Party',
        color: 'Red',
        arrival: 'Old',
        price: 579,
        rating: 4,
        tag: 'Best Seller',
        image: 'https://picsum.photos/seed/nostra5/600/600',
        description: 'Vibrant red shirt made for striking party looks.'
    },
    {
        id: 6,
        name: 'White Linen Dress',
        occasion: 'Beach',
        color: 'White',
        arrival: 'New',
        price: 420,
        rating: 4,
        tag: 'New',
        image: 'https://picsum.photos/seed/nostra6/600/600',
        description: 'Light linen dress perfect for seaside gatherings.'
    },
    {
        id: 7,
        name: 'Green Slip Dress',
        occasion: 'Party',
        color: 'Green',
        arrival: 'Old',
        price: 499,
        rating: 5,
        tag: 'Limited',
        image: 'https://picsum.photos/seed/nostra7/600/600',
        description: 'Elegant slip dress with modern green tones.'
    },
    {
        id: 8,
        name: 'Casual Denim Jacket',
        occasion: 'Casual',
        color: 'Blue',
        arrival: 'New',
        price: 349,
        rating: 4,
        tag: 'Casual',
        image: 'https://picsum.photos/seed/nostra8/600/600',
        description: 'Relaxed denim jacket for everyday layering.'
    },
    {
        id: 9,
        name: 'Classic White Tee',
        occasion: 'Casual',
        color: 'White',
        arrival: 'Old',
        price: 179,
        rating: 4,
        tag: 'Essential',
        image: 'https://picsum.photos/seed/nostra9/600/600',
        description: 'Soft cotton tee for effortless everyday style.'
    },
    {
        id: 10,
        name: 'Cozy Knit Sweater',
        occasion: 'Casual',
        color: 'Red',
        arrival: 'Old',
        price: 459,
        rating: 5,
        tag: 'Cozy',
        image: 'https://picsum.photos/seed/nostra10/600/600',
        description: 'Warm knit sweater with quality texture and premium feel.'
    },
    {
        id: 11,
        name: 'Navy Blazer',
        occasion: 'Evening',
        color: 'Blue',
        arrival: 'New',
        price: 799,
        rating: 5,
        tag: 'Premium',
        image: 'https://picsum.photos/seed/nostra11/600/600',
        description: 'Sharp navy blazer crafted for evening events and smart looks.'
    },
    {
        id: 12,
        name: 'Sports Stripe Dress',
        occasion: 'Beach',
        color: 'Green',
        arrival: 'New',
        price: 299,
        rating: 4,
        tag: 'Sporty',
        image: 'https://picsum.photos/seed/nostra12/600/600',
        description: 'Sporty dress with a comfortable fit and bright stripes.'
    }
];

function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

function initCollectionsPage() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const occasionInputs = document.querySelectorAll('.filter-occasion');
    const colorInputs = document.querySelectorAll('.filter-color');
    const arrivalInputs = document.querySelectorAll('.filter-arrival');
    const sortSelect = document.getElementById('sortSelect');
    const resetButton = document.getElementById('resetFilters');
    const resultCount = document.getElementById('resultCount');
    const noProducts = document.getElementById('noProducts');

    let filteredProducts = [...products];

    function createProductCard(product) {
        const card = document.createElement('article');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-thumb" style="background-image:url('${product.image}')"></div>
            <div class="product-info">
                <p class="product-tag">${product.tag}</p>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="product-price">₹${product.price}</p>
                <p class="product-meta">${product.occasion} • ${product.color} • ${product.arrival}</p>
                <button class="btn btn-primary">Add to Cart</button>
            </div>
        `;
        return card;
    }

    function render(productsList) {
        productsGrid.innerHTML = '';
        if (productsList.length === 0) {
            noProducts.style.display = 'block';
            resultCount.textContent = 'No products found';
            return;
        }

        noProducts.style.display = 'none';
        resultCount.textContent = `Showing ${productsList.length} product${productsList.length === 1 ? '' : 's'}`;
        productsList.forEach(product => productsGrid.appendChild(createProductCard(product)));
    }

    function getCheckedValues(nodeList) {
        return Array.from(nodeList).filter(input => input.checked).map(input => input.value);
    }

    function applyFilters() {
        const searchText = searchInput.value.trim().toLowerCase();
        const occasionValues = getCheckedValues(occasionInputs);
        const colorValues = getCheckedValues(colorInputs);
        const arrivalValues = getCheckedValues(arrivalInputs);

        filteredProducts = products.filter(product => {
            const matchesSearch = !searchText || product.name.toLowerCase().includes(searchText) || product.description.toLowerCase().includes(searchText);
            const matchesOccasion = occasionValues.length === 0 || occasionValues.includes(product.occasion);
            const matchesColor = colorValues.length === 0 || colorValues.includes(product.color);
            const matchesArrival = arrivalValues.length === 0 || arrivalValues.includes(product.arrival);
            return matchesSearch && matchesOccasion && matchesColor && matchesArrival;
        });

        applySort();
    }

    function applySort() {
        const sortValue = sortSelect.value;
        const sorted = [...filteredProducts];

        if (sortValue === 'price-low') {
            sorted.sort((a,b) => a.price - b.price);
        } else if (sortValue === 'price-high') {
            sorted.sort((a,b) => b.price - a.price);
        } else if (sortValue === 'rating') {
            sorted.sort((a,b) => b.rating - a.rating);
        } else {
            sorted.sort((a,b) => b.id - a.id);
        }

        render(sorted);
    }

    searchInput.addEventListener('input', applyFilters);
    searchButton.addEventListener('click', applyFilters);
    occasionInputs.forEach(input => input.addEventListener('change', applyFilters));
    colorInputs.forEach(input => input.addEventListener('change', applyFilters));
    arrivalInputs.forEach(input => input.addEventListener('change', applyFilters));
    sortSelect.addEventListener('change', applySort);

    resetButton.addEventListener('click', () => {
        searchInput.value = '';
        occasionInputs.forEach(input => input.checked = false);
        colorInputs.forEach(input => input.checked = false);
        arrivalInputs.forEach(input => input.checked = false);
        sortSelect.value = 'newest';
        filteredProducts = [...products];
        render(filteredProducts);
    });

    render(filteredProducts);
}

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    const successMessage = document.getElementById('successMessage');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        clearErrors();
        let valid = true;

        if (name.length < 2) {
            showError('nameError', 'Please enter your name');
            valid = false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showError('emailError', 'Please enter a valid email');
            valid = false;
        }
        if (subject.length < 3) {
            showError('subjectError', 'Please enter a subject');
            valid = false;
        }
        if (message.length < 10) {
            showError('messageError', 'Message must be at least 10 characters');
            valid = false;
        }

        if (!valid) return;

        contactForm.reset();
        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    });

    function showError(id, message) {
        const element = document.getElementById(id);
        if (element) element.textContent = message;
    }

    function clearErrors() {
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initCollectionsPage();
    initContactForm();
});
