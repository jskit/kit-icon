import Icon from './components/Icon.vue'

const KitIcon = {
  install(Vue, params = {}) {
    if (this.installed) {
      return
    }

    this.installed = true

    Vue.component(Icon.name, Icon)
  },
}

export default KitIcon
