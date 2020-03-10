class Convert {
    constructor(array) {
        this.object = {};
        this.object = array.reduce((acc, current) => {
            if(!acc.hasOwnProperty(current[0])){
                acc[current[0]] = {count: 0, color: current[1]};
            }
            acc[current[0]].count += 1;
            return acc;
        }, {});
    }
    getObject() {
        return this.object;
    }
}

module.exports = Convert;