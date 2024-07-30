class EventManager {
  constructor() {
      this.observers = [];
  }

  register(observer) {
      this.observers.push(observer);
  }

  notify(event, data) {
      this.observers.forEach(observer => observer.update(event, data));
  }
}

export default EventManager;

