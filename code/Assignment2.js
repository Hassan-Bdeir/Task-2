let button=document.getElementById("button2");
button.addEventListener("click", function(){
    button.textContent = "Im Sure You Never Guessed This: ";

    let teamNames = ["Germany", "Hungary", "Scotland", "Switzerland","Spain", "Italy", "Croatia", "Albania", "England", "Denmark", "Slovenia", "Serbia", "Austria", "France", "Netherlands", "Poland", "Romania", "Belgium", "Slovakia", "Ukraine","Portugal", "Turkey", "Georgia", "Czechia"];
    let randomTeam = teamNames[Math.floor(Math.random() * teamNames.length)];
    let paragraph = document.createElement("p");
    paragraph.textContent="I Hope Your Not Dissapointed. The Winnig Team Is: " + randomTeam;
    document.body.appendChild(paragraph);
    document.body.style.backgroundColor = "white";
});
document.getElementById('fetchButton').addEventListener('click', getData);

async function getData() {
    const url = "http://localhost:8000/data.txt";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const text = await response.text();
        console.log(text);
        document.getElementById('output').textContent = text;
    } catch (error) {
        console.error(error.message);
        document.getElementById('output').textContent = 'Fetch error: ' + error.message;
    }
}