let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homeScoreValue = 0
let guestScoreValue = 0

function addHomePoints(points){
    homeScoreValue += points
    homeScore.textContent = homeScoreValue
}

function addGuestPoints(points){
    guestScoreValue += points
    guestScore.textContent = guestScoreValue
}