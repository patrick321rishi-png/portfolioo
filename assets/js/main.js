/*==================== LIVE SCROLL NAVIGATION ACTION TRIGGER SYSTEM ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 80; // Adjusted offset spacing trigger
        const sectionId = current.getAttribute('id')
        
        // Connect the scroll engine seamlessly to the luxury bottom bar indicators
        const link = document.querySelector('.bottom-nav a[href*=' + sectionId + ']')
        
        if(link) {
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                link.classList.add('active')
            }else{
                link.classList.remove('active')
            }
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== BACKUP USER FORCE CLICK SCROLL INTERACTION ====================*/
const navLinks = document.querySelectorAll('.bottom-nav__link')
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'))
        this.classList.add('active')
    })
})