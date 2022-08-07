<template>
  <div class="home">
    <h1>Список небесных тел</h1>
    <div class="home__header">
      <input v-model="search" placeholder="Поиск..." class="base-input home__header_search">
      <button
        class="base-btn home__header_btn"
        @click="addModalShow = true"
      >
        <span class="icon-plus icon-18"/>
        <span>Добавить планету</span>
      </button>
    </div>
    <div class="home__table">
      <base-table
        :headers="headers"
        :items="bodies"
      >
        <template v-slot:item.preview="{item}">
          <div class="icon-eye icon-24 preview__btn" @click="preview(item)" />
        </template>
        <template v-slot:item.isPlanet="{item}">
          {{ item.isPlanet ? 'Да' : 'Нет'}}
        </template>
        <template v-slot:item.actions="{item}">
          <div class="actions">
            <div class="icon-trash icon-24 actions__btn" @click="remove(item)" />
          </div>
        </template>
      </base-table>
    </div>
    <div class="home__pagination">
      <select v-model="pageSize">
        <option v-for="(size, index) in pageSizes" :key="index">{{ size }}</option>
      </select>
      <button :disabled="pageNum === 1" @click="pageNum--"> Предыдущая </button>
      <span>{{ pageNum }}</span>
      <button :disabled="bodies.length < pageSize" @click="pageNum++"> Следующая </button>
    </div>

    <remove-modal v-model="removeModalShow" :item="currentItem" />
    <add-modal v-model="addModalShow" />
  </div>
</template>

<script>
import BaseTable from '@/components/BaseTable'
import { mapState, mapActions } from 'vuex'
import RemoveModal from '@/components/RemoveModal'
import AddModal from '@/components/AddModal'

export default {
  name: 'Home',
  components: { AddModal, RemoveModal, BaseTable },
  data () {
    return {
      headers: [
        { name: '', value: 'preview' },
        { name: 'Имя объекта', value: 'name' },
        { name: 'Является ли объект планетой', value: 'isPlanet' },
        { name: 'Кем открыт', value: 'discoveredBy' },
        { name: 'Когда открыт', value: 'discoveryDate' },
        { name: '', value: 'actions' }
      ],
      search: '',
      pageNum: 1,
      pageSize: 20,
      currentItem: null,
      addModalShow: false,
      removeModalShow: false,
      pageSizes: [
        10, 20, 50, 100
      ]
    }
  },
  async mounted () {
    await this.getBodies(this.options)
  },
  computed: {
    ...mapState(['bodies']),
    options () {
      return {
        page: `${this.pageNum},${this.pageSize}`,
        filter: this.search
      }
    }
  },
  methods: {
    ...mapActions(['getBodies']),
    remove (item) {
      this.currentItem = item
      this.removeModalShow = true
    },
    preview (item) {
      this.$router.push(`/body/${item.id}`)
    }
  },
  watch: {
    options: {
      handler (options) {
        this.getBodies(options)
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  height: 100vh;

  &__header {
    display: flex;
    align-content: center;
    justify-content: space-between;
    margin-bottom: 20px;

    &_search {
      width: 300px;
    }
  }

  &__table {
    max-height: 100%;
    overflow: auto;
  }

  &__pagination {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 60px;

    span {
      margin: 0 20px;
    }

    select {
      margin-right: 30px;
    }
  }
}

.preview {
  &__btn {
    cursor: pointer;
    transition: $transition-default;

    &:hover {
      transform: scale(1.1);
    }
  }
}

.actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;

  &__btn {
    cursor: pointer;
    background-color: var(--c-red);
    transition: $transition-default;

    &:hover {
      transform: scale(1.1);
    }
  }
}

.icon-plus {
  margin-right: 10px;
  background-color: var(--c-white);
}
</style>
