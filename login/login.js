document.querySelector('.icard-btn').addEventListener('click',()=>{
    document.querySelector('.banner').style.display = 'none';
    document.querySelector('.icard-wrapper').style.display = 'none';
    document.querySelector('.hide-btn').style.display = 'none';

    document.querySelector('.form-container').style.display = 'flex';

    document.querySelector('.container1').style.background = "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('../images/login-images/cloud-image.jpg') no-repeat center";
});

document.querySelector('.hide-btn button').addEventListener('click',()=>{
    document.querySelector('.banner').style.display = 'flex';
    document.querySelector('.hide-btn').style.display = 'none';
});

document.querySelector('.x-btn').addEventListener('click',()=>{
    document.querySelector('.banner').style.display = 'flex';
    document.querySelector('.icard-wrapper').style.display = 'flex';

    document.querySelector('.form-container').style.display = 'none';
    document.querySelector('.container1').style.background = "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('../images/login-images/diva1.png') no-repeat center";
});

const formContainer = document.querySelector('.form-container');
const loginBtn = document.querySelector('.header-form button');

loginBtn.addEventListener('click',()=>{
    formContainer.classList.toggle('changeForm');
});

const labels = document.querySelectorAll('.form-input-container label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})


function validateAndRedirect() {
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;

    if (email.trim() === '' || password.trim() === '') {
        alert('Please fill out all the required fields.');
    } else {
        var emailPrefix = email.split('@')[0];

        if (password === emailPrefix) {
        window.location.href = '../protfolio/protfolio.html';
        }else {
        alert('Password should match the part before "@" in the email. Please try again.');
        }
    }
}