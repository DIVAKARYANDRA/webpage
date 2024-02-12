const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav-link')

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}

window.addEventListener('scroll', scrollHeader)


const calculateForm  =  document.getElementById('calculate-form'),
      calculateCm = document.getElementById('calculate-cm'),
      calculateKg = document.getElementById('calculate-kg'),
      calculateMessage = document.getElementById('calculate-message')

const calculateBmi = (e) => {
    e.preventDefault()

    if(calculateCm.value === '' || calculateKg.value === ''){
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')

        calculateMessage.textContent  = 'Fill in the height and weight'

        setTimeout(() => {
            calculateMessage.textContent = ''
        },3000)
    }else{
        const cm = calculateCm.value / 100,
              kg = calculateKg.value,
              bmi = Math.round(kg/(cm*cm))

        if(bmi < 18.5){
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent  = `Your BMI is ${bmi} and you are skinny😔`
        }else  if(bmi < 25){
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent  = `Your BMI is ${bmi} and you are healthy😉`
        }else{
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent  = `Your BMI is ${bmi} and you are overweight😢`
        }

        calculateCm.value = ''
        calculateKg.value = ''


        setTimeout(() => {
            calculateMessage.textContent = ''
        },4000)
    }

}

calculateForm.addEventListener('submit',calculateBmi)



const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message'),
      contactUser = document.getElementById('contact-user')

const sendEmail = (e) => {
    e.preventDefault()

    if(contactUser.value === ''){
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')

        contactMessage.textContent = 'You must enter your email 👆'
    }
}


const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav-menu a[href+=' + sectionId)

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)