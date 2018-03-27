function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
<<<<<<< HEAD
  if(string === "I love you, Grandma.") {
    return "I love you, too."
  }
  if(string.toLowerCase() === string){
   return "I can\'t hear you!"
  } 
  if(string.toUpperCase() === string){
    return"YES INDEED!"
  } 
  
  
=======
  if(string.toLowerCase() === string){
   console.log("I can\'t hear you!")
  } 
  else if(string.toUpperCase() === string){
    console.log(" YES INDEED!")
  } 
  
  else if(string === "I love you Grandma.") {
    console.log("I love you, too!")
  }
>>>>>>> 80f0bc15d517f2d452557067ca20a8c5996cd1e4
}