<template>
  <div class='wrap mixin-class'>
    <div>{{number}}</div>
    <div>{{number2}}</div>
    <div>{{number3}}</div>
    <div>{{number66}}</div>
    <div @click='change'>按钮</div>
    <div @click='jump'>跳转</div>
    <div class='box' v-for='item in 10'> 
      123
    </div>
    <div class='box'> 
      123
    </div>
    <div class='box'> 
      123
    </div>
    <div class='box'> 
      123
    </div>
    <div class='box'> 
      123
    </div>
    <div class='box'> 
      123
    </div>
    <div class='box'> 
      123
    </div>
    <div class='box'> 
      123
    </div>
    <div class='box'> 
      123
    </div>
    <div class='box'> 
      123
    </div>
    <div class='box'> 
      123
    </div>
    <div class='box'> 
      123
    </div>
  </div>
</template>

<script>
import { getAll } from '@/api/getData'
import { mapState, mapGetters } from 'vuex'
export default {
  data() { 
    return {
      content: '本人保证以下入职所填写的教育培训经历、工作经历等各项料真实有效，没有填写虚假信息或隐瞒事实真相；同时保证与之前曾任职单位无存在任何遗留问题，更无任何违法乱纪行为，如有捷饰任何不利于申请此职位的资料，自愿接受公司的解雇处理，同时承担因隐瞒事实而带来的一切后果。'
    }
  },
  computed: {
    ...mapState({
      number: state => state.common.number,
      number66: state => state.common2.isLoadinjdksadkalg
    }),
    number2() {
      return this.$store.state.common.number
    },
    ...mapGetters({
        number3: 'getNumber'
      })
  },
  mounted() {
    console.log(this.$store)
    console.log({number: this.number})
    console.log({number: this.number2})
    console.log(Math.max.apply(null, [14, 3, 77]));
    console.log(Math.max(...[14, 3, 77]));
    console.log(new Date(...[2015, 1, 1]))

    //实现Iterator接口的对象
    let map = new Map([
        [1, 'one'],
        [2, 'two'],
        [3, 'three']
    ]);
    let arr = [...map.keys()];
    console.log(arr);

    console.log(Array.from([1, 2, 3], (x) => x * x))

    console.log([1, 4, -5, 10].find((n) => n < 0));

    console.log(new Array(3).fill(7))

    let ab = ['a', 'b'];
    for (let index of ab.keys()) {
        console.log(index);
    }

    for (let [index, elem] of ab.entries()) {
        console.log(index, elem);
    }
    getAll().then((res) => {
			console.log(res)
		})
  },
  methods: {
    change() {
      this.$store.commit('TEST', 1)
    },
    jump() {
      this.$router.push({
        path: '/test'
      })
    }
  }
 }
</script>

<style lang='less' scoped>
@import '~@/assets/less/main.less';
.box{
  height: .8rem;
  background: black;
}
[title='identifier'] {
  color: blue;
}
.a, #b {
  color: red;
}
.mixin-class {
  .a();
}
.mixin-id {
  #b();
}
</style>
