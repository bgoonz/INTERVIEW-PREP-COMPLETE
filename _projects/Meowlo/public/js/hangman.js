//Design HangmanGame Function
const hangmanStatuses = {
  PLAYING: "playing",
  FINISHED: "finished",
  FAILED: "failed",
};

class HangmanGame {
  constructor(word, times) {
    this.word = word.toLowerCase().split("");
    this.times = times;
    this.guessedLetters = [];
    this.status = hangmanStatuses.PLAYING;
  }

  calculateStatus() {
    const finished = this.word.every(
      (letter) => this.guessedLetters.includes(letter) || letter === " "
    );

    if (this.times === 0) {
      this.status = hangmanStatuses.FAILED;
    } else if (finished) {
      this.status = hangmanStatuses.FINISHED;
    } else {
      this.status = hangmanStatuses.PLAYING;
    }
  }

  get statusMsg() {
    if (this.status === hangmanStatuses.PLAYING) {
      return `You have ${this.times} guesses left`;
    } else if (this.status === hangmanStatuses.FAILED) {
      return `Nice try! The word is "${this.word.join("")}".`;
    } else {
      return `Great work! You guessed the word!`;
    }
  }

  get puzzle() {
    let str = "";
    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === " ") {
        str += letter;
      } else {
        str += "*";
      }
    });
    return str;
  }

  makeGuess(guess) {
    if (this.status !== hangmanStatuses.PLAYING) return;

    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    if (isUnique) {
      this.guessedLetters.push(guess);
      if (isBadGuess) this.times--;
    }
    this.calculateStatus();
  }
}

//request puzzle API
const getPuzzle = async (wordCount) => {
  const response = await fetch(
    `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );
  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error("Unable to get puzzle");
  }
};

//DOM interaction
const wordTextElement = document.getElementById("hangman-word");
const statusTextElement = document.getElementById("hangman-status");

let game;

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game.makeGuess(guess);
  render();
});

const render = () => {
  wordTextElement.innerHTML = "";
  statusTextElement.textContent = game.statusMsg;

  game.puzzle.split("").forEach((letter) => {
    const letterEl = document.createElement("span");
    letterEl.textContent = letter;
    wordTextElement.appendChild(letterEl);
  });
};

const startGame = async () => {
  const puzzle = await getPuzzle("2");
  game = new HangmanGame(puzzle, 5);
  render();
};

document.getElementById("reset").addEventListener("click", startGame);
startGame();
