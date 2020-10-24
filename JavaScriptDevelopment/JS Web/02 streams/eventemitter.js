class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    this.events[eventName] = (this.events[eventName] || []).concat(callback);

    const unsub = () => {
      this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
    }

    return {
      unsub
    };
  }

  emit(eventName, ...data) {
    (this.events[eventName] || []).forEach(callback => callback(...data));
  }
}

const emitter = new EventEmitter();

const event = emitter.on('data', console.log);
emitter.on('data', console.log);

// console.log(event);
emitter.emit('data', 1);
event.unsub();
emitter.emit('data', 1);