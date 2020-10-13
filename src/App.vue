<template>
    <div id='root'>
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <h1>数量：{{number}}</h1>
        <h1>Vuex: {{count}}</h1>
        <h1>doubleCount: {{doubleCount}}</h1>
        <button @click="add">增加</button>
        <h2>{{state.name}} -- {{state.age}} -- {{state.enjoy}}</h2>
        <div id='nav'>
            <router-link to='/'> Home</router-link>
            <router-link to='/contact'>Contact </router-link>
        </div>
        <router-view />
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import { ref, computed, reactive, watch } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
      // 声明count变量， 初始值为0
      const number = ref(12)

      // 获取vuex
      const store = useStore()
      const count = computed(() => store.state.count)

      // 引入reactive，同时定义多个变量
      const state = reactive({
          name: 'VUE3',
          age: 18,
          enjoy: 'play basketball'
      })
      
      // 定义add方法
      const add = () => {
          store.dispatch('add') // vuex 派发add方法
          state.age++
          number.value++
      }

      // 定义watch，需要手动引入watch方法
      watch(
          () => store.state.count,
          (val, oldVal) => {console.log(`new count: ${val}, old count: ${oldVal}`)}
      )

      // 定义computed，同样需要手动引入 computed 方法
      const doubleCount = computed(() => store.state.count * 2)
      return {
          number,
          count,
          add,
          doubleCount,
          state
      }
  }
}
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
