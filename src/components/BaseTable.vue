<template>
  <table class="base-table">
    <thead>
      <tr>
        <th v-for="(header, index) in headers" :key="index">
          <slot :name="header.value" :item="header">
            {{header.name}}
          </slot>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in items" :key="index">
        <td v-for="(header, index) in headers" :key="index">
          <slot :name="`item.${header.value}`" :item="item">
            {{ item[header.value] }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'BaseTable',
  props: {
    headers: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

.base-table {
  position: relative;
  width: 100%;
  border-collapse: collapse;

  thead {
    tr > th {
      position: sticky;
      top: 0;
      padding: 10px 20px;
      border-bottom: 2px solid var(--c-grey);
      font-size: 20px;
      font-weight: 600;
      background-color: var(--c-white);
      box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4);
      z-index: 3;

      &:last-child {
        width: 1%;
        padding-right: 0;
      }
    }
  }

  tbody {
    tr > td {
      padding: 12px 12px 12px 0;
      border-bottom: 1px solid var(--c-grey);

      &:last-child {
        width: 1%;
        padding-right: 0;
      }
    }
  }
}
</style>
