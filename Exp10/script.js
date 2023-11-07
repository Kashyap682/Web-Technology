
function displayData() {
  
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
   
            const name = data.name;
            const email = data.email;
            const age = data.age;

            const dataDisplay = document.getElementById('data-display');
            dataDisplay.innerHTML = `
                <h1>Name: ${name}</h1>
                <p>Email: ${email}</p>
                <p>Age: ${age}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

displayData();
