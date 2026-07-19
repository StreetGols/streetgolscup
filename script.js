/* =========================================================
   STREETGOLS TOURNAMENT HUB — CONFIG
   -----------------------------------------------------------
   Everything a tournament organizer needs to edit lives in
   this one object. Update the values below and the whole
   site (sponsors, rules, groups, rosters, info) rebuilds
   itself automatically. No HTML editing required.
   ========================================================= */

const TOURNAMENT = {

  // ---- HEADLINE INFO -------------------------------------
  name: "StreetGols Cup",
  tagline: "#PLAYANYWHERE",
  dates: "Saturday, July 25, 2026 @ 11:00 AM",
  location: "Location TBD — check Score7",
  format: "6-a-side (with substitutes) Futsal · Group Stage + Knockout",

  // Live tournament page on Score7 — bracket, schedule, live results.
  score7Url: "https://www.score7.io/tournaments/vchefesccl/overview",

  // ---- SPONSORS -------------------------------------------
  // Leave url blank/null for sponsors who don't have a page to link to —
  // the card will still display, just without a link.
  sponsors: [
    { name: "Toby Pierre Cafe", url: "https://tobypierrecafe.com/en-US" },
    { name: "ICNA Relief NY", url: "https://www.icnarelief.org/ny2/" },
    { name: "Lavar Foster", url: null },
    { name: "Russ Cohen", url: null },
    { name: "Mohamed Muthana", url: null },
  ],

  // ---- RULES ------------------------------------------------
  // Based on FIFA Futsal Laws of the Game, adapted for this tournament's
  // court surface and match timing.
  rules: [
    {
      title: "Footwear & Court Safety",
      emphasis: true,
      items: [
        "NO cleats or studs of any kind — metal or plastic. Indoor court shoes / futsal shoes only. We're playing on concrete.",
        "Referees can deny entry to any player wearing improper footwear.",
        "Shin guards are strongly recommended given the surface.",
      ],
    },
    {
      title: "Format & Eligibility",
      items: [
        "6-a-side futsal, with substitutes, played under FIFA Futsal Laws of the Game with the tournament-specific timing below.",
        "Only players listed on your team's official Score7 roster may take the court.",
        "Unlimited rolling substitutions, on the fly, through your own bench/change zone.",
        "Group stage is round robin within your group; standings and advancement are tracked live on Score7.",
      ],
    },
    {
      title: "Match Timing",
      items: [
        "Group stage matches: 7 minutes, running clock.",
        "Knockout matches (Round of 16 onward): 10 minutes, running clock.",
        "1-minute transition time between matches — be at the court and ready to go when it ends.",
        "Any overtime/penalty procedure for knockout ties will be announced on-site and reflected on Score7.",
      ],
    },
    {
      title: "Futsal Match Rules",
      items: [
        "No slide tackles on the concrete surface — called as a direct free kick regardless of contact made.",
        "No offside.",
        "Ball out over the sideline restarts with a kick-in (not a throw-in); you have 4 seconds to play it.",
        "Goalkeepers have 4 seconds to release the ball once in control, and can't handle a deliberate back-pass from a teammate.",
        "Accumulated team fouls: from the 6th team foul in a match, the opposition takes a direct free kick from the second penalty spot with no defensive wall.",
      ],
    },
    {
      title: "Conduct & Cards",
      items: [
        "Yellow card = official caution. A second yellow in the same match is a red.",
        "Red card = sent off for the rest of the match. Per futsal rules the team plays short-handed for 2 minutes (or can sub in immediately if scored on) unless the tournament director rules otherwise on-site.",
        "Fighting or serious foul play results in disqualification from the tournament.",
        "Respect referees, opponents, and the court — this is a community event first.",
      ],
    },
    {
      title: "Weather & Forfeits",
      items: [
        "Teams not present and ready to play when the transition window ends forfeit the match.",
        "Any weather delays or rescheduling will be posted on Score7 and announced on-site.",
      ],
    },
  ],

  // ---- GROUPS & ROSTERS --------------------------------------
  // Pulled from Score7. Each team's name links to its Score7 team page.
  // Add or remove teams/players freely — the UI adapts automatically.
  groups: [
    {
      group: "Group A",
      teams: [
        { name: "BellaGen FC", url: "https://www.score7.io/tournaments/vchefesccl/p/18721966", players: ["Rudy Tax", "Jayden Coombs", "Jeremy Garcia", "Jaiden Warhawk", "Jayden Lopez", "Nafiz Patwary", "Sebas J", "Angel Zelaya", "Angel Ulloa", "David Perrin"] },
        { name: "Bandicoots FC", url: "https://www.score7.io/tournaments/vchefesccl/p/18721967", players: ["Waqar Aslam", "Waleed Sawadago", "Sahriar Adel", "Kevin Bravo", "Mario Lobo", "Md Alve", "Kevin Ramos", "Jameel Sawadogo", "Josue Galindo"] },
        { name: "JMC Youth", url: "https://www.score7.io/tournaments/vchefesccl/p/18721973", players: ["Tahmid Sameen", "Moshiur Mayan", "Munna Moon", "Fahim Khan", "Wamim Hossain", "Jinan Rahman", "Rafi Khan", "Azwad Mohib", "m simon"] },
        { name: "QuietStorm FC", url: "https://www.score7.io/tournaments/vchefesccl/p/18721976", players: [] },
        { name: "MS 217", url: "https://www.score7.io/tournaments/vchefesccl/p/18721977", players: ["Jose Rodriguez", "swagnik roy", "Kevin Gamez", "Kristoff Tracy", "Sattik Roy", "Adrian Balram", "Isaac Nunez", "Liam Hernandez", "Adam Aminov", "Alex Alatorre"] },
      ],
    },
    {
      group: "Group B",
      teams: [
        { name: "Clear FC", url: "https://www.score7.io/tournaments/vchefesccl/p/18721963", players: ["Nahian Alam", "Nafis Jahan", "Ibrahim Abu Yousuf", "Ashraful Alam", "Anowar Maher", "Tamjid Chowdhury", "Jaber Zahir", "Talha Chowdhury", "Irfan Ahmed", "Tasnim Islam", "Shovodip Kanu"] },
        { name: "109 Jr.", url: "https://www.score7.io/tournaments/vchefesccl/p/18721964", players: ["Christian Rodas", "Brandon Castro", "Ryan Lopez", "Mohsin Shigri", "matthew marin", "Uday Mondal", "Ravin Singh", "Aidan Evans", "Bryan Castro"] },
        { name: "Diamonds FC", url: "https://www.score7.io/tournaments/vchefesccl/p/18721972", players: ["Angel Torralba", "Marco Baez Ventura", "Brian Temoxtle", "Nysani Benedith", "Joshua Escobar Reyes", "Nicholas Acuapan", "Isabella Rodriguez", "Demian Rosas", "Marllyn Ramos", "Brayner"] },
        { name: "Gladiators FC", url: "https://www.score7.io/tournaments/vchefesccl/p/18721975", players: ["Mallich Dieujuste", "Bryan Santisteban", "Nehan Khaleqe", "Araf Nabi", "Steven Shibu", "Justin P", "Tawhid Akter", "Shiloh Belle"] },
        { name: "Street Soccer USA", url: "https://www.score7.io/tournaments/vchefesccl/p/19669510", players: ["Boubou Soukouna", "Abdoulie Sawaneh", "Terenz Guity", "Isael Aponte Rosario", "Omar Fofana", "Francis Cuchipe", "Alassane Zongo", "Cristian Ordóñez"] },
      ],
    },
    {
      group: "Group C",
      teams: [
        { name: "Riverdale Warriors", url: "https://www.score7.io/tournaments/vchefesccl/p/18721962", players: ["Adyan Khan", "David Suastegui", "Xander Cosby", "Arham Khan", "Luke Serrano", "Azlan Khan", "Tahsan Latif"] },
        { name: "Madrid FC", url: "https://www.score7.io/tournaments/vchefesccl/p/18721971", players: ["Manu Atherley", "Alhoussaine BALDE", "Alhoussaine Balde", "Alvin Chowdhury", "Jason Plunkett", "Jordan Guerrero", "Mamoudou Diabate"] },
        { name: "Thomas Edison HS", url: "https://www.score7.io/tournaments/vchefesccl/p/18721974", players: ["Kishan Roy", "Juan Montes", "Derek Velez", "Armando Ojeda", "Aayat Hussain", "Chase Coley", "Jayden Paredes", "Islam Bourzak", "Andy ixcoy", "Alessandra Ojeda"] },
        { name: "DaRe 2 DReam", url: "https://www.score7.io/tournaments/vchefesccl/p/19669507", players: ["Motaz Nasser", "Emmanuel Boadi", "Chorno Ismaila Badjie", "Swallah Mohammed", "Fadlulalzi Suhymi", "Ali Farouk", "Ameer Farouk", "Hassan Yakubu"] },
        { name: "Rome FC", url: "https://www.score7.io/tournaments/vchefesccl/p/19669509", players: ["Shihab Shadique", "Rishad Alam", "Wasif Ahmed", "Shakeel Ali", "Md Tahsin", "Raghid Rayan", "Zavion Brown", "andres cabrera", "Sebastian Joestar"] },
      ],
    },
    {
      group: "Group D",
      teams: [
        { name: "Tigers FC", url: "https://www.score7.io/tournaments/vchefesccl/p/18721965", players: ["Ayan Rashid", "Maruf Khan", "Noufil Rahman", "Tahsin Jarif", "S M Abir", "Md Kabir", "Zain Allahi", "Tanzim Jawad", "Takrim Khan", "Mohammad Hasan"] },
        { name: "QC FC", url: "https://www.score7.io/tournaments/vchefesccl/p/18721968", players: ["Abrar Khan", "Jordyn Juarez", "Jeremias Hernandez", "Abraham Gomez", "Alex Tamay", "Maynor Garcia", "Adriel Sandoval", "Sammy G", "Vitelio Ramirez", "Franklin Zacarias"] },
        { name: "Burros FC", url: "https://www.score7.io/tournaments/vchefesccl/p/18721969", players: ["Daniel Yushuvayev", "Carlos Duran", "Bryan Chimbo", "Krystian Grodzki", "Francesko Hila", "Jacob Finiasz", "Alexander Luna", "Jacob Finiasz", "David Enriquez", "Almir Ndreu"] },
        { name: "FREE AGENT", url: "https://www.score7.io/tournaments/vchefesccl/p/18721970", players: ["Eugene Ward", "Saamir Ahmed", "Ramy Farag", "Damoy Brown"] },
        { name: "Goddard FC", url: "https://www.score7.io/tournaments/vchefesccl/p/19669508", players: ["Tuhin T", "Manpreet Singh", "Sultan Ejaz", "Aditya Anand", "Muhit Ahmed", "Minhaj Sahil", "Ashraful Alom"] },
      ],
    },
  ],

  // ---- TOURNAMENT INFO CARDS ----------------------------------
  info: [
    {
      title: "Schedule",
      body: "Full match schedule, court assignments, and kickoff times are posted and kept live on Score7 — that's the source of truth for when and where your team plays.",
      type: "text",
    },
    {
      title: "Surface & Footwear",
      body: [
        "Games are played on concrete courts.",
        "Indoor / futsal shoes only — no cleats or studs, metal or plastic.",
        "Shin guards strongly recommended.",
      ],
      type: "list",
    },
    {
      title: "What to Bring",
      body: [
        "A light and a dark jersey/pinnie in case of a color clash",
        "Futsal or indoor court shoes",
        "Water — hydration stations may be limited",
        "ID for check-in against your team's Score7 roster",
      ],
      type: "list",
    },
    {
      title: "Contact & Questions",
      body: "Reach the tournament desk on-site or through StreetGols channels for anything not covered here — schedule changes, roster questions, or general help.",
      type: "text",
    },
  ],
};

