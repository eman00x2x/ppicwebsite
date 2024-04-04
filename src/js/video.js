
function createCard(thumbnail, title, desc, videoLink) {

    const column = $('<div>').addClass('col-lg-4');
    const card = $('<div>').addClass('card').addClass('h-auto').addClass('w-100').addClass('col-lg-4').addClass('shadow').addClass('shadow-lg');
    const thumbnailImg = $('<img>').attr('src', thumbnail).attr('alt', 'Thumbnail').attr('type', 'button').attr('data-bs-toggle', 'modal')
        .attr('data-bs-target', '#exampleModal').attr('class', 'btn').click(function () {
            $('#videoFrame').attr('src', videoLink);
        });
    const cardbody = $('<div>').addClass('card-body');
    const titleElem = $('<p>').attr('style','font-size: 16px').addClass('card-title').addClass('fw-bold').text(title);
    const descElem = $('<p>').addClass('card-text').addClass('featInfo').text(desc);

    cardbody.append(titleElem,descElem)
    card.append(thumbnailImg, cardbody);

    column.append(card)



    $('#cards-container').append(column);
}

$(document).ready(function () {
    const thumbnails = ['https://img.youtube.com/vi/PeZLjpwEr3I/hqdefault.jpg',
        'https://img.youtube.com/vi/X5TVgBXGGWg/hqdefault.jpg',
        'https://img.youtube.com/vi/UffCF_2K0HY/hqdefault.jpg'];
    const titles = ['MODERN SPANISH TROPICAL HOUSE', 'GREENWOODS HOUSE', 'DREAM HOME TOUR #006'];
    const descs = ['Filinvest EAST', 'WITH BEAUTIFUL INTERIOR', 'GREENWOODS EXECUTIVE VILLAGE'];
    const videoLink = ['https://www.youtube.com/embed/PeZLjpwEr3I',
        'https://www.youtube.com/embed/X5TVgBXGGWg', 'https://www.youtube.com/embed/UffCF_2K0HY'];


    for (let i = 0; i < thumbnails.length; i++) {
        createCard(thumbnails[i], titles[i], descs[i], videoLink[i]);
    }
});