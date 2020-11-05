import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue'
import {Button} from 'element-ui'
import {Form, FormItem} from 'element-ui'
import {Input} from 'element-ui'
import {Tooltip} from 'element-ui'
import {Message} from 'element-ui'
import {Container, Header, Aside, Main} from 'element-ui'
import {Menu, Submenu, MenuItem, MenuItemGroup} from 'element-ui'
import {Breadcrumb, BreadcrumbItem} from 'element-ui'
import {Card} from 'element-ui'
import {Row,Col} from 'element-ui'
import {Table, TableColumn} from 'element-ui'


Vue.use(Button)
Vue.use(Form)
Vue.use(Input)
Vue.use(FormItem)
Vue.use(Tooltip)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
//全局挂载
Vue.prototype.$message = Message