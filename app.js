document.addEventListener('DOMContentLoaded', () => {
    // TIME DISPLAY SECTION
    const timeElement = document.querySelector('[data-testid="test-user-time"]');

    function updateTime() {
        if (timeElement) {
            timeElement.textContent = `Current time in ms: ${Date.now()}`;
        }
    }

    updateTime();
    setInterval(updateTime, 1000);


    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;   
        const message = document.getElementById('message').value;

        let valid = true;

        // Clear old error messages
        document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');

        // Validate Name
        if (name.trim() === '') {
            document.querySelector('[data-testid="test-contact-error-message"]').textContent = 'Name is required.';
            valid = false;
            console.log('Name validation failed');
        }
        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.trim() === '') {
            document.querySelector('[data-testid="test-contact-error-email"]').textContent = 'Email is required.';
            valid = false;
        }else if (!emailPattern.test(email)) {
            document.querySelector('[data-testid="test-contact-error-email"]').textContent = 'Invalid email format.';
            console.log('Email validation failed');
            valid = false;
        }
        // Validate Subject
        if (subject.trim() === '') {
            document.querySelector('[data-testid="test-contact-error-subject"]').textContent = 'Subject is required.';
            valid = false;
        }
        // Validate Message
        if (message.trim() === '') {
            document.querySelector('[data-testid="test-contact-error-message"]').textContent = 'Message must be at least 10 characters.';
            valid = false;
        }
        if (valid) {

            //Remove old success message if any
            let oldMessage = document.querySelector('[data-testid="test-contact-success"]')
            if (oldMessage){
                oldMessage.remove();
            }
            //Create new success message
            const successMsg = document.createElement('p');
            successMsg.className = 'success-msg';
            successMsg.dataset.testid = 'test-contact-success';
            successMsg.textContent = 'Your message has been sent successfully';
            form.appendChild(successMsg);

            form.reset();
            console.log('Form submitted successfully');


        }
    })

    const navLinks = document.querySelectorAll('.page-nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = e.target.getAttribute('href');
      
      const current = window.location.pathname.split('/').pop();
      sessionStorage.setItem('prevPage', current);

      document.body.style.transform = 'translateX(-100%)';
      
      setTimeout(() => {
        window.location.href = target;
      }, 600);
    });
  });

  function highlightDot() {
    const path = window.location.pathname;
    document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));

    if (path.includes('index') || path.endsWith('/')) {
      document.getElementById('dot-home').classList.add('active');
    } else if (path.includes('contact')) {
      document.getElementById('dot-contact').classList.add('active');
    } else if (path.includes('about')) {
      document.getElementById('dot-about').classList.add('active');
    }

    // Direction-aware slide-in
    const prevPage = sessionStorage.getItem('prevPage');
    if (prevPage) {
      if (
        (prevPage === 'index.html' && path.includes('contact')) ||
        (prevPage === 'contact.html' && path.includes('about'))
      ) {
        // forward → slide in from right
        document.body.style.transform = 'translateX(100%)';
        setTimeout(() => (document.body.style.transform = 'translateX(0)'), 50);
      } else {
        // backward → slide in from left
        document.body.style.transform = 'translateX(-100%)';
        setTimeout(() => (document.body.style.transform = 'translateX(0)'), 50);
      }
    }
  }

  highlightDot();
})