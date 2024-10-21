// Part 1: Select and modify the <main> element
const mainEl = document.querySelector('main');

// Set the background color using a CSS variable
mainEl.style.backgroundColor = 'var(--main-bg)';

// Set the inner HTML of the main element
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

// Add a class of flex-ctr to mainEl
mainEl.classList.add('flex-ctr');

// Part 2: Select and modify the <nav> element
const topMenuEl = document.getElementById('top-menu');

// Set height and background color of the top-menu element
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Add a class of flex-around to topMenuEl
topMenuEl.classList.add('flex-around');

// Part 3: Add menu items dynamically
const menuLinks = [
  { text: 'About', href: '#about' },
  { text: 'Catalog', href: '#catalog' },
  { text: 'Orders', href: '#orders' },
  { text: 'Account', href: '#account' }
];

// Iterate through the array to create and append <a> elements
menuLinks.forEach(link => {
    const linkEl = document.createElement('a');
    linkEl.href = link.href;
    linkEl.textContent = link.text;
    topMenuEl.appendChild(linkEl);
});
