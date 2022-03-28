import Vue from 'vue'
if (process.browser) { // 在这里根据环境引入wow.js
    var {WOW} = require('wowjs')
    Vue.prototype.$wow = () =>{
        new WOW({
            live: false, 
            offset: 0
        }).init()
    }
}