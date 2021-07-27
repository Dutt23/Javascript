// Node.js start node file


// new timers, os tasks, operations are recorded while file is run once.s
File.runContents();

const pendingTimers = [];
// Active request or operation , https call
const pendingOsTasks = [];
// Something running in a libuv thread
const pendingOperations = [];



function shouldContinue(){
// Check one:  if any functions with setTimeout, setInterval, setImmediate
// Check two: Checks if pending operating system task, servers listening for incoming requests
// Check three: Checks if there are any long running tasks. eg: Reading from the file system.

return pendingTimers.length || pendingOsTasks.length || pendingOperations.length
}
// Execution of body is known as a tick
// Event loop
while(shouldContinue()){

// 1) Pending timers, any funcs ready to be called. eg : timer expires, setTimeout, setInterval

// 2) looks at pending os tasks or operationss, executes call back. eg: Request coming on port, or file has been fetched

// 3) Pause execution, Coninue when new tasks are added

// 4) Looks at pending timers, setImmediate

// 5) Handle any close events. socket on close event
}


// Exit