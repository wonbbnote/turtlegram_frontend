const urlParams = new URLSearchParams(window.location.search);
const article_id = urlParams.get('id');
console.log(article_id)

getArticleDetail(article_id);