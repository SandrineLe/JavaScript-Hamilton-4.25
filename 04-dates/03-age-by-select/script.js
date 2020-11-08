/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function() {
    let birthDate = new Date(document.getElementById("dob-year").value, document.getElementById("dob-month").value, document.getElementById("dob-day").value);
    let yearThen =birthDate.getFullYear();
    let monthThen = birthDate.getMonth();
    let dayThen = birthDate.getDate();

    let today = new Date();
    let birthday = new Date(yearThen, monthThen - 1, dayThen);
    let differenceInMilisecond = today.valueOf() - birthday.valueOf();
    let yourAge = Math.floor(differenceInMilisecond / 31536000000);

alert(yourAge);});

})();
