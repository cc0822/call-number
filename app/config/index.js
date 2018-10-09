const cfg = {
    server: 'http://192.168.1.37:8091/call/v1/',
    // API_KEY: '06a6af829ad9c8d028727117',
    callBtnData: [
        {
            imgUrl: require('../assets/images/call.png'),
            btnText: '顺序呼叫',
            btnBg: 'skyBlue',
            clickEvent: 'call'
        },
        {
            imgUrl: require('../assets/images/recall.png'),
            btnText: '重新呼叫',
            btnBg: 'greenColor',
            clickEvent: 'recall'
        },
        {
            imgUrl: require('../assets/images/number.png'),
            btnText: '过号',
            btnBg: 'redColor',
            clickEvent: 'number'
        },
        {
            imgUrl: require('../assets/images/pause.png'),
            btnText: '暂停',
            btnBg: 'darkBlue',
            clickEvent: 'pause'
        }
    ]
}

export default cfg;