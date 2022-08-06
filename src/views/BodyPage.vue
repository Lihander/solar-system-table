<template>
  <div class="body">
    <h2>{{ item.name }}</h2>
    <p>Является ли планетой: {{ item.isPlanet ? 'Да' : 'Нет'}}</p>
    <p>Открыл: {{ item.discoveredBy }}</p>
    <p>Дата открытия: {{ item.discoveryDate }}</p>
  </div>
</template>

<script>
export default {
  name: 'BodyPage',
  computed: {
    item () {
      const id = this.$route.params.id
      if (id) {
        return this.$store.getters.getBodyById(id)
      }
      return {
        name: '',
        isPlanet: false,
        discoveredBy: '',
        discoveryDate: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
