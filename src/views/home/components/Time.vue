<template>
  <div class="box">
    <!-- 秒 转盘盒子 -->
    <!-- 每次旋转6度 -->
    <div class="secondBox" ref="second-box">
      <div class="second" style="transform: rotate(0deg)">
        <span class="tra">三十秒</span>
        <span></span>
      </div>
      <div class="second" style="transform: rotate(6deg)">
        <span class="tra">三十一秒</span>
        <span>一秒</span>
      </div>
      <div class="second" style="transform: rotate(12deg)">
        <span class="tra">三十二秒</span>
        <span>二秒</span>
      </div>
      <div class="second" style="transform: rotate(18deg)">
        <span class="tra">三十三秒</span>
        <span>三秒</span>
      </div>
      <div class="second" style="transform: rotate(24deg)">
        <span class="tra">三十四秒</span>
        <span>四秒</span>
      </div>
      <div class="second" style="transform: rotate(30deg)">
        <span class="tra">三十五秒</span>
        <span>五秒</span>
      </div>
      <div class="second" style="transform: rotate(36deg)">
        <span class="tra">三十六秒</span>
        <span>六秒</span>
      </div>
      <div class="second" style="transform: rotate(42deg)">
        <span class="tra">三十七秒</span>
        <span>七秒</span>
      </div>
      <div class="second" style="transform: rotate(48deg)">
        <span class="tra">三十八秒</span>
        <span>八秒</span>
      </div>
      <div class="second" style="transform: rotate(54deg)">
        <span class="tra">三十九秒</span>
        <span>九秒</span>
      </div>
      <div class="second" style="transform: rotate(60deg)">
        <span class="tra">四十秒</span>
        <span>十秒</span>
      </div>
      <div class="second" style="transform: rotate(66deg)">
        <span class="tra">四十一秒</span>
        <span>十一秒</span>
      </div>
      <div class="second" style="transform: rotate(72deg)">
        <span class="tra">四十二秒</span>
        <span>十二秒</span>
      </div>
      <div class="second" style="transform: rotate(78deg)">
        <span class="tra">四十三秒</span>
        <span>十三秒</span>
      </div>
      <div class="second" style="transform: rotate(84deg)">
        <span class="tra">四十四秒</span>
        <span>十四秒</span>
      </div>
      <div class="second" style="transform: rotate(90deg)">
        <span class="tra">四十五秒</span>
        <span>十五秒</span>
      </div>
      <div class="second" style="transform: rotate(96deg)">
        <span class="tra">四十六秒</span>
        <span>十六秒</span>
      </div>
      <div class="second" style="transform: rotate(102deg)">
        <span class="tra">四十七秒</span>
        <span>十七秒</span>
      </div>
      <div class="second" style="transform: rotate(108deg)">
        <span class="tra">四十八秒</span>
        <span>十八秒</span>
      </div>
      <div class="second" style="transform: rotate(114deg)">
        <span class="tra">四十九秒</span>
        <span>十九秒</span>
      </div>
      <div class="second" style="transform: rotate(120deg)">
        <span class="tra">五十秒</span>
        <span>二十秒</span>
      </div>
      <div class="second" style="transform: rotate(126deg)">
        <span class="tra">五十一秒</span>
        <span>二十一秒</span>
      </div>
      <div class="second" style="transform: rotate(132deg)">
        <span class="tra">五十二秒</span>
        <span>二十二秒</span>
      </div>
      <div class="second" style="transform: rotate(138deg)">
        <span class="tra">五十三秒</span>
        <span>二十三秒</span>
      </div>
      <div class="second" style="transform: rotate(144deg)">
        <span class="tra">五十四秒</span>
        <span>二十四秒</span>
      </div>
      <div class="second" style="transform: rotate(150deg)">
        <span class="tra">五十五秒</span>
        <span>二十五秒</span>
      </div>
      <div class="second" style="transform: rotate(156deg)">
        <span class="tra">五十六秒</span>
        <span>二十六秒</span>
      </div>
      <div class="second" style="transform: rotate(162deg)">
        <span class="tra">五十七秒</span>
        <span>二十七秒</span>
      </div>
      <div class="second" style="transform: rotate(168deg)">
        <span class="tra">五十八秒</span>
        <span>二十八秒</span>
      </div>
      <div class="second" style="transform: rotate(174deg)">
        <span class="tra">五十九秒</span>
        <span>二十九秒</span>
      </div>
    </div>

    <!-- 分钟 转盘盒子 -->
    <!-- 每次旋转6度 -->
    <div class="branchBox" ref="branch-box">
      <div class="branch" style="transform: rotate(0deg)">
        <span class="tra">三十分</span>
        <span></span>
      </div>
      <div class="branch" style="transform: rotate(6deg)">
        <span class="tra">三十一分</span>
        <span>一分</span>
      </div>
      <div class="branch" style="transform: rotate(12deg)">
        <span class="tra">三十二分</span>
        <span>二分</span>
      </div>
      <div class="branch" style="transform: rotate(18deg)">
        <span class="tra">三十三分</span>
        <span>三分</span>
      </div>
      <div class="branch" style="transform: rotate(24deg)">
        <span class="tra">三十四分</span>
        <span>四分</span>
      </div>
      <div class="branch" style="transform: rotate(30deg)">
        <span class="tra">三十五分</span>
        <span>五分</span>
      </div>
      <div class="branch" style="transform: rotate(36deg)">
        <span class="tra">三十六分</span>
        <span>六分</span>
      </div>
      <div class="branch" style="transform: rotate(42deg)">
        <span class="tra">三十七分</span>
        <span>七分</span>
      </div>
      <div class="branch" style="transform: rotate(48deg)">
        <span class="tra">三十八分</span>
        <span>八分</span>
      </div>
      <div class="branch" style="transform: rotate(54deg)">
        <span class="tra">三十九分</span>
        <span>九分</span>
      </div>
      <div class="branch" style="transform: rotate(60deg)">
        <span class="tra">四十分</span>
        <span>十分</span>
      </div>
      <div class="branch" style="transform: rotate(66deg)">
        <span class="tra">四十一分</span>
        <span>十一分</span>
      </div>
      <div class="branch" style="transform: rotate(72deg)">
        <span class="tra">四十二分</span>
        <span>十二分</span>
      </div>
      <div class="branch" style="transform: rotate(78deg)">
        <span class="tra">四十三分</span>
        <span>十三分</span>
      </div>
      <div class="branch" style="transform: rotate(84deg)">
        <span class="tra">四十四分</span>
        <span>十四分</span>
      </div>
      <div class="branch" style="transform: rotate(90deg)">
        <span class="tra">四十五分</span>
        <span>十五分</span>
      </div>
      <div class="branch" style="transform: rotate(96deg)">
        <span class="tra">四十六分</span>
        <span>十六分</span>
      </div>
      <div class="branch" style="transform: rotate(102deg)">
        <span class="tra">四十七分</span>
        <span>十七分</span>
      </div>
      <div class="branch" style="transform: rotate(108deg)">
        <span class="tra">四十八分</span>
        <span>十八分</span>
      </div>
      <div class="branch" style="transform: rotate(114deg)">
        <span class="tra">四十九分</span>
        <span>十九分</span>
      </div>
      <div class="branch" style="transform: rotate(120deg)">
        <span class="tra">五十分</span>
        <span>二十分</span>
      </div>
      <div class="branch" style="transform: rotate(126deg)">
        <span class="tra">五十一分</span>
        <span>二十一分</span>
      </div>
      <div class="branch" style="transform: rotate(132deg)">
        <span class="tra">五十二分</span>
        <span>二十二分</span>
      </div>
      <div class="branch" style="transform: rotate(138deg)">
        <span class="tra">五十三分</span>
        <span>二十三分</span>
      </div>
      <div class="branch" style="transform: rotate(144deg)">
        <span class="tra">五十四分</span>
        <span>二十四分</span>
      </div>
      <div class="branch" style="transform: rotate(150deg)">
        <span class="tra">五十五分</span>
        <span>二十五分</span>
      </div>
      <div class="branch" style="transform: rotate(156deg)">
        <span class="tra">五十六分</span>
        <span>二十六分</span>
      </div>
      <div class="branch" style="transform: rotate(162deg)">
        <span class="tra">五十七分</span>
        <span>二十七分</span>
      </div>
      <div class="branch" style="transform: rotate(168deg)">
        <span class="tra">五十八分</span>
        <span>二十八分</span>
      </div>
      <div class="branch" style="transform: rotate(174deg)">
        <span class="tra">五十九分</span>
        <span>二十九分</span>
      </div>
    </div>

    <!-- 小时 旋转盒子 -->
    <!-- 每个旋转30度 -->
    <div class="hourBox" ref="hour-box">
      <div class="hour" style="transform: rotate(0deg)">
        <span class="tra">六点</span>
        <span>十二点</span>
      </div>
      <div class="hour" style="transform: rotate(30deg)">
        <span class="tra">七点</span>
        <span>一点</span>
      </div>
      <div class="hour" style="transform: rotate(60deg)">
        <span class="tra">八点</span>
        <span>二点</span>
      </div>
      <div class="hour" style="transform: rotate(90deg)">
        <span class="tra">九点</span>
        <span>三点</span>
      </div>
      <div class="hour" style="transform: rotate(120deg)">
        <span class="tra">十点</span>
        <span>四点</span>
      </div>
      <div class="hour" style="transform: rotate(150deg)">
        <span class="tra">十一点</span>
        <span>五点</span>
      </div>
    </div>

    <!-- 几号 旋转盒子 -->
    <!-- 每个旋转 11.25度 -->
    <div class="NumberBox" ref="number-box">
      <div class="Number" style="transform: rotate(0deg)">
        <span class="tra">十六号</span>
        <span></span>
      </div>
      <div class="Number" style="transform: rotate(11.25deg)">
        <span class="tra">十七号</span>
        <span>一号</span>
      </div>
      <div class="Number" style="transform: rotate(22.5deg)">
        <span class="tra">十八号</span>
        <span>二号</span>
      </div>
      <div class="Number" style="transform: rotate(33.75deg)">
        <span class="tra">十九号</span>
        <span>三号</span>
      </div>
      <div class="Number" style="transform: rotate(45deg)">
        <span class="tra">二十号</span>
        <span>四号</span>
      </div>
      <div class="Number" style="transform: rotate(56.25deg)">
        <span class="tra">二十一号</span>
        <span>五号</span>
      </div>
      <div class="Number" style="transform: rotate(67.5deg)">
        <span class="tra">二十二号</span>
        <span>六号</span>
      </div>
      <div class="Number" style="transform: rotate(78.75deg)">
        <span class="tra">二十三号</span>
        <span>七号</span>
      </div>
      <div class="Number" style="transform: rotate(90deg)">
        <span class="tra">二十四号</span>
        <span>八号</span>
      </div>
      <div class="Number" style="transform: rotate(101.25deg)">
        <span class="tra">二十五号</span>
        <span>九号</span>
      </div>
      <div class="Number" style="transform: rotate(112.5deg)">
        <span class="tra">二十六号</span>
        <span>十号</span>
      </div>
      <div class="Number" style="transform: rotate(123.75deg)">
        <span class="tra">二十七号</span>
        <span>十一号</span>
      </div>
      <div class="Number" style="transform: rotate(135deg)">
        <span class="tra">二十八号</span>
        <span>十二号</span>
      </div>
      <div class="Number" style="transform: rotate(146.25deg)">
        <span class="tra">二十九号</span>
        <span>十三号</span>
      </div>
      <div class="Number" style="transform: rotate(157.5deg)">
        <span class="tra">三十号</span>
        <span>十四号</span>
      </div>
      <div class="Number" style="transform: rotate(168.75deg)">
        <span class="tra">三十一号</span>
        <span>十五号</span>
      </div>
    </div>

    <!-- 月 旋转盒子 -->
    <!-- 每个旋转30度 -->
    <div class="monthBox" ref="month-box">
      <div class="month" style="transform: rotate(0deg)">
        <span class="tra">六月</span>
        <span>十二月</span>
      </div>
      <div class="month" style="transform: rotate(30deg)">
        <span class="tra">七月</span>
        <span>一月</span>
      </div>
      <div class="month" style="transform: rotate(60deg)">
        <span class="tra">八月</span>
        <span>二月</span>
      </div>
      <div class="month" style="transform: rotate(90deg)">
        <span class="tra">九月</span>
        <span>三月</span>
      </div>
      <div class="month" style="transform: rotate(120deg)">
        <span class="tra">十月</span>
        <span>四月</span>
      </div>
      <div class="month" style="transform: rotate(150deg)">
        <span class="tra">十一月</span>
        <span>五月</span>
      </div>
    </div>

    <!-- 年 -->
    <div class="year" ref="year-year">2021</div>

    <!-- 白色透明标注盒子 -->
    <div class="show">
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Time',
  mounted () {
    const secondBox = this.$refs['second-box'] // 秒
    const branchBox = this.$refs['branch-box'] // 分
    const hourBox = this.$refs['hour-box'] // 小时
    const NumberBox = this.$refs['number-box'] // 日
    const monthBox = this.$refs['month-box'] // 月
    const year = this.$refs['year-year'] // 年

    // 等待1.4秒后css动画结束后再获取时间
    setTimeout(() => {
      setInterval(() => {
        const now = new Date()
        const s = now.getSeconds() // 秒
        const m = now.getMinutes() // 分
        const h = now.getHours() % 12 // 小时
        const d = now.getDate() // 日
        const y = now.getMonth() + 1 // 月
        const n = now.getFullYear() // 年

        secondBox.style.transform = `rotate(-${s * 6}deg)` // 秒
        branchBox.style.transform = `rotate(-${m * 6}deg)` // 分
        hourBox.style.transform = `rotate(-${h * 30}deg)` // 时
        NumberBox.style.transform = `rotate(-${d * 11.25}deg)` // 日
        monthBox.style.transform = `rotate(-${y * 30}deg)` // 月
        year.innerHTML = n // 年
      }, 1000)
    }, 1400)
  }
}
</script>

