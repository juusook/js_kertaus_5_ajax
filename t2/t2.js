'use strict';

const user = {
  name: 'Jesus Christ Allin',
  job: 'Software Engineer',
}

const options = {
  method: 'POST',
  body: JSON.stringify(user),
  headers: {
     'x-api-key': 'reqres-free-v1',
   }
 };

const url = 'https://reqres.in/api/users/1';

async function makeUser() {
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

makeUser();
