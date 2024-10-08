<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <DynamicScroller :minItemSize="50" class="scroller" :items="items">
      <template #default="{ item, index }">
        <div class="item">{{ index }} - {{ item.name }}</div>
      </template>
    </DynamicScroller>
    <button class="btn" @click="handleClick" v-bind="buttonProps">Click me</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import { DynamicScroller } from 'vue-virtual-scroller';
import { useButton } from '@headlessui/vue';
import { defineComponent } from '@vue/composition-api';

defineComponent({
  setup() {
    // useButton으로 버튼에 필요한 속성 가져오기
    const buttonProps = useButton();

    const handleClick = () => {
      console.log('Button clicked!');
    };

    return { buttonProps, handleClick };
  },
});

class ChartAdapter {
  constructor(receivedApiData) {
    this.aa = receivedApiData.first_name;
    this.bb = receivedApiData.last_name;
    this.cc = receivedApiData.age;
  }

  getFullName() {
    return `${this.aa} ${this.bb}`;
  }
}

export default {
  name: 'App',
  components: {
    HelloWorld,
    DynamicScroller,
  },
  created() {
    this.fetchChartData();
  },
  data() {
    return {
      chartData: {},
      items: Array.from({ length: 1000 }).map((_, index) => ({
        name: `Item ${index}`,
        id: index,
      })),
    };
  },
  methods: {
    fetchChartData() {
      const apiData = {
        first_name: 'John',
        last_name: 'Doe',
        age: 30,
      };
      this.chartData = new ChartAdapter(apiData);
      console.log('ddddd :: ', this.chartData);
      console.log('ddddd :: ', this.chartData.getFullName());
    },
  },
};
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
.scroller {
  height: 500px;
  overflow-y: auto;
}
.item {
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.btn {
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #2980b9;
}
</style>
