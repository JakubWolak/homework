<template>
  <div>
    <div class="day">
      <span class="number">{{ days }}</span>
      <div class="format">{{ trans.day }}</div>
    </div>
    <div class="hour">
      <span class="number">{{ hours }}</span>
      <div class="format">{{ trans.hours }}</div>
    </div>
    <div class="min">
      <span class="number">{{ minutes }}</span>
      <div class="format">{{ trans.minutes }}</div>
    </div>
    <div class="sec">
      <span class="number">{{ seconds }}</span>
      <div class="format">{{ trans.seconds }}</div>
    </div>
    <span class="message">{{ message }}</span>
    <div class="status-tag" :class="statusType">{{ statusText }}</div>
  </div>
</template>

<script>
export default {
  name: "Timer",
  props: ["start", "end", "trans"],
  data: () => {
    return {
      timer: "",
      interval: "",
      days: "",
      minutes: "",
      hours: "",
      seconds: "",
      message: "",
      statusType: "",
      statusText: ""
    };
  },
  mounted() {
    this.timerCount(this.start, this.end);
    this.interval = setInterval(() => {
      this.timerCount(this.start, this.end);
    }, 1000);
  },
  methods: {
    timerCount: function(start, end) {
      const now = new Date().getTime();

      const distance = start - now;
      const passTime = end - now;

      if (distance < 0 && passTime < 0) {
        this.message = this.trans.expired;
        this.statusType = "expired";
        this.statusText = this.trans.status.expired;
        clearInterval(this.interval);
      } else if (distance < 0 && passTime > 0) {
        this.calcTime(passTime);
        this.message = this.trans.running;
        this.statusType = "running";
        this.statusText = this.trans.status.running;
      } else if (distance > 0 && passTime > 0) {
        this.calcTime(distance);
        this.message = this.trans.upcoming;
        this.statusType = "upcoming";
        this.statusText = this.trans.status.upcoming;
      }
    },
    calcTime: function(dist) {
      this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.day,
.hour,
.min,
.sec {
  color: #fff;
  font-size: 30px;
  display: inline-block;
  font-weight: 500;
  text-align: center;
  margin: 0 5px;

  .format {
    font-weight: 300;
    font-size: 14px;
    padding-top: 10px;
    //@include margin-start(5);
    //display: inline-block;
    opacity: 0.8;
    width: 60px;
  }
}
.number {
  background: rgba(51, 51, 51, 0.55);
  padding: 0 5px;
  border-radius: 5px;
  display: inline-block;
  width: 60px;
  text-align: center;
}
.message {
  height: 60px;
  font-size: 25px;
  font-weight: 800;
  margin-top: 5px;
  margin-left: 20px;
  text-align: center;
  vertical-align: 100%;
}
.status-tag {
  width: 270px;
  margin: 10px auto;
  padding: 8px 0;
  font-weight: 600;
  color: #000;
  text-align: center;
  border-radius: 4px;

  &.upcoming {
    background-color: rgba(20, 220, 20, 0.6);
  }
  &.running {
    background-color: gold;
  }
  &.expired {
    background-color: silver;
  }
}
</style>
