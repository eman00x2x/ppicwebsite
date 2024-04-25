$(document).ready(function () {

    const JsonVideo = 'json/VideoProperty.json'

    fetch(JsonVideo)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })

        .then(videoProperty => {
            processData(videoProperty);

        })

        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

    function processData(videoProperty) {
        function AllVideo(video) {
            const { thumbnail, title, description, videoLink } = video;
            const column = $('<div>').addClass('col-lg-3').addClass('col-md-6');
            const card = $('<div>').addClass('card').addClass('h-100').addClass('w-100').addClass('col-lg-3');
            const thumbnailImg = $('<img>').attr('src', thumbnail).attr('alt', 'Thumbnail').attr('class', 'btn').click(function () {
                $('#mainVideo').attr('src', videoLink);
            });
            const cardbody = $('<div>').addClass('card-body');
            const titleElem = $('<p>').attr('style', 'font-size: 16px').addClass('card-title').addClass('fw-bold').text(title);
            const descElem = $('<p>').addClass('card-text').addClass('featInfo').text(description);

            cardbody.append(titleElem, descElem)
            card.append(thumbnailImg, cardbody);

            column.append(card)

            $('#cards-container').append(column);

        }
        videoProperty.videos.slice(0, 4).forEach(AllVideo);

        $('#mainVideo').attr('src', videoProperty.videos[0].videoLink);

        carousel(videoProperty.videos);

        function carousel(videos) {
            $('.carousel-inner').empty(); // Clear the carousel inner container before adding items

            for (let i = 0; i < videos.length; i++) {
                const activeClass = i === 0 ? 'active' : ''; // Add 'active' class to the first item
                const item = `
                <div class="carousel-item ${activeClass}">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="col-lg-3 col-md-6 col-sm-12"> <!-- Adjust column width for different screen sizes -->
                            <div class="card h-100" style="margin: 20px 30px;"> <!-- Add padding to the card -->
                                <div class="card-body flex-column justify-content-between">
                                    <div class="embed-responsive embed-responsive-16by9 d-flex justify-content-center"> <!-- Center the iframe -->
                                        <iframe class="embed-responsive-item" src="${videos[i].videoLink}" allowfullscreen></iframe>
                                    </div>
                                    <div style="padding-left:10px;">
                                        <h5 class="card-title">${videos[i].title}</h5>
                                        <p class="card-text">${videos[i].description}</p>
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
        }

    }
});