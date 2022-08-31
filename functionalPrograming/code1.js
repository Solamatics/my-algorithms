//returns green tea
const prepareGreenTea = () => "greenTea";

//returns green tea
const prepareBlackTea = () => "blackTea";

//function that return number of both drinkers of black and green tea respectively
const getTea = (prepareTea, numOfTeaDrinkers) => {
    let teaCups = [];
    for(cups = 1; cups <= numOfTeaDrinkers; cups += 1) {
        const teaCup = prepareTea();
        
        teaCups.push(teaCup)

    }

    return teaCups;
}

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);


console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);