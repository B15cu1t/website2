const CONFIG = {
    bootDuration: 3000,
    glitchChars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*<>{}[]|/\\!?+=_-',
    matrixChars: '01',
    originalName: 'Teo Gjurevski'
};

// Projects Data
const PROJECTS = {
    security: [
        {
            title: 'DNS Enumerator',
            desc: 'Advanced DNS reconnaissance tool supporting A, MX, NS, TXT, and CNAME records with batch subdomain scanning.',
            tech: 'Python',
            link: 'https://github.com/B15cu1t/DNS_Enumerator'
        },
        {
            title: 'Client-Server Communication',
            desc: 'Secure local network chat system with multi-client support, message encryption, and real-time broadcasting.',
            tech: 'Python',
            link: 'https://github.com/B15cu1t/Client-Server-Communication'
        },
        {
            title: 'Password Cracker',
            desc: 'High-speed password recovery tool for ZIP files using optimized wordlist attacks and brute-force algorithms.',
            tech: 'Batch',
            link: 'https://github.com/B15cu1t/Password_Cracker'
        }
    ],
    automation: [
        {
            title: 'Desktop File Organizer',
            desc: 'Intelligent file management system that auto-detects file types and organizes your desktop into categorized folders.',
            tech: 'Python',
            link: 'https://github.com/B15cu1t/Desktop-File-Organizer-Automation-Script-'
        },
        {
            title: 'QR Code Generator',
            desc: 'Fast QR code creation tool with customizable size, error correction levels, and batch processing support.',
            tech: 'Python',
            link: 'https://github.com/B15cu1t'
        },
        {
            title: 'GIF Creator',
            desc: 'Image-to-GIF converter with frame rate control, loop settings, and automatic optimization for web use.',
            tech: 'Python',
            link: 'https://github.com/B15cu1t'
        }
    ],
    experiments: [
        {
            title: 'Tetris Game',
            desc: 'Classic Tetris implementation with smooth controls, score tracking, and progressive difficulty levels.',
            tech: 'Python',
            link: 'https://github.com/B15cu1t/Tetris_Game'
        },
        {
            title: 'Neon Chase',
            desc: 'Fast-paced arcade game featuring physics-based movement, collision detection, and increasing difficulty.',
            tech: 'Python',
            link: 'https://github.com/B15cu1t'
        },
        {
            title: 'Guess the Word',
            desc: 'Interactive word puzzle game with hint system, difficulty levels, and modern UI design.',
            tech: 'Python',
            link: 'https://github.com/B15cu1t'
        }
    ]
};

// Terminal Commands
const COMMANDS = {
    help: `Available commands:
  whoami     - Display user information
  skills     - List technical skills
  projects   - Show project summary
  contact    - Get contact information
  cert       - Display certifications
  clear      - Clear terminal`,

    whoami: `Teo Gjurevski
First-year Computer Science student at FINKI, Macedonia
Cybersecurity enthusiast | Python developer | CTF player
Currently learning: Penetration testing & network security`,

    skills: `TECHNICAL_SKILLS:
├── Languages: Python, C#, C++, Batch, PHP
├── Security: Network recon, subdomain enumeration, penetration testing
├── Tools: Git, Linux CLI, threading, automation scripts
└── Learning: Advanced Python, ethical hacking`,

    projects: `PROJECT_SUMMARY:
├── [Security]
│   ├── Subdomain Enumerator (Python)
│   ├── DNS Enumerator (Python)
│   └── Password Cracker (Batch)
├── [Automation]
│   ├── Desktop File Organizer (Python)
│   └── QR Code Generator (Python)
└── [Experiments]
    └── Tetris Game, Neon Chase, and more...`,

    contact: `CONTACT_CHANNELS:
├── GitHub: github.com/B15cu1t
├── LinkedIn: https://www.linkedin.com/in/teo-gjurevski-865a273a2/
└── Email: Available via contact form`,

    cert: `CERTIFICATIONS:
└── Cyber Exercises and Experiential Education Program (CE3)
    ├── Issued by: SANS & CRDFGLOBAL
    └── Event: Balkan Hacking CTF - Kosovo`,

    sudo: `[sudo] password for visitor: 
Permission denied.`,

    'rm -rf': `Nice try.`,

    cat: `meow`,

    ls: `.
├── about.txt
├── projects/
├── skills.db
└── contact.cfg`,

    pwd: `/home/visitor/b15cu1t`,

    neofetch: `       _,met$$$$$gg.          visitor@b15cu1t
    ,g$$$$$$$$$$$$$$$P.       ----------------
  ,g$$P"     """Y$$.".        OS: B15cu1t Security Systems
 ,$$P'              \`$$$.     Kernel: 6.6.6-fsociety
',$$P       ,ggs.     \`$$b:   Uptime: ${Math.floor(Math.random() * 100)} days
\`d$$'     ,$P"'   .    $$$    Packages: 1337
 $$P      d$'     ,    $$P    Shell: /bin/hack
 $$:      $$.   -    ,d$$'    Terminal: xterm-256color
 $$;      Y$b._   _,d$P'      CPU: AMD Ryzen 9 @ 4.2GHz
 Y$$.    \`.\`"Y$$$$P"'         Memory: 32GB
 \`$$b      "-.__              
  \`Y$$                        
   \`Y$$.                      
     \`$$b.                    
       \`Y$$b.                 
          \`"Y$b._             
              \`"""`,

    date: new Date().toLocaleString(),

    uptime: `${Math.floor(Math.random() * 100)} days, ${Math.floor(Math.random() * 24)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,

    id: `uid=1000(visitor) gid=1000(visitor) groups=1000(visitor),4(adm),27(sudo)`,

    uname: `Linux b15cu1t 6.6.6-fsociety #1 SMP x86_64 GNU/Linux`
};

