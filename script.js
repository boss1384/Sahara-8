// =======================
// SAHARA FLASH REGIONAL LIVE SYSTEM
// =======================

// ---------- REGIONAL LEAGUES ----------
const REGIONS = {
    europe: {
        name: "Europe",
        leagues: ["Premier League", "La Liga", "Serie A", "Bundesliga", "Ligue 1"]
    },
    asia: {
        name: "Asia",
        leagues: ["Saudi Pro League", "J1 League", "AFC Champions League"]
    },
    africa: {
        name: "Africa",
        leagues: ["NPFL", "CAF Champions League", "Botola Pro"]
    },
    australia: {
        name: "Australia",
        leagues: ["A-League"]
    }
};

// ---------- DEMO MATCH DATA ----------
const demoMatches = {
    europe: [
        { league: "Premier League", home: "Arsenal", away: "Chelsea", score: "2:1", minute: 70 },
        { league: "La Liga", home: "Barcelona", away: "Real Madrid", score: "1:1", minute: 55 }
    ],
    asia: [
        { league: "Saudi Pro League", home: "Al Hilal", away: "Al Nassr", score: "3:2", minute: 80 }
    ],
    africa: [
        { league: "NPFL", home: "Enyimba", away: "Rivers United", score: "1:0", minute: 60 }
    ],
    australia: [
        { league: "A-League", home: "Sydney FC", away: "Melbourne City", score: "0:0", minute: 30 }
    ]
};

// =======================
// SHOW SECTION
// =======================
function showSection(id) {

    document.querySelectorAll(".section")
        .forEach(s => s.classList.remove("active"));

    document.getElementById(id + "-section")
        .classList.add("active");

    if (id === "live") loadRegion("europe");
    if (id === "fixtures") loadFixtures();
    if (id === "standings") loadStandings();
    if (id === "news") loadNews();
}

// =======================
// LOAD REGIONAL MATCHES
// =======================
function loadRegion(region) {

    const box = document.getElementById("live-matches");

    box.innerHTML = "";

    const data = demoMatches[region] || [];

    data.forEach(m => {

        const card = document.createElement("div");

        card.className = "match-card";

        card.innerHTML = `
            <div class="match-header">
                <div>${m.league}</div>
                <div>🔴 LIVE ${m.minute}'</div>
            </div>

            <div class="teams">

                <div class="team">
                    <div class="team-name">${m.home}</div>
                </div>

                <div class="score">${m.score}</div>

                <div class="team">
                    <div class="team-name">${m.away}</div>
                </div>

            </div>
        `;

        box.appendChild(card);
    });
}

// =======================
// REGION SWITCH BUTTONS
// =======================
function switchRegion(region) {
    loadRegion(region);
}

// =======================
// FIXTURES (ALL REGIONS)
// =======================
function loadFixtures() {

    const box = document.getElementById("fixtures");

    box.innerHTML = "";

    Object.keys(demoMatches).forEach(region => {

        demoMatches[region].forEach(m => {

            const card = document.createElement("div");

            card.className = "match-card";

            card.innerHTML = `
                <div class="match-header">
                    <div>${m.league}</div>
                    <div>${REGIONS[region].name}</div>
                </div>

                <div class="teams">

                    <div class="team">
                        <div class="team-name">${m.home}</div>
                    </div>

                    <div class="score">VS</div>

                    <div class="team">
                        <div class="team-name">${m.away}</div>
                    </div>

                </div>
            `;

            box.appendChild(card);
        });
    });
}

// =======================
// STANDINGS DEMO
// =======================
function loadStandings() {

    const body = document.getElementById("standings-body");

    const teams = [
        ["Arsenal", 48],
        ["Man City", 46],
        ["Liverpool", 44]
    ];

    body.innerHTML = "";

    teams.forEach((t, i) => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${i + 1}</td>
            <td>${t[0]}</td>
            <td>${t[1]}</td>
        `;

        body.appendChild(row);
    });
}

// =======================
// NEWS
// =======================
function loadNews() {

    const box = document.getElementById("news-content");

    box.innerHTML = `
        <p>📰 Arsenal leads title race</p>
        <p>📰 Ronaldo scores again in Saudi league</p>
        <p>📰 CAF Champions League updates</p>
    `;
}

// =======================
// INIT
// =======================
window.onload = () => {
    loadRegion("europe");
};
