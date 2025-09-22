const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("Hello",(name)=>{
    console.log(`Hello ${name}`)
})

emitter.emit("Hello","Kiran")