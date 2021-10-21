const passwordSignIn = document.querySelector('.passwordSignIn'),
    userNameSignIn = document.querySelector('.userNameSignIn'),
    popUp = document.querySelector('.sgnIn'),
    singInBtm = document.querySelector('.btn-sign_in');

const user = {
    userName: '',
    password: '',
}

userNameSignIn.addEventListener('change', (e) => {
    user.userName = e.target.value;
});
passwordSignIn.addEventListener('change', (e) => {
    user.password = e.target.value;
});

const signInForm = () => {

    fetch('/api/sign-in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName: user.userName,
                password: user.password,
            })
        })
        .then((response) => {
            if (response.ok) {
                alert('Yep')
                return response.json();
            } else {
                alert(`${response.status}: ${response.statusText}`)
            }
        })
        .catch(error => {

            console.dir(error)
        })
}


singInBtm.addEventListener('click', signInForm)
    // singInBtm.addEventListener('click', () => {
    //     popUp.classList.remove('hidden')
    // })