/* =========================================================
   VAMSI PUSAPATI — PORTFOLIO JAVASCRIPT
   ========================================================= */

/* =========================================================
   PORTFOLIO DATA
   ========================================================= */

const DATA = {
  skills: [
    {
      name: "JavaScript",
      category: "frontend",
    },

    {
      name: "React.js",
      category: "frontend",
    },

    {
      name: "HTML5",
      category: "frontend",
    },

    {
      name: "CSS3",
      category: "frontend",
    },

    {
      name: "Responsive UI",
      category: "frontend",
    },

    {
      name: "Node.js",
      category: "backend",
    },

    {
      name: "Express.js",
      category: "backend",
    },

    {
      name: "REST APIs",
      category: "backend",
    },

    {
      name: "Authentication",
      category: "backend",
    },

    {
      name: "Request Validation",
      category: "backend",
    },

    {
      name: "Error Handling",
      category: "backend",
    },

    {
      name: "Java",
      category: "backend",
    },

    {
      name: "Spring Boot",
      category: "backend",
    },

    {
      name: "MySQL",
      category: "database",
    },

    {
      name: "Database Integration",
      category: "database",
    },

    {
      name: "Git",
      category: "tools",
    },

    {
      name: "API Testing",
      category: "tools",
    },

    {
      name: "Debugging",
      category: "tools",
    },

    {
      name: "Reusable Architecture",
      category: "tools",
    },

    {
      name: "Collaborative Development",
      category: "tools",
    },
  ],

  projects: [
    {
      number: "01",
      title: "Education Platform",
      tech: "React · Node.js · Express.js",
      description:
        "A web-based education platform focused on creating a structured and user-friendly learning experience.",
      points: [
        "Developed reusable React components and responsive interfaces.",
        "Built and integrated REST APIs using Node.js and Express.js.",
        "Implemented request validation, authentication and error handling.",
        "Worked with database integration and application debugging.",
        "Used Git for version control and collaborative development.",
      ],
      repo: "#",
    },

    {
      number: "02",
      title: "Employee Management System",
      tech: "Java · Spring Boot · MySQL",
      description:
        "A REST-based employee management application designed to manage employees, leave requests and resignations.",
      points: [
        "Developed CRUD REST APIs using Spring Boot.",
        "Implemented employee management functionality.",
        "Added leave request creation, validation and update logic.",
        "Implemented resignation management functionality.",
        "Integrated MySQL for persistent data storage.",
        "Tested APIs using Postman.",
      ],
      repo: "https://github.com/PusapatiVamsi/Admin_module",
    },

    {
      number: "03",
      title: "GitHub Developer Profile",
      tech: "Markdown · GitHub",
      description:
        "A developer profile repository designed to present projects, technical skills and professional information.",
      points: [
        "Created a structured GitHub developer profile.",
        "Organized technical information and project references.",
        "Maintained the repository using Git and GitHub.",
      ],
      repo: "https://github.com/PusapatiVamsi/PusapatiVamsi",
    },
  ],

  experience: [
    {
      date: "Current",
      role: "Full-Stack Developer",
      company: "Zeminent",
      description:
        "Working across frontend and backend development for an education-focused platform.",
      points: [
        "Developing interfaces using React.js and JavaScript.",
        "Building backend functionality using Node.js and Express.js.",
        "Working with REST APIs and database integration.",
        "Implementing authentication, validation and error handling.",
        "Debugging application issues and improving code quality.",
        "Using Git for version control and collaborative development.",
      ],
    },

    {
      date: "2019 — 2023",
      role: "B.Tech — Electronics & Communication Engineering",
      company: "Pace Institute of Technology & Sciences",
      description:
        "Completed B.Tech in Electronics & Communication Engineering with a CGPA of 8.34/10.",
    },
  ],
};

/* =========================================================
   SKILLS
   ========================================================= */

const skillsGrid = document.getElementById("skills-grid");
const filterButtons = document.querySelectorAll(".filter");

function renderSkills(filter = "all") {
  if (!skillsGrid) {
    return;
  }

  skillsGrid.innerHTML = "";

  const filteredSkills =
    filter === "all"
      ? DATA.skills
      : DATA.skills.filter((skill) => skill.category === filter);

  filteredSkills.forEach((skill) => {
    const card = document.createElement("article");

    card.className = "skill-card reveal visible";

    const categoryName =
      skill.category.charAt(0).toUpperCase() + skill.category.slice(1);

    card.innerHTML = `
      <span class="skill-category">${categoryName}</span>
      <h3>${skill.name}</h3>
    `;

    skillsGrid.appendChild(card);
  });
}

renderSkills();

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    const filter = button.dataset.filter;

    renderSkills(filter);
  });
});

/* =========================================================
   PROJECTS
   ========================================================= */

const projectsContainer = document.getElementById("projects");

function renderProjects() {
  if (!projectsContainer) {
    return;
  }

  projectsContainer.innerHTML = "";

  DATA.projects.forEach((project) => {
    const article = document.createElement("article");

    article.className = "project reveal";

    const pointsHTML = project.points
      .map((point) => `<li>${point}</li>`)
      .join("");

    const repoLink =
      project.repo && project.repo !== "#"
        ? `
          <a
            class="project-link"
            href="${project.repo}"
            target="_blank"
            rel="noopener noreferrer"
          >
            View repository ↗
          </a>
        `
        : "";

    article.innerHTML = `

      <button class="project-header" type="button">

        <span class="project-number">
          ${project.number}
        </span>

        <span>
          <span class="project-title">
            ${project.title}
          </span>

          <span class="project-tech">
            ${project.tech}
          </span>
        </span>

        <span class="project-arrow">
          +
        </span>

      </button>


      <div class="project-body">

        <div class="project-content">

          <div class="project-inner">

            <p>
              ${project.description}
            </p>

            <ul class="project-points">
              ${pointsHTML}
            </ul>

            ${repoLink}

          </div>

        </div>

      </div>

    `;

    const header = article.querySelector(".project-header");

    header.addEventListener("click", () => {
      const currentlyOpen = document.querySelector(".project.open");

      if (currentlyOpen && currentlyOpen !== article) {
        currentlyOpen.classList.remove("open");
      }

      article.classList.toggle("open");
    });

    projectsContainer.appendChild(article);
  });
}

