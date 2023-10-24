const fetchTelegram = (bodyTelegram) => {
    try {

        fetch('http://localhost:3000/api/management/telegram', {
            method: 'POST',
            body: JSON.stringify(bodyTelegram),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));

    }catch (error) {
        console.log('Error in Function fetchTelegram >>> ', error);
    }
}

export default fetchTelegram;