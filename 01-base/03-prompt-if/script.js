/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function Cake() {

  // your code here
  let Cake = prompt("Do you want some cake?");
  if (Cake === "yes" || Cake === "Yes" || Cake === "YES") {
    alert("Yeaaaah! Congrats! Here's some cake!")
}

else {
    alert("Well, more cake for me then!")
}

})();