/* =========================================================
   RENDERING
   ========================================================= */

function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

function renderHero() {
  document.getElementById("hero-title").innerHTML = TOURNAMENT.name
    .toUpperCase()
    .split(" ")
    .reduce((acc, word, i, arr) => acc + word + (i < arr.length - 1 ? " " : ""), "");
  document.getElementById("hero-tagline").textContent = TOURNAMENT.tagline;
  document.getElementById("hero-name").textContent = `${TOURNAMENT.format} — official tournament information hub`;

  const meta = document.getElementById("hero-meta");
  const chips = [
    ["Dates", TOURNAMENT.dates],
    ["Location", TOURNAMENT.location],
    ["Format", TOURNAMENT.format],
  ];
  chips.forEach(([label, value]) => {
    const chip = el("span", "meta-chip", `<strong>${label}:</strong> ${value}`);
    meta.appendChild(chip);
  });
}

function renderSponsors() {
  const grid = document.getElementById("sponsor-grid");
  TOURNAMENT.sponsors.forEach(s => {
    const hasUrl = Boolean(s.url);
    const card = document.createElement(hasUrl ? "a" : "div");
    card.className = "sponsor-card";
    if (hasUrl) {
      card.href = s.url;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
    }

    const initials = s.name
      .split(" ")
      .map(w => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    card.innerHTML = `
      <div class="sponsor-mark">${initials}</div>
      <div class="sponsor-name">${s.name}</div>
      ${hasUrl ? '<span class="sponsor-visit">Visit sponsor →</span>' : ""}
    `;
    grid.appendChild(card);
  });
}

function renderRules() {
  const wrap = document.getElementById("rules-accordion");
  TOURNAMENT.rules.forEach((rule, i) => {
    const details = document.createElement("details");
    details.className = "rule-item" + (rule.emphasis ? " emphasis" : "");
    if (i === 0) details.open = true;

    const listItems = rule.items.map(it => `<li>${it}</li>`).join("");
    details.innerHTML = `
      <summary>${rule.title}<span class="rule-icon">+</span></summary>
      <div class="rule-body"><ul>${listItems}</ul></div>
    `;
    wrap.appendChild(details);
  });
}

let activeGroupIndex = 0;

function renderGroupTabs() {
  const tabs = document.getElementById("group-tabs");
  TOURNAMENT.groups.forEach((g, i) => {
    const btn = document.createElement("button");
    btn.className = "group-tab" + (i === activeGroupIndex ? " active" : "");
    btn.textContent = g.group;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", i === activeGroupIndex ? "true" : "false");
    btn.addEventListener("click", () => {
      activeGroupIndex = i;
      document.querySelectorAll(".group-tab").forEach((t, idx) => {
        t.classList.toggle("active", idx === i);
        t.setAttribute("aria-selected", idx === i ? "true" : "false");
      });
      renderTeams();
    });
    tabs.appendChild(btn);
  });
}

function renderTeams() {
  const grid = document.getElementById("team-grid");
  grid.innerHTML = "";
  const group = TOURNAMENT.groups[activeGroupIndex];

  group.teams.forEach(team => {
    const card = el("article", "team-card");

    const teamNameHtml = team.url
      ? `<a class="team-name" href="${team.url}" target="_blank" rel="noopener noreferrer">${team.name}</a>`
      : `<span class="team-name">${team.name}</span>`;

    const rosterHtml = team.players.length
      ? `<ul class="roster-list">${team.players
          .map((p, i) => `<li><span>${p}</span><span class="num">#${i + 1}</span></li>`)
          .join("")}</ul>`
      : `<p class="team-empty">Roster not yet posted — check Score7 for updates.</p>`;

    card.innerHTML = `
      <div class="team-card-head">
        ${teamNameHtml}
        <span class="team-group-badge">${group.group}</span>
      </div>
      ${rosterHtml}
    `;
    grid.appendChild(card);
  });
}

function renderLiveScores() {
  document.getElementById("score7-link").href = TOURNAMENT.score7Url;
}

function renderInfo() {
  const grid = document.getElementById("info-grid");
  TOURNAMENT.info.forEach(card => {
    const node = el("div", "info-card");
    const bodyHtml = card.type === "list"
      ? `<ul>${card.body.map(b => `<li>${b}</li>`).join("")}</ul>`
      : `<p>${card.body}</p>`;
    node.innerHTML = `<h3>${card.title}</h3>${bodyHtml}`;
    grid.appendChild(node);
  });
}

/* =========================================================
   INTERACTIVITY
   ========================================================= */

function setupNav() {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* =========================================================
   INIT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderSponsors();
  renderRules();
  renderGroupTabs();
  renderTeams();
  renderLiveScores();
  renderInfo();
  setupNav();
});