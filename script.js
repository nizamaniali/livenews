const api_Key = 'bf7829bb21cd4717b21bc9818c8e2252';

// *************  api call starts from hereee ******************

const url =
  'https://newsapi.org/v2/everything?q=Apple&from=2024-12-1&sortBy=popularity&apiKey=bf7829bb21cd4717b21bc9818c8e2252';

axios
  .get(url)
  .then(function (response) {
    const articles = response.data.articles;

    // Filter out articles with empty or missing title or image_url
    const filteredArticles = articles.filter((article) => {
      return (
        article.title &&
        article.title.trim() !== '' &&
        article.author &&
        article.author.trim() !== '' &&
        article.author.trim() !== '' &&
        article.urlToImage &&
        article.urlToImage.trim() !== '' &&
        article.url &&
        article.url.trim() !== ''
      );
    });

    console.log(filteredArticles);

    const limitedArticles = filteredArticles.slice(0, 10);

    const articlesContainer = document.getElementById('articles-container');

    // for each starts here

    limitedArticles.forEach((article, index) => {
      const articleElement = document.createElement('div');
      articleElement.classList.add('article');

      if (index === 0) {
        articleElement.classList.add('top-item');
      }
      if (index > 2) {
        articleElement.classList.add('moreArticles');
      }
      if (index > 5) {
        articleElement.classList.add('extraArticles');
      }

      articleElement.innerHTML = `
    
  <img src=${article.urlToImage}>
  <h2>${article.title} </h2>
  <h4>${article.author}</h4>
  <button> <a href=${article.url} target="_blank"> Click to Read </a> </button>`;
      articlesContainer.appendChild(articleElement);
    });
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {});

// ********** api ends here ******************
//   api ends here
