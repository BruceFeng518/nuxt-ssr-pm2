/*
 * @Descripttion: 通用后台
 * @version: 0.0.1
 * @@Company: yiyuanquan
 * @Author: Bruce Feng
 * @Date: 2020-12-08 11:51:43
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-20 00:46:02
 */
import Vue from 'vue'
// import Antd from 'ant-design-vue/lib'

// Vue.use(Antd)
import Carousel from 'ant-design-vue/lib/carousel'; // 加载 JS
import Spin from 'ant-design-vue/lib/spin'; // 加载 JS
import Tag from 'ant-design-vue/lib/tag'; // 加载 JS
import Icon from 'ant-design-vue/lib/icon'; // 加载 JS
import Input from 'ant-design-vue/lib/input'; // 加载 JS
import Button from 'ant-design-vue/lib/button'; // 加载 JS
import Modal from 'ant-design-vue/lib/modal'; // 加载 JS
import Tooltip from 'ant-design-vue/lib/tooltip'; // 加载 JS
import Steps from 'ant-design-vue/lib/steps'; // 加载 JS
import Collapse from 'ant-design-vue/lib/collapse'; // 加载 JS
import Divider from 'ant-design-vue/lib/divider'; // 加载 JS
import message from 'ant-design-vue/lib/message'; // 加载 JS
import BackTop  from 'ant-design-vue/lib/back-top'; // 加载 JS
import Card  from 'ant-design-vue/lib/card'; // 加载 JS
import Dropdown  from 'ant-design-vue/lib/dropdown'; // 加载 JS
import Layout  from 'ant-design-vue/lib/layout'; // 加载 JS
import Menu  from 'ant-design-vue/lib/menu'; // 加载 JS
import Row  from 'ant-design-vue/lib/row'; // 加载 JS
import Col  from 'ant-design-vue/lib/col'; // 加载 JS
import Tabs  from 'ant-design-vue/lib/tabs'; // 加载 JS
import Upload  from 'ant-design-vue/lib/upload'; // 加载 JS
import Empty  from 'ant-design-vue/lib/empty'; // 加载 JS
import Form  from 'ant-design-vue/lib/form'; // 加载 JS
import FormModel  from 'ant-design-vue/lib/form-model'; // 加载 JS
import Breadcrumb  from 'ant-design-vue/lib/breadcrumb'; // 加载 JS
import Checkbox  from 'ant-design-vue/lib/checkbox'; // 加载 JS
import Radio  from 'ant-design-vue/lib/radio'; // 加载 JS
import Table  from 'ant-design-vue/lib/table'; // 加载 JS
import Select  from 'ant-design-vue/lib/select'; // 加载 JS
import Popover  from 'ant-design-vue/lib/popover'; // 加载 JS
import Drawer  from 'ant-design-vue/lib/drawer'; // 加载 JS
import Skeleton from 'ant-design-vue/lib/skeleton'; // 加载 JS
import Affix from 'ant-design-vue/lib/affix';
import Pagination from 'ant-design-vue/lib/pagination';
import Progress from 'ant-design-vue/lib/progress';
import DatePicker from 'ant-design-vue/lib/date-picker';
import Cascader from 'ant-design-vue/lib/cascader';



Vue.use(Cascader)
Vue.use(Progress)
Vue.use(DatePicker)
Vue.use(Pagination)
Vue.use(Carousel)
Vue.use(Skeleton)
Vue.use(Affix)
Vue.use(Spin)
Vue.use(Tag)
Vue.use(Icon)
Vue.use(Input)
Vue.use(Button)
Vue.use(Modal)
Vue.use(Tooltip)
Vue.use(Steps)
Vue.use(Collapse)
Vue.use(Divider)
Vue.use(BackTop)
Vue.use(Card)
Vue.use(Dropdown)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Row)
Vue.use(Col)
Vue.use(Tabs)
Vue.use(Upload)
Vue.use(Empty)
Vue.use(Form)
Vue.use(FormModel)
Vue.use(Breadcrumb)
Vue.use(Checkbox)
Vue.use(Radio)
Vue.use(Select)
Vue.use(Table)
Vue.use(Popover)
Vue.use(Drawer)
Vue.prototype.$message = message;
message.config({
    top: `70px`,
    duration: 2,
    maxCount: 3,
});

