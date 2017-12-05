<template>
  <div id="app">
    <div class="panel">
      <h2>iconsvg</h2>
      <template v-for="group in svgIcons">
        <h3>{{ group.title }}</h3>
        <div class="icons">
          <span class="icon" v-for="item in group.list" :key="item">
            <KitIcon mode="svg" :type="item" />
            <span class="icon-text">{{item}}</span>
          </span>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Icon from './components/Icon'
import icons from './icons'

export default {
  name: 'app',

  components: {
    [Icon.name]: Icon,
  },

  data() {
    return {
      svgIcons: icons,
      fontIcons: icons,
    }
  },
}
</script>

<style lang="stylus">
@import './style/index';

.panel {
  padding: 16px 0;
  h2,
  h3 {
    margin: 16px;
  }
}

// 动画 Spin
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.is-spin {
  animation: spin 1s linear infinite;
}

.icons {
  overflow: hidden;
  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    margin: 3px 0;
    padding: 10px 0 0;
    width: 16.66%;
    text-align: center;
    cursor: pointer;
    height: 100px;
    color: #5a5a5a;
    transition: all .3s;
    border-radius: 4px;
    background-color: #fff;
    &:hover {
      background-color: #108ee9;
      color: #fff;

      .icon-font:not(.is-spin),
      .icon-svg:not(.is-spin) {
        transform: scale(1.4);
      }
    }
  }
  .icon-font,
  .icon-svg {
    font-size: 24px;
    margin: 12px 0 16px;
    transition: all .3s;
  }
  .icon-text {
    textOverflow();

    display: block;
    font-size: 12px;
  }
}

.flex
  display flex
.flex-center
  display flex
  align-items center
  justify-content center
.page-svg
  svg
    margin 10px
  // &.hover:hover
  //   svg
  //     color #1988e0
  // .btn.active,
  // .tabs .item.active
  //   color #1988e0
  //   color var(--accentColor, #1988e0)

  .box400
    width 400px
    height 200px


.preloader {
  position: relative;
  margin: 0 auto;
  width: 40px;
  display: inline-block;
  border-radius: 50%
}

.preloader:before {
  content: '';
  display: block;
  padding-top: 100%
}

.preloader .preloaderCircular {
  animation: rotate 1s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.preloader .preloaderPath {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: preloaderDash 1.5s ease-in-out infinite;
  stroke-dasharray: 89, 200;
  stroke-dashoffset: -35px;
  stroke-linecap: square;
  stroke-width: 2px;
  stroke-miterlimit: 10px;
  stroke: #1988e0;
  stroke: var(--accentColor, #1988e0);
  transition: stroke .2s ease-in-out;
}

.preloader.size-small {
  width: 24px
}

.preloader.size-small .preloaderPath {
  stroke-width: 3px
}

.preloader.size-medium {
  width: 30px
}

.preloader.size-big {
  width: 80px
}

.preloader.size-big .preloaderPath {
  stroke-width: 1px
}

.preloaderMax {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center
}

@keyframes rotate {
  to {
    transform: rotate(1turn)
  }
}

@keyframes preloaderAppear {
  0% {
    opacity: 0
  }

  to {
    opacity: 1
  }
}

@keyframes preloaderDash {
  0% {
    stroke-dasharray: 1,200;
    stroke-dashoffset: 0
  }

  50% {
    stroke-dasharray: 89,200;
    stroke-dashoffset: -35px
  }

  to {
    stroke-dasharray: 89,200;
    stroke-dashoffset: -124px
  }
}

</style>
