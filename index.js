const homePointsEl = document.getElementById("home-points");
const guestPointsEl = document.getElementById("guest-points");

const homeHeader = document.getElementById("home-header");
const guestHeader = document.getElementById("guest-header");

let homePoints = 0;
let guestPoints = 0;





// Render current point to DOM
homePointsEl.textContent = homePoints;
guestPointsEl.textContent = guestPoints;




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

function highlightLeader(){
    if (homePoints > guestPoints) {
        homeHeader.style.color = 'yellow';
        guestHeader.style.color = 'initial';
    } else if (guestPoints > homePoints) {
        guestHeader.style.color = 'yellow';
        homeHeader.style.color = 'initial';

    }
}

const containerEl = document.getElementsByClassName("container")[0];
containerEl.addEventListener("click", (event) => {
  console.log(event.target.tagName);

  if (event.target.tagName === "BUTTON") {
    let points = parseInt(event.target.textContent);
    let team = event.target.parentElement.classList[0];
    console.log(event.target.textContent);
    updateScore(team, points);
  }
});

const newGameBtn = document.getElementById("new-game");
newGameBtn.addEventListener("click", () => {
  homePoints = 0;
  guestPoints = 0;
  homePointsEl.textContent = homePoints;
  guestPointsEl.textContent = guestPoints;
});

/**BONUS
 * Add a "New Game" button
 * Highlight the leader
 * aAdd a few more counters
 * Change the design
 */
