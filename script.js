document.addEventListener('DOMContentLoaded', function () {
    const generateButton = document.getElementById('generateButton');
    generateButton.addEventListener('click', generateName);
});

function generateName() {
    const nameElement = document.getElementById('generatedName');
    const proxyUrl = 'http://localhost:3000/checkName/';

    // Generate a random 3-4 letter name
    const randomName = generateRandomName();

    // Check if the name is available using the proxy server
    fetch(proxyUrl + randomName)
        .then(response => {
            if (response.status === 200) {
                // Name is taken, generate a new one
                generateName();
            } else {
                // Name is available
                nameElement.textContent = `Generated Name: ${randomName}`;
            }
        })
        .catch(error => console.error('Error checking name availability:', error));
}

function generateRandomName() {
    const length = Math.floor(Math.random() * 2) + 3; // Random length between 3 and 4
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let randomName = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomName += characters.charAt(randomIndex);
    }

    return randomName;
}
