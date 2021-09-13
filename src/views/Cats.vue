<template>
  <b-table striped hover :items='cats' :fields="fields"></b-table>
</template>

<script>
import cats from '@/data/cats'
export default {
  data () {
    return {
      fields: [
        {
          key: 'Physicians',
          sortable: true
        },
        {
          key: 'Total Patients',
          sortable: true
        },
        {
          key: 'IR Signal',
          sortable: true
        }
      ],
      cats
    }
  }
}
</script>
