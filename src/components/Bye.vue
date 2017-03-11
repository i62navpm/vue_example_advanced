<template lang="jade">
  .bye
    h1 {{ msg }}
    h2 Essential Links
    ul
      li
        a(href='https://vuejs.org', target='_blank') Core Docs
      li
        .count Contador: {{count}}
      li
        child-component(:count="count", @increment="incrementTotal", @decrement="decrementTotal")
        
</template>

<script>
import ChildComponent from './child/Child'

export default {
  name: 'bye',
  components: { ChildComponent },
  data () {
    return {
      msg: 'Good bye from Your Vue.js App',
      count: 0
    }
  },
  methods: {
    incrementTotal: function () {
      this.count += 1
    },
    decrementTotal: function () {
      this.count -= 1
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
