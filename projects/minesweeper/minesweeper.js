let board = [];
let minesLocation = [];
let gameOver = false;

function startGame() {
    const mineCount = document.getElementById("mineCount").value;
    const grid = document.getElementById("game-grid");
    grid.innerHTML = ""; // Clear old game
    board = [];
    minesLocation = [];
    gameOver = false;

    // 1. Create the Board Array
    for (let r = 0; r < 10; r++) {
        let row = [];
        for (let c = 0; c < 10; c++) {
            let tile = document.createElement("div");
            tile.id = r + "-" + c;
            tile.classList.add("cell");
            tile.addEventListener("click", clickTile);
            tile.addEventListener("contextmenu", putFlag);
            grid.append(tile);
            row.push(tile);
        }
        board.push(row);
    }

    // 2. Randomly Place Mines
    let minesLeft = mineCount;
    while (minesLeft > 0) {
        let r = Math.floor(Math.random() * 10);
        let c = Math.floor(Math.random() * 10);
        let id = r + "-" + c;
        if (!minesLocation.includes(id)) {
            minesLocation.push(id);
            minesLeft--;
        }
    }
}

function clickTile() {
    if (gameOver || this.classList.contains("revealed")) return;

    if (minesLocation.includes(this.id)) {
        alert("Game Over!");
        revealMines();
        return;
    }

    this.classList.add("revealed");
    // logic to count neighboring mines would go here
    this.innerText = "0";
}

function clickTile() {
    if (gameOver || this.classList.contains("revealed") || this.classList.contains("flagged")) return;

    if (minesLocation.includes(this.id)) {
        alert("Game Over!");
        revealMines();
        return;
    }

    let coords = this.id.split("-"); // "r-c" -> ["r", "c"]
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);
    checkMine(r, c);
}

// New function to handle the neighbor math
function checkMine(r, c) {
    if (r < 0 || r >= 10 || c < 0 || c >= 10) return;
    if (board[r][c].classList.contains("revealed")) return;

    board[r][c].classList.add("revealed");

    let minesFound = 0;

    // Check 8 neighbors (top-left to bottom-right)
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (minesLocation.includes((r + i) + "-" + (c + j))) {
                minesFound++;
            }
        }
    }

    if (minesFound > 0) {
        board[r][c].innerText = minesFound;
        board[r][c].classList.add("x" + minesFound); // For CSS coloring
    } else {
        // If 0 mines, automatically reveal neighbors (flood fill)
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                checkMine(r + i, c + j);
            }
        }
    }
}

// Add Flagging with Right Click
function putFlag(e) {
    e.preventDefault(); // Prevents the browser menu from popping up
    if (gameOver || this.classList.contains("revealed")) return;

    if (this.classList.contains("flagged")) {
        this.classList.remove("flagged");
        this.innerText = "";
    } else {
        this.classList.add("flagged");
        this.innerText = "🚩";
    }
}

function revealMines() {
    minesLocation.forEach(id => {
        document.getElementById(id).classList.add("mine");
    });
    gameOver = true;
}

// Initial Call
window.onload = startGame;

