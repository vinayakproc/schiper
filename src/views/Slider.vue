/*eslint-disable*/

<template>
  <div>
    <b-container>
    <Slider v-model="value" :format="format"/>
    </b-container>
    <pre>

  </pre>
  <b-card-group deck>
    <b-card title="Total Physicians" style="color:red">
      <b-card-text>
        289
      </b-card-text>
    </b-card>

    <b-card title="Total Patients" style="color:red">
      <b-card-text>
        3,675
      </b-card-text>
    </b-card>

    <b-card title="IR Signal" style="color:red">
      <b-card-text>
        1,393
      </b-card-text>
    </b-card>
  </b-card-group>
  <pre>

  </pre>
  <div><Cats/></div>
  <div><ejs-maps></ejs-maps></div>
</div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import Vue from 'vue'
import Slider from '@vueform/slider/dist/slider.vue2.js'
import Cats from './Cats.vue'
import { MapsPlugin } from '@syncfusion/ej2-vue-maps'
Vue.use(MapsPlugin)

export default {
  components: {
    Slider,
    Cats,
    MapsPlugin
  },
  data () {
    return {
      value: [2, 8],
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
        return array1[value]
      }
    }
  }
}
</script>

<style src='@vueform/slider/themes/default.css'></style>
