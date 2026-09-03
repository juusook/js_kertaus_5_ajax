'use strict';

const options = {
   headers: {
     'x-api-key': 'reqres-free-v1',
   }
 };

const url = 'https://reqres.in/api/unknown/23';

async function fetchUser() {
    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`HTTP-virhe! Status: ${response.status}`);
        }

        const jsonData = await response.json();
        console.log(jsonData);
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log('asynchronous load complete');
    }
}

fetchUser();
