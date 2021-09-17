/*eslint-disable*/

<template>
  <div>
    <b-container style="border-style:solid">
    <b-container fluid>
      <pre>
      </pre>
    <Slider v-model="value" :format="format" :max="max" />
    </b-container>
    <pre>
    </pre>
  <b-container fluid>
    <b-row>
      <b-col>
  <div><Dropdown /></div>
      </b-col>
      <b-col>
  <div><Cards/></div>
      </b-col>
    </b-row>
    <b-row>
  <b-col>
  <div><GoogleMap /></div>
      </b-col>
      <b-col>
        <pre>
        </pre>
  <div><Cats/></div>
      </b-col>
    </b-row>
  </b-container>
    </b-container>
</div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import Vue from 'vue'
import Slider from '@vueform/slider/dist/slider.vue2.js'
import Cats from './Cats.vue'
import { MapsPlugin } from '@syncfusion/ej2-vue-maps'
import GoogleMap from './GoogleMap.vue'
import Dropdown from './Dropdown.vue'
import Cards from './Card.vue'
Vue.use(MapsPlugin)

export default {
  components: {
    Slider,
    Cats,
    MapsPlugin,
    GoogleMap,
    Dropdown,
    Cards
  },
  data () {
    return {
      value: [0, 8],
      max: 51,
      format: function (value) {
        var array1 = []
        array1.push('01-01-2021')
        array1.push('01-02-2021')
        array1.push('01-03-2021')
        array1.push('01-04-2021')
        array1.push('01-05-2021')
        array1.push('01-06-2021')
        array1.push('01-07-2021')
        array1.push('01-08-2021')
        array1.push('01-09-2021')
        array1.push('01-01-2021')
        array1.push('01-02-2021')
        array1.push('01-03-2021')
        array1.push('01-04-2021')
        array1.push('01-05-2021')
        array1.push('01-06-2021')
        array1.push('01-07-2021')
        array1.push('01-08-2021')
        array1.push('01-09-2021')
        array1.push('01-01-2021')
        array1.push('01-02-2021')
        array1.push('01-03-2021')
        array1.push('01-04-2021')
        array1.push('01-05-2021')
        array1.push('01-06-2021')
        array1.push('01-07-2021')
        array1.push('01-08-2021')
        array1.push('01-09-2021')
        return array1[value]
      }
    }
  }
}
</script>

<style src='@vueform/slider/themes/default.css'></style>