renderProjects();

/* =========================================================
   EXPERIENCE
   ========================================================= */

const timeline = document.getElementById("timeline");

function renderExperience() {
  if (!timeline) {
    return;
  }

  timeline.innerHTML = "";

  DATA.experience.forEach((item) => {
    const article = document.createElement("article");

    article.className = "timeline-item reveal";

    const pointsHTML = item.points
      ? `
        <ul>
          ${item.points.map((point) => `<li>${point}</li>`).join("")}
        </ul>
      `
      : "";

    article.innerHTML = `

      <span class="timeline-date">
        ${item.date}
      </span>

      <h3>
        ${item.role}
      </h3>

      <div class="timeline-company">
        ${item.company}
      </div>

      <p>
        ${item.description}
      </p>

      ${pointsHTML}

    `;

    timeline.appendChild(article);
  });
}

renderExperience();

/* =========================================================
   NAVIGATION SCROLL EFFECT
   ========================================================= */

const nav = document.getElementById("nav");

function updateNavigation() {
  if (!nav) {
    return;
  }

  if (window.scrollY > 30) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", updateNavigation, { passive: true });

updateNavigation();

/* =========================================================
   REVEAL ANIMATION
   ========================================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  },
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

/* =========================================================
   CONTACT FORM — FORMSPREE
   ========================================================= */

const contactForm = document.getElementById("contact-form");

const formStatus = document.getElementById("form-status");

const contactSubmit = document.getElementById("contact-submit");

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);

    contactSubmit.disabled = true;

    contactSubmit.textContent = "Sending...";

    formStatus.textContent = "";

    formStatus.className = "form-status";

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        contactForm.reset();

        formStatus.textContent =
          "Message sent successfully. Thank you for reaching out!";

        formStatus.classList.add("success");

        contactSubmit.textContent = "Message Sent ✓";

        setTimeout(() => {
          contactSubmit.textContent = "Send Message ↗";
        }, 4000);
      } else {
        const data = await response.json().catch(() => null);

        if (data && data.errors && data.errors.length) {
          formStatus.textContent = data.errors
            .map((error) => error.message)
            .join(", ");
        } else {
          formStatus.textContent = "Something went wrong. Please try again.";
        }

        formStatus.classList.add("error");

        contactSubmit.textContent = "Send Message ↗";
      }
    } catch (error) {
      console.error("Form submission error:", error);

      formStatus.textContent =
        "Unable to send the message. Please check your internet connection and try again.";

      formStatus.classList.add("error");

      contactSubmit.textContent = "Send Message ↗";
    } finally {
      contactSubmit.disabled = false;
    }
  });
}

/* =========================================================
   CANVAS BACKGROUND
   ========================================================= */

const canvas = document.getElementById("scene");

const ctx = canvas ? canvas.getContext("2d") : null;

let particles = [];

let mouse = {
  x: null,
  y: null,
};

function resizeCanvas() {
  if (!canvas || !ctx) {
    return;
  }

  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  canvas.width = window.innerWidth * dpr;

  canvas.height = window.innerHeight * dpr;

  canvas.style.width = `${window.innerWidth}px`;

  canvas.style.height = `${window.innerHeight}px`;

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  createParticles();
}

function createParticles() {
  particles = [];

  const count = Math.min(80, Math.floor(window.innerWidth / 18));

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * window.innerWidth,

      y: Math.random() * window.innerHeight,

      radius: Math.random() * 1.4 + 0.3,

      speedX: (Math.random() - 0.5) * 0.25,

      speedY: (Math.random() - 0.5) * 0.25,

      alpha: Math.random() * 0.5 + 0.15,
    });
  }
}

function drawScene() {
  if (!canvas || !ctx) {
    return;
  }

  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  particles.forEach((particle) => {
    particle.x += particle.speedX;
    particle.y += particle.speedY;

    if (particle.x < -10) {
      particle.x = window.innerWidth + 10;
    }

    if (particle.x > window.innerWidth + 10) {
      particle.x = -10;
    }

    if (particle.y < -10) {
      particle.y = window.innerHeight + 10;
    }

    if (particle.y > window.innerHeight + 10) {
      particle.y = -10;
    }

    let distance = 9999;

    if (mouse.x !== null && mouse.y !== null) {
      distance = Math.hypot(particle.x - mouse.x, particle.y - mouse.y);
    }

    const mouseInfluence = Math.max(0, 1 - distance / 220);

    ctx.beginPath();

    ctx.arc(
      particle.x,
      particle.y,
      particle.radius + mouseInfluence * 1.5,
      0,
      Math.PI * 2,
    );

    ctx.fillStyle = `rgba(138, 108, 255, ${
      particle.alpha + mouseInfluence * 0.3
    })`;

    ctx.fill();
  });

  requestAnimationFrame(drawScene);
}

window.addEventListener("resize", resizeCanvas);

window.addEventListener(
  "mousemove",
  (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  },
  { passive: true },
);

window.addEventListener("mouseleave", () => {
  mouse.x = null;
  mouse.y = null;
});

resizeCanvas();
drawScene();

/* =========================================================
   SMOOTH ANCHOR NAVIGATION
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
