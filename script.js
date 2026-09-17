/* =========================================================
   VAMSI PUSAPATI — FULL-STACK PORTFOLIO
   ========================================================= */

/* ==================== PORTFOLIO DATA ==================== */

const DATA = {
  email: "your.email@example.com",

  /* ==================== SKILLS ==================== */

  skills: [
    { name: "JavaScript", layer: "frontend" },
    { name: "React.js", layer: "frontend" },
    { name: "HTML5", layer: "frontend" },
    { name: "CSS3", layer: "frontend" },
    { name: "Responsive UI", layer: "frontend" },

    { name: "Node.js", layer: "backend" },
    { name: "Express.js", layer: "backend" },
    { name: "REST APIs", layer: "backend" },
    { name: "Authentication", layer: "backend" },
    { name: "Request Validation", layer: "backend" },
    { name: "Error Handling", layer: "backend" },
    { name: "Java", layer: "backend" },
    { name: "Spring Boot", layer: "backend" },

    { name: "MySQL", layer: "database" },
    { name: "Database Integration", layer: "database" },

    { name: "Git", layer: "tools" },
    { name: "API Testing", layer: "tools" },
    { name: "Debugging", layer: "tools" },
    { name: "Reusable Architecture", layer: "tools" },
    { name: "Collaborative Development", layer: "tools" },
  ],

  /* ==================== PROJECTS ==================== */

  projects: [
    {
      title: "Education Platform",

      tag: "React · Node.js · Express.js",

      repo: "#",

      summary:
        "A full-stack education platform developed during my experience at Zeminent. The application combines a React and JavaScript frontend with Node.js and Express.js backend services.",

      points: [
        "Developed and improved application features across the frontend and backend.",
        "Built reusable React components and responsive user interfaces using JavaScript.",
        "Integrated REST APIs between the React frontend and Node.js backend.",
        "Worked with request validation, authentication and error handling.",
        "Connected backend services with databases to retrieve and manage application data.",
        "Debugged frontend and backend issues and worked on improving application performance.",
        "Collaborated with the development team using Git and reusable application architecture.",
      ],

      chips: [
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "REST APIs",
        "Database",
        "Git",
      ],
    },

    {
      title: "Employee Management System",

      tag: "Java · Spring Boot",

      repo: "https://github.com/PusapatiVamsi/Admin_module",

      summary:
        "An enterprise-level employee management application focused on employee records and administrative workflows.",

      points: [
        "Implemented employee management CRUD operations.",
        "Built REST APIs using Spring Boot.",
        "Worked with service-layer architecture and relational database integration.",
        "Implemented administrative workflows for employee management.",
        "Worked with employee information, leave requests and resignation workflows.",
      ],

      chips: ["Java", "Spring Boot", "REST APIs", "MySQL"],
    },

    {
      title: "GitHub Developer Profile",

      tag: "Markdown · SVG",

      repo: "https://github.com/PusapatiVamsi/PusapatiVamsi",

      summary:
        "A customized GitHub profile README designed to present my developer identity, technology stack and projects.",

      points: [
        "Created a custom developer-focused GitHub profile.",
        "Designed an animated SVG header.",
        "Presented technical skills and development technologies.",
        "Created a clean overview of developer information and projects.",
      ],

      chips: ["Markdown", "SVG", "GitHub"],
    },
  ],

  /* ==================== EXPERIENCE ==================== */

  path: [
    {
      when: "Current",

      title: "Full-Stack Developer",

      company: "Zeminent",

      body: "Working across frontend and backend development for an education platform, contributing to application features and improving the complete flow between the user interface, APIs and database.",

      points: [
        "Developed frontend features using React.js and JavaScript.",
        "Created and integrated REST APIs using Node.js and Express.js.",
        "Worked with authentication, request validation and error handling.",
        "Integrated backend services with databases.",
        "Debugged issues across frontend and backend layers.",
        "Worked collaboratively with Git and reusable application architecture.",
      ],
    },

    {
      when: "2019 — 2023",

      title: "B.Tech — Electronics & Communication Engineering",

      company: "Pace Institute of Technology & Sciences",

      body: "Bachelor of Technology with an engineering background and a growing focus on software development and application engineering.",
    },
  ],
};

/* =========================================================
   STACK RENDERING
   ========================================================= */

const stackGrid = document.getElementById("stackGrid");

