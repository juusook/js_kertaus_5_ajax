'use strict';

const options = {
   headers: {
     'x-api-key': 'reqres-free-v1',
   }
 };

const url = 'https://reqres.in/api/users/1';

async function fetchUser() {
    try {
        const response = await fetch(url, options);
        const jsonData = await response.json();
        console.log(jsonData);
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log('asynchronous load complete');
    }
}

fetchUser();
