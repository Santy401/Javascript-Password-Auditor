const nav1 = document.querySelector('.section1');
const nav2 = document.querySelector('.section2');
const calculatorSection = document.querySelector('.PasswordCalculator');
const generatorSection = document.querySelector('.PasswordGenerator');

if (calculatorSection.style.display === 'flex') {
    nav1.classList.add('selected');
} else {
    nav2.classList.add('selected');
}

nav1.addEventListener('click', () => {
    calculatorSection.style.display = 'flex';
    generatorSection.style.display = 'none';
    
    nav1.style.textDecoration = 'underline';
    nav1.style.color = 'black';
    nav1.classList.add('selected');
    
    nav2.style.textDecoration = 'none';
    nav2.style.color = '#007BFF';
    nav2.classList.remove('selected');

});

nav2.addEventListener('click', () => {
    calculatorSection.style.display = 'none';
    generatorSection.style.display = 'flex';
    
    nav2.style.textDecoration = 'underline';
    nav2.style.color = 'black';
    nav2.classList.add('selected');
    
    nav1.style.textDecoration = 'none';
    nav1.style.color = '#007BFF';
    nav1.classList.remove('selected');
    
});