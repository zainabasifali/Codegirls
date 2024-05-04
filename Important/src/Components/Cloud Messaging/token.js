import { getToken } from "firebase/messaging";
import { messaging } from '../../config/fb-config';

let Get_Token = () => {
    const keypair = "BJ9qKCo4lB7gLl3dqhYPiYorc7Bd-O3l1-TorTFXFJqRtyhJKJL6ItJRDbYreMaykDrlFzfmqw71SAdocPzitI0"
    async function requestPermission() {
        const permission = await Notification.requestPermission()
        console.log(permission);

        if (permission == "granted") {
            const token = await getToken(messaging, { vapidKey: keypair });
            console.log(token);

        }

    }

    requestPermission()

}

export default Get_Token;