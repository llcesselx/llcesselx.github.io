async function populate() {
    const requestURL = './wotd.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const wods = await response.json();

    populateHeader(wods);
    populateWods(wods);
}

function populateHeader(obj) {
    const header = document.querySelector("header");
    const myH1 = document.createElement("h1");
    myH1.textContent = obj.workouts;
    header.appendChild(myH1);

    const myPara = document.createElement("p");
    myPara.textContent = `Name: ${obj.name} // Mode: ${obj.mode}`;
    header.appendChild(myPara);
}

function populateWods(obj) {
    const section = document.querySelector("section");
    const exercises = obj.exercises;
}

populate();