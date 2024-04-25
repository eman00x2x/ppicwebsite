fetch('../json/articles.json')
    .then(response => response.json())
    .then(data => {
        // Get article ID from URL parameters
        const articleId = getArticleId();
        const article = data.articles.find(article => article.id === articleId);

        if (article) {
            document.title = article.title;

            // Populate breadcrumbs with article title
            document.getElementById('article-title').textContent = article.title;
            updateBreadcrumbs(article.title);
            document.getElementById('article-date').textContent = article.date;
            
            const author = article.author;
            if (author) {
                document.getElementById('research-by').textContent = `Research by: ${author}`;
            } else {
                // If no author, hide the "Research by" section
                document.getElementById('research-by').style.display = 'none';
            }
            document.getElementById('article-image').src = article.image;

            const content = article.content;
            document.getElementById('article-content').innerHTML = content;
            
        } else {
            console.error('Article not found');
        }
    })
    .catch(error => console.error('Error fetching article data:', error));

function updateBreadcrumbs(title) {
    document.getElementById('breadcrumb-title').textContent = title;
}

// Function to get article ID from URL parameters
function getArticleId() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return parseInt(urlParams.get('id')); // Assuming the ID is passed as a query parameter
}

