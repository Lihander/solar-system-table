<template>
  <base-modal
    v-if="value"
    @close="$emit('input', false)"
  >
    <div v-if="item" class="remove-modal">
      <h2 class="remove-modal__body">Удалить объект {{item.name}}?</h2>
      <div class="remove-modal__footer">
        <button class="base-btn base-btn--gray remove-modal__footer_btn" @click="$emit('input', false)">Отмена</button>
        <button class="base-btn base-btn--red remove-modal__footer_btn" @click="remove">Удалить</button>
      </div>
    </div>
  </base-modal>
</template>

<script>
import BaseModal from '@/components/BaseModal'
import { mapMutations } from 'vuex'
export default {
  name: 'RemoveModal',
  components: { BaseModal },
  props: {
    value: {
      type: Boolean,
      required: true
    },
    item: {
      type: String,
      default: null
    }
  },
  methods: {
    ...mapMutations(['removeBody']),
    remove () {
      this.removeBody(this.item.id)
      this.$emit('input', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.remove-modal {
  display: grid;
  grid-template-rows: 1fr min-content;
  min-height: 200px;
  width: 300px;
  padding: 20px 25px;

  &__body {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &_btn {
      height: 30px;
    }
  }
}
</style>
