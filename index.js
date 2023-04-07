let stopButton = document.getElementById('stopButton')
let stopLight = document.getElementById('stopLight')
let stopButtonClick=0;

stopButton.addEventListener("click", function(){
  // if(stopLight.classList.contains("stop")){
  //   console.log("Stop Bulb off");
  // }else{
  //   console.log("Stop Bulb on")
  // }
  stopLight.classList.toggle('stop');
})
let slowButton = document.getElementById('slowButton')
let slowLight = document.getElementById('slowLight')
// let slowButtonClick=0;

slowButton.addEventListener("click", function(){
// if(slowLight.classList.contains("slow")){
//   console.log("Slow Bulb off");
// }else{
//   console.log("Slow Bulb on")
// }
slowLight.classList.toggle('slow');  
})

let goButton = document.getElementById('goButton')
let goLight = document.getElementById('goLight')

goButton.addEventListener("click", function(){
  // if(goLight.classList.contains("go")){
  //   console.log("Go bulb off");
  // }else{
  //   console.log("Go bulb on")
  // }
  goLight.classList.toggle('go');  
  })

goButton.addEventListener(
  "mouseenter", (event) =>{
    console.log("Entered go button")
  }
)
goButton.addEventListener(
  "mouseleave", (event) =>{
    console.log("Left go button")
  }
)

stopButton.addEventListener(
  "mouseenter", (event) =>{
    console.log("Entered stop button")
  }
)
stopButton.addEventListener(
  "mouseleave", (event) =>{
    console.log("Left stop button")
  }
)
slowButton.addEventListener(
  "mouseenter", (event) =>{
    console.log("Entered slow button")
  }
)
slowButton.addEventListener(
  "mouseleave", (event) =>{
    console.log("Left slow button")
  }
)

let controls = document.getElementById('controls');

document.body.addEventListener('click', function (event){
  if (event.target.className !=='button'){
    return;
  }
  if (event.target.id === 'stopButton'){
      if(stopLight.classList.contains('stop')){
        console.log(`${event.target.textContent} bulb on`)
      }
      else{
        console.log(`${event.target.textContent} bulb off`)
      }
  }else if(event.target === slowButton){
      if (slowLight.classList.contains("slow")){
        console.log(`${event.target.textContent} bulb on`)
      }else {
        console.log(`${event.target.textContent} bulb off`)
    }
  }else if(event.target === goButton){
      if (goLight.classList.contains("go")){
        console.log(`${event.target.textContent} bulb on`)
      }else{
        console.log(`${event.target.textContent} bulb off`)
      }
  }
})