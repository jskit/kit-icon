import Icon from './Icon.vue'

var KitIcon = {
  install(Vue, params = {}) {
    if (this.installed) {
      return
    }

    this.installed = true

    Vue.component(Icon.name, Icon)
  }
}

export default KitIcon
