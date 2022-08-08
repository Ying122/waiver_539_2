/**
 * problem 1
 */

const figures = document.getElementsByTagName('figure');

for (var i = 0; i < figures.length;i ++) {
    figures[i].classList.add('one-third');
}

/**
 * problem 2
 */
const footer = document.getElementsByTagName('footer')[0];
const hideFooter = () => {
    footer.style.display = "none";
};
footer.addEventListener('click', hideFooter);

/**
 * problem 3
 */
const highway = document.getElementsByTagName('figure')[4];
const hideHighway = () => {
    highway.style.visibility = 'hidden';
}
highway.addEventListener('dblclick', hideHighway);

/**
 * problem 4
 */
const caption = document.getElementsByTagName('figcaption')[0];
// variable for previous font
let preFont;
const changeFont = () => {
    // storing previous font
    preFont = caption.style.fontFamily;
    caption.style.fontFamily = 'Cursive';
}
const changeBack = () => {
    // retrieve previous font when mouse moves away
    caption.style.fontFamily = preFont;
}
caption.addEventListener('mouseover', changeFont);
caption.addEventListener('mouseleave', changeBack);

/**
 * problem 5
 */
caption.setAttribute('tabindex', '1');
caption.addEventListener('focus', changeFont);
caption.addEventListener('blur', changeBack);


























