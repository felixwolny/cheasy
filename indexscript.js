const searchInput = document.querySelector("[data-search]")

var headers = []
var inputvalue = ""

var users = []
var maxCount = 3


const products = [
    {
        name: "Airpods Max",
        originallink: "amazon.de",
        image: "images/airpodsmax.jpg",
        link: "https://www.google.com/marketing/felixwolny",
        tag: "tag"
    },
    {
        name: "Airpods Pro 2",
        originallink: "amazon.de",
        image: "images/airpodspro2.jpg",
        link: "https://www.google.com",
        tag: "tag"
    },
    {
        name: "iPhone 12",
        originallink: "amazon.de",
        image: "images/iPhone12.jpg",
        link: "https://www.google.com",
        tag: "tag"
    },
    {
        name: "iPhone 13",
        originallink: "amazon.de",
        image: "images/iPhone13.jpg",
        link: "https://www.google.com",
        tag: "tag"
    },
    {
        name: "iPhone 14 Pro",
        originallink: "amazon.de",
        image: "images/iPhone14pro.jpg",
        link: "https://www.google.com",
        tag: "tag"
    },
    {
        name: "iPhone 11",
        originallink: "amazon.de",
        image: "images/iPhone11.jpg",
        link: "https://www.google.com",
        tag: "tag"
    },
    {
        name: "Macbook Air M2",
        originallink: "amazon.de",
        image: "images/macbookairm2.jpg",
        link: "https://www.google.com",
        tag: "tag"
    },
    {
        name: "2022 Apple TV 4K",
        originallink: "amazon.de",
        image: "images/2022appletv4k.jpg",
        link: "https://www.google.com",
        tag: "tag"
    },
    {
        name: "Macbook Pro 14\" M1Pro",
        originallink: "amazon.de",
        image: "images/macbookpro14m1pro.jpg",
        link: "https://www.google.com",
        tag: "tag"
    },
    {
        name: "Macbook Air M1",
        originallink: "amazon.de",
        image: "images/macbookairm1.jpg",
        link: "https://www.google.com",
        tag: "tag"
    },
    {
        name: "iPad Pro M4",
        originallink: "amazon.de",
        image: "https://m.media-amazon.com/images/I/71WyMBEqYtL._AC_SL1500_.jpg",
        link: "https://www.google.com",
        tag: "Apple"
    },
    {
        name: "iMac",
        originallink: "amazon.de",
        image: " https://m.media-amazon.com/images/I/61Tedl8bksL._AC_SL1500_.jpg",
        link: "https://www.google.com",
        tag: "Apple"
    },
    {
        name: "SanDisk Ultra Dual Drive Go USB Type-C Stick",
        originallink: "https://www.amazon.de/SanDisk-Ultra-Dual-Drive-C-Flash-Laufwerk/dp/B07YYJL21Z/ref=pd_ci_mcx_mh_mcx_views_0_title?pd_rd_w=R62N1&content-id=amzn1.sym.7f9b9996-bc03-4d04-b9b7-40b61293137b%3Aamzn1.symc.ca948091-a64d-450e-86d7-c161ca33337b&pf_rd_p=7f9b9996-bc03-4d04-b9b7-40b61293137b&pf_rd_r=4G63E61C7CPXYA5FPBG4&pd_rd_wg=hSQ5v&pd_rd_r=0cc90388-1d3e-4ceb-811b-ad25c2cc9500&pd_rd_i=B07YYJ63VF&th=1",
        image: "https://m.media-amazon.com/images/I/71mkKDvlmwS._AC_SX679_.jpg",
        link: "https://amzn.to/4hjm0Ss",
        tag: "sandisk usb-c usbc SanDisk Ultra Dual Drive Go USB Type-C 256 GB (Android Smartphone Speicher, USB Type-C-Anschluss, 150 MB/s Lesegeschwindigkeit, Nutzung als Schlüsselanhänger möglich)"
    },

    // Add more products here
];


