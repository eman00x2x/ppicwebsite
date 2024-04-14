
$(document).ready(function () {


    const dataProperty = {


        thumbnails: [
            '/assets/img/properties/4.jpg'
            ,'/assets/img/properties/4.jpg',
            '/assets/img/properties/4.jpg', '/assets/img/properties/4.jpg',
            '/assets/img/properties/4.jpg', '/assets/img/properties/4.jpg', 
            '/assets/img/properties/4.jpg', '/assets/img/properties/4.jpg', 
            '/assets/img/properties/4.jpg', '/assets/img/properties/4.jpg',
            '/assets/img/properties/4.jpg', '/assets/img/properties/4.jpg',
            '/assets/img/properties/4.jpg', '/assets/img/properties/4.jpg',
            '/assets/img/properties/4.jpg', '/assets/img/properties/4.jpg',
            '/assets/img/properties/4.jpg', '/assets/img/properties/4.jpg',
            '/assets/img/properties/4.jpg', '/assets/img/properties/4.jpg',
            '/assets/img/properties/4.jpg', '/assets/img/properties/4.jpg',
            '/assets/img/properties/4.jpg', '/assets/img/properties/4.jpg', 
            '/assets/img/properties/4.jpg'
        ],
        types: ['House and Lot'
        , 'House and Lot', 'Commercial', 'House and Lot', 'House and Lot', 'Townhouse',
            'House and Lot', 'Commercial', 'House and Lot', 'House and Lot', 'Commercial', 'Townhouse', 'Townhouse', , 'House and Lot', 'Commercial', 'House and Lot', 'House and Lot', 'Townhouse',
            'House and Lot', 'Commercial', 'House and Lot', 'House and Lot', 'Commercial', 'Townhouse', 'Townhouse',
        ],
        titles: ['Ravishing House and Lot with Pool for Sale at Greenwoods Exexutive Village,Taytay Rizal',
            '2 Storey House and Lot with Rooftop for Sale at Greenwoods Executive Village, Pasig City',
            'Astonishing Mountaintop House and Lot for sale at Clark Sun Valley, Pampanga',
            'Spacious Lot For Sale in Forest hills Golf And Country Club, Antipolo City',
            'Overlooking House and Lot with Sunrise View for Sale at Edgewood, Sunvalley Antipolo City',
            'Modern 3 Storey House and Lot for sale at Filinvest East Homes, Cainta Rizal',
            'Taal Overlooking Lot for Sale at Tagaytay Highlands, Tagaytay City  ',
            'Modern Asian Designed House and Lot with pool for sale at Pasong Tamo, Quezon City',
            'Stylish 2 Storey House and Lot in BF Homes, Paranaque City',
            'Splendid 3-Storey House and Lot at BF Homes, Paranaque City',
            'Modern Contemporary House and Lot at Geeenwoods Executive Village',
            'Modern Alluring House and Lot for sale at Greenwoods Executive Village, Taytay Rizal', 'Splendid 3-Storey House and Lot at BF Homes, Paranaque City',
            '2 Storey House and Lot with Rooftop for Sale at Greenwoods Executive Village, Pasig City',
            'Astonishing Mountaintop House and Lot for sale at Clark Sun Valley, Pampanga',
            'Spacious Lot For Sale in Forest hills Golf And Country Club, Antipolo City',
            'Overlooking House and Lot with Sunrise View for Sale at Edgewood, Sunvalley Antipolo City',
            'Modern 3 Storey House and Lot for sale at Filinvest East Homes, Cainta Rizal',
            'Taal Overlooking Lot for Sale at Tagaytay Highlands, Tagaytay City  ',
            'Modern Asian Designed House and Lot with pool for sale at Pasong Tamo, Quezon City',
            'Stylish 2 Storey House and Lot in BF Homes, Paranaque City',
            'Splendid 3-Storey House and Lot at BF Homes, Paranaque City',
            'Modern Contemporary House and Lot at Geeenwoods Executive Village',
            'Modern Alluring House and Lot for sale at Greenwoods Executive Village, Taytay Rizal', 'Splendid 3-Storey House and Lot at BF Homes, Paranaque City',
        ],
        descs: ['Merville, Merville, Parañaque City'
        , 'Ayala Heights, Matandang Balara, Quezon City', 'Border of Las Piñas & Paranaque, Manuyo Dos, Las Piñas City,',
            'Tangerine St., Concepcion, Marikina City', 'Bf Homes, Parañaque City', 'Ortigas Extension , Pasig City',
            'Commercial Lot with ,lot area of 456sqm for rent in Xavierville Ave. , Quezon City', '10 bedroom Building with ,floor area of 450sqm ,lot area of 100sqm for rent in Cubao , Quezon City', '1 bedroom Condominium with for rent in Mall of Asia, Pasay City',
            '4 bedroom House and Lot with ,floor area of 325sqm ,lot area of 540sqm for sale in Clark, Sun Valley, Pampanga', 'Forest Hills, Inarawan, Antipolo City', 'Edgewood, Inarawan, Antipolo City'
            , 'Residential Lot with for sale in Tagaytay Highlands, Tagaytay', 'Ayala Heights, Matandang Balara, Quezon City', 'Border of Las Piñas & Paranaque, Manuyo Dos, Las Piñas City,',
            'Tangerine St., Concepcion, Marikina City', 'Bf Homes, Parañaque City', 'Ortigas Extension , Pasig City',
            'Commercial Lot with ,lot area of 456sqm for rent in Xavierville Ave. , Quezon City', '10 bedroom Building with ,floor area of 450sqm ,lot area of 100sqm for rent in Cubao , Quezon City', '1 bedroom Condominium with for rent in Mall of Asia, Pasay City',
            '4 bedroom House and Lot with ,floor area of 325sqm ,lot area of 540sqm for sale in Clark, Sun Valley, Pampanga', 'Forest Hills, Inarawan, Antipolo City', 'Edgewood, Inarawan, Antipolo City'
            , 'Residential Lot with for sale in Tagaytay Highlands, Tagaytay'
        ],

        prices: ['55,000,000'
        ,         ' 45,000,000', ' 39,000,000', '  22,700,000', ' 15,000,000', ' 17,000,000'
            , ' 24,000,000', '  18,000,000', ' 19,500,000', ' 72,000,000', ' 47,300,000', ' 45,000,000', ' 45,000,000', '55,000,000', ' 45,000,000', ' 39,000,000', '  22,700,000', ' 15,000,000', ' 17,000,000'
            , ' 24,000,000', '  18,000,000', ' 19,500,000', ' 72,000,000', ' 47,300,000', ' 45,000,000', ' 45,000,000'
        ],

        propertyData: [
            { bed: 3, bath: 2, car: 2, expand: "450sqm" },
            { bed: 2, bath: 1, car: 1, expand: "300sqm" },
            { bed: 3, bath: 2, car: 2, expand: "450sqm" },
            { bed: 2, bath: 1, car: 1, expand: "300sqm" },
            { bed: 3, bath: 2, car: 2, expand: "450sqm" },
            { bed: 2, bath: 1, car: 1, expand: "300sqm" },
            { bed: 3, bath: 2, car: 2, expand: "450sqm" },
            { bed: 2, bath: 1, car: 1, expand: "300sqm" },
            { bed: 3, bath: 2, car: 2, expand: "450sqm" },
            { bed: 2, bath: 1, car: 1, expand: "300sqm" },
            { bed: 3, bath: 2, car: 2, expand: "450sqm" },
            { bed: 2, bath: 1, car: 1, expand: "300sqm" },
            { bed: 2, bath: 1, car: 1, expand: "300sqm" },
            { bed: 3, bath: 2, car: 2, expand: "450sqm" },
            { bed: 2, bath: 1, car: 1, expand: "300sqm" },
            { bed: 3, bath: 2, car: 2, expand: "450sqm" },
            { bed: 2, bath: 1, car: 1, expand: "300sqm" },
            { bed: 3, bath: 2, car: 2, expand: "450sqm" },
            { bed: 2, bath: 1, car: 1, expand: "300sqm" },
            { bed: 3, bath: 2, car: 2, expand: "450sqm" },
            { bed: 2, bath: 1, car: 1, expand: "300sqm" },
            { bed: 3, bath: 2, car: 2, expand: "450sqm" },
            { bed: 2, bath: 1, car: 1, expand: "300sqm" },
            { bed: 3, bath: 2, car: 2, expand: "450sqm" },
            { bed: 2, bath: 1, car: 1, expand: "300sqm" },
            { bed: 2, bath: 1, car: 1, expand: "300sqm" },



        ],

        listingIds: [],

        propertyImages: [
                {img1: '/assets/img/1-1.jpg',img2: '/assets/img/1-2.jpg',img3: '/assets/img/1-3.jpg',img4: '/assets/img/1-4.jpg',img5: '/assets/img/1-5.jpg' },
                {img1: '/assets/img/1-2.jpg',img2: '/assets/img/1-2.jpg',img3: '/assets/img/1-3.jpg',img4: '/assets/img/1-4.jpg',img5: '/assets/img/1-5.jpg' },
                {img1: '/assets/img/1-1.jpg',img2: '/assets/img/1-2.jpg',img3: '/assets/img/1-3.jpg',img4: '/assets/img/1-4.jpg',img5: '/assets/img/1-5.jpg' },
                {img1: '/assets/img/1-1.jpg',img2: '/assets/img/1-2.jpg',img3: '/assets/img/1-3.jpg',img4: '/assets/img/1-4.jpg',img5: '/assets/img/1-5.jpg' },
                {img1: '/assets/img/1-1.jpg',img2: '/assets/img/1-2.jpg',img3: '/assets/img/1-3.jpg',img4: '/assets/img/1-4.jpg',img5: '/assets/img/1-5.jpg' },
                {img1: '/assets/img/1-1.jpg',img2: '/assets/img/1-2.jpg',img3: '/assets/img/1-3.jpg',img4: '/assets/img/1-4.jpg',img5: '/assets/img/1-5.jpg' },
                {img1: '/assets/img/1-1.jpg',img2: '/assets/img/1-2.jpg',img3: '/assets/img/1-3.jpg',img4: '/assets/img/1-4.jpg',img5: '/assets/img/1-5.jpg' },
                {img1: '/assets/img/1-1.jpg',img2: '/assets/img/1-2.jpg',img3: '/assets/img/1-3.jpg',img4: '/assets/img/1-4.jpg',img5: '/assets/img/1-5.jpg' },
                {img1: '/assets/img/1-1.jpg',img2: '/assets/img/1-2.jpg',img3: '/assets/img/1-3.jpg',img4: '/assets/img/1-4.jpg',img5: '/assets/img/1-5.jpg' },
                {img1: '/assets/img/1-1.jpg',img2: '/assets/img/1-2.jpg',img3: '/assets/img/1-3.jpg',img4: '/assets/img/1-4.jpg',img5: '/assets/img/1-5.jpg' },
                {img1: '/assets/img/1-1.jpg',img2: '/assets/img/1-2.jpg',img3: '/assets/img/1-3.jpg',img4: '/assets/img/1-4.jpg',img5: '/assets/img/1-5.jpg' },
                {img1: '/assets/img/1-1.jpg',img2: '/assets/img/1-2.jpg',img3: '/assets/img/1-3.jpg',img4: '/assets/img/1-4.jpg',img5: '/assets/img/1-5.jpg' },
                {img1: '/assets/img/1-1.jpg',img2: '/assets/img/1-2.jpg',img3: '/assets/img/1-3.jpg',img4: '/assets/img/1-4.jpg',img5: '/assets/img/1-5.jpg' },
                {img1: '/assets/img/1-1.jpg',img2: '/assets/img/1-2.jpg',img3: '/assets/img/1-3.jpg',img4: '/assets/img/1-4.jpg',img5: '/assets/img/1-5.jpg' },
                {img1: '/assets/img/1-1.jpg',img2: '/assets/img/1-2.jpg',img3: '/assets/img/1-3.jpg',img4: '/assets/img/1-4.jpg',img5: '/assets/img/1-5.jpg' },
                {img1: '/assets/img/1-1.jpg',img2: '/assets/img/1-2.jpg',img3: '/assets/img/1-3.jpg',img4: '/assets/img/1-4.jpg',img5: '/assets/img/1-5.jpg' },
                {img1: '/assets/img/1-1.jpg',img2: '/assets/img/1-2.jpg',img3: '/assets/img/1-3.jpg',img4: '/assets/img/1-4.jpg',img5: '/assets/img/1-5.jpg' },
                {img1: '/assets/img/1-1.jpg',img2: '/assets/img/1-2.jpg',img3: '/assets/img/1-3.jpg',img4: '/assets/img/1-4.jpg',img5: '/assets/img/1-5.jpg' },
                {img1: '/assets/img/1-1.jpg',img2: '/assets/img/1-2.jpg',img3: '/assets/img/1-3.jpg',img4: '/assets/img/1-4.jpg',img5: '/assets/img/1-5.jpg' },
                {img1: '/assets/img/1-1.jpg',img2: '/assets/img/1-2.jpg',img3: '/assets/img/1-3.jpg',img4: '/assets/img/1-4.jpg',img5: '/assets/img/1-5.jpg' },
                {img1: '/assets/img/1-1.jpg',img2: '/assets/img/1-2.jpg',img3: '/assets/img/1-3.jpg',img4: '/assets/img/1-4.jpg',img5: '/assets/img/1-5.jpg' },
                {img1: '/assets/img/1-1.jpg',img2: '/assets/img/1-2.jpg',img3: '/assets/img/1-3.jpg',img4: '/assets/img/1-4.jpg',img5: '/assets/img/1-5.jpg' },
                {img1: '/assets/img/1-1.jpg',img2: '/assets/img/1-2.jpg',img3: '/assets/img/1-3.jpg',img4: '/assets/img/1-4.jpg',img5: '/assets/img/1-5.jpg' },
                {img1: '/assets/img/1-1.jpg',img2: '/assets/img/1-2.jpg',img3: '/assets/img/1-3.jpg',img4: '/assets/img/1-4.jpg',img5: '/assets/img/1-5.jpg' },
                {img1: '/assets/img/1-1.jpg',img2: '/assets/img/1-2.jpg',img3: '/assets/img/1-3.jpg',img4: '/assets/img/1-4.jpg',img5: '/assets/img/1-5.jpg' },
                {img1: '/assets/img/1-1.jpg',img2: '/assets/img/1-2.jpg',img3: '/assets/img/1-3.jpg',img4: '/assets/img/1-4.jpg',img5: '/assets/img/1-5.jpg' },




        ]


    }



    function createCard(thumbnail, type, prices, title, desc, propInfo, property_id, propertyImage) {


        const column = $('<div>').addClass('col-lg-3').addClass('col-sm-6').addClass('pt-1');
        const card = $('<div>').addClass('card').addClass('h-100').addClass('w-100').addClass('col-lg-4').addClass('shadow').attr('type', 'button').addClass('shadow-lg');
        const thumbnailImg = $('<img>').attr('src', thumbnail).addClass('card-img-top').addClass('featImg');
        const cardbody = $('<div>').addClass('card-body');
        const typeProp = $('<p>').addClass('propType').addClass('fw-semibold').addClass('w-75').addClass('text-center')
            .addClass('rounded').text(type);
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
                propertyImage: propertyImage // Make sure this line is present
            }));

            
        });

        dataProperty.listingIds.push(property_id);
        // console.log("ID received:", id);

        $('#prop-container').append(column)

    }

    for (let i = 0; i < dataProperty.thumbnails.length; i++) {
        const property_id = i + 1;
        createCard(dataProperty.thumbnails[i], dataProperty.types[i], dataProperty.prices[i], dataProperty.titles[i], dataProperty.descs[i], dataProperty.propertyData[i], property_id,dataProperty.propertyImages[i]);
        // console.log(dataProperty.propertyImages[0].img1)
        // console.log(dataProperty.propertyImages[i])


    }




    const cardsPerPage = 12;
    let currentPage = 1;

    function displayPage(pageNumber) {
        $('#prop-container').empty();
        const startIndex = (pageNumber - 1) * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;
        for (let i = startIndex; i < endIndex && i < dataProperty.thumbnails.length; i++) {
            const property_id = i + 1; 
            createCard(dataProperty.thumbnails[i], dataProperty.types[i], dataProperty.prices[i], dataProperty.titles[i], dataProperty.descs[i], dataProperty.propertyData[i], property_id,dataProperty.propertyImages[i]);
        }
    }
    
    const totalPages = Math.ceil(dataProperty.thumbnails.length / cardsPerPage);
    displayPage(currentPage);


    const pagination = $('#pagination');

    const page = $('<ul>').addClass('pagination').addClass('pagination-sm')
    for (let i = 1; i <= totalPages; i++) {
        const pageLink = $('<a>').addClass('page-link').text(i);
        const pageItem = $('<li>').addClass('page-item').append(pageLink);
        pageLink.on('click', function () {
            currentPage = i;
            displayPage(currentPage);
            updatePaginationUI();
        });
        page.append(pageItem)
        pagination.append(page);
    }

    function updatePaginationUI() {
        $('.page-item').removeClass('active');
        $(`.page-item:eq(${currentPage - 1})`).addClass('active');
    }


    // console.log(dataProperty.listingIds);

});

