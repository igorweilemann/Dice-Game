document.getElementById('throwDice').addEventListener("click", function () {


        // Creating Variables for two dices results
        var number1 = Math.floor(Math.random() * 6 + 1);
        var number2 = Math.floor(Math.random() * 6 + 1);

        // Query selector for the h1
        var title = document.querySelector(".container h1");

        // Randomize the two dice
        document.querySelector(".img1").src = "images/dice" + number1 + ".png";
        document.querySelector(".img2").src = "images/dice" + number2 + ".png";

        // Comparison to see who won
        if (number1 > number2) {
            title.innerHTML = "🥊 Player 1 won";
        } else if (number2 > number1) {
            title.innerHTML = "Player 2 won 🥊";
        } else {
            title.innerHTML = "😒It's a draw!😒";
        }

    })

