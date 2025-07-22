const projects = [
    {
        title: "Table Extraction Tool",
        description: "A Python script to automate extraction of tables from documents or websites.",
        category: "Python",
        technologies: ["Python"],
        link: "#",
        image: ""
    },
    {
        title: "Mini Runner Game",
        description: "A simple 2D runner game built with Pygame.",
        category: "Python",
        technologies: ["Python", "Pygame"],
        link: "#",
        image: ""
    },
    {
        title: "Tetris Game",
        description: "A classic Tetris game implemented using Tkinter.",
        category: "Python",
        technologies: ["Python", "Tkinter"],
        link: "#",
        image: ""
    },
    {
        title: "PNG Sprite Extractor",
        description: "A tool to extract sprites from PNG files (work in progress).",
        category: "Python",
        technologies: ["Python"],
        link: "#",
        image: ""
    },
    {
        title: "QR Code Generator",
        description: "Generates QR codes from any input text or URL.",
        category: "Python",
        technologies: ["Python", "qrcode"],
        link: "#",
        image: ""
    },
    {
        title: "GIF Creator",
        description: "Combines multiple images to create animated GIFs.",
        category: "Python",
        technologies: ["Python", "Pillow"],
        link: "#",
        image: ""
    },
    {
        title: "Dinosaur Game Cheat",
        description: "An automation script that detects obstacles and auto-jumps in the Chrome dinosaur game.",
        category: "Python",
        technologies: ["Python", "PyAutoGUI"],
        link: "#",
        image: ""
    },
    {
        title: "Guess the Word Game",
        description: "A word-guessing game with a fancy UI.",
        category: "Python",
        technologies: ["Python", "Tkinter"],
        link: "#",
        image: ""
    },
    {
        title: "Discord Tag Bot",
        description: "A bot to automate tagging friends on Discord.",
        category: "Python",
        technologies: ["Python", "discord.py"],
        link: "#",
        image: ""
    },
    {
        title: "Geo-Locator",
        description: "A C# WinForms app that uses a public API to locate servers via DNS or IP (e.g., 8.8.8.8 for Google).",
        category: "C#",
        technologies: ["C#", ".NET", "WinForms"],
        link: "#",
        image: ""
    },
    {
        title: "Password Cracker",
        description: "A Batch script that brute-forces passwords for ZIP files using a wordlist.",
        category: "Batch",
        technologies: ["Batch"],
        link: "#",
        image: ""
    },
    {
        title: "Phishing Attack Simulation",
        description: "A PHP-based fake login page that sends captured data to a Discord webhook (for educational purposes).",
        category: "PHP",
        technologies: ["PHP", "Discord Webhook"],
        link: "#",
        image: ""
    }
];

// Fallback projects if needed
const fallbackProjects = [
    {
        title: "Table Extraction Tool",
        description: "A Python script to automate extraction of tables from documents or websites.",
        category: "Python",
        technologies: ["Python"],
        link: "#",
        image: ""
    },
    {
        title: "Geo-Locator",
        description: "A C# WinForms app that uses a public API to locate servers via DNS or IP.",
        category: "C#",
        technologies: ["C#", ".NET", "WinForms"],
        link: "#",
        image: ""
    }
];

// Display projects immediately with embedded data
document.addEventListener('DOMContentLoaded', () => {
    displayProjects(projects);
    initParticles();
});

// Display projects
function displayProjects(projects) {
    const container = document.getElementById('project-container');
    const loading = document.getElementById('project-loading');
    const fallback = document.getElementById('project-fallback');
    loading.style.display = 'none';
    container.innerHTML = '';
    projects.forEach((project, index) => {
        const image = project.image ? `<img src="${project.image}" class="card-img-top" alt="${project.title} screenshot" loading="lazy">` : '';
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
        console.log(`Rendered project ${index + 1}: ${project.title}`);
    });
    // Ensure projects are visible on mobile
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.style.display = 'block';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
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
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => { card.style.display = 'none'; }, 400);
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
    fetch(e.target.action, {
        method: 'POST',
        body: new FormData(e.target),
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            alert('Message sent successfully! Check your Gmail.');
            e.target.reset();
        } else {
            alert('Error sending message. Please try again.');
        }
    }).catch(error => {
        console.error('Form submission error:', error);
        alert('Error sending message. Please try again.');
    });
});

// Smooth scrolling
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        try {
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        } catch (error) {
            console.error('Smooth scroll error:', error);
        }
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

// Back to top button
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    backToTop.classList.toggle('show', window.scrollY > 300);
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

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
