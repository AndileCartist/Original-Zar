<template>
  <div class="background">
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  name: "shipping-page",
};
</script>

<style lang="css" scoped>
.background {
  width: 100%;
  background-color: #e6e6e6;
  opacity: 0.4;
  background-image: radial-gradient(#f5f5f5 1px, transparent 1px),
    radial-gradient(#7e7e80 1px, #e6e6e6 1px);
  background-size: 40px 40px;
  background-position: 0 0, 20px 20px;
}
.content {
  margin: 0 40px;
  color: black;
}
h1 {
  font-size: 3rem;
  font-weight: 600;
  line-height: 6rem;
  letter-spacing: -0.01562em;
  margin-top: 0;
  margin-top: 20;
  text-align: center;
  line-height: 58px;
}
h2 {
  font-size: 2.75rem;
  margin: 10px 0;
}
h3 {
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 3.125rem;
  letter-spacing: normal;
  margin-top: 5px;
  margin-bottom: 15px;
}
p {
  word-spacing: 1px;
  font-size: 17px;
}
</style>
