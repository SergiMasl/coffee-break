const newsBtn = document.querySelector('#news')

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
        console.log(response)
        const creatNews = (text) => {
            let element = document.createElement("p");
            element.textContent = text;
            newsFeed.appendChild(element);
        }
    })