 function generateTitle() {
  const greetings = ["my friend", "Pinzi"];

  const greeting = greetings[Math.floor(Math.random() * greetings.length)];
  return "Welcome to Choosify ".concat(greeting)
}

function init(){
  let subTitleContainer = document.querySelector('.titleContainer')
  console.log(subTitleContainer)
  var subTitle = document.createElement('h2')
  subTitle.textContent = generateTitle()
  //Append the new h2
  subTitleContainer.appendChild(subTitle)
}


export default {init}