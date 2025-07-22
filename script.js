document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded, initializing script...');
    initializePage();
});

function initializePage() {
    // Try to fetch projects from projects.json
    fetch('projects.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(projects => {
            console.log('Projects fetched successfully:', projects);
            displayProjects(projects);
        })
        .catch(error => {
            console.error('Fetch error, attempting fallback:', error);
            loadFallbackProjects();
            loadLocalProjects();
        });

    // Initialize theme
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
    }

    // Setup event listeners after a short delay
    setTimeout(setupEventListeners, 100);

    // Initialize Particles.js after projects
    if (typeof particlesJS === 'function') {
        setTimeout(initParticles, 500);
    } else {
        console.warn('Particles.js not loaded. Ensure the library is included in index.html.');
    }
}

// Display projects
function displayProjects(projects) {
    const container = document.getElementById('project-container');
    const loading = document.getElementById('project-loading');
    const fallback = document.getElementById('project-fallback');

    console.log('Displaying projects...', { container, loading, fallback });

    if (!container) {
        console.error('Project container (#project-container) not found in DOM');
        return;
    }
    if (loading) loading.style.display = 'none';
    if (fallback) fallback.style.display = 'none';

    container.innerHTML = '';

    if (!projects || !Array.isArray(projects)) {
        console.error('Invalid projects data:', projects);
        if (fallback) fallback.style.display = 'block';
        return;
    }

    projects.forEach((project, index) => {
        if (!project.title || !project.category) {
            console.warn('Invalid project data, skipping:', project);
            return;
        }
        const image = project.image ? `<img src="${project.image}" class="card-img-top" alt="${project.title} screenshot" loading="lazy">` : '';
        const card = `
            <div class="col-md-4 project-card" data-category="${project.category}">
                <div class="card">
                    ${image}
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text">${project.description || 'No description available'}</p>
                        <p><strong>Technologies:</strong> ${project.technologies ? project.technologies.join(', ') : 'N/A'}</p>
                        <a href="${project.link || '#'}" class="btn btn-accent" aria-label="View ${project.title}">View Project</a>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
        console.log(`Rendered project ${index + 1}: ${project.title}`);
    });
}

// Load fallback projects if fetch fails
function loadFallbackProjects() {
    const fallbackProjects = [
        { title: "Table Extraction Tool", description: "A Python script to automate table extraction.", category: "Python", technologies: ["Python"], link: "#", image: "" },
        { title: "Geo-Locator", description: "A C# app to locate servers via IP.", category: "C#", technologies: ["C#", ".NET"], link: "#", image: "" }
    ];
    displayProjects(fallbackProjects);
}

// Load projects from local file as a fallback
function loadLocalProjects() {
    const fallback = document.getElementById('project-fallback');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'projects.json', true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const projects = JSON.parse(xhr.responseText);
            console.log('Local projects loaded:', projects);
            displayProjects(projects);
        } else {
            console.error('Local fetch failed with status:', xhr.status);
            if (fallback) fallback.style.display = 'block';
        }
    };
    xhr.onerror = function () {
        console.error('Network error loading projects.json');
        if (fallback) fallback.style.display = 'block';
    };
    xhr.send();
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-buttons .btn');
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const activeButton = document.querySelector('.filter-buttons .btn.active');
                if (activeButton) activeButton.classList.remove('active');
                button.classList.add('active');
                
                const category = button.getAttribute('data-filter');
                const cards = document.querySelectorAll('.project-card');
                cards.forEach(card => {
                    if (category === 'all' || card.getAttribute('data-category') === category) {
                        card.style.display = 'block';
                        card.style.opacity = '1';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    } else {
        console.warn('No filter buttons found');
    }

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
        });
    } else {
        console.warn('Theme toggle button not found');
    }

    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { 'Accept': 'application/json' }
            })
                .then(response => {
                    if (response.ok) {
                        alert('Message sent successfully! Check your Gmail.');
                        contactForm.reset();
                    } else {
                        alert('Error sending message. Please try again.');
                    }
                })
                .catch(error => {
                    console.error('Form submission error:', error);
                    alert('Error sending message. Please try again.');
                });
        });
    } else {
        console.warn('Contact form not found');
    }

    // Smooth scrolling
    const navLinks = document.querySelectorAll('a.nav-link');
    if (navLinks.length > 0) {
        navLinks.forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const target = document.getElementById(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                } else {
                    console.error(`Smooth scroll target not found: ${targetId}`);
                }
            });
        });
    } else {
        console.warn('No navigation links found');
    }

    // Back to top button
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('show', window.scrollY > 300);
        });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    } else {
        console.warn('Back to top button not found');
    }

    // Fade-in sections
    const sections = document.querySelectorAll('.fade-in-section');
    if (sections.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.2 });
        sections.forEach(section => observer.observe(section));
    } else {
        console.warn('No fade-in sections found');
    }
}

// Initialize Particles.js
function initParticles() {
    particlesJS('particles-js', {
        particles: {
            number: { value: 40, density: { enable: true, value_area: 1000 } },
            color: { value: '#a100f2' },
            shape: { type: 'circle' },
            opacity: { value: 0.3, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 120, color: '#a100f2', opacity: 0.3, width: 1 },
            move: { enable: true, speed: 1.5, direction: 'none', random: true }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
            modes: { push: { particles_nb: 3 }, repulse: { distance: 100, duration: 0.4 } }
        }
    });
    console.log('Particles.js initialized');
}
