console.log("index.jsdlqsleke")

async function loadArticles(){
    articles = await getArticles() 
    //api와 통신하는 함수를 api.js에 따로 만들어 그걸 부르고 리턴값을 여기서 이용할 것
    console.log(articles)
    const article_list = document.getElementById("articles")

    articles.forEach(article =>{ //for.each 리스트 형태에서 쓸 수 있는 것
        console.log(article)
        const newArticle = document.createElement("li");
        newArticle.setAttribute("id", article._id)
        newArticle.innerText = article.title
        article_list.appendChild(newArticle)
    })

}

async function checkLogin(){
    const name = await getName(); // 여기서 getName() 실행
    console.log(name)
    const username = document.getElementById("username")
    const loginoutButton = document.getElementById("loginout")

    if(name){ // name이 있다면
        username.innerText = name
        loginoutButton.innerText = "로그아웃"
        loginoutButton.setAttribute("onclick", "logout()")
    }else{ // name이 없다면 (null)
        username.innerText = "로그인해주세요"
        loginoutButton.innerText = "로그인"
        loginoutButton.setAttribute("onclick", "location.href = '/login.html'")
    }


}


checkLogin(); //index.js 키면 바로 실행
loadArticles();
