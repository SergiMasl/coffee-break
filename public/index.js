const creatPostBtn = document.querySelector('#creat_post-btn')
const main = document.querySelector('.main')
const creatPostForm = document.querySelector('.creat-post_form')
const addPost = document.querySelector('#add-post')
const postTitle = document.querySelector('.creat_title')
const posttext = document.querySelector('.text')




const post = {
    title: '',
    text: '',
}
postTitle.addEventListener('change', function(e) {
    post.title = e.target.value
})
posttext.addEventListener('change', function(e) {
    post.text = e.target.value
})


const getNews = () => {
        fetch("http://localhost:3000/api/news", {
                method: 'GET'
            })
            .then((response) => {
                if (response.status != 200) {
                    throw new Error('status network not 200')
                }
                return (response.json())
            })
            .then((response) => {

                response.forEach((item) => {
                    let element = document.createElement("div");
                    element.classList.add('news_contener');
                    element.innerHTML = `
                        <div class='news-wrap'>
                            <div class='news-item'>
                                <div class='news_inner'>
                                    <div class="news_author">
                                        <h3>${item.autor}</h3>
                                    </div>
                                    <div class='news_title'>
                                        <h4>${item.title}</h4>
                                    </div>
                                    <div class='news_text'>
                                        <p>${item.text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                    main.appendChild(element);
                })

            })
    }
    //newsBtn.addEventListener('click', getNews)

getNews()

const creatPost = () => {
    creatPostForm.classList.remove('hidden')

}

const runAddPost = () => {
    async function postData(url = '/api/add', data = {}) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }
    postData('/api/add', { title: post.title, text: post.text })
        .then(data => {
            console.log(data)
        })
    main.innerHTML = '';
    getNews()
}

creatPostBtn.addEventListener('click', creatPost)
addPost.addEventListener('click', runAddPost)