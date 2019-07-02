<template>
  <div class="home">
    <clock-parts :datas="secondes" :currentIndex="seconde" :offsetX="275"></clock-parts>
    <clock-parts :datas="minutes" :currentIndex="minute" :offsetX="240"></clock-parts>
    <clock-parts :datas="hours" :currentIndex="hour" :offsetX="200"></clock-parts>
    <clock-parts :datas="apms" :currentIndex="apm" :offsetX="165"></clock-parts>
    <clock-parts :datas="weeks" :currentIndex="week" :offsetX="130"></clock-parts>
    <clock-parts :datas="days" :currentIndex="day" :offsetX="90"></clock-parts>
    <clock-parts :datas="months" :currentIndex="month" :offsetX="50"></clock-parts>
    <clock-parts :datas="[years]" :currentIndex="0" :offsetX="0"></clock-parts>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ClockParts from '../components/ClockParts.vue';

@Component({
  components: {
    ClockParts,
  },
})
export default class Home extends Vue {
  private years: number = 0;
  private weeks: string[] = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
  private week: number = 0;
  private secondes: string[] = Array.from({ length: 60 }, (item, index) => `${index.toString().padStart(2, '0')}秒`);
  private seconde: number = 0;
  private minutes: string[] = Array.from({ length: 60 }, (item, index) => `${index.toString().padStart(2, '0')}分`);
  private minute: number = 0;
  private hours: string[] = Array.from({ length: 12 }, (item, index) => `${(index + 1).toString().padStart(2, '0')}时`);
  private hour: number = 0;
  private apms: string[] = ['上午', '下午'];
  private apm: number = 0;
  private days: string[] = Array.from({ length: 30 }, (item, index) => `${(index + 1).toString().padStart(2, '0')}日`);
  private day: number = 0;
  private months: string[] = Array.from({ length: 12 }, (item, index) => `${(index + 1).toString().padStart(2, '0')}月`);
  private month: number = 0;
  private created() {
    setInterval(() => {
      const date = new Date();
      this.years = date.getFullYear();
      this.seconde = date.getSeconds();
      this.week = date.getDay() - 1;
      this.minute = date.getMinutes();
      this.hour = date.getHours() % 12 - 1;
      this.apm = date.getHours() > 12 ? 1 : 0;
      this.day = date.getDate() - 1;
      this.month = date.getMonth();
    }, 1000);
  }
}
</script>
<style lang="scss">
.home{
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #ccc;
  ul{
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    height: 50px;
    width: 50px;
    transform-origin: center;
    transition: all .5s;
    li{
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      color: #fff;
      font-size: 12px;
      width: 50px;
      height: 50px;
    }
    .hover{
      text-shadow: rgb(255, 255, 255) 0px 0px 5px,
                    rgb(255, 255, 255) 0px 0px 10px, rgb(255, 0, 222) 0px 0px 20px,
                    rgb(255, 0, 222) 0px 0px 20px, rgb(255, 0, 222) 0px 0px 40px,
                    rgb(255, 0, 222) 0px 0px 20px, rgb(255, 0, 222) 0px 0px 50px,
    }
  }
}
</style>

