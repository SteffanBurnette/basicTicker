
//A function that is invoking a callback that was passed as 
// a parameter
function notifyUser(notificationFn){
    notificationFn()
}

const emailNotification = ()=> console.log("Email Sent")
const smsNotification = ()=> console.log("SMS sent")

notifyUser(emailNotification)
notifyUser(smsNotification)

