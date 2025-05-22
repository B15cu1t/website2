// Load projects from JSON
fetch('projects.json')
    .then(response => response.json())
    .then(data => {
        displayProjects(data);
    });

// Display projects
function displayProjects(projects) {
    const container = document.getElementById('project-container');
    container.innerHTML = '';
    projects.forEach(project => {
        const image = project.image ? `<img src="${project.image}" class="card-img-top" alt="${project.title} screenshot">` : '';
        const card = `
            <div class="col-md-4 project-card" data-category="${project.category}">
                <div class="card">
                    ${image}
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text">${project.description}</p>
                        <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
                        <a href="${project.link || '#'}" class="btn btn-accent" aria-label="View ${project.title}">View Project</a>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Filter projects
document.querySelectorAll('.filter-buttons .btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.filter-buttons .btn.active').classList.remove('active');
        button.classList.add('active');
        const category = button.getAttribute('data-filter');
        const cards = document.querySelectorAll('.project-card');
        cards.forEach(card => {
            card.style.transition = 'opacity 0.3s ease';
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
                card.style.opacity = '1';
            } else {
                card.style.opacity = '0';
                setTimeout(() => { card.style.display = 'none'; }, 300);
            }
        });
    });
});

// Theme toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
});

// Load theme preference
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
}

// Form submission
document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Form submitted! Use Formspree for real submissions: https://formspree.io/');
    e.target.reset();
});

// Smooth scrolling
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Fade-in sections on scroll
const sections = document.querySelectorAll('.fade-in-section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// Particles.js for hero background
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#a100f2' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: '#a100f2', opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2, direction: 'none', random: true }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
        modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } }
    }
});