function renderSkills(filter = "all") {
  if (!stackGrid) {
    return;
  }

  stackGrid.innerHTML = "";

  DATA.skills.forEach((skill) => {
    const card = document.createElement("div");

    card.className = "sk";

    card.dataset.layer = skill.layer;

    const name = document.createElement("b");

    name.textContent = skill.name;

    const layer = document.createElement("em");

    layer.textContent = skill.layer;

    card.appendChild(name);

    card.appendChild(layer);

    if (filter !== "all" && skill.layer !== filter) {
      card.hidden = true;
    }

    stackGrid.appendChild(card);
  });
}

renderSkills();

/* =========================================================
   STACK FILTERS
   ========================================================= */

const filters = document.getElementById("filters");

if (filters) {
  filters.addEventListener("click", (event) => {
    const button = event.target.closest("button");

    if (!button) {
      return;
    }

    const layer = button.dataset.layer;

    filters.querySelectorAll("button").forEach((item) => {
      item.setAttribute("aria-pressed", item === button ? "true" : "false");
    });

    renderSkills(layer);
  });
}

/* =========================================================
   PROJECT RENDERING
   ========================================================= */

const projectsEl = document.getElementById("projects");

function renderProjects() {
  if (!projectsEl) {
    return;
  }

  projectsEl.innerHTML = "";

  DATA.projects.forEach((project, index) => {
    const projectEl = document.createElement("article");

    projectEl.className = "proj";

    projectEl.setAttribute("open-state", "0");

    /* ---------- TOP ---------- */

    const top = document.createElement("div");

    top.className = "proj-top";

    const indexEl = document.createElement("span");

    indexEl.className = "proj-idx";

    indexEl.textContent = String(index + 1).padStart(2, "0");

    const title = document.createElement("h3");

    title.textContent = project.title;

    const tag = document.createElement("span");

    tag.className = "proj-tag";

    tag.textContent = project.tag;

    const plus = document.createElement("span");

    plus.className = "proj-plus";

    plus.textContent = "+";

    top.appendChild(indexEl);

    top.appendChild(title);

    top.appendChild(tag);

    top.appendChild(plus);

    /* ---------- PANEL ---------- */

    const panel = document.createElement("div");

    panel.className = "proj-panel";

    const inner = document.createElement("div");

    inner.className = "proj-inner";

    const content = document.createElement("div");

    /* ---------- SUMMARY ---------- */

    const summary = document.createElement("p");

    summary.textContent = project.summary;

    content.appendChild(summary);

    /* ---------- POINTS ---------- */

    const list = document.createElement("ul");

    project.points.forEach((point) => {
      const li = document.createElement("li");

      li.textContent = point;

      list.appendChild(li);
    });

    content.appendChild(list);

    /* ---------- CHIPS ---------- */

    const chips = document.createElement("div");

    chips.className = "chips";

    project.chips.forEach((chipText) => {
      const chip = document.createElement("span");

      chip.className = "chip";

      chip.textContent = chipText;

      chips.appendChild(chip);
    });

    content.appendChild(chips);

    /* ---------- REPOSITORY ---------- */

    inner.appendChild(content);

    if (project.repo && project.repo !== "#") {
      const repo = document.createElement("a");

      repo.className = "src-link";

      repo.href = project.repo;

      repo.target = "_blank";

      repo.rel = "noopener noreferrer";

      repo.textContent = "View repository";

      inner.appendChild(repo);
    }

    panel.appendChild(inner);

    projectEl.appendChild(top);

    projectEl.appendChild(panel);

    /* ---------- ACCORDION ---------- */

    projectEl.addEventListener("click", (event) => {
      if (event.target.closest(".src-link")) {
        return;
      }

      const isOpen = projectEl.getAttribute("open-state") === "1";

      projectEl.setAttribute("open-state", isOpen ? "0" : "1");
    });

    projectsEl.appendChild(projectEl);
  });
}

renderProjects();

/* =========================================================
   EXPERIENCE / TIMELINE
   ========================================================= */

const pathList = document.getElementById("pathList");

function renderPath() {
  if (!pathList) {
    return;
  }

  pathList.innerHTML = "";

  DATA.path.forEach((item) => {
    const row = document.createElement("article");

    row.className = "tl-item";

    const when = document.createElement("div");

    when.className = "when";

    when.textContent = item.when;

    const body = document.createElement("div");

    const title = document.createElement("h3");

    title.textContent = item.title;

    const company = document.createElement("span");

    company.className = "company";

    company.textContent = item.company;

    const description = document.createElement("p");

    description.textContent = item.body;

    body.appendChild(title);

    body.appendChild(company);

    body.appendChild(description);

    if (item.points) {
      const list = document.createElement("ul");

      item.points.forEach((point) => {
        const li = document.createElement("li");

        li.textContent = point;

        list.appendChild(li);
      });

      body.appendChild(list);
    }

    row.appendChild(when);

    row.appendChild(body);

    pathList.appendChild(row);
  });
}

