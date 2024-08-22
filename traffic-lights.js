class TrafficLight {
    constructor(name) {
        this.name = name;
        this.currentLight = "red";
    }

    changeLight(state) {
        this.currentLight = state;
        switch (this.currentLight) {
            case 'red':
                console.log(`\x1b[31m${this.name}: STOP - Red Light\x1b[0m`);
                break;
            case 'green':
                console.log(`\x1b[32m${this.name}: GO - Green Light\x1b[0m`);
                break;
            case 'yellow':
                console.log(`\x1b[33m${this.name}: CAUTION - Yellow Light\x1b[0m`);
                break;
            default:
                break;
        }
    }
}
module.exports = TrafficLight;
