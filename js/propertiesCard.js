
$(document).ready(function () {


 
const JsonUrl = 'json/DataProperty.json'

fetch(JsonUrl)
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(dataProperty => {
    processData(dataProperty);

    // Filter logic
    $('form').submit(function (event) {
        event.preventDefault();
        const offerType = $('#offerType').val()
        const propType = $('#propertyType').val()
        const location = $('#location').val()
        const price = $('#price').val()
        const bedroom = $('#bedroom').val()
        const subcateg = $('#subcateg').val()
        const forclose = $('#foreclose').val()
        const bathroom = $('#bathroom').val()
        const floorarea = $('#floorArea').val()
        const landarea = $('#landArea').val()
        const amenities = $('#amenities').val()
        

        console.log(offerType)
        console.log(propType)
        console.log(location)
        console.log(price)
        console.log(bedroom)
        console.log(subcateg)
        console.log(forclose)
        console.log(bathroom)
        console.log(floorarea)
        console.log(landarea)
        console.log(amenities)


      
    });
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});


    function processData(dataProperty) {
        
    function createCard(thumbnail, type, prices, title, desc, propInfo, property_id, propertyImage, offer_type) {


        const column = $('<div>').addClass('col-lg-3').addClass('col-sm-6').addClass('pt-1').addClass('kard');
        const card = $('<div>').addClass('card').addClass('h-100').addClass('w-100').addClass('col-lg-4').addClass('shadow').attr('type', 'button').addClass('shadow-lg');
        const thumbnailImg = $('<img>').attr('src', thumbnail).addClass('card-img-top').addClass('featImg');
        const cardbody = $('<div>').addClass('card-body');
        const typeProp = $('<p>').addClass('propType').addClass('fw-semibold').addClass('w-75').addClass('text-center')
            .addClass('rounded').addClass('text-light').text(type);
        const priceProp = $('<h5>').addClass('card-title').addClass('fw-bold').text(prices);
        const titleProp = $('<a>').attr('href', `listingView.html?id=${property_id}`).addClass('stretched-link').addClass('text-decoration-none').addClass('text-dark').addClass('card-text').addClass('fw-semibold').addClass('featInfo').text(title);
        const addProp = $('<p>').attr('style', 'font-size: 13px').text(desc);   

        const cardfoot = $('<div>').addClass('card-footer');

        const propInfoDiv = $('<div>').addClass('propInfo').addClass('d-flex').addClass('gap-1').addClass('flex-wrap');
        for (const key in propInfo) {
            if (propInfo.hasOwnProperty(key)) {
                const value = propInfo[key];
                const propDiv = $('<div>').attr('id', key).html(`<i class="fa-solid fa-${key}"></i> <span style="font-size:14px">${value}</span>`);
                propInfoDiv.append(propDiv);
            }
        }
        cardfoot.append(propInfoDiv);
        cardbody.append(typeProp, priceProp, titleProp, addProp);
        card.append(thumbnailImg, cardbody, cardfoot);

        column.append(card);

        card.click(function() {
            sessionStorage.setItem('clickedCardData', JSON.stringify({
                thumbnail: thumbnail,
                type: type,
                prices: prices,
                title: title,
                desc: desc,
                propInfo: propInfo,
                property_id: property_id,
                propertyImage: propertyImage ,
                offer_type: offer_type
            }));

            
        });

        dataProperty.listingIds.push(property_id);
        // console.log("ID received:", id);

        $('#prop-container').append(column)

    }

    for (let i = 0; i < dataProperty.thumbnails.length; i++) {
        const property_id = i + 1;
        createCard(dataProperty.thumbnails[i], dataProperty.types[i], dataProperty.prices[i], dataProperty.titles[i], dataProperty.descs[i], dataProperty.propertyData[i], property_id,dataProperty.propertyImages[i],dataProperty.offertypes[i]);
 

    }




    const cardsPerPage = 12;
    let currentPage = 1;

    function displayPage(pageNumber) {
        $('#prop-container').empty();
        const startIndex = (pageNumber - 1) * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;
        for (let i = startIndex; i < endIndex && i < dataProperty.thumbnails.length; i++) {
            const property_id = i + 1; 
            createCard(dataProperty.thumbnails[i], dataProperty.types[i], dataProperty.prices[i], dataProperty.titles[i], dataProperty.descs[i], dataProperty.propertyData[i], property_id,dataProperty.propertyImages[i],dataProperty.offertypes[i]);
        }
    }
    
    const totalPages = Math.ceil(dataProperty.thumbnails.length / cardsPerPage);
    displayPage(currentPage);

    const pagination = $('#pagination');
    const page = $('<ul>').addClass('pagination').addClass('pagination-sm').css('color','black');
    
    // Previous Button
    const prevButton = $('<li>').addClass('page-item');
    const prevButtonLink = $('<a>').addClass('page-link').attr('href', '#').text('Previous');
    prevButton.append(prevButtonLink);
    prevButtonLink.on('click', function (e) {
        e.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            displayPage(currentPage);
            updatePaginationUI();
        }
    });
    page.append(prevButton);
    
    // Page Numbers
    for (let i = 1; i <= totalPages; i++) {
        const pageLink = $('<a>').addClass('page-link').text(i);
        const pageItem = $('<li>').addClass('page-item').append(pageLink);
    
        pageLink.on('click', function () {
            currentPage = i;
            displayPage(currentPage);
            updatePaginationUI();
        });
        page.append(pageItem);
    }
    
    // Next Button
    const nextButton = $('<li>').addClass('page-item');
    const nextButtonLink = $('<a>').addClass('page-link').attr('href', '#').text('Next');
    nextButton.append(nextButtonLink);
    nextButtonLink.on('click', function (e) {
        e.preventDefault();
        if (currentPage < totalPages) {
            currentPage++;
            displayPage(currentPage);
            updatePaginationUI();
        }
    });
    page.append(nextButton);
    
    pagination.append(page);
    
    function updatePaginationUI() {
        $('.page-item').removeClass('active');
        $(`.page-item:eq(${currentPage})`).addClass('active');
    }
    }




    // console.log(dataProperty.offertypes);

});

