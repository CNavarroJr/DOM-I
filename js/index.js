const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// // Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"]);


const select = s => document.querySelector(s),
      selectAll = s => document.querySelectorAll(s);

const bottomh4 = selectAll('.bottom-content .text-content h4'),
      bottomp = selectAll('.bottom-content .text-content p'),
      ctah1 = select('.cta-text h1'),
      ctabutton = select('.cta-text button'),
      ctaimg = select('#cta-img'),
      contacth4 = select('.contact h4'),
      contactp = selectAll('.contact p'),
      footer = select('footer p'),
      logoimg = select('#logo-img'),
      middleimg = select('#middle-img')
      nav = select('header nav'),
      navlist = selectAll('header nav a'),
      tcontenth4 = selectAll('.top-content .text-content h4'),
      tcontentp = selectAll('.top-content .text-content p');


// // Navigation part
const blog = document.createElement('a'),
      adventure = document.createElement('a');

blog.innerText = 'Blog';
adventure.innerText = 'Adventure';

nav.prepend(blog);
nav.appendChild(adventure);

navlist.forEach((e, i) => {
  e.innerText = siteContent['nav'][`nav-item-${i + 1}`];
});

navlist = selectAll('header nav a');

navlist.forEach(e => e.style.color = 'green');

//Logo
logoimg.setAttribute('src', siteContent['nav']['img-src']);

//Call To Action
ctah1.innerText = siteContent['cta']['h1'];
ctabutton.innerText = siteContent['cta']['button'];
ctaimg.setAttribute('src', siteContent['cta']['img-src']);

//Features Section
tcontenth4[0].innerText = siteContent['main-content']['features-h4'];
tcontentp[0].innerText = siteContent['main-content']['features-content'];

//About Section
tcontenth4[1].innerText = siteContent['main-content']['about-h4'];
tcontentp[1].innerText = siteContent['main-content']['about-content'];

//Middle Image 
middleimg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//Services Section
bottomh4[0].innerText = siteContent['main-content']['services-h4'];
bottomp[0].innerText = siteContent['main-content']['services-content'];

//Product Section
bottomh4[1].innerText = siteContent['main-content']['product-h4'];
bottomp[1].innerText = siteContent['main-content']['product-content'];

//Vision Section
bottomh4[2].innerText = siteContent['main-content']['vision-h4'];
bottomp[2].innerText = siteContent['main-content']['vision-content'];

//Contact Section
contacth4.innerText = siteContent['contact']['contact-h4'];
contactp[0].innerText = siteContent['contact']['address'];
contactp[1].innerText = siteContent['contact']['phone'];
contactp[2].innerText = siteContent['contact']['email'];

//Copyright
footer.innerText = siteContent['footer']['copyright'];


document.querySelector(".top-content").style.backgroundColor = "#14967c";
document.querySelector(".main-content").style.backgroundColor = "#afe4e4";
