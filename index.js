let stopButton = document.getElementById('stopButton')
let stopLight = document.getElementById('stopLight')
let stopButtonClick=0;

stopButton.addEventListener("click", function(){
  if(!stopLight.classList.contains("stop")){
    console.log("Stop Bulb on");
  }else{
    console.log("Stop Bulb off")
  }
    stopLight.classList.toggle('stop');
})
let slowButton = document.getElementById('slowButton')
let slowLight = document.getElementById('slowLight')
// let slowButtonClick=0;

slowButton.addEventListener("click", function(){
if(!slowLight.classList.contains("slow")){
  console.log("Slow Bulb on");
}else{
  console.log("Slow Bulb off")
}slowLight.classList.toggle('slow');  
})

let goButton = document.getElementById('goButton')
let goLight = document.getElementById('goLight')

goButton.addEventListener("click", function(){
  if(!goLight.classList.contains("go")){
    console.log("Go bulb on");
  }else{
    console.log("Go bulb off")
  }goLight.classList.toggle('go');  
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



// const lightLog = document.querySelectorAll('div')

// lightLog.forEach(lightLog =>{
//   if(lightLog.textContent="go"){
//   console.log(`Go light on`)   
//     }else if(lightLog.textContent='stop'){
//     console.log(`Stoplight on`)
//     }else if(lightLog.textContent='slow'){
//     console.log(`Slow light on`)
//   }
// })