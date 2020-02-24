<template>
  <div class="outerWrapper">
    <div class="innerWrapper">
      <h1 class="welcomeText">
        Matura 2020
      </h1>
      <p class="shortDescription">
        Lorem ipsum dolor,
        sit amet consectetur adipisicing elit.
        Magnam nesciunt ex tenetur at ipsa
        eveniet! Error maiores deleniti.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
};
</script>

<style lang="scss" scoped>
.outerWrapper {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.innerWrapper {
  background: rgba(0,0,0,0.3);
  display: flex;
  padding: 25px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 35vh;
}
.welcomeText {
  padding: 0;
  margin: 0;
  font-family: "Teko", serif;
  font-size: 80px;
}
.shortDescription {
  padding: 0;
  margin: 0;
  font-size: 16px;
  max-width: 60vh;
}
</style>
