//* Arduino variables */
let serial; // variable for the serial object
let latestData = "waiting for data"; // variable to hold the data
let arduinoValues;

let but1Value = 0;
let red = 255;
let green = 255;


//* ML5 handpose webcam variables */
let handpose;
let video;
let predictions = [];


/**
 * size and position of canvas + definiting the port being used to detect the arduino in use
 */
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(15);
  rectMode(CENTER);
  fill(0, 0, 0);
  

  //* serial port used to detect the arduino */
  setupSerial('COM9');


  //* ML5 */
  video = createCapture(VIDEO, webcamIsReady);

  handpose = ml5.handpose(video, modelReady);
  handpose.on("predict", results => {
    predictions = results;
  });

  video.hide();
}

let dims = {};
 
function webcamIsReady() {
  resizeCanvas(window.innerWidth, window.innerHeight) // redimensiona o Canvas para ter o mesmo do video

  dims.canvasWidth = window.innerWidth, dims.canvasHeight = window.innerHeight
  dims.videoWidth = video.width, dims.videoHeight = video.height
}



/**
 * draw function
 */
function draw() {
  clear();

  //* ARDUINO */
  serialReceive();
  text("Input Line: " + latestData, 10, height - 30); // print the data to the sketch

  // in this example, we are reciving a 0 and a 1
  // if the button1 is not pressed we get a 0
  /* if (but1Value == 0) {
    ellipse(width / 2, height / 2, 0.8 * height, 0.8 * height);
  } else { // if it is pressed, we get a 1
    rect(width / 2, height / 2, 0.8 * height, 0.8 * height);
  } */

  
  //* ML5 */
  translate(width, 0);
  scale(-1, 1);
  image(video, 0, 0, width, height);

  drawKeypoints();
}

/**
 * function that draws ellipses and skeletons over the detected keypoints
 */
function drawKeypoints() {
  for (let i = 0; i < predictions.length; i += 1) {
    const prediction = predictions[i];
    for (let j = 0; j < prediction.landmarks.length; j += 1) {
      const keypoint = prediction.landmarks[j];
      fill(0, 255, 0);
      noStroke();
      circle(keypoint[0], keypoint[1], 10);
 
      fill(255, 255, 0);
      noStroke();
      let newX = map(keypoint[0], 0, dims.videoWidth, 0, dims.canvasWidth)
      let newY = map(keypoint[1], 0, dims.videoHeight, 0, dims.canvasHeight)
      circle(newX, newY, 10);
    }
  }
}

function modelReady() {
  console.log("Model ready!");
}

/**
 * when data is received in the serial buffer
 * function that receives data from arduino serial monitor
 */ 
function serialReceive() {
  let currentString = serial.readLine(); /* store the data from arduino's serial monitor in a variable */
  trim(currentString); // get rid of whitespace
  if (!currentString) return; // if there's nothing in there, ignore it
  arduinoValues = split(currentString, ' '); /* creates an array with data from arduino */
  //console.log(currentString);
  latestData = currentString; // save it to the global variable

  red = 0; // Reset value
  red = map(arduinoValues[0], 0, 1023, 0, 255);
  // green = 0; // Reset value
  // green = map(arduinoValues[1], 0, 1023, 0, 255);
  but1Value = 0; // Reset value
  but1Value = arduinoValues[1];
}

////////////////////////////////////////////////////////////////
function setupSerial(port){
  // serial constructor
  serial = new p5.SerialPort();
  // get a list of all connected serial devices
  serial.list();
  // serial port to use - you'll need to change this
  serial.open(port);
  // callback for when the sketchs connects to the server
  serial.on('connected', serverConnected);
  // callback to print the list of serial devices
  serial.on('list', gotList);
  // what to do when we get serial data
  //serial.on('data', gotData);
  // what to do when there's an error
  serial.on('error', gotError);
  // when to do when the serial port opens
  serial.on('open', gotOpen);
  // what to do when the port closes
  serial.on('close', gotClose);
}

/////////////////////////////////////////
function serverConnected() {
  console.log("Connected to Server");
}

/////////////////////////////////////////
// list the ports
function gotList(thelist) {
  console.log("List of Serial Ports:");
  for (let i = 0; i < thelist.length; i++) {
    console.log(i + " " + thelist[i]);
  }
}

/////////////////////////////////////////
function gotOpen() {
  console.log("Serial Port is Open");
}

/////////////////////////////////////////
function gotClose() {
  console.log("Serial Port is Closed");
  latestData = "Serial Port is Closed";
}

/////////////////////////////////////////
function gotError(theerror) {
  console.log(theerror);
}
////////////////////////////////////////////////////////////////