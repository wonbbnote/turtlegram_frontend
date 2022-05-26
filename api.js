const backend_base_url = "http://127.0.0.1:5000"
const frontend_base_url = "http://127.0.0.1:5500"


async function handleSignin(){
    const signupData = {
        email : document.getElementById("floatingInput").value,
        password : document.getElementById("floatingPassword").value
    }
    
    const response = await fetch(`${backend_base_url}/signup`,{
    method: 'POST',
    body:JSON.stringify(signupData)
    })

    response_json = await response.json()
    console.log(response_json)
    

    if (response.status == 200){
        window.location.replace(`${frontend_base_url}/login.html`)
        }else{
            alert(response.status)
        }
}


async function handleLogin(){
    console.log("handle login")

    const loginData = {
        email : document.getElementById("floatingInput").value,
        password : document.getElementById("floatingPassword").value
    }

    const response = await fetch(`${backend_base_url}/login`,{
    method: 'POST',
    body:JSON.stringify(loginData)
    })
    
    console.log(response)
    response_json = await response.json()
    console.log(response_json)
    localStorage.setItem("token", response_json.token)
    // 브라우저 자체 url에 로컬 스토리지에 저장

    if (response.status == 200){
        window.location.replace(`${frontend_base_url}`)
    }else{
        alert(response.status)
    }
}


async function getName(){
    console.log("get Name")
    console.log(localStorage.getItem("token"))

    const response = await fetch(`${backend_base_url}/getuserinfo`,{
        headers:{
            'Authorization': localStorage.getItem("token")
        }
        })
        
        
        if (response.status ==200){ //로그인이 안되어있으면 401리턴되도록 데코레이터 함수에서 설정
            response_json = await response.json()
            console.log(response_json)
            return response_json.email
        }else{
            return null
        }

        // const username = document.getElementById("username")
        // username.innerText = response_json.email

}



async function postArticle(title, content){

    const articleData = {
        title: title,
        content: content
    }
    console.log(articleData)

    const response = await fetch(`${backend_base_url}/article`,{
        method:'POST',
        headers:{ 
            'Authorization':localStorage.getItem("token")},
        body: JSON.stringify(articleData)
    })

    response_json = await response.json()
    console.log(response_json)

    if (response.status == 200){
        window.location.replace(`${frontend_base_url}`)
    }else{
        alert(response.status)
    }

}

async function getArticles(){
    const response = await fetch(`${backend_base_url}/article`, {
        method: 'GET',
    })
    response_json = await response.json()
    return response_json.articles
}

function logout(){
    localStorage.removeItem("token")
    // 로컬 스토리지에 있는 토큰값 삭제
    window.location.replace(`${frontend_base_url}/`);
    // 새로고침

}


function articleDetail(article_id){
    console.log(article_id)
    //이동하고 싶은 url 만들기
    const url = `${frontend_base_url}/article_detail.html?id=${article_id}`
    location.href = url
}

async function getArticleDetail(article_id){
    const response = await fetch(`${backend_base_url}/article/${article_id}`,{
        method : 'GET',//안해도 됨?
    })
    response_json = await response.json()
    console.log(response_json)

    return response_json.article
}

async function patchArticle(article_id, title, content){
    const articleData = {
        "title": title,
        "content": content
    }
    const response = await fetch(`${backend_base_url}/article/${article_id}`,{
        headers :{
            'Authorization': localStorage.getItem("token")},
        method: 'PATCH',
        body: JSON.stringify(articleData)
    })

    if (response.status==200){
        response_json = await response.json()
        return response_json
    }else{
        alert(response.status)
    }
    
}













