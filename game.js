'use script'

let randomNumber = Math.floor(Math.random() * 100) + 1;
    const guessBtn = document.getElementById("guessBtn");
    const resetBtn = document.getElementById("resetBtn");
    const result = document.getElementById("result");
    const guessInput = document.getElementById("guessInput");

    guessBtn.addEventListener("click", () => {
      const userGuess = Number(guessInput.value);
      
      if (!userGuess || userGuess < 1 || userGuess > 100) {
        result.textContent = "🚫 Please enter a number between 1 and 100!";
        result.className = "result-message text-danger";
        return;
      }

      if (userGuess === randomNumber) {
        result.textContent = "🎉 Congratulations! You guessed it right! 🎉";
        result.className = "result-message correct";
        guessBtn.disabled = true;
        resetBtn.style.display = "block";
      } else if (userGuess > randomNumber) {
        result.textContent = "📈 Too high! Try a smaller number.";
        result.className = "result-message too-high";
      } else {
        result.textContent = "📉 Too low! Try a bigger number.";
        result.className = "result-message too-low";
      }

      guessInput.value = "";
      guessInput.focus();
    });

    resetBtn.addEventListener("click", () => {
      randomNumber = Math.floor(Math.random() * 100) + 1;
      result.textContent = "";
      guessInput.value = "";
      guessBtn.disabled = false;
      resetBtn.style.display = "none";
    });