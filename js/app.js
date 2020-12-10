document.addEventListener('DOMContentLoaded', function() {

    // Global Load
    let location = window.location.pathname;
    loadNav();
    loadHeader(location);
    loadFooter();
    loadBackToTop()

    // let location = window.location.pathname;
    if(location.indexOf('index') != -1) {
        console.log(location);
        console.log("ovo je html strana");
        console.log('usao sam i ovde');
        loadPrograms(location);
        loadReviews();
        loadContactForm();
        loadServices();
        loadAosPlugin();
    }
    else if(location.indexOf('about') != -1) {
        console.log('ovo je about strana');
        loadServices();
        loadFaq();
    }
    else if(location.indexOf('programs') != -1) {
        // console.log('ovo je about strana');
        loadPrograms(location);
        loadReviews();
        loadAosPlugin();
    }
    else if(location.indexOf('contact') != -1) {
        loadContactForm();
        loadReviews();
    }
    else if(location.indexOf('author') != -1) {
        loadAccordion()
    }
    console.log(location);
    
    




    // Nav
    function loadNav() {
        const nav = document.getElementById('nav');

       
        
        const nizNav = new Array(
            ['Home', 'index.html'],
            ['About', 'about.html'],
            ['Programs', 'programs.html'],
            ['Contact', 'contact.html'],
            ['Author', 'author.html'],
            // ['Docs', 'docs.html']
        );
    
    
        const logo = document.createElement('div');
        const logoLink = document.createElement('a');
        logoLink.textContent = `athleteON`;
        logoLink.setAttribute('href', 'index.html');
        logo.appendChild(logoLink);
        logo.classList.add('nav__logo');
        nav.appendChild(logo);
        const ul = document.createElement('ul');
        ul.classList.add('nav__menu');
        
        for(let i=0; i<nizNav.length; i++) {
            const li = document.createElement('li');
            if(location.substring(1, location.length) == nizNav[i][1] && window.screen.availWidth >= 850) {
                li.classList.add('active');
            }
            window.addEventListener('resize', () => {
                if(window.screen.availWidth >= 850 && location.substring(1, location.length) == nizNav[i][1]) {
                    li.classList.add('active');
                }
                else {
                    li.classList.remove('active');
                }
            })
            li.classList.add('nav__item');
            const a = document.createElement('a');
            a.textContent = nizNav[i][0];
            a.setAttribute('href', nizNav[i][1]);
            a.classList.add('nav__link')
            li.appendChild(a);
            ul.appendChild(li);
        }

        // nizNav.forEach(el => {
        //     if(el[1] == location) {
        //         console.log(el);
        //     }
        // });
    
        const hamburger = document.createElement('div');
        hamburger.classList.add('nav__hamburger');
        const span = document.createElement('span');
        span.classList.add('material-icons', 'nav__icon');
        span.setAttribute('aria-hidden', 'true');
        span.textContent = 'menu';
        hamburger.appendChild(span);
        ul.appendChild(hamburger);
        nav.appendChild(ul);

        loadMobileNav();



        function loadMobileNav() {
            const navMobile = document.getElementById('nav-mobile');
            navMobile.classList.add('left');
            const ulMobile = document.createElement('ul');
            ulMobile.classList.add('nav-mobile__menu', 'mt-lg')
            for(let i=0; i<nizNav.length; i++) {
                const li = document.createElement('li');
                li.classList.add('nav-mobile__item');
                if(location.substring(1, location.length) == nizNav[i][1]) {
                    li.classList.add('active');
                }
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
            window.addEventListener('resize', () => {
                if(window.screen.availWidth > 850 && !dark.classList.contains('d-none')) {
                    darkOverlay();
                    console.log('test');
                    navMobile.classList.add('left');
                    navMobile.classList.remove('right');
                    
                }
            })
            
            dark.addEventListener('click', (e) => {
                e.stopPropagation();
            if(!dark.classList.contains('d-none')) {
                darkOverlay();
                navMobile.classList.toggle('left');
                navMobile.classList.toggle('right');
            }
            });
            // }
            function darkOverlay() {
                dark.classList.toggle('d-none'); 
            }
            function removeDarkOverlay() {
                dark.classList.remove('d-none');
                console.log('koji kurac');
            }

        // Kraj loadMobileNav()
        }


    // Kraj loadNav()    
    }



    // Header
    function loadHeader(location) {
        const header = document.getElementById('header');
        const headerContent = document.createElement('div');
        headerContent.classList.add('header__content');
        const h2 = document.createElement('h2');
        h2.classList.add('heading-primarni', 'heading-primarni--dopunski');
        h2.textContent = `where athletes are made`;
        const h1 = document.createElement('h1');
        h1.classList.add('heading-primarni', 'heading-primarni--glavni');
        if(location.indexOf('index') != -1 ){
            h1.textContent = `Turn Your athlete`;
        }else if(location.indexOf('about') != -1) {
            h1.textContent = `About athlete`;
        }else if(location.indexOf('programs') != -1) {
            h1.textContent = `Programs`;
        }else if(location.indexOf('contact') != -1) {
            h1.textContent = `Contact athlete`;
        }else if(location.indexOf('author') != -1) {
            h1.textContent = `Author`;
        }
        const span = document.createElement('span');
        span.textContent = `on`;

        h1.appendChild(span);
        headerContent.appendChild(h2);
        headerContent.appendChild(h1);

        if(location.indexOf('index') != -1) {
            const btn = document.createElement('a');
            btn.classList.add('btn');
            btn.textContent = `Our Programs`;
            btn.setAttribute('href', 'programs.html');
            headerContent.appendChild(btn);
        }
        
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
            ['supervisor_account','Worlds best coaches','Our mission is to make every athlete rise up to their fullest potential and become the best athlete they can be. That cannot be achieved without the supervision of the best coaches.'],
            ['fitness_center','Excellent Equipment','Facilites at athleteON are equiped with top of the line tools, machines and staff that will help You on your misson in becoming the best athlete you could possibly be.'],
            ['sports_mma','Training for any Sport','We do not limit ourselves to only one activity, sport or training method. Any athlete is one of our own. We take in anyone that is willing to put in the grind, and make them champions.'],
            ['self_improvement','Injury Prevention',`The biggest limiting factor to athletes progres isn't necessarily the lack of effort or bad training. It is due to injuries, and preventing them is the first step in becoming better.`],
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
    function loadPrograms(location) {

        const nizCards = new Array(
            ['athlete-1.jpg', 'Explosive', 'athlete, explosive training', '6', '400.00', 'weights' ],
            ['athlete-2.jpg', 'Flexible', 'athlete, flexible training','8', '320.00', 'yoga' ],
            ['athlete-3.jpg', 'Strong', 'athlete, strong training', '4', '430.00', 'weights' ],
            ['athlete-4.jpg', 'Fast', 'athlete, fast training', '8', '500.00', 'weights' ],
            ['athlete-5.jpg', 'Conditioned', 'athlete, conditioning, training', '10', '460.00', 'yoga' ],
            ['athlete-6.jpg', 'Functional', 'athlete, functional training', '6', '380.00', 'yoga' ]
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

            card.setAttribute(`data-type`, `${nizCards[i][5]}`)
            card.setAttribute(`data-aos`, `slide-up`);

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

    

        // Ovde smo menjali
       if(location.indexOf('programs') != -1) {
        const btnGroup = document.getElementById('btn-group');
        const nizBtns = btnGroup.querySelectorAll('.btn');

        const eachBtn = document.querySelectorAll('.programs__card');

        nizBtns.forEach( e => {
            e.addEventListener('click', e => {
                e.preventDefault();
                console.log(e);
                eachBtn.forEach(el => {
                    console.log(e.target.id);
                    if(e.target.id == 'all'){
                        el.classList.remove('d-none');
                    }
                    else {
                        if(e.target.id !=  el.getAttribute('data-type')) {
                            el.classList.add('d-none');
                        }
                        else {
                            el.classList.remove('d-none');
                        }
                    }
                });
                
            });
        });
       }





       

        function loadProgramsModal(idx) {
            const programsModal = document.getElementById('programs-modal');
            
            programsModal.addEventListener('click', e => {
                const programsModalCard = document.querySelector('.programs-modal__card');
                if(!programsModal.classList.contains('d-none') && e.target.classList.contains("dark-overlay")) {
                    programsModal.classList.add('d-none');
                    programsModal.lastChild.remove();
                }
            });

            const nizModalText = new Array(
                [`Explosive Athlete is a program dedicated to development of explosive power and vertical jump. It lasts 6 weeks, after which You are definitely going to witness improvement regardeless of your current shape and condition. Best value for athletes who want to up their current game.`],
                [`Flexible Athlete is an 8 week full body flexibility. Doing flexibility work is just as important for a well-rounded fitness routine as strength and cardio work. Incorporating some stretching exercises into your workout schedule will help you improve flexibility, reduce tightness, and ultimately, make your workouts more efficient and safe.`],
                [`Strong Athlete is a program developed around the idea of building muscle mass and building overall strength. It consists of 2 phases of 2 weeks. If You decide to take this program You are certainly expected to see increase in muscle size as well as absolute and relative strength.`],
                [`Fast Athlete is an 8 week speed program that develops acceleration, max speed, change of direction and agility as well as explosive power. It consists of 2 phases of 4 weeks. Needless to say every one of our athletes praise Fast Athlete program as the best thing for any speed related improvement.`],
                [`Conditioned Athlete is a 10 week program which finds a way to improve athletic performance by increasing the efficiency of each energy system. A properly structured training program assigns the right amount of time to both aerobic and anaerobic work in order to meet the demands of the sport. `],
                [`Functional athlete is a 6 week full body workout program. It consists of 3 phases of 2 weeks during which You are going to train your muscles to work together and prepare them for daily tasks by simulating common movements you might do at home, at work or in sports.`]
            );
            
            const modalCard = document.createElement('div');
            modalCard.classList.add('programs-modal__card');

            const modalHeader = document.createElement('div');
            modalHeader.classList.add('programs-modal__header', `programs-modal__img--${Number(idx)+1}`);
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


        }
    } 


    // Reviews
    function loadReviews(i = 0) {
        const reviews = document.getElementById('reviews');

        const nizReviewsLeft = new Array(
            ['Michael Robinson', 'Sep 24th, 2020', '9.1', '1', `I've taken the Strong Athlete program. I'm currently in week 3. It is though, but trust me, You won't regret it.`],
            ['James Jones', 'Aug 21st, 2020', '8.9', '3', `I was a powerlifter back in High School so I have experience with other explosive programs. I can certainly tell You, this one is spot on.`],
            ['Theodore Snipes', 'Oct 16th, 2020', '10', '5', `The Condiitioned Athlete program said it would help me improve my Stamina. It sure did. I've shredded my 5k as well as 3k time by a huge margin.`]
        );
        const nizReviewsRight = new Array(
            ['Angela Whitaker', 'Nov 30th, 2020', '9.8', '2', 'At first I was sceptical about their Flexible Athlete program, thinking it was just another one. But it sure chaged my mind when the results came.'],
            ['Victor Smith', 'Oct 18th, 2020', '9.4', '4', `I used to do Crossfit, but then the injury came so I had to opt for a different solution. I found the Functional Athlete program and I absolutely love it.`],
            ['Lana Grey', 'Sep 13th, 2020', '9.2', '6', `I was a 100m sprinter back in College, and I missed the track so much. I've taken the Fast Athlete program, it certainly delivers what it promises.`]
        );

        reviews.innerHTML = ``;
        reviews.innerHTML += `
                <div class="reviews__wrapper mt-md mb-md">
                <h3 class="heading-sekundarni reviwes__heading">Our Reviews</h3>
                <div class="reviews__cards mt-md mb-sm">
                    <div class="reviews__card reviews__card--1">
                        <div class="reviews__body">
                            <p class="reviews__text">${nizReviewsLeft[i][4]}</p>
                        </div>
                        <div class="reviews__footer">
                            <div class="reviews__img-placeholder">
                                <img src="img/user-${nizReviewsLeft[i][3]}.jpg" alt="User" class="reviews__img">
                            </div>
                            <div class="reviews__info">
                                <div class="reviews__name">${nizReviewsLeft[i][0]}</div>
                                <div class="reviews__date">${nizReviewsLeft[i][1]}</div>
                            </div>
                            <div class="reviews__grade">
                                <span>${nizReviewsLeft[i][2]}</span>
                            </div>
                        </div>
                        <span class="reviews__quote material-icons">format_quote</span>
                    </div>
                    <div class="reviews__card reviews__card--2">
                        <div class="reviews__body">
                            <p class="reviews__text">${nizReviewsRight[i][4]}</p>
                        </div>
                        <div class="reviews__footer">
                            <div class="reviews__img-placeholder">
                                <img src="img/user-${nizReviewsRight[i][3]}.jpg" alt="User" class="reviews__img">
                            </div>
                            <div class="reviews__info">
                                <div class="reviews__name">${nizReviewsRight[i][0]}</div>
                                <div class="reviews__date">${nizReviewsRight[i][1]}</div>
                            </div>
                            <div class="reviews__grade">
                                <span>${nizReviewsRight[i][2]}</span>
                            </div>
                        </div>
                        <span class="reviews__quote material-icons">format_quote</span>
                    </div>

                </div>
                <span id="forthBtn" class="material-icons reviews__forward">arrow_forward_ios</span>
                <span id="backBtn" class="material-icons reviews__back">arrow_back_ios</span>
            </div>
        `;
        const forth = document.getElementById('forthBtn');
        const back = document.getElementById('backBtn');

        forth.addEventListener('click', () =>  {
            if(i >= 2 ) {
                loadReviews(0);
            }
            else {
                loadReviews(i+1);
            }
        });

        back.addEventListener('click', () => {
            if(i <= 0) {
                loadReviews(nizReviewsLeft.length - 1)
                // console.log(nizReviewsLeft.length - 1)
            }
            else {
                loadReviews(i-1)
            }
        });

    }



    // Footer
    function loadFooter() {
        const footer = document.getElementById('footer');
    
        const nizSocial = new Array(
            ['facebook'], ['twitter'], ['youtube'], ['instagram']
        );
        const nizFooterNav = new Array(
            ['Home', 'index.html'],
            ['About', 'about.html'],
            ['Programs', 'programs.html'],
            ['Contact', 'contact.html'],
            ['Author', 'author.html'],
            // ['Docs', 'docs.pdf']
        );
        const nizUseful = new Array(
            ['Docs', 'docs.pdf'],
            ['Sitemap', 'sitemap.xml'],
            ['LinkedIn', 'https://linkedin.com'],
            ['Github', 'https://github.com']
        );
        const nizFooterContact = new Array(
            ['home', 'Tosin Bunar bb, 4F'],
            ['mail', 'athleteON@gmail.com'],
            ['local_phone', '+ 011 234 567'],
            ['local_phone', '+381 60 123 4567']
        )
        const date = new Date();
        const year = date.getFullYear();
        
    
        // Adding Content to Footer
        let footerContent = `
            <div class="footer__head">
                <div class="footer__head-content">
                    <h4 class="footer__social-text">Get connected with us on social networks!</h4>
                    <div class="footer__social-links">
        `;
        for(let i=0; i<nizSocial.length; i++) {
            footerContent += `
            <span>
                <a href="https://${nizSocial[i]}.com" target='_blank'>${nizSocial[i]}</a>
            </span>
        `;
        }
        footerContent += `
                    </div>
                </div>
            </div>
            <div class="footer__body ">
            <div class="footer__body-content">
                <div class="footer__company">
                    <h4 class="footer__company-name heading-ternarni">athleteON</h4>
                    <p class="company__text">AthleteON is a private company developed to help athletes achieve their goals and peek their performance.</p>
                </div>
                <div class="footer__navigation">
                    <h4 class="footer__nav-name heading-ternarni">Other Nav</h4>
                    <ul class="footer__nav">
        `;
        for(let i=0; i<nizFooterNav.length; i++) {
            footerContent += `
                <li><a href="${nizFooterNav[i][1]}">${nizFooterNav[i][0]}</a></li>  
            `;
        }
        footerContent += `
                    </ul>
                </div>
                <div class="footer__useful">
                    <h4 class="footer__useful-links-name heading-ternarni">Useful links</h4>
                    <ul class="footer__useful-links">
        `;
        for(let i=0; i<nizUseful.length; i++) {
            footerContent += `
                        <li><a href="${nizUseful[i][1]}">${nizUseful[i][0]}</a></li>
            `;
        }
        footerContent += `
                    </ul>
                </div>
            <div class="footer__contact">
                <h4 class="footer__contact-name heading-ternarni">Contact</h4>
        `;
        for(let i=0; i<nizFooterContact.length; i++) {
            footerContent += `
            <div class="footer__contact-info">
                <span class="material-icons footer__contact-icon">
                    ${nizFooterContact[i][0]}
                </span>
                <p class="footer__contact-text">${nizFooterContact[i][1]}</p>
            </div>
            `
        }
        footerContent += `</div>
        </div>
        </div>
        <div class="footer__footer">
            <p class="footer__footer-content">
                &copy;&nbsp;<span id="footer__footer-date">${year}</span>&nbsp;Copyright Pavle Djurdjic 7/19
            </p>
        </div>
        `;  
        footer.innerHTML = footerContent;
    
    }







    function loadContactForm() {
        $('#contact-modal').hide();

        const form = document.getElementById('form');
        // console.log(form);

        const firstName = form.fname;
        const lastName = form.lname;
        const dateBirth = form.dateBirth;
        const email = form.email;
        const submit = form.btnSubmit;

        const checkboxMessage = document.getElementById('checkboxMessage');

        const regName =  /^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,15}$/;
        const regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        

        let message = null;
        let icon = null;
        let parent = null;


        const  nizAllInputValues = new Array();
        const nizInputs = new Array(firstName, lastName, dateBirth, email);
        const nizMsg = new Array('Name', 'Last Name', 'Birthday', 'Email');
        const nizErrMsg = new Array(
            [`You probably just made a typo.
        Remember, 3-15 letters is good enough`, '', 'Birthday', 'Email'],
            [`Are you sure you are that old?`, `Sorry kiddo, You are too young to use credit card`],
            [`Maybe you forgot something, see our example
            eg. example@gmail.com`]
            
        );
        const nizSuccMsg = new Array(
            [`Thats a lovely`],
            [`What a nice`],
            [`We'll check on You for Your`],
            ['Cool']
        ); 

        nizInputs.forEach((el, idx) => {
            el.addEventListener('focus', () => {
                inFocus(el, idx);
            });
            el.addEventListener('focusout', () => {
                outFocus(el, idx);
            });
            
        });


        // Functions
        function inFocus(e, idx) {
            message = e.nextElementSibling;
            icon = e.nextElementSibling.nextElementSibling;
            parent = e.parentElement;
            if(!parent.classList.contains('success')) {
                e.value = ``;
                message.innerText = `Please, tell us Your ${nizMsg[idx]}`;
                icon.innerText = ``;
                parent.classList.remove('error');
            }
            else if(parent.classList.contains('error')) {
                e.value = ``;
                message.innerText = ``;
                icon.innerText = ``;
            }
        }
        function outFocus(e, idx) {
            if(e.value === '') {
                inputEmpty(e, idx);
            }
            else if(e == firstName || e == lastName ) {
                checkNameInvalid(e, idx);
            }
            else if(e == email) {
                checkEmailInvalid(e, idx);
            }
            else if(e == dateBirth) {
                checkDateInvalid(e, idx);
            }
        }
        function checkNameInvalid(e, idx) {
            //e.value.length < 3 || e.value.length > 15
            // console.log(e.value);
            // console.log(regName.test(e.value));
            if(!regName.test(e.value)) {
                message.innerText = `${nizErrMsg[0][0]}`;
                parent.classList.add('error');
                icon.innerText = `report_problem`;
            }
            else if(e.value != ``) {
                validInput(e, idx);
            }
        }
        function inputEmpty(e, idx) {
            message.innerText = `Oops, seems You forogt to tell us Your ${nizMsg[idx]}`;
            parent.classList.add('error');
            icon.innerText = `report_problem`;
        }    
        function validInput(e, idx) {  
            message.innerText = `${nizSuccMsg[idx]} ${nizMsg[idx]}`;
            icon.innerText = `done`;
            parent.classList.remove('error');
            parent.classList.add('success');
        }
        function userOlder18(nizBirthElements) {
            const date = new Date(nizBirthElements[0] + 16, nizBirthElements[1] - 1, nizBirthElements[2]);
            const result = (date <= new Date());
            return result;
        }
        function checkDateInvalid(e, idx) {
            const nizUserBirthInput = dateBirth.value.split('-');
            nizBirthElements = new Array();
            
            for(let i=0; i<nizUserBirthInput.length; i++) {
                nizBirthElements[i] = Number(nizUserBirthInput[i]);
            }
            if(nizBirthElements[0] < 1900) {
                dateInvalid(0);
            }
            else if(!userOlder18(nizBirthElements)) {
                dateInvalid(1);
            }
            else {
                validInput(e, idx);
            }
        }
        function dateInvalid(idx) {
            message.innerText = `${nizErrMsg[1][idx]}`;
            parent.classList.add('error');
            icon.innerText = `report_problem`;
        }
        function checkEmailInvalid(e, idx) {
            // console.log(e.value);
            if(regEmail.test(e.value)) {
                validInput(e, idx);
            }
            else if (!regEmail.test(e.value)){
                emailInvalid();
            }
        }
        function emailInvalid() {
            message.innerText = `${nizErrMsg[2][0]}`;
            parent.classList.add('error');
            icon.innerText = `report_problem`;
        }

        
        
        // console.log(checkboxMessage);

        
        submit.addEventListener('click', e => {
            let countValidInputs = 0;

            ///Checkboxes
            const allCheckboxes = form.chProgram;
            const nizCheckedValues = new Array();
            
            
            // console.log(allCheckboxes);
            let countCheckboxes = 0;
            allCheckboxes.forEach(el => {
                if(el.checked) {
                    countCheckboxes++;
                    nizCheckedValues.push(el.value);
                    // console.log(nizCheckedValues);
                }
                else {
                    // console.log('nije cekiran');
                }
            });
            if(countCheckboxes === 0) {
                checkboxesInvalid();
            }
            else {
                checkboxMessage.innerText = ``;
            }
            function checkboxesInvalid() {
                checkboxMessage.innerText = `You forgot the best part`;
                checkboxMessage.style.color = '#783030';
            }
            if(nizCheckedValues.length === 0) {
                checkboxesInvalid();
            }
            // console.log(nizCheckedValues);
            //Checkboxes



            nizInputs.forEach(el => {
                // console.log(el.parentElement);
                if(!el.parentElement.classList.contains('error') && (el.value != ``)) {
                    // console.log('uslo u el');
                    countValidInputs += 1;
                }
            })
            if(nizInputs.length != countValidInputs) {
                nizInputs.forEach(el => {
                    if(el.value == ``) {
                        el.parentElement.classList.add('error');
                        el.nextElementSibling.innerText = ``;
                        el.nextElementSibling.nextElementSibling.innerText = `report_problem`;
                    }
                });
            }
            // console.log(nizInputs.length, countValidInputs);
            if(nizInputs.length == countValidInputs && nizCheckedValues.length >= 1) {
                nizInputs.forEach(el => {
                    nizAllInputValues.push(el.value);
                    // console.log(nizAllInputValues);
                    // Ovde proverava sve inpute
                    el.value = ``;
                    el.parentElement.classList.remove('success');
                    el.nextElementSibling.innerText = ``;
                    el.nextElementSibling.nextElementSibling.innerText = ``;
                });
            }
            else {
                // console.log('nije dobra forma');
                nizInputs.forEach((e, idx) => {
                    if(e.value == ``) {
                        inputEmptySubmit(e, idx);
                    }
                });
            }

            if(nizInputs.length == countValidInputs && nizCheckedValues.length >= 1){
                sendFinalValues(nizCheckedValues, nizAllInputValues);
            }
            



        });
        form.addEventListener('submit', e => {
            e.preventDefault();
        })

        function inputEmptySubmit(e, idx) {
            e.nextElementSibling.innerText = `Oops, seems You forogt to tell us Your ${nizMsg[idx]}`;
            e.parentElement.classList.add('error');
            e.nextElementSibling.nextElementSibling.innerText = `report_problem`;
        } 

        function sendFinalValues(checked, input) {
            console.log('Ovo su finalne vrednosti');
            console.log(checked);
            console.log(input);
            loadContactModal(checked, input);
        }
        
        

        

        loadInputToolTip(nizInputs);
    /// Kraj loadContactForm()      
    }

    function loadAccordion() {
        const moreInfo = document.getElementById('author-more');
        const btnReadMore = document.getElementById('author__read-more');
        const content = `
        <h4 class="heading-ternarni mb-sm mt-sm">About Author</h4>
        <p>My name is Pavle Djurdjic and I'm currently attending Visoka ICT, residing in Studenjak.
        <p>My main ambition is to become a Professinonal Web Developer.</p>
        <p>This is my fourth Web Project. It was done exclusively with HTML5, CSS3, JS and SASS (I had to include JQuery in order not to get penalized).</p>
        <p>Make sure to check out my other works. You can find it all at my <a href="#">Portfolio</a> webpage.</p>
        <p>If You'd like to see know more about this Project here is <a href="#">Docs</a>.</p>
        </p>`;

    
        btnReadMore.addEventListener('click', function(e) {
            e.preventDefault();
            if(moreInfo.innerHTML == '') {
                moreInfo.innerHTML = content;
                moreInfo.style.padding = '1.2rem 2.3rem';
                btnReadMore.textContent = `Read Less`;
            }else {
                moreInfo.innerHTML = '';
                moreInfo.style.padding = '0';
                btnReadMore.textContent = `Read More...`;
            }
            
        });
    }


    // JQuery numero Uno
    function loadFaq() {
        $('#faq-accordion > .faq__accordion > .faq__head').click(function() {
            $('.active-accordion').not(this).removeClass('active-accordion').next().hide(300);
    
            $(this).toggleClass('active-accordion');
            if(false == $(this).next().is(':visible')) {
                $('#faq-accordion > .faq__body').slideUp(300);
            }
            $(this).next().slideToggle(300);
        });
    
        let animationIsOff = $.fx.off;
        $.fx.off = true;
        $('#faq-accordion > .faq__accordion > .faq__head').click()
        $.fx.off = animationIsOff;
    }
    // JQuery numero Dos
    function loadContactModal(checked, input) {
        const contactModal = $('#contact-modal');
        $('#contact-modal').fadeIn(200);
        $('#dark-overlay-contact-modal').fadeIn(300);

        $('#contact-modal-first-name').text(input[0]);
        $('#contact-modal-last-name').text(input[1]);
        $('#contact-modal-email').text(input[3]);

        for(let i=0; i<checked.length; i++) {
            $('.contact-modal__selected-programs').append(`<div class="contact-modal__selected-program">${checked[i].charAt(0).toUpperCase()+checked[i].slice(1)}</div>`)
        }

    
        $('.contact-modal__close, #dark-overlay-contact-modal').click(function() {
            $('#contact-modal').fadeOut(200);
            $('#dark-overlay-contact-modal').fadeOut(300);
        });

    }
    //JQuery numero Tres
    function loadBackToTop() {
        $(window).scroll(function() {
            if($(this).scrollTop()) {
                $('#top').fadeIn();
            }else {
                $('#top').fadeOut();
            }
        });

        $('#top').click(function() {
            $('html, body').animate({scrollTop: 0}, 1000);
        });
    }
    //JQuery numero Cuatro
    function loadInputToolTip(nizInputs) {

        const nizInputToolTipMsg = new Array(
            'Starts with a capital and only contains letters (3-15)', 'Starts with a capital and only contains letters (3-15)', 'Must be older than 18', 'Must not contain any whitespace or start with a Number'
        );

        console.log(nizInputs[0].id);

        for(let i=0; i<nizInputs.length; i++) {
            console.log(nizInputs[i], nizInputToolTipMsg[i]);

            $(`#${nizInputs[i].id}`).hover(function() {
                $(this).css('cursor','pointer').attr('title', `${nizInputToolTipMsg[i]}`);
            }, function() {
                $(this).css('cursor','auto');
            });

        }
    }
    //Hasta luego JQuery para siempre

    
    function loadAosPlugin() {
        AOS.init();
    }
        

///Kraj Globalne Funkcije  
})




