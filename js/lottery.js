/**
 * Created by lwenn on 2016/4/25.
 * 用于页面抽奖的展示
 */
(function(window, $, undefined) {

    var cssFile = $("link[href*='lottery.css']");
    if (cssFile.length == 0) {
        $("<link rel='stylesheet' type='text/css' href='css/lottery.css'>").appendTo("head");
    }

    function playLottery(rewards, arr, times, duration, result, over) {
        var count = 0;
        var len = arr.length;
        var id = setInterval(function () {
            var index = arr[count % len];

            $(rewards[index]).addClass("on").siblings().removeClass("on");
            if (parseInt(count / len) == times && index == result) {
                clearInterval(id);
                if (typeof over == "function") {
                    over();
                }
            }
            count++;
        }, duration);
    };

    /*
     * 抽奖
     * element 抽奖容器，抽奖对象的直接父元素
     * over 抽奖结束执行的函数
     */
    var Lottery = function(element, over, options) {
        if (!(this instanceof Lottery)) {
            return new Lottery(options);
        }
        this.getElement = function() {
            return $(element);
        }
        this.over = over;
        for (var key in options) {
            this.option[key] = options[key];
        }
        this.getElement().addClass("lottery-container");
        this.getElement().children().addClass("lottery-reward");
    };

    /*
     *  times, 循环次数
     *  duration, 间隔毫秒
     *  result, 抽中的下标，从0开始
     */
    Lottery.prototype = {
        options: {
            times: 3,
            duration: 150
        },
        setTimes: function (times) {
            this.options.times = times;
            return this;
        },
        setDuration: function (duration) {
            this.options.duration = duration;
            return this;
        },
        setOver: function (fun) {
            this.over = fun;
            return this;
        },
        playRandom: function (result) {
            var i;
            var rand;
            var arr = [];
            var randArr = [];
            var rewards = this.getElement().children();
            var total = rewards.length;
            for (i = 0; i < total; i++) {
                arr.push(i);
            }
            for (i = 0; i < total; i++) {
                rand = Math.random() * arr.length;
                randArr.push(arr.splice(rand, 1)[0]);
            }
            playLottery(rewards, randArr, this.options.times, this.options.duration, result, this.over);
        },
        playInTurn: function (result) {
            var arr = [];
            var rewards = this.getElement().children();
            var total = rewards.length;
            for (var i = 0; i < total; i++) {
                arr.push(i);
            }
            playLottery(rewards, arr, this.options.times, this.options.duration, result, this.over);
        }
    };

    window.lwenn = window.lwenn || {};
    window.lwenn.Lottery = Lottery;

}(window, jQuery));
