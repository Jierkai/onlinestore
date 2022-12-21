<template>
  <div :style="{'background': bgColor}" class="header-nav">
    <slot name="left">
      <span></span>
    </slot>
    <slot name="mid"></slot>
    <slot name="right">
      <span></span>
    </slot>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
  props: {
    bgColor: {
      type: String,
      default: 'rgba(255,255,255,0)'
    }
  }
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

</style>