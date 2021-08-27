import Storage from '@src/services/storage'

export default function authHeader(){

    let accessToken = new Storage().getSavedState('auth.currentUser')

    if(accessToken) {
        return {
            "Authorization" : `Bearer ${accessToken.token}`
        }
    } else {
        return {

        }
    }
}