# 🎮 Tic-Tac-Toe

A classic **Tic-Tac-Toe game** built with **HTML, CSS, and JavaScript**. This browser-based project provides a simple two-player experience with interactive gameplay, automatic turn switching, win detection, draw handling, and game reset functionality.

The project was created to practice **JavaScript game logic, DOM manipulation, event handling, application state, and user interaction**.

---

## 📌 Overview

Tic-Tac-Toe is a two-player game played on a 3×3 grid.

Players take turns placing **O** and **X** on empty cells. The first player to place three matching symbols horizontally, vertically, or diagonally wins the game.

If all cells are filled without a winning combination, the game ends in a draw.

---

## ✨ Features

* 🎮 Two-player gameplay
* 🔄 Automatic turn switching between **O** and **X**
* 🏆 Automatic winner detection
* 🤝 Draw detection
* 🚫 Prevents further moves after the game ends
* 🔁 **New Game** functionality
* ♻️ **Reset Game** functionality
* 📢 Displays the game result
* 📱 Responsive user interface
* ⚡ Runs directly in the browser
* 🚫 No backend or database required

---

## 🛠️ Technologies Used

| Technology            | Purpose                                |
| --------------------- | -------------------------------------- |
| **HTML5**             | Game structure and interface           |
| **CSS3**              | Styling, layout, and responsive design |
| **JavaScript (ES6+)** | Game logic and user interaction        |
| **DOM Manipulation**  | Updating the game board dynamically    |

---

## 📂 Project Structure

```text
Tic-Tac-Toe/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🎮 How to Play

1. Player **O** starts the game.
2. Click any empty cell to place your symbol.
3. Players take turns placing their symbols.
4. The first player to create a line of three matching symbols wins.
5. Winning combinations can be:

   * Horizontal
   * Vertical
   * Diagonal
6. If all cells are filled without a winner, the game is declared a draw.
7. Click **New Game** or **Reset Game** to start another round.

---

## ⚙️ How the Game Works

The game logic is implemented in `script.js`.

### 1. Selecting the Game Cells

JavaScript selects all elements with the `.box` class:

```javascript
let boxes = document.querySelectorAll(".box");
```

These buttons represent the nine cells of the Tic-Tac-Toe board.

### 2. Managing Turns

The game uses a boolean variable to track whose turn it is:

```javascript
let turnO = true;
```

When a player selects a cell:

* `O` is placed when `turnO` is `true`.
* `X` is placed when `turnO` is `false`.
* The turn then switches to the other player.

### 3. Checking Winning Combinations

The game stores the possible winning combinations:

```javascript
let winnings = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];
```

After each move, the `checkWinner()` function compares the values in these positions.

If all three positions contain the same symbol, the corresponding player wins.

### 4. Ending the Game

When a winner is detected, the game:

* Displays the winner message.
* Disables all remaining cells.
* Prevents additional moves.

The result is displayed dynamically through the message element.

### 5. Resetting the Game

The **Reset Game** and **New Game** buttons clear the board and re-enable all cells so another game can be played.

---

## 🧠 JavaScript Concepts Practiced

This project provides practical experience with:

* Variables and boolean state
* Arrays
* Functions
* Arrow functions
* `for...of` loops
* Conditional statements
* DOM selection
* DOM manipulation
* Event listeners
* `innerHTML`
* `innerText`
* `classList`
* Button states using `disabled`
* Game-state management
* Winning-condition algorithms
* Dynamic UI updates

---

## 🏆 Winning Logic

There are **8 possible winning combinations** on a 3×3 Tic-Tac-Toe board:

```text
[0, 1, 2]    [3, 4, 5]    [6, 7, 8]

[0, 3, 6]    [1, 4, 7]    [2, 5, 8]

[0, 4, 8]    [2, 4, 6]
```

The `checkWinner()` function checks each combination after every player move.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/KhushiChaubey-493/Tic-Tac-Toe.git
```

### 2. Navigate to the project

```bash
cd Tic-Tac-Toe
```

### 3. Run the project

Open `index.html` directly in your browser.

No installation, backend server, database, or external dependencies are required.

---

## 🌐 Live Demo

[Play Tic-Tac-Toe](https://khushichaubey-493.github.io/Tic-Tac-Toe/)

---

## 📸 Screenshot

Add a project screenshot to the repository and reference it here:

```markdown
![Tic-Tac-Toe Screenshot](tic-tac-toe.png)
```

---

## 🎯 Learning Objectives

Through this project, I practiced:

* Building an interactive browser game
* Implementing game-state logic with JavaScript
* Working with DOM elements
* Handling user click events
* Managing player turns
* Detecting winning combinations
* Handling draw conditions
* Dynamically updating the interface
* Disabling UI elements based on application state
* Creating a responsive frontend interface

---

## 🔮 Future Improvements

Possible improvements for future versions include:

* Add a **Player vs Computer** mode.
* Add score tracking for both players.
* Add a game history.
* Add sound effects.
* Add winning-cell animations.
* Add a dark/light theme.
* Add a player-name input.
* Improve accessibility with keyboard support.
* Add a more advanced AI opponent.

---

## 📌 Project Status

**Status:** Completed

This project is a frontend JavaScript practice project focused on implementing game logic and interactive DOM-based UI behavior.

---

## 👩‍💻 Author

**Khushi Chaubey**

GitHub:
https://github.com/KhushiChaubey-493

Portfolio:
https://khushichaubey-493.github.io/Personal-Portfolio-Website/

---

## 📄 License

This project is available for educational and personal use.
