/*
 * the BiG BANG THEORY
 * Season 2, Episode 13
 * The Friendship Algorithm
 */
export const createSheldon = () => {
    const shareMeal = function () {
        const letsEat = (prompt("Would you like to share a meal? Yes or no?") || "").toLowerCase();

        if (letsEat == 'yes') {
            const excellent = alert("Excellent. Let's dine together and begin our friendship!");
            return excellent;
        } else {
            shareDrink();
        }
    };

    const shareDrink = function () {
        const letsDrink = (prompt("Alright, do you enjoy a hot beverage? Yes or no?") || "").toLowerCase();

        if (letsDrink == 'yes') {
            const popChoices = (prompt("Excellent. Popular choices include tea, coffee, cocoa?") || "").toLowerCase();
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

    const shareInterest = function () {
        //Since Sheldon will say no to everything, this object is absolutely false.
        const sheldonsInterests = false;

        //Create the replied interests and the array it will be assigned to.
        let yourInterests;

        //Sheldon won't agree with you, period.
        if (yourInterests === sheldonsInterests) {
            //This doesn't need to be here but wishful thinking doesn't hurt.
            alert("Why don't we do that together? Let's partake in " + yourInterests + " and begin our friendship!");
        } else {

            //Create the array that the interests will be assigned to.
            const collectResponses: string[] = [];

            //Howard's loop counter.
            let n = 0;
            while (n < 10) {
                n++;
                yourInterests = (prompt("Tell me an interest of yours?") || "").toLowerCase();
                //Update the resonse and store it into the collection
                collectResponses.push(yourInterests);
                alert("Really, " + yourInterests + "?! I don't do " + yourInterests + ".");

                if (n > 6) {
                    //Randomly choose the least objectionable interest.
                    //I don't know what goes on in Shelly's mind so let's randomly choose.
                    const shellysRandomChoice = collectResponses[Math.floor(Math.random() * collectResponses.length)];
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
};
