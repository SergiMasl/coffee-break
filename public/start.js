const signOut = document.querySelector('.sign_up')
const startForm = document.querySelector('.start')
const signUpForm = document.querySelector('.form-sign_up')
const signUpBtn = document.querySelector('#sign_up')
const fName = document.querySelector('.fName')
const lName = document.querySelector('.lName')

const signUpAppl = {
    fName: '',
    lName: '',
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
                fName: signUpAppl.fName,
                lName: signUpAppl.lName,
            })
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                alert(`${response.status}: ${response.statusText}`)
            }
        })
        .catch(error => {

            console.dir(error)
        })


};
console.log(signUpAppl)
fName.addEventListener('change', (e) => {
    signUpAppl.fName = e.target.value;
});
lName.addEventListener('change', (e) => {
    signUpAppl.lName = e.target.value;
});


signUpBtn.addEventListener('click', signUpFun)