const bootMessages = [
    { text: '[    0.000000] Initializing kernel...', delay: 0 },
    { text: '[    0.142857] Loading security modules', delay: 200 },
    { text: '[    0.285714] NET: Registered protocol family 2', delay: 400 },
    { text: '[    0.428571] Mounting filesystem...', delay: 600 },
    { text: '[    0.571428] Starting system services', delay: 800 },
    { text: '[    0.714285] Loading user profile', delay: 1000 },
    { text: '[    0.857142] Establishing secure connection...', delay: 1200 },
    { text: '[    1.000000] Initializing display driver', delay: 1400 },
    { text: '[    1.142857] Loading portfolio assets', delay: 1600 },
    { text: '[    1.285714] System ready.', delay: 1800, class: 'success' },
    { text: '[    1.428571] Welcome, visitor.', delay: 2000, class: 'accent' }
];

function initBootSequence() {
    const bootOverlay = document.getElementById('boot-sequence');
    const bootLines = document.querySelector('.boot-lines');
    const bootBar = document.querySelector('.boot-bar');

    bootMessages.forEach(({ text, delay, class: cls }) => {
        setTimeout(() => {
            const line = document.createElement('div');
            line.className = `boot-line ${cls || ''}`;
            line.textContent = text;
            line.style.animationDelay = '0s';
            bootLines.appendChild(line);
            
            // Update progress bar
            const progress = Math.min((delay / CONFIG.bootDuration) * 100 + 10, 100);
            bootBar.style.width = progress + '%';
        }, delay);
    });

    // Hide boot sequence
    setTimeout(() => {
        bootOverlay.classList.add('hidden');
        triggerNameGlitch(); // Trigger initial name glitch
    }, CONFIG.bootDuration);
}

function initMatrixRain() {
    const canvas = document.getElementById('matrix-rain');
    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resize();
    window.addEventListener('resize', resize);

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#ff4f00';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const char = CONFIG.matrixChars[Math.floor(Math.random() * CONFIG.matrixChars.length)];
            const x = i * fontSize;
            const y = drops[i] * fontSize;

            ctx.fillText(char, x, y);

            if (y > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 50);
}

function triggerNameGlitch() {
    const nameEl = document.getElementById('hero-name');
    const original = CONFIG.originalName;
    let iteration = 0;

    const interval = setInterval(() => {
        nameEl.textContent = original
            .split('')
            .map((char, index) => {
                if (char === ' ') return ' ';
                if (index < iteration) return original[index];
                return CONFIG.glitchChars[Math.floor(Math.random() * CONFIG.glitchChars.length)];
            })
            .join('');

        if (iteration >= original.length) {
            clearInterval(interval);
            nameEl.textContent = original;
        }
        iteration += 1/3;
    }, 30);
}

