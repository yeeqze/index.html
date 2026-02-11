// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('active');
    });
});

// FAQ toggle
function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const allQuestions = document.querySelectorAll('.faq-question');
    const allAnswers = document.querySelectorAll('.faq-answer');
    
    // Close all other FAQs
    allQuestions.forEach(q => {
        if (q !== element) {
            q.classList.remove('active');
        }
    });
    allAnswers.forEach(a => {
        if (a !== answer) {
            a.classList.remove('active');
        }
    });
    
    // Toggle current FAQ
    element.classList.toggle('active');
    answer.classList.toggle('active');
}