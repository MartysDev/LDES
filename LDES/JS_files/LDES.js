document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            title: 'DCG 1 - Fondamentaux du droit',
            images: [
                'https://m.media-amazon.com/images/I/717rpoCJZiL._SL1500_.jpg',
                'https://m.media-amazon.com/images/I/719sBSwVCdL._SL1500_.jpg',
                'https://m.media-amazon.com/images/I/61wdnb-8XWL.jpg'
            ],
            description: 'Tout le DCG 1, Fondamentaux du droit, leader sur le marché !',
            url: 'https://amzn.to/3z9Yu9k',
            buttonLabel: 'Acheter sur Amazon'
        },
        {
            title: 'DCG 2 - Droit des sociétés',
            images: [
                'https://m.media-amazon.com/images/I/71keWC0wAHL._SL1500_.jpg',
                'https://m.media-amazon.com/images/I/812G0WZpErL._SL1500_.jpg'
            ],
            description: 'Tout le DCG 2, Droit des sociétés et des groupements affaires !',
            url: 'https://amzn.to/4d8vyMJ',
            buttonLabel: 'Acheter sur Amazon'
        },
        {
            title: 'DCG 3 - Droit social',
            images: [
                'https://m.media-amazon.com/images/I/61yCFmf4tTL._SL1500_.jpg',
                'https://m.media-amazon.com/images/I/71txyZCnPKL._SL1500_.jpg'  
            ],
            description: 'Tout le DCG 3 présenté conformément au programme !',
            url: 'https://amzn.to/3XT1cJX',
            buttonLabel: 'Acheter sur Amazon'
        },
        {
            title: 'Droit Constitutionnel - Fiches',
            images: [
                'https://m.media-amazon.com/images/I/61z-Zg+RWEL._SL1500_.jpg',
                'https://m.media-amazon.com/images/I/31jYF8e6yrL.jpg'
            ],
            description: 'Les fameuses fiches de révisions LegislationLab.org',
            url: 'https://amzn.to/47s2u1u',
            buttonLabel: 'Acheter sur Amazon'
        },
        {
            title: 'Méthodologie Droit L1 & L2',
            images: [
                'https://m.media-amazon.com/images/I/61W9ZaoQpQL._SL1500_.jpg',
                'https://m.media-amazon.com/images/I/31HU-iSWK+L.jpg'
            ],
            description: 'Guide adressé aux étudiants en droit souhaitant mieux réussir les exercices.',
            url: 'https://amzn.to/4d8vlcu',
            buttonLabel: 'Acheter sur Amazon'
        },
        {
            title: 'Introduction Générale au droit',
            images: [
                'https://m.media-amazon.com/images/I/61jwirb6DEL._SL1500_.jpg',
                'https://m.media-amazon.com/images/I/31POGRR67KL.jpg'
            ],
            description: 'Fiches de révision élaborées par des professionnels du Droit.',
            url: 'https://amzn.to/3Tq96Yo',
            buttonLabel: 'Acheter sur Amazon'
        },
        {
            title: 'Droit pénal général - Fiches',
            images: [
                'https://m.media-amazon.com/images/I/6114M5B0L4L._SL1500_.jpg',
                'https://m.media-amazon.com/images/I/31F06qWweHL.jpg'
            ],
            description: 'Des fiches de révision concises mais exhaustives pour les étudiants en Droit.',
            url: 'https://amzn.to/3B4vqAA',
            buttonLabel: 'Acheter sur Amazon'
        },
        {
            title: 'Droit de la famille L1&L2 - Fiches',
            images: [
                'https://m.media-amazon.com/images/I/61ZaBREQrtL._SL1500_.jpg',
                'https://m.media-amazon.com/images/I/31w4Ooj+DbL.jpg'
            ],
            description: 'Les incontournables fiches de révisions Legislationlab.',
            url: 'https://amzn.to/47yTGXO',
            buttonLabel: 'Acheter sur Amazon'
        },
        {
            title: 'Droit des obligations - Fiches',
            images: [
                'https://m.media-amazon.com/images/I/61hQ0MZfr2L._SL1500_.jpg',
                'https://m.media-amazon.com/images/I/31+nTb7TxIL.jpg'
            ],
            description: 'Fiches complètes et synthétiques, avoir les meilleures notes en partiel facilement.',
            url: 'https://amzn.to/3MLTfzK',
            buttonLabel: 'Acheter sur Amazon'
        },
        {
            title: 'Dell Inspiron 15 3520 Ordinateur Portable',
            images: [
                'https://m.media-amazon.com/images/I/81QTkbwabiL._AC_SL1500_.jpg',
                'https://m.media-amazon.com/images/I/81oKEbWaCFL._AC_SL1500_.jpg',
                'https://m.media-amazon.com/images/I/810ZazMoWlL._AC_SL1500_.jpg'
            ],
            description: 'Processeur Intel Core i3-1215U, Écran 15.6" FHD 120HZ, 8Go RAM, 256Go SSD, Graphique Intel UHD, Windows 11',
            url: 'https://amzn.to/4gmyybd',
            buttonLabel: 'Acheter sur Amazon'
        },
        {
            title: 'Dell Inspiron 15 3535 Ordinateur Portable 15.6"',
            images: [
                'https://m.media-amazon.com/images/I/71RZPARijnL._AC_SL1500_.jpg',
                'https://m.media-amazon.com/images/I/7121Z4LyUUL._AC_SL1500_.jpg',
                'https://m.media-amazon.com/images/I/71UxwknBb8L._AC_SL1500_.jpg'
            ],
            description: 'Processeur AMD Ryzen 5 7520U, Graphique AMD Radeon, RAM 8Go, SSD 512Go, Windows 11 Home',
            url: 'https://amzn.to/3ZnHRkW',
            buttonLabel: 'Acheter sur Amazon'
        },
        {
            title: 'ASUS Vivobook Go 15 S1504FA-NJ179W',
            images: [
                'https://m.media-amazon.com/images/I/71qLvGfooiL._AC_SL1500_.jpg',
                'https://m.media-amazon.com/images/I/71c9Vk250qL._AC_SL1500_.jpg',
                'https://m.media-amazon.com/images/I/71K36UObAlL._AC_SL1500_.jpg'
            ],
            description: '15.6 FHD Pc Portable (AMD Ryzen 5 7520U, 8GB RAM, 512GB SSD, Windows 11 Home) – Clavier AZERTY',
            url: 'https://amzn.to/4eq82fo',
            buttonLabel: 'Acheter sur Amazon'
        }
    ];

    const services = [
        {
            title: 'Amazon Prime',
            images: [
                'https://images-eu.ssl-images-amazon.com/images/G/08/FR-hq/2022/img/Prime/Shipping_d__440x440.jpg',
                'https://f.media-amazon.com/images/G/08/FR-hq/2022/img/Prime/PV_d__440x440.jpg',
                'https://f.media-amazon.com/images/G/08/FR-hq/2022/img/Prime/AMP_d__440x440.jpg'
            ],
            description: 'Plusieurs avantages.',
            url: ' https://www.amazon.fr/amazonprime?_encoding=UTF8&primeCampaignId=prime_assoc_ft?tag=learnmore00-21',
            buttonLabel: 'Amazon-Essai gratuit'
        },
        {
            title: 'Audible',
            images: [
                'https://m.media-amazon.com/images/I/51iuY4miXPL.jpg',
                'https://m.media-amazon.com/images/I/510uOsU24xL.jpg',
                'https://m.media-amazon.com/images/I/41ybwUvSBoL.jpg'
            ],
            description: 'Plongez dans les livres audio.',
            url: 'https://amzn.to/3zfkGyN',
            buttonLabel: 'Amazon-Essai gratuit'
        },
        {
            title: 'Amazon Music Unlimited',
            images: [
                'https://m.media-amazon.com/images/G/08/digital/music/2018/subnav/Subnav_01_IndPlan.png',
                'https://m.media-amazon.com/images/G/08/digital/music/2018/subnav/Subnav_01_FamPlan.png',
                'https://m.media-amazon.com/images/G/08/digital/music/2018/subnav/Subnav_01_DevPlan.png'
            ],
            description: 'Accès illimité à 100 millions de titres.',
            url: 'https://amzn.to/4dmByBP',
            buttonLabel: 'EAmazon-Essai gratuit'
        },
        {
            title: 'Kindle',
            images: [
                'https://images-eu.ssl-images-amazon.com/images/I/81OLss0qTHL._UX300__OU08__PJku-sticker-v8,TopRight,0,-50_AC_UL900_SR900,600_.jpg',
                'https://images-eu.ssl-images-amazon.com/images/I/61sCX10I3kL._UX300__OU08__PJku-sticker-v8,TopRight,0,-50_AC_UL900_SR900,600_.jpg',
                'https://images-eu.ssl-images-amazon.com/images/I/81gok04MWoL._UX300__OU08__PJku-sticker-v8,TopRight,0,-50_AC_UL900_SR900,600_.jpg'
            ],
            description: 'Lecture audio des e-books',
            url: 'https://amzn.to/4gphTUk',
            buttonLabel: 'Amazon-Essai gratuit'
        },
        {
            title: 'Kindle',
            images: [
                'https://images-eu.ssl-images-amazon.com/images/I/81BvFTSB+uL._UX300__OU08__PJku-sticker-v8,TopRight,0,-50_AC_UL900_SR900,600_.jpg',
                'https://images-eu.ssl-images-amazon.com/images/I/81D6JmeVWfL._UX300__OU08__PJku-sticker-v8,TopRight,0,-50_AC_UL900_SR900,600_.jpg',
                'https://images-eu.ssl-images-amazon.com/images/I/81UrKgbPQHL._UX300__OU08__PJku-sticker-v8,TopRight,0,-50_AC_UL900_SR900,600_.jpg'
            ],
            description: 'Romantiques ?',
            url: 'https://amzn.to/4gphTUk',
            buttonLabel: 'Amazon-Essai gratuit'
        },
        {
            title: 'Kindle',
            images: [
                'https://images-eu.ssl-images-amazon.com/images/I/81mvBtSdYfL._UX300__OU08__PJku-sticker-v8,TopRight,0,-50_AC_UL900_SR900,600_.jpg',
                'https://images-eu.ssl-images-amazon.com/images/I/710lSdQMENL._UX300__OU08__PJku-sticker-v8,TopRight,0,-50_AC_UL900_SR900,600_.jpg',
                'https://images-eu.ssl-images-amazon.com/images/I/81nrtitPz4L._UX300__OU08__PJku-sticker-v8,TopRight,0,-50_AC_UL900_SR900,600_.jpg'
            ],
            description: 'Top3',
            url: 'https://amzn.to/4gphTUk',
            buttonLabel: 'Amazon-Essai gratuit'
        }
    ];

    const productList = document.getElementById('product-list');
    const serviceList = document.getElementById('service-list');

    // Crée une diapositive de carrousel
    function createCarouselSlide(imageUrl) {
        return `
            <div class="carousel-slide">
                <img src="${imageUrl}" alt="Image" />
            </div>
        `;
    }

    // Crée le HTML du produit ou service
    function createItemHTML(item) {
        const imagesHtml = item.images.map(createCarouselSlide).join('');
        return `
            <div class="product">
                <div class="product-images">
                    <div class="image-carousel">
                        ${imagesHtml}
                    </div>
                    <button class="carousel-control left">&#10094;</button>
                    <button class="carousel-control right">&#10095;</button>
                </div>
                <div class="product-details">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <a href="${item.url}" target="_blank" class="buy-button">${item.buttonLabel}</a>
                </div>
            </div>
        `;
    }

    // Configure les contrôles du carrousel
    function setupCarouselControls(productDiv) {
        const carousel = productDiv.querySelector('.image-carousel');
        const slides = carousel.querySelectorAll('.carousel-slide');
        let currentIndex = 0;

        function showSlide(index) {
            if (index < 0) index = slides.length - 1;
            if (index >= slides.length) index = 0;
            carousel.style.transform = `translateX(-${index * 100}%)`;
            currentIndex = index;
        }

        productDiv.querySelector('.carousel-control.left').addEventListener('click', () => showSlide(currentIndex - 1));
        productDiv.querySelector('.carousel-control.right').addEventListener('click', () => showSlide(currentIndex + 1));

        showSlide(currentIndex); // Affiche la première diapositive
    }

    // Ajoute chaque produit à la liste
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product-container';
        productDiv.innerHTML = createItemHTML(product);
        productList.appendChild(productDiv);
        setupCarouselControls(productDiv);
    });

    // Ajoute chaque service à la liste
    services.forEach(service => {
        const serviceDiv = document.createElement('div');
        serviceDiv.className = 'product-container';
        serviceDiv.innerHTML = createItemHTML(service);
        serviceList.appendChild(serviceDiv);
        setupCarouselControls(serviceDiv);
    });
});
