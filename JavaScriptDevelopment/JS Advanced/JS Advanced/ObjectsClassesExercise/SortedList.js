class List {

    constructor() {
        this._data = [];
        this.size = 0;
    }

    add(element){
        this._data.push(element);
        this.size = this._data.length;
    }

    remove(index){
        if(index >= 0 && index < this._data.length){
            this._data.splice(index, 1);
            this.size = this._data.length;
        }
    }

    get(index){
        this._data.sort((a, b) => a - b);
        if(index >= 0 && index < this._data.length){
            return this._data[index];
        }
    }
}