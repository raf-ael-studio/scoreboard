const homePointsEl = document.getElementById("home-points");
const guestPointsEl = document.getElementById("guest-points");

const homeHeader = document.getElementById("home-header");
const guestHeader = document.getElementById("guest-header");

let homePoints = 0;
let guestPoints = 0;


// Render current point to DOM
homePointsEl.textContent = homePoints;
guestPointsEl.textContent = guestPoints;

// receives team and points and increases depending on team and initiates highlightLeader()
function updateScore(team, points) {
  if (team === "home") {
    homePoints += points;
    homePointsEl.textContent = homePoints;
    highlightLeader();
  } else if (team === "guest") {
    guestPoints += points;
    guestPointsEl.textContent = guestPoints;
    highlightLeader();
  }
}

// changes the color of leading team 
function highlightLeader(){
    if (homePoints > guestPoints) {
        homeHeader.style.color = 'yellow';
        guestHeader.style.color = 'initial';
    } else if (guestPoints > homePoints) {
        guestHeader.style.color = 'yellow';
        homeHeader.style.color = 'initial';

    }
}

// makes container clickable and captures which button and how many points was clicked, initiates updateScore()
const containerEl = document.getElementsByClassName("container")[0];
containerEl.addEventListener("click", (event) => {
  console.log(event.target.tagName);

  if (event.target.tagName === "BUTTON") {
    let points = parseInt(event.target.textContent);
    let team = event.target.parentElement.parentElement.className;
    console.log(event.target.textContent, team);
    updateScore(team, points);
  }
});

// adds functionality to New Game button, clearing both teams points
const newGameBtn = document.getElementById("new-game");
newGameBtn.addEventListener("click", () => {
  homePoints = 0;
  guestPoints = 0;
  homePointsEl.textContent = homePoints;
  guestPointsEl.textContent = guestPoints;
});
