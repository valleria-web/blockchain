import Observer from "./Observer.mjs";

class EventManager {
  constructor() {
    this.observers = [];
  }

  register(observer) {
    if (observer instanceof Observer) {
      this.observers.push(observer);
    } else {
      throw new Error("Observer must be an instance of Observer class");
    }
  }

  notify(event, data) {
    this.observers.forEach((observer) => observer.update(event, data));
  }
}

export default EventManager;