function start() {
    users = document.getElementsByClassName("card")
    console.log(users)
    console.log('This is  a test.  This is only a test.')
    /*for (let i = 0; i < users.length; i++) { 
        headers[i] = document.getElementsByClassName("header")
        console.log(headers[i])

        for(var i=0;i < headers.length; i++){
            console.log(headers[i].textContent);
        }
    }
    for(var l = 0; l < users.length; l++){
        users[l].classList.remove("hide")
    }*/




}
function displayAll() {
    document.getElementsByClassName('top')[0].classList.add("higher")
    console.log("Display all")
    /* Hide all */
    for (var r = 0; r < users.length; r++) {
        users[r].classList.add("hide")
    }
    /*Hide all */
    var more = document.getElementsByClassName('headermore');
    more[0].classList.add("hide")
    var text = ""
    text = document.getElementById('searchbar').value.toString()
    console.log(text)
    var headers = document.getElementsByClassName('header');
    let counter = 0

    for (var i = 0; i < headers.length; i++) {

        let formatText = headers[i].textContent.toString()
        formatText = formatText.toLowerCase()
        text = text.toLowerCase()
        console.log(text)
        console.log(formatText)
        let words = text.match(/\b(\w+)\b/g)
        var includes = false
        var containsall = true;
        for (var l = 0; l < words.length; l++) {
            console.log("Current word: " + words[l])
            if (!formatText.includes(words[l])) {
                containsall = false
            }
        }
        if (containsall) {
            users[i].classList.remove("hide")
            includes = true
            counter++
        }
        if (includes != true) {
            console.log("Not including")
            users[i].classList.add("hide")

        }
        console.log("Counter" + counter)
        if (counter > maxCount) {
            console.log("Too much")
            users[i].classList.add("hide")
            maxCount = maxCount + 3
            activateMore()
            break
        }
        else {
            deactivateMore()
        }
    }
    if (text == "") {
        for (var i = 0; i < headers.length; i++) {
            users[i].classList.add("hide")
        }
        more[0].classList.add('hide')
        document.getElementsByClassName('top')[0].classList.remove("higher")
    }
}
function user() {
    return
}
function activateMore() {
    var more = document.getElementsByClassName('headermore');
    console.log("More aktiviert")
    more[0].classList.remove("hide")
}
function deactivateMore() {
    var more = document.getElementsByClassName('headermore');
    console.log("More aktiviert")
    more[0].classList.add("hide")
}

searchInput.addEventListener("input", (e) => {

    maxCount = 6;
    const searchText = e.target.value.trim().toLowerCase();

    console.log("We are searching for: " + searchText);

    // Hide all existing cards
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
        card.classList.add('hide');
    });

    // Loop through products and display matching ones
    products.forEach(product => {
        const productName = product.name.toLowerCase();
        const productTags = product.tag.toLowerCase();
        const productlink = product.originallink.toLowerCase();
        if (productName.includes(searchText) || productTags.includes(searchText) || productlink.includes(searchText)) {

            console.log("Found match");
            const card = document.createElement('div');
            card.classList.add('card');
            card.classList.add('hide');
            card.setAttribute('onclick', `window.open('${product.link}', '_blank')`);


            const header = document.createElement('div');
            header.classList.add('header');
            header.textContent = product.name;

            const img = document.createElement('img');
            img.classList.add('smallimg');
            img.src = product.image;

            const body = document.createElement('div');
            body.classList.add('body');
            body.style.overflow = 'hidden';

            const link = document.createElement('a');
            link.classList.add('affLink');
            link.href = product.affiliateLink;
            link.textContent = product.affiliateLink;

            body.appendChild(link);


            card.appendChild(img);
            card.appendChild(header);
            card.appendChild(body);

            document.getElementById("user-cards").appendChild(card);
            card.classList.remove('hide');
        }
    });
});


/*searchInput.addEventListener("input", (e) => {
    maxCount = 6
   
    for(var r = 0; r < users.length; r++)
    {
        users[r].classList.add("hide")
    }

    var more = document.getElementsByClassName('headermore');
    more[0].classList.add("hide")
    var text = ""
    text = document.getElementById('searchbar').value.toString()
    console.log(text)
    var headers = document.getElementsByClassName('header');
    let counter = 0
    
    for(var i=0;i < headers.length; i++){

        let formatText = headers[i].textContent.toString()
        formatText = formatText.toLowerCase()
        text = text.toLowerCase()
        console.log(text)
        console.log(formatText)
        let words = text.match(/\b(\w+)\b/g)
        var includes = false
        var containsall = true;
        for(var l = 0; l < words.length; l++){
            console.log("Current word: " + words[l])
            if(!formatText.includes(words[l])){
                containsall = false
            }    
        }
        if(containsall){
            users[i].classList.remove("hide")
            includes = true
            counter++
        }
        if(includes != true){
            console.log("Not including")
            users[i].classList.add("hide")
            
        }
        console.log("Counter" + counter)
        if(counter > maxCount){
            console.log("Too much")
            activateMore()
            users[i].classList.add("hide")
            maxCount = maxCount + 3
            break
        }
        else{
            deactivateMore()
        }
    }
    if(text == ""){
        for(var i=0;i < headers.length; i++){  
            users[i].classList.add("hide")
        }
        more[0].classList.add('hide')
        document.getElementsByClassName('top')[0].classList.remove("higher")
    }


})*/