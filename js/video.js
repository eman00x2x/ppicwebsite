

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
        
        function featuredVideo(video) {
            const { thumbnail, title, description, videoLink } = video;
        
            const column = $('<div>').addClass('col-lg-4').addClass('col-md-6').addClass('video-thumb');
            const card = $('<div>').addClass('card').addClass('h-100').addClass('w-100').addClass('col-lg-4').addClass('shadow').addClass('shadow-lg');
            const thumbnailImg = $('<img>').attr('src', thumbnail).attr('alt', 'Thumbnail').attr('type', 'button')
               .attr('class', 'btn').addClass('showVideo').click(function () {
                    $('.videoFrame').attr('src', videoLink);
                });
            const cardbody = $('<div>').addClass('card-body');
            const titleElem = $('<p>').attr('style', 'font-size: 16px').addClass('card-title').addClass('fw-bold').text(title);
            const descElem = $('<p>').addClass('card-text').addClass('featInfo').text(description);
        
            cardbody.append(titleElem, descElem)
            card.append(thumbnailImg, cardbody);
        
            column.append(card)
        
            $('.feature-video').append(column);
        }
        videoProperty.videos.slice(0,3).forEach(featuredVideo);

        function AllVideo(video) {
            const { thumbnail, title, description, videoLink } = video;
        
            const column = $('<div>').addClass('col-lg-4').addClass('col-md-6').addClass('video-thumb');
            const card = $('<div>').addClass('card').addClass('h-100').addClass('w-100').addClass('col-lg-4').addClass('shadow').addClass('shadow-lg');
            const thumbnailImg = $('<img>').attr('src', thumbnail).attr('alt', 'Thumbnail').attr('type', 'button')
               .attr('class', 'btn').addClass('showVideo').click(function () {
                    $('.videoFrame').attr('src', videoLink);
                });
            const cardbody = $('<div>').addClass('card-body');
            const titleElem = $('<p>').attr('style', 'font-size: 16px').addClass('card-title').addClass('fw-bold').text(title);
            const descElem = $('<p>').addClass('card-text').addClass('featInfo').text(description);
        
            cardbody.append(titleElem, descElem)
            card.append(thumbnailImg, cardbody);
        
            column.append(card)
        
            $('.all-videos').append(column);
        }


       videoProperty.videos.forEach(AllVideo);
        
       const cardsPerPage = 12;
       let currentPage = 1;
   
       function displayPage(pageNumber) {
           $('.all-videos').empty();
           const startIndex = (pageNumber - 1) * cardsPerPage;
           const endIndex = startIndex + cardsPerPage;
           for (let i = startIndex; i < endIndex && i < videoProperty.videos.length; i++) {
               AllVideo(videoProperty.videos[i]);
           }
       }
       
       const totalPages = Math.ceil(videoProperty.videos.length / cardsPerPage);
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
       
       $('.all-videos, .feature-video').on('click', '.showVideo', function () {
        const videoLink = $(this).data('videoLink');
        $('.videoFrame').attr('src', videoLink);
        $(".videoModal").show();
    });

    

    $(".videoModal").click(function(){
        $(".videoModal").hide();
    });
    
    }



 

// console.log(jsonData.videos)
    
});
