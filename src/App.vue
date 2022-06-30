<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <p>state</p>
  <p>state的值:{{stateValue}}</p>
  <span>getters</span><button @click="$store.state.name='Hao'">点击getters修改值</button>
  <p>getters的值:{{ changeValue }}</p>
  <button @click="addValue">mutations同步修改数据</button>
  <button @click="aysncAddValue">actions同步修改数据</button>
  <div>
    <v-chart style='height:400px;' :option='option' />
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default ({
  name: 'App',
  setup() {
    let store = useStore()
    function addValue() {
      store.commit('addName','Hao')
    }
    function aysncAddValue() {
      store.dispatch('aysncAddValue', 'Hao')
    }
    const option =  {
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ['苹果', '核桃', '香蕉']
      },
      yAxis: {},
      series: [
        { name: '销量', type: 'bar', data: [100, 200, 300] }
      ]
    }
    return {
      stateValue: computed(() => {
        return store.state.name
      }),
      changeValue: computed(() => {
        return store.getters.changeName
      }),
      addValue,
      aysncAddValue,
      option
    }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
