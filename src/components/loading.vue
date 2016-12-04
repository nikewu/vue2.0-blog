<template>
    <div v-show="load"  class="core-loading">
      <div class="loading-bar-1"></div>
      <div class="loading-bar-2"></div>
      <div class="loading-bar-3"></div>
      <div class="loading-bar-4"></div>
    </div>
</template>

<script>
export default {
  props: ['load']
}
</script>
<style scoped>
.core-loading {
  height: 100%;
  right: 0px;
  left: 280px;
  position: absolute;
  top: 0;
  z-index: 1;
  background-color: #fff;
}

.loading-bar-1 {
  display: inline-block;
  width: 4px;
  position: absolute;
  top: 50%;
  height: 18px;
  border-radius: 4px;
  background-color: rgba(255, 0, 0, 1);
  animation: loading 1s ease-in-out infinite;
  left: 48%;
  animation-delay: 0s; }

.loading-bar-2 {
  display: inline-block;
  width: 4px;
  position: absolute;
  top: 50%;
  height: 18px;
  border-radius: 4px;
  background-color: rgba(255, 230, 0, 1);
  animation: loading 1s ease-in-out infinite;
  left: 48.75%;
  animation-delay: 0.09s; }

.loading-bar-3 {
  display: inline-block;
  width: 4px;
  position: absolute;
  top: 50%;
  height: 18px;
  border-radius: 4px;
  background-color: rgba(0, 209, 255, 1);
  animation: loading 1s ease-in-out infinite;
  left: 49.5%;
  animation-delay: 0.18s; }

.loading-bar-4 {
  display: inline-block;
  width: 4px;
  position: absolute;
  top: 50%;
  height: 18px;
  border-radius: 4px;
  background-color: rgba(255, 0, 161, 1);
  animation: loading 1s ease-in-out infinite;
  left: 50.25%;
  animation-delay: 0.27s; }

@keyframes loading {
  0% {
    transform: scale(1); }
  20% {
    transform: scale(1, 2.2); }
  40% {
    transform: scale(1); } }

</style>
