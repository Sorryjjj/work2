<template>
  <div class="view-wrapper">
    <json-viewer theme="my-awesome-json-theme" :value="jsonData" copyable sort />
  </div>
</template>

<script setup>

defineProps({
    jsonData: JSON
})

</script>

<style lang="less" scoped>

.view-wrapper {
  width: 100%;
}

::v-deep.my-awesome-json-theme {
  background: #000;
  white-space: nowrap;
  color: #fff;
  font-size: 14px;
  font-family: Consolas, Menlo, Courier, monospace;

  .jv-ellipsis {
    color: #999;
    background-color: #eee;
    display: inline-block;
    line-height: 0.9;
    font-size: 0.9em;
    padding: 0px 4px 2px 4px;
    border-radius: 3px;
    vertical-align: 2px;
    cursor: pointer;
    user-select: none;
  }
  .jv-button { color: #49b3ff }
  .jv-key { color: #fff }
  .jv-item {
    &.jv-array { color: #fff }
    &.jv-boolean { color: #fc1e70 }
    &.jv-function { color: #067bca }
    &.jv-number { color: #fc1e70 }
    &.jv-number-float { color: #fc1e70 }
    &.jv-number-integer { color: #fc1e70 }
    &.jv-object { color: #fff }
    &.jv-undefined { color: #e08331 }
    &.jv-string {
      color: #42b983;
      word-break: break-word;
      white-space: normal;
    }
  }
  .jv-code {
    .jv-toggle {
      &:before {
        padding: 0px 2px;
        border-radius: 2px;
      }
      &:hover {
        &:before {
          background: #eee;
        }
      }
    }
  }
  .jv-more:hover:after {
    background-color: #000;
  }
}
</style>