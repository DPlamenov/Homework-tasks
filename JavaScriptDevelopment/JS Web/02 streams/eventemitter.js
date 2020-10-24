class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    this.events[eventName] = (this.events[eventName] || []).concat(callback);
  }

  emit(eventName, ...data) {
    (this.events[eventName] || []).forEach(callback => callback(...data));
  }
}

const emitter = new EventEmitter();

emitter.on('data', (data) => {
  console.log(data);
});

emitter.emit('data', 123);
setTimeout(() => {
  emitter.emit('data', 321);
}, 1500);