$(document).ready(function() {

    const clickedCardData = JSON.parse(sessionStorage.getItem('clickedCardData'));

    const breadTitle = $('.bread-title')
    const propAdd  = $('#prop-add')
    const mainImg = $('.main-img')
    const secondImg = $('.second-img')
    const thirdImg= $('.third-img')
    const fourthImg = $('.fourth-img')
    const fifthImg = $('.fifth-img')

    const seeMore = $('.seemore')
    if (clickedCardData) {

        breadTitle.html(` <p>${clickedCardData.title}<p>`)
        propAdd.text(clickedCardData.desc)
        mainImg.attr('src',clickedCardData.propertyImage.img1)
        secondImg.attr('src',clickedCardData.propertyImage.img2)
        thirdImg.attr('src',clickedCardData.propertyImage.img3)
        fourthImg.attr('src',clickedCardData.propertyImage.img4)
        fifthImg.attr('src',clickedCardData.propertyImage.img5)

        seeMore.css('background-image', `url(${clickedCardData.propertyImage.img3})`)

    }

   



    const listingDetails = $('#listing-details');
    if (clickedCardData) {
        listingDetails.html(`

            

            // <h2>${clickedCardData.title}</h2>
            // <img src="${clickedCardData.thumbnail}" alt="Thumbnail">
            // <p>Type: ${clickedCardData.type}</p>
            // <p>Prices: ${clickedCardData.prices}</p>
            // <p>Description: ${clickedCardData.desc}</p>
            // <p>ID: ${clickedCardData.property_id}</p>

            // <p>Property Info:</p>
            // <ul>
            //     <li>Bedrooms: ${clickedCardData.propInfo.bed}</li>
            //     <li>Bathrooms: ${clickedCardData.propInfo.bath}</li>
            //     <li>Car Parking: ${clickedCardData.propInfo.car}</li>
            //     <li>Area: ${clickedCardData.propInfo.expand}</li>
            // </ul>
        `);
        const titleLink = $('<a>').attr('href', '#').text('Go back to listing'); // Replace '#' with the appropriate link
        listingDetails.append(titleLink);
    } else {
        listingDetails.html('<p>No data available.</p>');
    }
});