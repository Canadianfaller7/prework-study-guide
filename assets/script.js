
// here we have an array of topics
let topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

// here is a var to get a random topic from our topics array, we get it by doing math.random and multiplying it by the length of the array to get a random
// outcome each time.
let randomTopic = topics[Math.floor(Math.random() * topics.length)];

// function that we can call to iterate through our array to select a topic
function listTopics() {
    // here we are setting a var equal to zero and then iterating through the length of our array, adding 1 to are var so it doesn't repeat
    // then console logging the index value of the topic to the console
    for (let i = 0; i < topics.length; i++) {
        console.log(topics[i])
    }
}
// this is a function that has if else if statements inside to run certain code depending on what topic is selected.
function selectedTopic() {
    if (randomTopic === 'HTML') {
        console.log("Let's study HTML!")
    }
    else if (randomTopic === 'CSS') {
        console.log("Let's study CSS!")
    }
    else if (randomTopic === 'Git') {
        console.log("Let's study Git!")
    }
    else if (randomTopic === 'JavaScript') {
        console.log("Let's study JavaScript!")
    }
    else {
        console.log("Please try again!")
    }
}

console.log("Here are the tpics we learned through Prework:")
listTopics();

console.log("Which topic should we study first?")
selectedTopic();