renderPath();

/* =========================================================
   NAVIGATION SCROLL STATE
   ========================================================= */

const nav = document.getElementById("nav");

function updateNav() {
  if (!nav) {
    return;
  }

  if (window.scrollY > 30) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", updateNav, { passive: true });

updateNav();

/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements = document.querySelectorAll(".rv");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("on");

          observer.unobserve(entry.target);
        }
      });
    },

    {
      threshold: 0.12,
    },
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("on");
  });
}

/* =========================================================
   CANVAS BACKGROUND
   No Three.js required
   ========================================================= */

const canvas = document.getElementById("scene");

if (canvas) {
  const ctx = canvas.getContext("2d");

  let width = 0;

  let height = 0;

  let particles = [];

  let mouseX = 0;

  let mouseY = 0;

  function resizeCanvas() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);

    width = window.innerWidth;

    height = window.innerHeight;

    canvas.width = width * ratio;

    canvas.height = height * ratio;

    canvas.style.width = width + "px";

    canvas.style.height = height + "px";

    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    createParticles();
  }

  function createParticles() {
    const count = window.innerWidth < 700 ? 80 : 150;

    particles = [];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,

        y: Math.random() * height,

        size: Math.random() * 1.5 + 0.4,

        speed: Math.random() * 0.25 + 0.05,

        angle: Math.random() * Math.PI * 2,

        opacity: Math.random() * 0.45 + 0.15,
      });
    }
  }

  function drawBackground() {
    ctx.clearRect(0, 0, width, height);

    /* ---------- PARTICLES ---------- */

    particles.forEach((particle) => {
      particle.angle += 0.001;

      particle.x += Math.cos(particle.angle) * particle.speed;

      particle.y += Math.sin(particle.angle) * particle.speed;

      if (particle.x < -10) {
        particle.x = width + 10;
      }

      if (particle.x > width + 10) {
        particle.x = -10;
      }

      if (particle.y < -10) {
        particle.y = height + 10;
      }

      if (particle.y > height + 10) {
        particle.y = -10;
      }

      ctx.beginPath();

      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

      ctx.fillStyle = `rgba(138,108,255,${particle.opacity})`;

      ctx.fill();
    });

    /* ---------- MOUSE GLOW ---------- */

    if (window.innerWidth > 700) {
      const gradient = ctx.createRadialGradient(
        mouseX,
        mouseY,
        0,
        mouseX,
        mouseY,
        300,
      );

      gradient.addColorStop(0, "rgba(92,225,230,0.08)");

      gradient.addColorStop(1, "rgba(92,225,230,0)");

      ctx.fillStyle = gradient;

      ctx.fillRect(0, 0, width, height);
    }

    requestAnimationFrame(drawBackground);
  }

  window.addEventListener("resize", resizeCanvas);

  window.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;

    mouseY = event.clientY;
  });

  resizeCanvas();

  drawBackground();
}

/* =========================================================
   CONTACT FORM
   ========================================================= */

const sendButton = document.getElementById("send");

const response = document.getElementById("resp");

const nameInput = document.getElementById("nm");

const emailInput = document.getElementById("em");

const messageInput = document.getElementById("ms");

if (sendButton) {
  sendButton.addEventListener("click", () => {
    const name = nameInput.value.trim();

    const email = emailInput.value.trim();

    const message = messageInput.value.trim();

    if (!name) {
      response.textContent = "Please enter your name.";

      nameInput.focus();

      return;
    }

    if (!email) {
      response.textContent = "Please enter your email.";

      emailInput.focus();

      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      response.textContent = "Please enter a valid email.";

      emailInput.focus();

      return;
    }

    if (!message) {
      response.textContent = "Please enter a message.";

      messageInput.focus();

      return;
    }

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);

    const body = encodeURIComponent(
      `Name: ${name}\n` + `Email: ${email}\n\n` + `Message:\n${message}`,
    );

    response.textContent = "Opening your email client...";

    window.location.href =
      `mailto:${DATA.email}` + `?subject=${subject}` + `&body=${body}`;
  });
}

/* =========================================================
   SMOOTH NAVIGATION
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const id = link.getAttribute("href");

    if (!id || id === "#") {
      return;
    }

    const target = document.querySelector(id);

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

/* =========================================================
   END
   ========================================================= */
