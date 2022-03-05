import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/Switch/SwitchDemo.vue'
import ButtonDemo from './components/Button/ButtonDemo.vue'
import DialogDemo from './components/Dialog/DialogDemo.vue'
import TabsDemo from './components/Tabs/TabsDemo.vue'
import CardDemo from './components/Card/CardDemo.vue'
import InputDemo from './components/Input/InputDemo.vue'
import PopoverDemo from './components/Popover/PopoverDemo.vue'
import ToastDemo from './components/Toast/ToastDemo.vue'
import { h } from 'vue'
import Markdown from './components/markdown.vue'
import intro from './markdown/intro.md'
import getStarted from './markdown/get-started.md'
import install from './markdown/install.md'

const history = createWebHashHistory()
const md = string => h(Markdown, { content:string, key: string })
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/Doc', component: Doc,
            children: [
                { path: '', redirect:'/Doc/intro' },
                { path: 'intro', component: md(intro) },
                { path: 'install', component: md(install) },
                { path: 'get-started', component: md(getStarted) },
                { path: 'switch', component: SwitchDemo },
                { path: 'button', component: ButtonDemo },
                { path: 'dialog', component: DialogDemo },
                { path: 'tabs', component: TabsDemo },
                { path: 'card', component: CardDemo },
                { path: 'input', component: InputDemo },
                { path: 'popover', component: PopoverDemo },
                { path: 'toast', component: ToastDemo }

                
            ]
        }
    ]
})