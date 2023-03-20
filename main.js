// Define an array of messages to randomly choose from
const messages = [
    "Hello, world!",
    "Keep it simple.",
    "Stay hungry, stay foolish.",
    "Just do it!",
    "Failure is not an option.",
    "Think different.",
    "Code is poetry.",
    "The best way to predict the future is to invent it.",
    "Stay curious.",
    "Innovation distinguishes between a leader and a follower."
  ];
  
  // Generate a random index within the range of the messages array
  const index = Math.floor(Math.random() * messages.length);
  
  // Output the message at the randomly generated index
  console.log(messages[index]);