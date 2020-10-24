class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    const cb = function (...data) {
      callback(...data);
    }

    this.events[eventName] = (this.events[eventName] || []).concat(cb);

    const unsub = () => {
      this.events[eventName] = this.events[eventName].filter(_cb => _cb !== cb);
    }

    return {
      unsub
    };
  }

  emit(eventName, ...data) {
    (this.events[eventName] || []).forEach(callback => callback(...data));
  }

  once(eventName, callback) {
    const event = this.on(eventName, function (data) {
      callback(data);
      event.unsub();
    });
  }
}

const emitter = new EventEmitter();

const event = emitter.once('data', console.log);

emitter.emit('data', 1);
emitter.emit('data', 1);
emitter.emit('data', 1);