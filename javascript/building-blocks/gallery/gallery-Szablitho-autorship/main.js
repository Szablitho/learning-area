const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const pics = [["images/pic1.jpg","Closeup of a human eye"],["images/pic2.jpg","white wave"],["images/pic3.jpg","fragrant violet"],["images/pic4.jpg","Egyptian images and hieroglyphs"],["images/pic5.jpg","Butterfly on a big tropical leaf"]];
/* Declaring the alternative text for each image file */

/* Looping through images */
pics.forEach(pic => {
const newImage = document.createElement('img');
newImage.setAttribute('src', pic[0]);
newImage.setAttribute('alt', pic[1]);
thumbBar.appendChild(newImage);

newImage.addEventListener( "click", () => {
  displayedImage.setAttribute( 'src', pic[0] );
  displayedImage.setAttribute('alt',pic[1]);
});
});
/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
  let className = btn.getAttribute('class');
  if(className === "dark") {
    btn.setAttribute('class', "light");
    btn.innerText = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    btn.setAttribute('class', "dark");
    btn.innerText = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
});