function initTerminal() {
    const input = document.getElementById('terminal-input');
    const output = document.getElementById('terminal-output');
    const terminalBody = document.getElementById('terminal-body');
    const lastLogin = document.getElementById('last-login');

    // Set last login date
    lastLogin.textContent = new Date().toDateString();

    let commandHistory = [];
    let historyIndex = -1;

    // Focus input when clicking terminal
    terminalBody.addEventListener('click', () => input.focus());

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const cmd = input.value.trim();
            if (cmd) {
                processCommand(cmd);
                commandHistory.unshift(cmd);
                historyIndex = -1;
            }
            input.value = '';
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                input.value = commandHistory[historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                input.value = commandHistory[historyIndex];
            } else if (historyIndex === 0) {
                historyIndex = -1;
                input.value = '';
            }
        } else if (e.key === 'Tab') {
            e.preventDefault();
            const partial = input.value.toLowerCase();
            const matches = Object.keys(COMMANDS).filter(c => c.startsWith(partial));
            if (matches.length === 1) {
                input.value = matches[0];
            }
        } else if (e.key === 'l' && e.ctrlKey) {
            e.preventDefault();
            output.innerHTML = '';
        }
    });

    function processCommand(cmd) {
        const cmdLower = cmd.trim().toLowerCase();

        // Add input line
        addLine(`<span class="prompt-user">visitor@b15cu1t</span><span class="prompt-sep">:</span><span class="prompt-dir">~</span><span class="prompt-end">$ </span>${escapeHtml(cmd)}`);

        if (cmdLower === 'clear') {
            output.innerHTML = '';
            return;
        }

        if (cmdLower === 'fsociety') {
            triggerHijack();
            return;
        }

        const response = COMMANDS[cmdLower];
        if (response) {
            addLine(`<pre class="terminal-line output">${escapeHtml(typeof response === 'function' ? response() : response)}</pre>`, false);
        } else {
            addLine(`<span class="terminal-line error">bash: ${escapeHtml(cmd)}: command not found</span>`, false);
        }

        // Scroll to bottom
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    function addLine(html, isCommand = true) {
        const div = document.createElement('div');
        div.className = isCommand ? 'terminal-line' : '';
        div.innerHTML = html;
        output.appendChild(div);
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

const hijackMessages = [
    { text: '[    0.000000] Initializing breach protocol...', delay: 300 },
    { text: '[    0.142857] Kernel: security modules loaded', delay: 600 },
    { text: '[    0.285714] NET: Registered protocol family 2', delay: 900 },
    { text: '[    0.428571] Bypassing firewall...', delay: 1200 },
    { text: '[    0.571428] Decrypting authentication layer...', delay: 1500 },
    { text: '[    0.714285] Escalating privileges: uid=0(root)', delay: 1800, class: 'accent' },
    { text: '[    0.857142] Injecting payload into memory', delay: 2100 },
    { text: '[    1.000000] Establishing encrypted backdoor', delay: 2400 },
    { text: '[    1.142857] Connection established.', delay: 2700, class: 'success' },
    { text: '[    1.285714] root access granted.', delay: 3000, class: 'success' }
];

function triggerHijack() {
    const overlay = document.getElementById('hijack-overlay');
    const messages = overlay.querySelector('.hijack-messages');
    const mainText = overlay.querySelector('.hijack-main-text');
    const exitHint = overlay.querySelector('.hijack-exit');

    // Reset
    messages.innerHTML = '';
    mainText.textContent = '';
    exitHint.classList.remove('visible');
    overlay.classList.remove('hidden');

    // Show messages
    hijackMessages.forEach(({ text, delay, class: cls }) => {
        setTimeout(() => {
            const line = document.createElement('div');
            line.className = `line ${cls || ''}`;
            line.textContent = text;
            messages.appendChild(line);
        }, delay);
    });

    // Show main text with glitch effect
    setTimeout(() => {
        glitchReveal(mainText, 'Hello, friend.');
    }, 3500);

    // Allow exit
    setTimeout(() => {
        exitHint.classList.add('visible');
        
        const exitHandler = () => {
            overlay.classList.add('hidden');
            document.removeEventListener('keydown', exitHandler);
            document.removeEventListener('click', exitHandler);
        };
        
        document.addEventListener('keydown', exitHandler);
        document.addEventListener('click', exitHandler);
    }, 5500);
}

function glitchReveal(element, text) {
    let iteration = 0;
    const maxIterations = text.length * 3;

    const interval = setInterval(() => {
        element.textContent = text
            .split('')
            .map((char, index) => {
                if (char === ' ' || char === ',' || char === '.') return char;
                const revealThreshold = iteration / 3;
                if (index < revealThreshold) return text[index];
                return CONFIG.glitchChars[Math.floor(Math.random() * CONFIG.glitchChars.length)];
            })
            .join('');

        iteration++;
        if (iteration > maxIterations) {
            clearInterval(interval);
            element.textContent = text;
        }
    }, 40);
}

function renderProjects() {
    const containers = {
        'security-projects': PROJECTS.security,
        'automation-projects': PROJECTS.automation,
        'experiments-projects': PROJECTS.experiments
    };

    for (const [containerId, projects] of Object.entries(containers)) {
        const container = document.getElementById(containerId);
        if (!container) continue;

        container.innerHTML = projects.map(project => `
            <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-card">
                <span class="project-tech">${project.tech}</span>
                <h3 class="project-name">./${project.title}</h3>
                <p class="project-desc">${project.desc}</p>
                <span class="project-arrow">→</span>
            </a>
        `).join('');
    }
}

function initContactForm() {
    const form = document.getElementById('contact-form');
    const button = document.getElementById('submit-btn');
    const btnText = button.querySelector('.btn-text');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        btnText.textContent = 'transmitting...';
        button.disabled = true;

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                btnText.textContent = 'transmission_success';
                button.classList.add('success');
                form.reset();
            } else {
                throw new Error('Failed');
            }
        } catch {
            btnText.textContent = 'uplink_failed';
            button.classList.add('error');
        }

        setTimeout(() => {
            btnText.textContent = 'send_packet';
            button.classList.remove('success', 'error');
            button.disabled = false;
        }, 3000);
    });
}
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initNameHover() {
    const nameEl = document.getElementById('hero-name');
    nameEl.addEventListener('mouseenter', triggerNameGlitch);
}
document.addEventListener('DOMContentLoaded', () => {
    initBootSequence();
    initMatrixRain();
    initTerminal();
    renderProjects();
    initContactForm();
    initBackToTop();
    initNameHover();
});
