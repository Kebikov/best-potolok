import { BodyTelegram, Link } from "../admin/helps/interface";

const fetchTelegram = (bodyTelegram: BodyTelegram) => {
    try {

        fetch(Link.Telegram, {
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