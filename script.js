let trainers = [];

document.getElementById("trainerBtn").onclick = () => {

    addTrainer("John");

    document.getElementById("output").innerText =
        "Trainer added!";

};

document.getElementById("classBtn").onclick = () => {

    document.getElementById("output").innerText =
        "Class added!";

};

function addTrainer(name) {

    trainers.push(name);

    console.log(trainers);

}