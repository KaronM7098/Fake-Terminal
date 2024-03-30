/*Experimenting with the fetch api using with specified endpoints and array and JSON manipulation*/

 // Function to fetch and display user data using API. 

 function fetchUserData() {
    // API endpoint using url provided by freecodecamp.com
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    fetch(apiUrl)
        .then(response => {

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // Parse the JSON response to be readable in code
            return response.json();
        })
        .then(users => {
            // Show user data on the page
            const userList = document.getElementById('userList');
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = `Name: ${user.name} Email: ${user.email}`;
                userList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
}

fetchUserData();