document.addEventListener('DOMContentLoaded', function() {

    // Global Load
    loadNav();
    loadHeader();





    // Nav
    function loadNav() {
        const nav = document.getElementById('nav');
    
        const nizNav = new Array(
            ['Home', 'index.html'],
            ['About', 'about.html'],
            ['Programs', 'programs.html'],
            ['Author', 'author.html'],
            ['Docs', 'docs.html']
        );
    
    
        const logo = document.createElement('div');
        const logoLink = document.createElement('a');
        logoLink.textContent = `athleteON`;
        logoLink.setAttribute('href', 'index.html');
        logo.appendChild(logoLink);
        logo.classList.add('nav__logo');
        nav.appendChild(logo);
        const ul = document.createElement('ul');
        ul.classList.add('nav__menu')
        
        for(let i=0; i<nizNav.length; i++) {
            const li = document.createElement('li');
            li.classList.add('nav__item');
            const a = document.createElement('a');
            a.textContent = nizNav[i][0];
            a.setAttribute('href', nizNav[i][1]);
            a.classList.add('nav__link')
            li.appendChild(a);
            ul.appendChild(li);
        }
        const hamburger = document.createElement('div');
        hamburger.classList.add('nav__hamburger');
        const i = document.createElement('i');
        i.classList.add('fa', 'fa-bars', 'nav__icon');
        i.setAttribute('aria-hidden', 'true');
        hamburger.appendChild(i);
        ul.appendChild(hamburger);
        nav.appendChild(ul);
    
    
        //Nav Mobile
        const navMobile = document.getElementById('nav-mobile');
        navMobile.classList.add('left');
        const ulMobile = document.createElement('ul');
        ulMobile.classList.add('nav-mobile__menu', 'mt-lg')
        for(let i=0; i<nizNav.length; i++) {
            const li = document.createElement('li');
            li.classList.add('nav-mobile__item');
            const a = document.createElement('a');
            a.textContent = nizNav[i][0];
            a.setAttribute('href', nizNav[i][1]);
            a.classList.add('nav-mobile__link')
            li.appendChild(a);
            ulMobile.appendChild(li);
        }
        navMobile.appendChild(ulMobile);
    
        const dark = document.getElementById('dark-overlay');
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
    
            navMobile.classList.toggle('left');
            navMobile.classList.toggle('right');
            darkOverlay();
        })
        dark.addEventListener('click', (e) => {
            e.stopPropagation();
        if(!dark.classList.contains('d-none')) {
            darkOverlay();
            navMobile.classList.toggle('left');
            navMobile.classList.toggle('right');
        }
        })
        function darkOverlay() {
            dark.classList.toggle('d-none'); 
        }
    }



    // Header
    function loadHeader() {
        const header = document.getElementById('header');
        const headerContent = document.createElement('div');
        headerContent.classList.add('header__content');
        const h2 = document.createElement('h2');
        h2.classList.add('heading-sekundarni');
        h2.textContent = `where athletes are made`;
        const h1 = document.createElement('h1');
        h1.classList.add('heading-primarni', 'heading-primarni--glavni');
        h1.textContent = `Turn Your athlete`;
        const span = document.createElement('span');
        span.textContent = `on`;
        const btn = document.createElement('button');
        btn.classList.add('btn');
        btn.textContent = `Our Programs`;

        h1.appendChild(span);
        headerContent.appendChild(h2);
        headerContent.appendChild(h1);
        headerContent.appendChild(btn);
        header.appendChild(headerContent);
    }
})




