<template>
  <input type="number" v-model="count">
  <button type="button" @click="add">+</button>
  <button type="button" @click="minus">-</button>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import { ref } from 'vue'

let count = ref(0);
function add() {
  count.value++;
}
function minus() {
  count.value--;
}
</script>
