Lottery - 抽奖
==
Intro
--
The Lottery module is using for displaying lottery procudure, you can make it show in turn or random, and you can cover the setting of display if necessary.
How to use
--
####HTML
* Download the JavaScript code
* Include the jQuery at the top of the <head> of your page
* Include the following code after the jQuery <script>
```html
<script type="text/javascript" src="js/lottery.js"></script>
```
####JavaScript
```javascript
var lottery = new lwenn.Lottery($(".lottery ul"), function() { alert("over"); }); // $(".lottery ul") is the rewards to draw a lottery
var result = 1; // the result index start from 0
lottery.playInTurn(result); // Or lottery.playRandom(result);
```
简介
--
Lottery模块用于抽奖过程的展示，你可以让它顺序展示或随机次序展示。如果有必要，还可以覆盖一些展示的参数。
用法
--
####HTML
* 下载JS代码
* 在页面的<head>里引入jQuery代码
* 在jQuery代码后面引入下面的html代码
```html
<script type="text/javascript" src="js/lottery.js"></script>
```
####JavaScript
```javascript
var lottery = new lwenn.Lottery($(".lottery ul"), function() { alert("over"); }); // $(".lottery ul")是抽奖的奖励列表
var result = 1; //结果下标，从0开始
lottery.playInTurn(result); // lottery.playRandom(result);
```
API
==
####lwenn.Lottery(element[, over ][, options])
构造器，参数element, over, options

* 返回：Lottery
* element：类型-jQuery或DOM object，抽奖的列表ul
* over(可选)：类型-Function，抽奖结束执行的函数
* options(可选)：类型-Object，包含展示参数的对象
	* times(默认:3)：类型-Number，一圈抽奖动画播放的次数
    * duration(默认:150)：类型-Number，抽奖选中跳转的间隙（毫秒）
####setTimes(times)
设置完整一圈动画播放的次数，返回

* 返回：Lottery
* times：类型-Number，一圈抽奖动画播放的次数

####setDuration(duration)
设置抽奖选中跳转的间隙（毫秒）

* 返回：Lottery
* duration：类型-Number，抽奖选中跳转的间隙（毫秒）

####setOver(fun)
设置抽奖结束执行的函数

* 返回：Lottery
* fun：类型-Function，抽奖结束执行的函数

####playRandom(result)
以随机次序展示抽奖动画

* result：类型-Number，抽中的下标，从0开始

####playInTurn(result)
以顺序的方式从第0个li开始展示抽奖动画

* result：类型-Number，抽中的下标，从0开始
