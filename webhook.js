//Language: javascript
// Path: webhook.js

// A simple function to send a message to a discord webhook
const url = 'https://discord.com/api/webhooks/909545694505869404/1EiP-VWG90W_0OWjAKHwnU1QhqVKfZwV8to3XkORwo4N7gn3RljczcnJ3fyBg4TbaujW'


const { default: axios } = require('axios')
function send(msg){
    //send post request containing message with axios
    axios.post(url, {
        content: msg
    })
    .then(res => {
        console.log(res.data)
    }
    )
    .catch(err => {
        console.log(err)
    }
    )
    
}

module.exports = {
    send
}