<template lang="jade">
  .child
    h1 This is a child component
    h2 {{msg}}
    h3 {{getUser.name}}
    h3 {{getUser.age}}
    button(@click="increment") Increment
    button(@click="decrement") Decrement
    button(@click="setUser({name: 'testName'})") Set User
    button(@click="setUser({age: 24})") Set Age
    
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    count: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      msg: 'This is the child component'
    }
  },
  computed: {
    ...mapGetters('auth', [
      'getUser'
    ])
  },
  methods: {
    increment: function () {
      this.$emit('increment')
    },
    decrement: function () {
      this.$emit('decrement')
    },
    ...mapActions('auth', [
      'setUser'
    ])
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    color: red;
  }
  h2 {
    color: blue;
  }
</style>
