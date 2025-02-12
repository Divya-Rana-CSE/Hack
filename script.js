// Smooth scroll to waitlist section
function scrollToWaitlist() {
  document.getElementById('waitlist').scrollIntoView({
      behavior: 'smooth'
  });
}

// Form handling
function handleWaitlistSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const emailInput = form.querySelector('#email');
  const errorMessage = form.querySelector('.error-message');
  const submitButton = form.querySelector('button[type="submit"]');
  const successMessage = document.getElementById('successMessage');
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
      errorMessage.textContent = 'Please enter a valid email address';
      return;
  }
  
  // Clear any previous error message
  errorMessage.textContent = '';
  
  // Disable submit button and show loading state
  submitButton.disabled = true;
  submitButton.textContent = 'Joining...';
  
  // Simulate API call (replace with actual API call)
  setTimeout(() => {
      // Hide form and show success message
      form.style.display = 'none';
      successMessage.classList.remove('hidden');
      
      // Store email in localStorage (optional)
      localStorage.setItem('waitlistEmail', emailInput.value);
  }, 1000);
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
      }
  });
}, observerOptions);

// Observe all sections for fade-in animation
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Observe cards for animation
document.querySelectorAll('.mbti-card, .feature-card').forEach(card => {
  observer.observe(card);
});

// Add animation delays to hero section elements
document.addEventListener('DOMContentLoaded', () => {
  const heroElements = document.querySelectorAll('.hero .fade-in');
  heroElements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.2}s`;
  });
});
