/* typing animation */

let typed = new Typed('.typing', {
    strings: ['', 'React Developer', 'Web Developer', 'Vue Developer', 'Frontend Developer', 'JavaScript Developer'],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});

/* aside */
const nav = document.querySelector('.nav');
const navList = document.querySelectorAll('li');
const totalNavList = navList.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector('a');
    a.addEventListener('click', function() {
        for (let j = 0; j < totalNavList; j++) {
            navList[j].querySelector('a').classList.remove('active');
        }
        this.classList.add('active');
        showSection(this);
    })
}

function showSection(element) {
    console.log(element.getAttribute('href').split('#'))
}