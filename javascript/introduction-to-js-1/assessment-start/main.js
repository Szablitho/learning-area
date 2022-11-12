const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin","Big Daddy","Father Christmas"];
const insertY = ["the soup kitchen","Disneyland", "the White House"];
const insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  console.log(newStory);
  let Xitem = randomValueFromArray(insertX);
  let Yitem = randomValueFromArray(insertY);
  let Zitem = randomValueFromArray(insertZ);
  // completing result(), point 3
  newStory = newStory.replaceAll(":insertx:",Xitem);
  newStory = newStory.replaceAll(":inserty:",Yitem);
  newStory = newStory.replaceAll(":insertz:",Zitem);
  // end of point 3
  if(customName.value !== '') {
    const name = customName.value;
    // point 4
    newStory = newStory.replaceAll("Bob", name);
  }
  // point 5
  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + ' stone';
    const temperature =  Math.round((94-32)*(5/9)) + ' centigrade';
    newStory = newStory.replaceAll("94 fahrenheit",temperature);
    newStory = newStory.replaceAll("300 pounds",weight);
  }
  // end of point 5
  // point 6
  story.textContent = newStory;
  // end of point 6
  story.style.visibility = 'visible';
  console.log(newStory);
}

