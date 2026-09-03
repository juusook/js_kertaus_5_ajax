'use strict';

async function fetchData(url, options = {}) {
    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error(`HTTP-virhe! Status: ${response.status}`);
    }

    return await response.json();
}

async function main() {
    const url = 'https://reqres.in/api/users';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'reqres-free-v1',
        },
        body: JSON.stringify({ name: 'morpheus', job: 'leader' })
    };

    try {
        const jsonData = await fetchData(url, options);
        console.log('Saatu data:', jsonData);
    } catch (error) {
        console.log('Virhe epäonnistuneessa pyynnössä:', error.message);
    } finally {
        console.log('asynchronous load complete');
    }
}

main();
