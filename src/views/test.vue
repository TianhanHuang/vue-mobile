<template>
  <div class='wrap mixin-class'>
      <div>{{number}}</div>
  </div>
</template>

<script>
import { getAll } from '@/api/getData'
import { mapState } from 'vuex'
export default {
  data() { 
    return {
      content: '本人保证以下入职所填写的教育培训经历、工作经历等各项料真实有效，没有填写虚假信息或隐瞒事实真相；同时保证与之前曾任职单位无存在任何遗留问题，更无任何违法乱纪行为，如有捷饰任何不利于申请此职位的资料，自愿接受公司的解雇处理，同时承担因隐瞒事实而带来的一切后果。'
    }
  },
  computed: {
    ...mapState({
      number: state => state.common.number,
    })
    
  },
  mounted() {
  },
  methods: {
    change() {
      this.$store.commit('TEST', 1)
    }
  }
 }
</script>

<style lang='less' scoped>
</style>
