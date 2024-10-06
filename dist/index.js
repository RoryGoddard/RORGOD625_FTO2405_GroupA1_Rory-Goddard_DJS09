import { showReviewTotal, populateUser } from './utils.js';
document.addEventListener('DOMContentLoaded', () => {
    const propertyContainer = document.querySelector('.properties');
    console.log('propertyContainer:', propertyContainer);
    const reviewTotalDisplay = document.querySelector('#reviews');
    console.log('reviewTotalDisplay:', reviewTotalDisplay);
    const returningUserDisplay = document.querySelector('#returning-user');
    console.log('returningUserDisplay:', returningUserDisplay);
    const userNameDisplay = document.querySelector('#user');
    console.log('userNameDisplay:', userNameDisplay);
    // Rest of your code...
    let isOpen;
    // Reviews
    const reviews = [
        {
            name: 'Sheia',
            stars: 5,
            loyaltyUser: true,
            date: '01-04-2021'
        },
        {
            name: 'Andrzej',
            stars: 3,
            loyaltyUser: false,
            date: '28-03-2021'
        },
        {
            name: 'Omar',
            stars: 4,
            loyaltyUser: true,
            date: '27-03-2021'
        },
    ];
    // User
    const you = {
        firstName: 'Bobby',
        lastName: 'Brown',
        isReturning: true,
        age: 35,
        stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
    };
    // Array of Properties
    const properties = [
        {
            image: 'images/colombia-property.jpg',
            title: 'Colombian Shack',
            price: 45,
            location: {
                firstLine: 'shack 37',
                city: 'Bogota',
                code: 45632,
                country: 'Colombia'
            },
            contact: 'marywinkle@gmail.com',
            isAvailable: true
        },
        {
            image: 'images/poland-property.jpg',
            title: 'Polish Cottage',
            price: 34,
            location: {
                firstLine: 'no 23',
                city: 'Gdansk',
                code: 343903,
                country: 'Poland'
            },
            contact: 'garydavis@hotmail.com',
            isAvailable: false
        },
        {
            image: 'images/london-property.jpg',
            title: 'London Flat',
            price: 23,
            location: {
                firstLine: 'flat 15',
                city: 'London',
                code: 35433,
                country: 'United Kingdom',
            },
            contact: 'andyluger@aol.com',
            isAvailable: true
        }
    ];
    // Functions
    showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
    populateUser(you.isReturning, you.firstName);
    //Add the properties
    for (let i = 0; i < properties.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = properties[i].title;
        const image = document.createElement('img');
        image.setAttribute('src', properties[i].image);
        card.appendChild(image);
        propertyContainer.appendChild(card);
    }
});
