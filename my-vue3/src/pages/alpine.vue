<template>
<div x-data="{ open: false }">
  <button x-on:click="open = !open">Toggle</button>
  <div x-show="open">
    Content
  </div>
</div>
</template>
<style>
.active {
  background-color: red;
}
</style>