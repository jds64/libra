const Libra = require('..');

new Libra().info("Testing colors 1, 2 ,3!")
new Libra().warning("Warning! (Not a real warning)")
new Libra().error("Error! (Not a real error)")
new Libra().success("Success! (Not a real success)")
new Libra().debug("Debug message! Brrrr...")
new Libra().ex('#d7e300', 'CUST', "Custom message support!")

new Libra().info("If you can see the colors and styles in the above strings, you're all good to go!")
console.log("Can't detect color support at the moment.")