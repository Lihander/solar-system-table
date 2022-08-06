<template>
  <transition name="modal-transition">
    <div class="base-modal" @mousedown="$emit('close')">
      <div class="base-modal__inner" @mousedown.stop="">
        <div class="base-modal__close-btn icon-close" @click="$emit('close')" />
        <div class="base-modal__body">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'BaseModal'
}
</script>

<style lang="scss" scoped>

.base-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all .2s ease;
  background-color: var(--c-bg-modal);
  z-index: 999;

  &__inner {
    position: relative;
    z-index: 999;
  }

  &__close-btn {
    position: absolute;
    top: 0;
    right: -20px;
    width: 12px;
    height: 12px;
    background-color: var(--c-white);
    cursor: pointer;
  }

  &__body {
    background-color: var(--c-white);
    border-radius: 15px;
    transition: $transition-default;
  }

  &__padding {
    padding: 70px 60px;
  }
}
</style>
