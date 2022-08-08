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




