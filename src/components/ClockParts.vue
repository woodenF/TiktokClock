<template>
  <ul :style="{transform: rotateAngle}" class="clock-parts">
    <li v-for="(item, index) in datas" :key="index"
        :style="{transform: `rotate(${(index + 1) * 360 / datas.length}deg) translateX(${offsetX}px)`}"
        :class="{hover: index === currentIndex}"
    >
      <div>{{item}}</div>
    </li>
  </ul>
</template>
<script lang='ts'>
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

@Component
export default class ClockParts extends Vue {
  @Prop()
  private datas!: string[];
  @Prop()
  private currentIndex!: number;
  @Prop()
  private offsetX!: number;

  private rotateAngle: string = '';
  private angle: number = 0;

  @Watch('currentIndex')
  private onCurrentIndexChange(currentIndex: number): void {
    this.angle = this.angle === 0
      ? ((currentIndex * 360 / this.datas.length) + (360 / this.datas.length))
      : this.angle += (360 / this.datas.length);
    this.rotateAngle = `rotate(-${this.angle}deg)`;
  }
}
</script>
