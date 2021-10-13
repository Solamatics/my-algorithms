// Question: The Western Suburbs Crouquet Club has two Categories of membership, Senior and Open.
//They like your help with an application form that will tell prospective members which category
//they will be placed. To be a senior, a member must be at least 55 years old and have a handicap greater than 7.
// In this croquet club, handicaps ranges from -2 to +26; the better the player the lower the handicap.

//function
const openOrSenior = (data) => {
    return data.map((item) => {
        if(item[0] >= 55 && item[1] > 7) {
            return "You are a senior"
        } else {
            return "You are a open"
        }
    })
};


console.log(openOrSenior([[100, 70], [45, 6]]));

