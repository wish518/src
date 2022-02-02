var dev = {
    P_API : "http://127.0.0.1:5000/"
}
var Prod = {
    P_API : "https://pythonapi.trueequal.one/"
}

global.constants =process.env.env == process.env.dev? dev: Prod