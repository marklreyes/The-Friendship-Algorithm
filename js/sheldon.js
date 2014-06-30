/*
 * the BiG BANG THEORY
 * Season 2, Episode 13
 * The Friendship Algorithm
 */
var Sheldon = (function () {
    var shareMeal = function () {
        var letsEat = prompt("Would you like to share a meal? Yes or no?").toLowerCase();

        if (letsEat == 'yes') {
            var excellent = alert("Excellent. Let's dine together and begin our friendship!");
            return excellent;
        } else {
            shareDrink();
        }
    };

    var shareDrink = function () {
        var letsDrink = prompt("Alright, do you enjoy a hot beverage? Yes or no?").toLowerCase();

        if (letsDrink == 'yes') {
            var popChoices = prompt("Excellent. Popular choices include tea, coffee, cocoa?").toLowerCase();
            switch (popChoices) {
            case "tea":
                alert("Let's have " + popChoices + " together and begin our friendship!");
                break;
            case "coffee":
                alert("Let's have " + popChoices + " together and begin our friendship!");
                break;
            case "cocoa":
                alert("Let's have " + popChoices + " together and begin our friendship!");
                break;
            default:
                alert("I'm sorry , I don't do " + popChoices + ". What about a recreational activity? I bet we share some common interests!");
                shareInterest();
                break;
            }
        } else {
            alert("What about a recreational activity? I bet we share some common interests!");
            shareInterest();
        }
    };

    var shareInterest = function () {
        //Since Sheldon will say no to everything, this object is absolutely false.
        var sheldonsInterests = false;

        //Create the replied interests and the array it will be assigned to.
        var yourInterests;

        //Sheldon won't agree with you, period.
        if (yourInterests === sheldonsInterests) {
            //This doesn't need to be here but wishful thinking doesn't hurt.
            alert("Why don't we do that together? Let's partake in " + yourInterests + " and begin our friendship!");
        } else {

            //Create the array that the interests will be assigned to.
            var collectResponses = [];

            //Howard's loop counter.
            var n = 0;
            while (n < 10) {
                n++;
                yourInterests = prompt("Tell me an interest of yours?").toLowerCase();
                //Update the resonse and store it into the collection
                collectResponses.push(yourInterests);
                alert("Really, " + yourInterests + "?! I don't do " + yourInterests + ".");

                if (n > 6) {
                    //Randomly choose the least objectionable interest.
                    //I don't know what goes on in Shelly's mind so let's randomly choose.
                    var shellysRandomChoice = collectResponses[Math.floor(Math.random() * collectResponses.length)];
                    alert("Why don't we do that together? Let's partake in " + shellysRandomChoice + " and begin our friendship!");
                    break;
                }
            }
        }
    };

    return {
        ask: function () {
            shareMeal();
        }
    };
})();

document.addEventListener("DOMContentLoaded", function() {
  //Do some zen coding here. 
  //Also, don't forget to have Sheldon make friends, so uncomment the line below!
  //Sheldon.ask();
});