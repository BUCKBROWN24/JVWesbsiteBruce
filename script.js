document.addEventListener("DOMContentLoaded", () => {
    // Welcome prompt on the home page
    if (document.querySelector("#greeting")) {
      const name = prompt("Welcome to BuckShop! What's your name?")
      if (name) {
        document.querySelector("#greeting").textContent = `Hello, ${name}! We're glad you're here.`
      }
    }
  
    // Contact form handling
    const contactForm = document.querySelector("#contactForm")
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        const email = document.querySelector("#email").value
        const message = document.querySelector("#message").value
        const freeItem = document.querySelector("#freeItem").value
  
        if (!email || !message) {
          alert("Please fill out all required fields.")
          return
        }
  
        const randomNumber = Math.floor(Math.random() * 10000)
        const subject = `BuckShop Inquiry #${randomNumber}`
  
        const mailtoLink = `mailto:info@buckshop.com?cc=myemail@example.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${email}\n\nMessage: ${message}\n\nFree Item: ${freeItem}`)}`
  
        window.location.href = mailtoLink
  
        contactForm.style.display = "none"
        document.querySelector("#thankYouMessage").style.display = "block"
  
        setTimeout(() => {
          window.location.href = "index.html"
        }, 5000)
      })
    }
  })
  
  