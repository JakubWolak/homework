<template>
  <div class="wrapper">
    <div class="innerWrapper">
      <h1 class="timer">{{ text }}</h1>
      <Timer :trans="trans" :start="starttime" :end="endtime"></Timer>
      <div id="container">
        <button class="learn-more">
          <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text" @click="buttonAlert">Zatrzymaj czas</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Timer from "@/components/Timer/Timer.vue";

const starttime = new Date("May 4, 2020 09:00:00").getTime();
const endtime = new Date("May 21, 2020 17:00:00").getTime();
const trans = {
  day: "Dni",
  hours: "Godzin",
  minutes: "Minut",
  seconds: "Sekund",
  expired: "Już po wszytkiemu :P",
  running: "Za późno na naukę, ośle",
  upcoming: "Ucz się póki możesz",
  status: {
    expired: "Matury zakończone",
    running: "Pisz, pisz",
    upcoming: "Już wkrótce początek"
  }
};

export default {
  name: "TimerWrapper",
  components: {
    Timer
  },
  data: () => {
    return {
      text: "Czas do rozpoczęcia matur",
      buttonText: "Zatrzymaj czas",
      alertText: "Ucz się ośle, nie kombinuj!",
      starttime,
      endtime,
      trans
    };
  },
  methods: {
    buttonAlert() {
      this.$alert(this.alertText).then(() => console.log("Closed"));
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  justify-content: center;

  h1 {
    font-size: 40px;
    letter-spacing: 2px;
    color: #2c3e50;
  }
}
.innerWrapper {
  width: 100%;
  padding-bottom: 40px;
  background-color: rgba(0, 0, 0, 0.3);
}

$bg: #f3f8fa;
$white: #fff;
$black: #282936;

@mixin transition(
  $property: all,
  $duration: 0.45s,
  $ease: cubic-bezier(0.65, 0, 0.076, 1)
) {
  transition: $property $duration $ease;
}

* {
  box-sizing: border-box;
  &::before,
  &::after {
    box-sizing: border-box;
  }
}
#container {
  padding-top: 30px;
}
button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  &.learn-more {
    width: 16rem;
    height: auto;
    .circle {
      @include transition(all, 0.45s, cubic-bezier(0.65, 0, 0.076, 1));
      position: relative;
      display: block;
      margin: 0;
      width: 3rem;
      height: 3rem;
      background: $black;
      border-radius: 1.625rem;
      .icon {
        @include transition(all, 0.45s, cubic-bezier(0.65, 0, 0.076, 1));
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        background: $white;
        &.arrow {
          @include transition(all, 0.45s, cubic-bezier(0.65, 0, 0.076, 1));
          left: 0.625rem;
          width: 1.125rem;
          height: 0.125rem;
          background: none;
          &::before {
            position: absolute;
            content: "";
            top: -0.25rem;
            right: 0.0625rem;
            width: 0.625rem;
            height: 0.625rem;
            border-top: 0.125rem solid #fff;
            border-right: 0.125rem solid #fff;
            transform: rotate(45deg);
          }
        }
      }
    }
    .button-text {
      @include transition(all, 0.45s, cubic-bezier(0.65, 0, 0.076, 1));
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 0.75rem 0;
      margin: 0 0 0 1.85rem;
      color: $black;
      font-weight: 700;
      line-height: 1.6;
      text-align: center;
      text-transform: uppercase;
    }
  }
  &:hover {
    .circle {
      width: 100%;
      .icon {
        &.arrow {
          background: $white;
          transform: translate(1rem, 0);
        }
      }
    }
    .button-text {
      color: $white;
    }
  }
}

@supports (display: grid) {
  body {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.625rem;
    grid-template-areas: ". main main ." ". main main .";
  }

  #container {
    grid-area: main;
    align-self: center;
    justify-self: center;
  }
}
</style>
