fetch('../json/articles.json')
    .then(response => response.json())
    .then(data => {
        const allArticles = data.articles;

        displayArticles(allArticles);

        const navLinks = document.querySelectorAll('.choice');

        navLinks.forEach(link => {
            link.addEventListener('click', function (event) {
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

function filterArticlesByTopic(articles, topic) {
    return articles.filter(article => article.topic === topic);
}


function displayArticles(articles) {
    const articlesContainer = document.querySelector('.articles');
    articlesContainer.innerHTML = '';

    const rowElement = document.createElement('div');
    rowElement.classList.add('row', 'mb-3');

    const firstArticle = articles[0];
    const firstArticleElement = document.createElement('div');
    firstArticleElement.classList.add('col-lg-8', 'col-md-12', 'col-sm-12', 'col-xs-12', 'mb-3', 'hoverable');
    if (articles.length === 1) {
        firstArticleElement.classList.add('col-lg-12');
    } else {
        firstArticleElement.classList.add('col-lg-8');
    }
    
    firstArticleElement.innerHTML = `
    <a href="articleView.html?id=${firstArticle.id}" class="article-link">
    <div class="d-flex h-80">
        <div class="position-relative w-100">
            <img src="${firstArticle.image}" alt="Article Image" class="img-fluid article-img">
            <div class="overlay-box" style="overflow:hidden;">
                <div class="article-details p-2">
                    ${firstArticle.date ? `<p>Date: ${firstArticle.date}</p>` : ''}
                    <h3>${firstArticle.title}</h3>
                    <p class="overflow-ellipsis">${stripHtmlTags(firstArticle.content)}</p>
                </div>
            </div>
        </div>
    </div>
</a>
`;
    rowElement.appendChild(firstArticleElement);

    for (let i = 1; i < articles.length; i++) {
        const article = articles[i];

        const articleElement = document.createElement('div');
        articleElement.classList.add('col-lg-4', 'col-md-6', 'col-sm-6', 'col-xs-12', 'mb-3', 'hoverable');
        articleElement.innerHTML = `
            <a href="articleView.html?id=${article.id}" class="article-link">
                <div class="card" style="overflow: hidden;">
                    <img src="${article.image}" class="card-img-top" alt="Article Image">
                    <div class="card-body p-1 d-flex flex-column" style="height: 9rem;">
                        <div class="article-details p-2">
                            ${article.date ? `<p>Date: ${article.date}</p>` : ''}
                            <h3>${article.title}</h3>
                            <p>${stripHtmlTags(article.content)}</p>
                        </div>
                    </div>
                </div>
            </a>
        `;
        rowElement.appendChild(articleElement);
    }

    articlesContainer.appendChild(rowElement);
}
function stripHtmlTags(html) {
    // Create a temporary element
    let tempElement = document.createElement('div');
    // Set the inner HTML of the temporary element
    tempElement.innerHTML = html;
    // Return the text content of the temporary element
    return tempElement.textContent || tempElement.innerText || '';
}
