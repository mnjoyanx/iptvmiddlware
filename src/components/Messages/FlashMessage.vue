<template>
  <div>
    <a-button @click="success">
      Success
    </a-button>
    <a-button @click="error">
      Error
    </a-button>
    <a-button @click="warning">
      Warning
    </a-button>
  </div>
</template>

<script>
export default {
  name: "FlashMessage",
};
</script>

<style lang="scss" scoped></style>
