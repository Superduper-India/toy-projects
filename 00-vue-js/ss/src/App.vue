<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <ul>
      <li
        v-for="(item, index) in weekNames"
        :key="index + 'weeks'"
        :class="item.isSelected ? 'active' : ''"
        @click="handleClickWeek(index)">
        {{ item.name }}
      </li>
    </ul>
    <!-- <DynamicScroller :minItemSize="50" class="scroller" :items="items">
      <template #default="{ item, index }">
        <div class="item">{{ index }} - {{ item.name }}</div>
      </template>
    </DynamicScroller> -->
    <!-- <button class="btn" @click="handleClick" v-bind="buttonProps">Click me</button> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import { DynamicScroller } from 'vue-virtual-scroller';
// import { useButton } from '@headlessui/vue';
// import { defineComponent } from '@vue/composition-api';

// defineComponent({
//   setup() {
//     // useButton으로 버튼에 필요한 속성 가져오기
//     const buttonProps = useButton();

//     const handleClick = () => {
//       console.log('Button clicked!');
//     };

//     return { buttonProps, handleClick };
//   },
// });

class ChartAdapter {
  constructor(receivedApiData) {
    this.modifiedData = receivedApiData;
  }

  getWeekName(targetIdx = 0) {
    const weeks = ['월', '화', '수', '목', '금', '토', '일'];
    return this.modifiedData.map((item, idx) => {
      return {
        name: weeks[idx],
        value: item.avg_score,
        y: item.avg_score,
        isSelected: targetIdx === idx,
      };
    });
  }
  getTimeName(targetIdx = 0) {
    const times = ['6시 이전', '6시~11시', '11시~16시', '16시 이후'];
    return this.modifiedData.map((item, idx) => {
      return {
        name: times[idx],
        value: item.avg_score,
        y: item.avg_score,
        isSelected: targetIdx === idx,
      };
    });
  }
}

export default {
  name: 'App',
  components: {
    // DynamicScroller,
  },
  created() {
    this.fetchChartData();
  },
  data() {
    return {
      weekNames: [], // 요일별 가공된 데이터
      weekInstance: {}, // 요일별 인스턴스
      items: Array.from({ length: 1000 }).map((_, index) => ({
        name: `Item ${index}`,
        id: index,
      })),
    };
  },
  methods: {
    handleClickWeek(targetIdx) {
      this.weekNames = this.weekInstance.getWeekName(targetIdx);
    },
    fetchChartData() {
      const weekData = [
        {
          week: 'mon',
          avg_score: 44.12,
        },
        {
          week: 'thu',
          avg_score: 44.12,
        },
        {
          week: 'wed',
          avg_score: 44.12,
        },
        {
          week: 'thr',
          avg_score: 44.12,
        },
      ];
      this.weekInstance = new ChartAdapter(weekData);
      this.weekNames = this.weekInstance.getWeekName();
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

.active {
  background-color: #0079ff;
  color: #ffffff;
}
</style>