$(document).ready(function() {

    const clickedCardData = JSON.parse(sessionStorage.getItem('clickedCardData'));

    const breadTitle = $('.bread-title')
    const propAdd  = $('#prop-add')
    const imageElements = [$('.main-img'), $('.second-img'), $('.third-img'), $('.fourth-img'), $('.fifth-img')];
    const calcPrice = $('#price')



    const fotoramaContainer = $('.modalCaro');

    const seeMore = $('.seemore')
    if (clickedCardData  && clickedCardData.propertyImage) {

        breadTitle.html(` <p>${clickedCardData.title}<p>`)
        // calcPrice.attr('value', clickedCardData.prices);
        propAdd.text(clickedCardData.desc)

        for (let i = 0; i < imageElements.length; i++) {
            const imgSrc = clickedCardData.propertyImage[`img${i + 1}`];
            imageElements[i].attr('src', imgSrc);
        }
    
        seeMore.css('background-image', `url(${clickedCardData.propertyImage.img3})`)

        const propertyImages = clickedCardData.propertyImage;
        const imageKeys = Object.keys(propertyImages);
        imageKeys.forEach(function(key) {
            const img = $('<img>').attr('src', propertyImages[key]);

            fotoramaContainer.append(img);

        });

        fotoramaContainer.fotorama();

      
        const cardData = [
            { title: 'OFFER TYPE', data: clickedCardData.offer_type },
            { title: 'SELLING PRICE', data: clickedCardData.prices },
            { title: 'PROPERTY TYPE', data: clickedCardData.type },
            { title: 'BEDROOMS', data: clickedCardData.propInfo.bed },
            { title: 'BATHROOMS', data: clickedCardData.propInfo.bath },
            { title: 'CAR GARAGE', data: clickedCardData.propInfo.car },
            { title: 'LOT AREA', data: clickedCardData.propInfo.expand },
            { title: 'FLOOR AREA', data: clickedCardData.propInfo.house }
        ];
        const cardElements = cardData.map(({ title, data, unit }) => propData(title, data, unit));
        $('.row-cols-1').html(cardElements.join(''));



    }

   function propData(title, data,unit = '')
   {
    return `
    <div class="col-6 col-md-6 col-lg-3 rounded-0 border border-1>
        <div class="card h-100 ">
            <div class="card-body text-center p-2 pt-4">
                <h4 class="card-title fw-bold">${data}</h4>
                <div class="card-text">
                    <p>${title}${unit}</p>
                </div>
            </div>
        </div>
    </div>`;
   }



    const listingDetails = $('#listing-details');
  
});