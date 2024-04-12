function createCard(thumbnail, type, prices, title, desc, propInfo, id) {
    const column = $('<div>').addClass('col-lg-3').addClass('col-sm-6').addClass('pt-1');
    const card = $('<div>').addClass('card').addClass('h-100').addClass('w-100').addClass('col-lg-4').addClass('shadow').attr('type', 'button').addClass('shadow-lg');
    const thumbnailImg = $('<img>').attr('src', thumbnail).addClass('card-img-top').addClass('featImg');
    const cardbody = $('<div>').addClass('card-body');
    const typeProp = $('<p>').addClass('propType').addClass('fw-semibold').addClass('w-75').addClass('text-center')
        .addClass('rounded').text(type);
    const priceProp = $('<h5>').addClass('card-title').addClass('fw-bold').text(prices);
    const titleProp = $('<a>').attr('href', 'listingView.html').addClass('stretched-link').addClass('text-decoration-none').addClass('text-dark').addClass('card-text').addClass('fw-semibold').addClass('featInfo').text(title);
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

    // Add click event listener
    card.click(function() {
        // Store data in sessionStorage
        sessionStorage.setItem('clickedCardData', JSON.stringify({
            thumbnail: thumbnail,
            type: type,
            prices: prices,
            title: title,
            desc: desc,
            propInfo: propInfo,
            id: id
        }));
    });

    column.append(card);
    $('#prop-container').append(column);
    listingIds.push(id);
}
