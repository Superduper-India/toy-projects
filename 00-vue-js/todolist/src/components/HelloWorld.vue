<template>
  <div class="hello">
    <!--템플릿 구문: 속성 예시-->
    <button v-bind:disabled="isButtonDisabled">Button</button>
    <br/>
    <!--템플릿 구문: v-once-->
    <!--html코드로 출력된 이후에 어떤 후처리가 있더라도 처음에 출력한 값을 유지시킬 때 사용-->
    <h1 v-once>This will never change: {{ title }}</h1>
    <p>{{ sayHello() }}</p>
    <br/>
    <!--템플릿 구문: mustaches-->
    <!--html속성 안에서는 사용할 수 없다-->
    <h1>{{ msg }}</h1>
    <br/>
    <!--템플릿 구문: 인수-->
    <!--지시어의 콜론 뒤에 작성하는 값으로 인수를 전달할 수 있다 아래는 그 예시-->
    <a v-bind:href="url">Attribute Arguments</a>
    <a v-on:click="doSomething">Event Arguments</a>
    <!--아래는 축약버전-->
    <a :click="doSomething">Event Arguments</a>
    <br/>
    <!--템플릿 구문: 동적 인수-->
    <!--지시어의 콜론 뒤에 작성하는 값으로 인수를 전달할 수 있다 아래는 그 예시-->
    <!--string 아니면 null값만 올 수 있고 대문자, 공백이나 따옴표 없이 사용해야한다-->
    <a v-bind:[attributeName]="url">Attribute Dynamic Arguments</a>
    <a v-on:[eventName]="doSomething">Event Dynamic Arguments</a>
    <!--아래는 축약버전-->
    <a :[attributeName]="url">Attribute Dynamic Arguments</a>
    <a @[eventName]="doSomething">Event Dynamic Arguments</a>
    <br/>
    <!--템플릿 구문: Modifiers-->
    <!--아래와 같이 .prevent수정자는 v-on지시어가 트리거된 이벤트에서-->
    <!--event.preventDefault()를 호출하도록 지시한다-->
    <form v-on:submit.prevent="onSubmit">Prevent Submit!!!</form>
    <br/>
  
    <!-- <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      isButtonDisabled: null,
      title: '안녕 VueJS!',
      url: '#',
      attributeName: 'href',
      eventName: 'click'
    }
  },
  methods: {
    sayHello () {
      this.title = '안녕하십니까!'
      return this.title
    },
    doSomething () {
      console.log('버튼 클릭완')
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
