// <!-- Include jQuery -->
// <!-- Your JavaScript code -->

// Your JavaScript code here
function createCard(thumbnail, title, desc, videoLink) {
    const column = $('<div>').addClass('col-lg-3').addClass('col-md-6');
    const card = $('<div>').addClass('card').addClass('h-100').addClass('w-100').addClass('col-lg-3');
    const thumbnailImg = $('<img>').attr('src', thumbnail).attr('alt', 'Thumbnail').attr('class', 'btn').click(function () {
        $('#mainVideo').attr('src', videoLink);
    });
    const cardbody = $('<div>').addClass('card-body');
    const titleElem = $('<p>').attr('style', 'font-size: 16px').addClass('card-title').addClass('fw-bold').text(title);
    const descElem = $('<p>').addClass('card-text').addClass('featInfo').text(desc);

    cardbody.append(titleElem, descElem)
    card.append(thumbnailImg, cardbody);

    column.append(card)

    $('#cards-container').append(column);
}

$(document).ready(function () {
    const thumbnails = ['https://img.youtube.com/vi/PeZLjpwEr3I/hqdefault.jpg',
        'https://img.youtube.com/vi/X5TVgBXGGWg/hqdefault.jpg',
        'https://img.youtube.com/vi/J1Ip2sC_lss/hqdefault.jpg',
        'https://img.youtube.com/vi/UffCF_2K0HY/hqdefault.jpg'];
    const titles = ['MODERN SPANISH TROPICAL HOUSE', 'GREENWOODS HOUSE', 'SALAMIN', 'DREAM HOME TOUR #006'];
    const descs = ['Filinvest EAST', 'WITH BEAUTIFUL INTERIOR', 'BINI', 'GREENWOODS EXECUTIVE VILLAGE'];
    const videoLink = ['https://www.youtube.com/embed/PeZLjpwEr3I',
        'https://www.youtube.com/embed/X5TVgBXGGWg', 'https://www.youtube.com/embed/J1Ip2sC_lss', 'https://www.youtube.com/embed/UffCF_2K0HY'];

    for (let i = 0; i < thumbnails.length; i++) {
        createCard(thumbnails[i], titles[i], descs[i], videoLink[i]);
    }

    // Set the default main video
    $('#mainVideo').attr('src', videoLink[0]);
});
$(document).ready(function () {
    // Dynamically create carousel items
    const videos = [
        { link: 'https://www.youtube.com/embed/PeZLjpwEr3I', title: 'MODERN SPANISH TROPICAL HOUSE', desc: 'Filinvest EAST' },
        { link: 'https://www.youtube.com/embed/X5TVgBXGGWg', title: 'GREENWOODS HOUSE', desc: 'WITH BEAUTIFUL INTERIOR' },
        { link: 'https://www.youtube.com/embed/J1Ip2sC_lss', title: 'SALAMIN', desc: 'BINI' },
        { link: 'https://www.youtube.com/embed/UffCF_2K0HY', title: 'DREAM HOME TOUR #006', desc: 'GREENWOODS EXECUTIVE VILLAGE' }
    ];

    for (let i = 0; i < videos.length; i++) {
        const activeClass = i === 0 ? 'active' : ''; // Add 'active' class to the first item
        const item = `
                <div class="carousel-item ${activeClass}">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="col-lg-3 col-md-6 col-sm-12"> <!-- Adjust column width for different screen sizes -->
                            <div class="card h-100" style="margin: 20px 30px;> <!-- Add padding to the card -->
                                <div class="card-body flex-column justify-content-between">
                                    <div class="embed-responsive embed-responsive-16by9 d-flex justify-content-center"> <!-- Center the iframe -->
                                        <iframe class="embed-responsive-item" src="${videos[i].link}" allowfullscreen></iframe>
                                    </div>
                                    <div style="padding-left:10px;">
                                        <h5 class="card-title">${videos[i].title}</h5>
                                        <p class="card-text">${videos[i].desc}</p>
                                    </div>
                                </div>
                                <div class="card-footer d-flex justify-content-between" style="margin-bottom:50px;">
                                    <button style="margin-left:30px;" class="btn btn-secondary" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button style="margin-right:30px;" class="btn btn-secondary" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        $('.carousel-inner').append(item);
    }
});

