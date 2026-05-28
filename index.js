
const button = document.getElementById("hamburger")
const nav = document.getElementById("nav")
button.addEventListener ('click', () => {
    nav.classList.toggle("show")
});


const firstSection = document.getElementById("main-home")
const SecondSection = document.getElementById("main-trust")
const ThridSection = document.getElementById("main-everything")
const foruthSection = document.getElementById("main-steps")
const fifthSection = document.getElementById("testimo")
const sixthSection = document.getElementById("pricing")
const sevenSection = document.getElementById("faq")
const eightSection = document.getElementById("cta-section")

const options = {
    rootMargin: "0px",
    threshold: 0.5
    
}
function callbackfuntion(enteries) {
    enteries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.id === "main-home") {
                entry.target.classList.add('loaded')
            }

            if (entry.target.id === "main-trust") {
                entry.target.classList.add('fade-in')
            }

            if (entry.target.id === "main-everything") {
                entry.target.classList.add('animate')
            }
            if (entry.target.id === "main-steps") {
                entry.target.classList.add('prop')
            }
            if (entry.target.id === "testimo") {
                entry.target.classList.add("lovee")
            }
            if (entry.target.id === "pricing") {
              entry.target.classList.add("price")
            }
            if (entry.target.id === "faq") {
            entry.target.classList.add("fff")
            }
            if (entry.target.id === "cta-section") {
            entry.target.classList.add("ct")
            }
            observer.unobserve(entry.target)
        }
    });
}



const observer = new IntersectionObserver (
    callbackfuntion,
    options
)
observer.observe(firstSection)
observer.observe(SecondSection)
observer.observe(ThridSection)
observer.observe(foruthSection)
observer.observe(fifthSection)
observer.observe(sixthSection)
observer.observe(eightSection)
observer.observe(sevenSection)


const ffaqs = document.querySelectorAll(".ffaq");
ffaqs.forEach((ffaq) => {
    const question = ffaq.querySelector(".faq-question");
    question.addEventListener('click', () => {
     ffaq.classList.toggle("active");
    })
});