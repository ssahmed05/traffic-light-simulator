class TrafficController {
    constructor(trafficLights) {
        this.trafficLights = trafficLights
        this.states = ['green', 'yellow', 'red'];
        this.currentStateIndex = 0;
    }

    changeAllLights() {
        const currentState = this.states[this.currentStateIndex];

        console.clear();
        console.log(`All lights are now ${currentState.toUpperCase()}`);

        this.trafficLights.forEach(light => {
            light.changeLight(currentState)
        })
        this.currentStateIndex = (this.currentStateIndex + 1) % this.states.length
    }

    start() {
        console.log('Traffic light synchronization started.');
        this.interval = setInterval(() => this.changeAllLights(), 4000)
    }
    stop() {
        clearInterval(this.interval);
        console.log('Traffic light synchronization stopped.');
    }

    
}

module.exports = TrafficController