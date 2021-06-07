
// import { App as VM } from 'vue'
import  { App } from 'vue'
import {
  Button,
  Checkbox,
  List,
  Cell,
  CellGroup,
  Tabbar,
  TabbarItem,
  Icon,
  NavBar,
  Field,
  Form,
  ActionSheet,
  Search,
  Col,
  Row,
  Tag,
  Tab,
  Tabs,
  Collapse,
  CollapseItem,
  Empty,
  PullRefresh,
  Image as VanImage,
  Lazyload
} from 'vant'

const plugins = [
  Checkbox,
  Search,
  Button,
  List,
  Cell,
  CellGroup,
  Tabbar,
  TabbarItem,
  Icon,
  NavBar,
  Field,
  ActionSheet,
  Form,
  Col,
  Row,
  Tag,
  Tab,
  Tabs,
  Collapse,
  CollapseItem,
  Empty,
  PullRefresh,
  VanImage
]

export const vantPlugins = {
  install(vm: App):void {
    plugins.forEach(item => {
      vm.component(item.name, item)
    })
    vm.component('Lazyload', Lazyload)
  }
}
