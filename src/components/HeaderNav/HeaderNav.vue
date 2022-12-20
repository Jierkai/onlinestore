<template>
  <div class="header-nav">
    <slot name="left"></slot>
    <slot name="mid"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: "HeaderNav"
}
</script>

<style lang="less" scoped>
.header-nav {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 30px;
  z-index: 10;
}

.header-nav :nth-child(2) {
  flex: 1;
  padding: 0;
}

.header-nav :first-child, :last-child {
  margin: 0 4px;
}
</style>