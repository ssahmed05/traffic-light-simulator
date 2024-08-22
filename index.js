const TrafficLight = require('./traffic-lights'); // Import the TrafficLight class
const TrafficController = require('./traffic-controller'); // Import the TrafficController class (if in a separate file)

// Create instances of the TrafficLight class
const tl1 = new TrafficLight('Board Office');
const tl2 = new TrafficLight('Hyderi');
const tl3 = new TrafficLight('5 Star');
const tl4 = new TrafficLight('Sakhi Hasan');
const tl5 = new TrafficLight('Nagan');
const tl6 = new TrafficLight('UP');

// Create the traffic controller with the traffic lights
const controller = new TrafficController([tl1, tl2, tl3, tl4, tl5, tl6]);

// Start the synchronized traffic light simulation
controller.start();

// Optionally, stop the simulation after a certain period (e.g., 30 seconds)
// setTimeout(() => {
//     controller.stop();
// }, 30000);