<style lang="less" scoped>
.box {
  width: 800px;
  height: 800px;
  position: absolute;
  left: -205px;
  top: -90px;
  z-index: 500;
}

.secondBox,
.branchBox,
.hourBox,
.NumberBox,
.monthBox {
  border-radius: 50%;
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  margin: auto;
}

.second,
.branch,
.hour,
.Number,
.month {
  color: #faf9f9;
  height: 20px;
  font-size: 15px;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  z-index: 10;
}

/* 年份 */
.year {
  width: 35px;
  height: 20px;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  color: #faf9f9;
}

/* 秒 */
.secondBox {
  width: 800px;
  height: 800px;
  animation-name: secondBox;
  animation-duration: 1.4s;
  animation-timing-function: linear;
}

@keyframes secondBox {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(300deg);
  }
}

.second {
  width: 800px;
}

/* 分钟 */
.branchBox {
  width: 650px;
  height: 650px;
  animation-name: branchBox;
  animation-duration: 1.4s;
  animation-timing-function: linear;
}

@keyframes branchBox {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-310deg);
  }
}

.branch {
  width: 650px;
}

/* 小时 */
.hourBox {
  width: 500px;
  height: 500px;
  animation-name: hourBox;
  animation-duration: 1.4s;
  animation-timing-function: linear;
}

@keyframes hourBox {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(310deg);
  }
}

.hour {
  width: 500px;
}

/* 日 盒子 */
.NumberBox {
  width: 350px;
  height: 350px;
  animation-name: NumberBox;
  animation-duration: 1.4s;
  animation-timing-function: linear;
}

@keyframes NumberBox {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-120deg);
  }
}

.Number {
  width: 350px;
}

/* 月份盒子 */
.monthBox {
  width: 200px;
  height: 200px;
  animation-name: monthBox;
  animation-duration: 1.4s;
  animation-timing-function: linear;
}

@keyframes monthBox {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(180deg);
  }
}

.month {
  width: 200px;
}

span {
  display: inline-block;
  width: 60px;
  height: 20px;
  text-align: center;
}

/* 旋转 */
.tra {
  transform: rotate(180deg);
}

/* 白色透明标注盒子 */
.show {
  width: 800px;
  height: 20px;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
}

.show .right {
  float: right;
  width: 420px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 9;
}
</style>
