const signOut = document.querySelector('.sign_up'),
    startForm = document.querySelector('.start'),
    signUpForm = document.querySelector('.form-sign_up'),
    signUpBtn = document.querySelector('#sign_up'),
    fName = document.querySelector('.fName'),
    lName = document.querySelector('.lName'),
    password = document.querySelector('.password'),
    email = document.querySelector('.email'),
    number = document.querySelector('.number'),
    userName = document.querySelector('.userName');


const signUpAppl = {
    userName: '',
    fName: '',
    lName: '',
    password: '',
    email: '',
    number: '',

}

signOut.addEventListener('click', () => {
    signUpForm.classList.remove('hidden');
    startForm.classList.add('hidden');
})


const signUpFun = () => {
    fetch('./api/start', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName: signUpAppl.userName,
                fName: signUpAppl.fName,
                lName: signUpAppl.lName,
                password: signUpAppl.password,
                email: signUpAppl.email,
                number: signUpAppl.number,

            })
        })
        .then((response) => {
            if (response.ok) {
                alert(`Thank you ${signUpAppl.fName} ${signUpAppl.lName}, you are sign up in the "Coffe-break"`)
                return response.json();
            } else {
                alert(`${response.status}: ${response.statusText}`)
            }
        })
        .catch(error => {

            console.dir(error)
        })


};




fName.addEventListener('change', (e) => {
    signUpAppl.fName = e.target.value;
});
lName.addEventListener('change', (e) => {
    signUpAppl.lName = e.target.value;
});
password.addEventListener('change', (e) => {
    signUpAppl.password = e.target.value;
});
email.addEventListener('change', (e) => {
    signUpAppl.email = e.target.value;
});
number.addEventListener('change', (e) => {
    signUpAppl.number = e.target.value;
});



signUpBtn.addEventListener('click', signUpFun)