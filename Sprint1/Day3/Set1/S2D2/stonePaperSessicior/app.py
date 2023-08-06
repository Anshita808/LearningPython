from flask import Flask, render_template, request
import random

app = Flask(__name__)
user_wins = 0
computer_wins = 0


def get_computer_choice():
    choices = ["rock", "paper", "scissors"]
    return random.choice(choices)


def determine_winner(user_choice, computer_choice):
    global user_wins, computer_wins
    if user_choice == computer_choice:
        return "It's a tie!"
    elif (
        (user_choice == "rock" and computer_choice == "scissors")
        or (user_choice == "paper" and computer_choice == "rock")
        or (user_choice == "scissors" and computer_choice == "paper")
    ):
        user_wins += 1
        return "You win!"
    else:
        computer_wins += 1
        return "Computer wins!"


@app.route("/", methods=["GET", "POST"])
def play_game():
    global user_wins, computer_wins

    if request.method == "POST":
        user_choice = request.form["choice"]
        computer_choice = get_computer_choice()
        result = determine_winner(user_choice, computer_choice)

        return render_template(
            "index.html",
            result=result,
            score={"user_wins": user_wins, "computer_wins": computer_wins},
        )

    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)