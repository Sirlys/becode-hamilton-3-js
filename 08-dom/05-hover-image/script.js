/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const img = document.querySelector("img");
    const attribute = img.getAttribute("data-hover");
    const currentsrc = img.getAttribute("src");
    img.addEventListener("mouseenter", () => {
        img.setAttribute("src", attribute);
    });
    img.addEventListener("mouseleave", () => {
        img.setAttribute("src", currentsrc);
    });
})();
