document.addEventListener('DOMContentLoaded', function() {

    // Global Load
    loadNav();
    loadHeader();
    loadServices();
    loadPrograms();




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
        const span = document.createElement('span');
        span.classList.add('material-icons', 'nav__icon');
        span.setAttribute('aria-hidden', 'true');
        span.textContent = 'menu';
        hamburger.appendChild(span);
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
        });
        dark.addEventListener('click', (e) => {
            e.stopPropagation();
        if(!dark.classList.contains('d-none')) {
            darkOverlay();
            navMobile.classList.toggle('left');
            navMobile.classList.toggle('right');
        }
        });
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
        h2.classList.add('heading-primarni', 'heading-primarni--dopunski');
        h2.textContent = `where athletes are made`;
        const h1 = document.createElement('h1');
        h1.classList.add('heading-primarni', 'heading-primarni--glavni');
        h1.textContent = `Turn Your athlete`;
        const span = document.createElement('span');
        span.textContent = `on`;
        const btn = document.createElement('a');
        btn.classList.add('btn');
        btn.textContent = `Our Programs`;
        btn.setAttribute('href', 'programs.html');

        h1.appendChild(span);
        headerContent.appendChild(h2);
        headerContent.appendChild(h1);
        headerContent.appendChild(btn);
        header.appendChild(headerContent);
    }


    //Services 
    function loadServices() {
        const services = document.getElementById('services');
        const serviceHeading = document.createElement('h3');
        serviceHeading.classList.add('heading-sekundarni', 'services__heading');
        serviceHeading.textContent = 'Our services';
        const cards = document.createElement('div');
        cards.classList.add('services__cards', 'mt-md');
        services.appendChild(serviceHeading);

        const nizCards = new Array(
            ['supervisor_account','Worlds best coaches','Devlop Your athletic performance with the help of our excellent coaching Staff'],
            ['fitness_center','Excellent Equipment','Devlop Your athletic performance with the help of our excellent coaching Staff'],
            ['sports_mma','Training for any Sport','Devlop Your athletic performance with the help of our excellent coaching Staff'],
            ['self_improvement','Injury Prevention','Devlop Your athletic performance with the help of our excellent coaching Staff'],
        );
        for(let i=0; i<nizCards.length; i++) {
            const card = document.createElement('div');
            card.classList.add('services__card');
            const span = document.createElement('span');
            span.classList.add('material-icons', 'services__icon');
            span.textContent = nizCards[i][0];
            const h4 = document.createElement('h4');
            h4.classList.add('heading-ternarni', 'services__card-heading');
            h4.textContent = nizCards[i][1];
            const p = document.createElement('p');
            p.textContent = nizCards[i][2];

            card.appendChild(span);
            card.appendChild(h4);
            card.appendChild(p);
            cards.appendChild(card);
        }
        services.appendChild(cards);
    }

    //Programs
    function loadPrograms() {

        const nizCards = new Array(
            ['athlete-1.jpg', 'Explosive', 'athlete, explosive training', '6', '400.00' ],
            ['athlete-2.jpg', 'Flexible', 'athlete, flexible training','8', '320.00' ],
            ['athlete-3.jpg', 'Strong', 'athlete, strong training', '4', '430.00' ],
            ['athlete-4.jpg', 'Fast', 'athlete, fast training', '8', '500.00' ],
            ['athlete-5.jpg', 'Conditioned', 'athlete, conditioning, training', '10', '460.00' ],
            ['athlete-6.jpg', 'Functional', 'athlete, functional training', '6', '380.00' ]
        );

        const programs = document.getElementById('programs');
        const programsHeading = document.createElement('h3');
        programsHeading.classList.add('heading-sekundarni');
        programsHeading.textContent = 'Our Programs';
        programs.appendChild(programsHeading);
        const cards = document.createElement('div');
        cards.classList.add('programs__cards', 'mt-md');

        for(let i=0; i<nizCards.length; i++) {

            // Constants

            const card = document.createElement('div');
            card.classList.add('programs__card');

            const head = document.createElement('div');
            head.classList.add('programs__head');
            const placeholder = document.createElement('div');
            placeholder.classList.add('programs__img-placeholder');
            const img = document.createElement('img');
            img.classList.add('programs__img');
            img.setAttribute('alt', nizCards[i][2]);
            img.setAttribute('src', `img/${nizCards[i][0]}`);
            img.addEventListener('click', () => {
                loadProgramsModal(`${i}`);
            });
            const h3 = document.createElement('h3');
            h3.classList.add('heading-ternarni', 'programs__heading');
            h3.textContent = nizCards[i][1];

            const body = document.createElement('div');
            body.classList.add('programs__body');
            const duration = document.createElement('div');
            duration.classList.add('programs__duaration');
            const spanDate = document.createElement('span');
            spanDate.classList.add('material-icons');
            spanDate.textContent = 'date_range';
            const h5Date = document.createElement('h5');
            h5Date.textContent = `${nizCards[i][3]} weeks`;
            const price = document.createElement('div');
            price.classList.add('programs__price');
            const spanCost = document.createElement('span');
            spanCost.classList.add('material-icons');
            spanCost.textContent = 'local_atm';
            const h5Cost = document.createElement('h5');
            h5Cost.textContent = `${nizCards[i][4]}`;

            const footer = document.createElement('div');
            footer.classList.add('programs__footer');
            const link = document.createElement('a');
            link.classList.add('btn', 'btn--scale', 'programs__btn');
            link.textContent = 'View More';
            // link.setAttribute('href', '');
            link.addEventListener('click', () => {
                loadProgramsModal(`${i}`);
            });

            // Appending
            placeholder.appendChild(img);
            placeholder.appendChild(h3);
            head.appendChild(placeholder);

            duration.appendChild(spanDate);
            duration.appendChild(h5Date);
            price.appendChild(spanCost);
            price.appendChild(h5Cost);
            body.appendChild(duration);
            body.appendChild(price);

            footer.appendChild(link);
            card.appendChild(head);
            card.appendChild(body);
            card.appendChild(footer);

            cards.appendChild(card);
        }
        programs.appendChild(cards);

        function loadProgramsModal(idx) {
            const programsModal = document.getElementById('programs-modal');
            programsModal.addEventListener('click', (e) => {
                // e.stopPropagation();
                // e.preventDefault();
                console.log(e);
                if(!programsModal.classList.contains('d-none') && e.originalTarget.classList.contains("dark-overlay")) {
                    programsModal.classList.add('d-none');
                }
                console.log('uslo');
            });

            const nizModalText = new Array(
                [`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem possimus nam sunt at illum enim adipisci cum, laboriosam, dolorem atque odio eligendi officia veritatis dignissimos iste facilis blanditiis quo incidunt, temporibus nostrum deleniti repudiandae unde?`],
                [`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem possimus nam sunt at illum enim adipisci cum, laboriosam, dolorem atque odio eligendi officia veritatis dignissimos iste facilis blanditiis quo incidunt, temporibus nostrum deleniti repudiandae unde?`],
                [`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem possimus nam sunt at illum enim adipisci cum, laboriosam, dolorem atque odio eligendi officia veritatis dignissimos iste facilis blanditiis quo incidunt, temporibus nostrum deleniti repudiandae unde?`],
                [`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem possimus nam sunt at illum enim adipisci cum, laboriosam, dolorem atque odio eligendi officia veritatis dignissimos iste facilis blanditiis quo incidunt, temporibus nostrum deleniti repudiandae unde?`],
                [`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem possimus nam sunt at illum enim adipisci cum, laboriosam, dolorem atque odio eligendi officia veritatis dignissimos iste facilis blanditiis quo incidunt, temporibus nostrum deleniti repudiandae unde?`],
                [`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem possimus nam sunt at illum enim adipisci cum, laboriosam, dolorem atque odio eligendi officia veritatis dignissimos iste facilis blanditiis quo incidunt, temporibus nostrum deleniti repudiandae unde?`]
            );
            
            const modalCard = document.createElement('div');
            modalCard.classList.add('programs-modal__card');

            const modalHeader = document.createElement('div');
            modalHeader.classList.add('programs-modal__header', `programs-modal__img--${Number(idx)+1}`);
            // modalHeader.style.backgroundImage = `linear-gradient(rgba($osnovna, .2), rgba($specijal, .7)), url('../../img/athlete-${idx}.jpg')`;
            //modalHeader.style.backgroundImage = `linear-gradient(rgba(#f0f0f0, .2), rgba(#783030, .7)), url('img/athlete-${idx+1}.jpg')`;
            const h3 = document.createElement('h3');
            h3.classList.add('heading-sekundarni', 'heading-sekundarni--modal');
            h3.textContent = nizCards[idx][1];
            const modalHeaderSpan = document.createElement('span');
            modalHeaderSpan.textContent = ` Athlete`;
        
            const modalBody = document.createElement('div');
            modalBody.classList.add('programs-modal__body');
            const h4 = document.createElement('h4');
            h4.classList.add('heading-ternarni');
            h4.textContent = `${nizCards[idx][1]} Athlete`;
            const modalText = document.createElement('p');
            modalText.classList.add('programs-modal__text');
            modalText.textContent = nizModalText[idx];
            const modalInfo = document.createElement('div');
            modalInfo.classList.add('programs-modal__info');
            const modalDuration = document.createElement('div');
            modalDuration.classList.add('programs__duaration');
            const modalDurationSpan = document.createElement('span');
            modalDurationSpan.classList.add('material-icons');
            modalDurationSpan.textContent = 'date_range';
            const modalH5Duration = document.createElement('h5');
            modalH5Duration.textContent = `${nizCards[idx][3]} weeks`;
            const modalCost = document.createElement('div');
            modalCost.classList.add('programs__price');
            const modalCostSpan = document.createElement('span');
            modalCostSpan.classList.add('material-icons');
            modalCostSpan.textContent = 'local_atm';
            const modalH5Cost = document.createElement('div');
            modalH5Cost.textContent = nizCards[idx][4];

            const modalFooter = document.createElement('div');
            modalFooter.classList.add('programs-modal__footer');
            const modalBtn = document.createElement('a');
            modalBtn.setAttribute('href', 'contact.html');
            modalBtn.classList.add('btn', 'btn--scale', 'btn--modal', 'programs__btn');
            modalBtn.textContent = 'Get Started';
            const closeSpan = document.createElement('span');
            closeSpan.classList.add('material-icons', 'programs-modal__close', 'md-18');
            closeSpan.textContent = 'cancel_presentation';
            closeSpan.addEventListener('click', () => {
                programsModal.classList.toggle('d-none');
            });

            // Appending
            h3.appendChild(modalHeaderSpan);
            modalHeader.appendChild(h3);

            modalDuration.appendChild(modalDurationSpan);
            modalDuration.appendChild(modalH5Duration);

            modalCost.appendChild(modalCostSpan);
            modalCost.appendChild(modalH5Cost);

            modalInfo.appendChild(modalDuration);
            modalInfo.appendChild(modalCost);

            modalBody.appendChild(h4);
            modalBody.appendChild(modalText);
            modalBody.appendChild(modalInfo);

            modalFooter.appendChild(modalBtn);

            modalCard.appendChild(modalHeader);
            modalCard.appendChild(modalBody);
            modalCard.appendChild(modalFooter);
            modalCard.appendChild(closeSpan);

            programsModal.appendChild(modalCard);
            
            if(programsModal.classList.contains('d-none')) {
                programsModal.classList.remove  ('d-none');
            }

            // const tagBody = document.querySelector('body');
            // const dark = document.getElementById('dark-overlay');
            //     hamburger.addEventListener('click', (e) => {
            //     e.stopPropagation();
        
            //     navMobile.classList.toggle('left');
            //     navMobile.classList.toggle('right');
            //     darkOverlay();
            // });
        }
    } 

})




