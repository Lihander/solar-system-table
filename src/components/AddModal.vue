<template>
  <base-modal
    v-if="value"
    @close="$emit('input', false)"
  >
    <div class="add-modal">
      <div class="add-modal__body">
        <h2>Добавить объект</h2>
        <div class="add-modal__body_row">
          <label for="name-input">Имя</label>
          <input v-model="item.name" type="text" id="name-input">
        </div>
        <div class="add-modal__body_row">
          <label for="checkbox">Является ли планетой</label>
          <input type="checkbox" id="checkbox" v-model="item.isPlanet">
        </div>
        <div class="add-modal__body_row">
          <label for="discoveredBy">Кем открыт</label>
          <input v-model="item.discoveredBy" type="text" id="discoveredBy">
        </div>
        <div class="add-modal__body_row">
          <label for="discoveryDate">Дата</label>
          <input v-model="item.discoveryDate" type="text" id="discoveryDate">
        </div>
      </div>
      <div class="add-modal__footer">
        <button class="base-btn base-btn--gray add-modal__footer_btn" @click="$emit('input', false)">Отмена</button>
        <button class="base-btn base-btn--red add-modal__footer_btn" @click="add">Добавить</button>
      </div>
    </div>
  </base-modal>
</template>

<script>
import BaseModal from '@/components/BaseModal'
import { mapMutations } from 'vuex'
export default {
  name: 'AddModal',
  components: { BaseModal },
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      item: {
        name: '',
        isPlanet: false,
        discoveredBy: '',
        discoveryDate: ''
      }
    }
  },
  methods: {
    ...mapMutations(['addBody']),
    add () {
      this.addBody(this.item)
      this.$emit('input', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.add-modal {
  display: grid;
  grid-template-rows: 1fr min-content;
  min-height: 200px;
  width: 400px;
  padding: 20px 25px;

  &__body {
    &_row {
      display: grid;
      grid-template-columns: 200px 1fr;
      margin-bottom: 10px;

      label {
        margin-right: 10px;
        text-align: right;
      }
    }
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
