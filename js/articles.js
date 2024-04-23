// Fetch data from the JSON file
fetch('../json/articles.json')
    .then(response => response.json())
    .then(data => {
        // Store all articles
        const allArticles = data.articles;

        // Display all articles initially
        displayArticles(allArticles);

        // Get the navigation links
        const navLinks = document.querySelectorAll('.nav-link');

        // Add event listeners to the navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const topic = link.textContent.trim();
                if (topic === 'All') {
                    displayArticles(allArticles);
                } else {
                    const filteredArticles = filterArticlesByTopic(allArticles, topic);
                    displayArticles(filteredArticles);
                }
            });
        });
    })
    .catch(error => console.error('Error fetching article data:', error));

// Function to filter articles by topic
function filterArticlesByTopic(articles, topic) {
    return articles.filter(article => article.topic === topic);
}


// Function to display articles
function displayArticles(articles) {
    // Clear the articles container
    const articlesContainer = document.querySelector('.container');
    articlesContainer.innerHTML = '';

    // Create a row element to contain the articles
    const rowElement = document.createElement('div');
    rowElement.classList.add('row', 'mb-3');

    // Create HTML elements for the first article
    const firstArticle = articles[0];
    const firstArticleElement = document.createElement('div');
    firstArticleElement.classList.add('col-lg-8', 'col-md-12', 'col-sm-12', 'col-xs-12', 'mb-3', 'hoverable');
    firstArticleElement.innerHTML = `
        <a href="articleView.html?id=${firstArticle.id}" class="article-link">
            <div class="d-flex h-80">
                <div class="position-relative w-100">
                    <img src="${firstArticle.image}" alt="Article Image" class="img-fluid article-img">
                    <div class="overlay-box">
                        <div class="article-details p-2">
                            <p>Date: ${firstArticle.date}</p>
                            <h3>${firstArticle.title}</h3>
                            <p class="overflow-ellipsis">${firstArticle.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    `;

    // Append the first article element to the row
    rowElement.appendChild(firstArticleElement);

    // Loop through the rest of the articles starting from index 1
    for (let i = 1; i < articles.length; i++) {
        const article = articles[i];

        // Create HTML elements for the rest of the articles
        const articleElement = document.createElement('div');
        articleElement.classList.add('col-lg-4', 'col-md-6', 'col-sm-12', 'col-xs-12', 'mb-3', 'hoverable');
        articleElement.innerHTML = `
            <a href="articleView.html?id=${article.id}" class="article-link">
                <div class="card" style="overflow: hidden;">
                    <img src="${article.image}" class="card-img-top" alt="Article Image">
                    <div class="card-body p-1 d-flex flex-column" style="height: 9rem;">
                        <div class="article-details p-2">
                            <p>Date: ${article.date}</p>
                            <h3>${article.title}</h3>
                            <p>${article.content}</p>
                        </div>
                    </div>
                </div>
            </a>
        `;
        // Append each article element to the row
        rowElement.appendChild(articleElement);
    }

    // Append the row element to the articles container
    articlesContainer.appendChild(rowElement);

    // Add hover effect to articles

}
