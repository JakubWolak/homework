<template>
  <div class="wrapper">
    <div class="innerWrapper">
      <h1 class="timer">Czas do rozpoczęcia matur</h1>
      <Timer 
          starttime="May 4, 2020 09:00:00" 
          endtime="May 21, 2020 17:00:00" 
          trans='{
          "day":"Dni",
          "hours":"Godzin",
          "minutes":"Minut",
          "seconds":"Sekund",
          "expired":"Już po wszytkiemu :P",
          "running":"Za późno na naukę, ośle",
          "upcoming":"Ucz się póki możesz",
          "status": {
              "expired":"Matury zakończone",
              "running":"Pisz, pisz",
              "upcoming":"Już wkrótce początek"
            }}'
        ></Timer>
    </div>
  </div>
</template>

<script>
import Timer from "@/components/Timer/Timer.vue";

export default {
  name: "TimerWrapper",
  components: {
    Timer
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  justify-content: center;

  h1 {
    font-size: 26px;
    color: #fff;
  }
}
.innerWrapper {
  max-width: 80vh;
  padding: 0 20px;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
