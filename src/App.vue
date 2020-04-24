<template>
	<div id="app">
		<loading v-model="isLoading"></loading>
    <transition :name="transitionName">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" class='router'></router-view>
      </keep-alive>
    </transition>
    <transition :name="transitionName">
		  <router-view v-if="!$route.meta.keepAlive" class='router'></router-view>
    </transition>
	</div>
</template>

<script>
import { Loading } from 'vux'
import { mapState } from 'vuex'
export default {
	computed: {
		...mapState({
      isLoading: state => state.common.isLoading,
      transitionName: state => state.common.direction
		})
  },
	mounted () {
    console.log(this.transitionName)
	},
	components: {
		Loading
	}
}
</script>

<style lang="less">
@import '~@/assets/less/main.less';

// .router{
//   width: 100%;
//   height: 100%;
//   height: 100vh;
//   overflow: scroll;
//   position: fixed;
//   overflow: hidden !important;
//   overflow-y: auto !important;
//   -webkit-overflow-scrolling: touch;
//   background: #f0f0f0;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   background-color: #f2f2f2;
// }
@--transition-time: 350ms;
.back-enter-active,
.back-leave-active,
.forward-enter-active,
.forward-leave-active {
  will-change: transform;
  transition: all @--transition-time;
  position: absolute;
  height: 100%;
  backface-visibility: hidden;
  perspective: 1000;
}
.back-enter {
  opacity: 0.75;
  transform: translate3d(-35%, 0, 0)!important;
}
.back-enter-active {
  z-index: -1!important;
  transition: all @--transition-time linear;
}
.back-leave-active {
  transform: translate3d(100%, 0, 0)!important;
  transition: all @--transition-time linear;
}
.forward-enter {
  transform: translate3d(100%, 0, 0)!important;
}
.forward-enter-active {
  transition: all  @--transition-time linear;
}
.forward-leave-active {
  z-index: -1;
  opacity: 0.65;
  transform: translate3d(-35%, 0, 0)!important;
  transition: all @--transition-time linear;
}

.slide-left-leave-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-right-enter-active{
  transition: all @--transition-time;
}
.slide-left-enter, .slide-right-leave-active {
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
.slide-left-leave-active, .slide-right-enter {
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}
</style>
