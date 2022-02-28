
export default Notifier = {
    send: function (token, title, body) {
        let notiBody = {
            "to": token,
            "notification": {
                "title": title,
                "body": body,
            },
        }
        console.log(notiBody)
        return fetch(`https://fcm.googleapis.com/fcm/send`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "auth_key"
            },
            body: JSON.stringify(notiBody)
        }).then(res => {
            console.log(res)
            return true
        }).catch(err => {
            console.log(err)
            return false
        })
    }
}