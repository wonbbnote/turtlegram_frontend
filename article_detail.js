const urlParams = new URLSearchParams(window.location.search);
const article_id = urlParams.get('id');
console.log(article_id)

//getArticleDetail(article_id);

async function loadArticle(article_id){
    const article = await getArticleDetail(article_id);
    console.log(article)

    const title = document.getElementById("title")
    const content = document.getElementById("content")
    const user_email = document.getElementById("user_email")
    const time = document.getElementById("time")

    title.innerText = article.title
    content.innerText = article.content
    user_email.innerText = article.user_email
    time.innerText = article.time

}

function updateMode(){
    const title = document.getElementById("title")
    const content = document.getElementById("content")
    title.style.visibility = "hidden"
    content.style.visibility = "hidden"

    const input_title = document.createElement("textarea")
    input_title.setAttribute("id", "input_title")
    input_title.innerText = title.innerHTML

    const input_content = document.createElement("textarea")
    input_content.setAttribute("id", "input_content")
    input_content.innerText = content.innerHTML
    input_content.rows = 10

    const body = document.body
    body.insertBefore(input_title, title)
    body.insertBefore(input_content, content)






}

loadArticle(article_id);

