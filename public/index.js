//const newsBtn = document.querySelector('#news')
const main = document.querySelector('.main')

const getNews = () => {
        fetch("http://localhost:3000/public/news", {
                method: 'GET'
            })
            .then((response) => {
                if (response.status != 200) {
                    throw new Error('status network not 200')
                }
                return (response.json())
            })
            .then((response) => {
                console.log(response[0].autor)

                response.forEach((item) => {
                    console.log(item)
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