<template>
  <div>
    <div class="big-screen-container gt-sm">
      <card-component class="q-mr-xs q-mb-sm" />
      <card-component class=" q-mr-xs q-mb-sm" />
      <card-component class=" q-mr-xs q-mb-sm" />
      <card-component class=" q-mb-sm" />
    </div>

    <div class="smaller-screen sm">
      <div class="big-screen-container">
        <card-component class="q-mr-xs q-mb-sm" />
        <card-component class=" q-mr-xs q-mb-sm" />
      </div>
      <div class="big-screen-container">
        <card-component class="q-mr-xs q-mb-sm" />
        <card-component class=" q-mr-xs q-mb-sm" />
      </div>
    </div>

    <div class="mobile-container xs">
      <card-component class="q-mr-xs q-mb-sm" />
      <card-component class=" q-mr-xs q-mb-sm" />
      <card-component class=" q-mr-xs q-mb-sm" />
      <card-component class=" q-mb-sm" />
    </div>
  </div>
</template>

<script>
import CardComponent from "../components/CardComponent.vue";

export default {
  name: "picks-component",
  components: {
    CardComponent,
  },
};
</script>

<style scoped>
.big-screen-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.mobile-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
