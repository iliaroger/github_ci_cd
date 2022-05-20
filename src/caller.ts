const caller = 'http://api.caller.com'

export interface ICaller {
    name: string
    caller: string
}

const callAPI = () => {
    return caller
}

callAPI()
