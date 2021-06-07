import VueRouter from 'vue-router'
import Home from './components/home.vue'
import horizontalCenter1 from './components/horizontalCenter1.vue'
import horizontalCenter2 from './components/horizontalCenter2.vue'
import horizontalCenter3 from './components/horizontalCenter3.vue'
import horizontalCenter4 from './components/horizontalCenter4.vue'
import verticalCenter1 from './components/verticalCenter1.vue'
import verticalCenter2 from './components/verticalCenter2.vue'
import horizontalVerticalCenter1 from './components/horizontalVerticalCenter1.vue'
import horizontalVerticalCenter2 from './components/horizontalVerticalCenter2.vue'
import horizontalVerticalCenter3 from './components/horizontalVerticalCenter3.vue'
import twoCol1 from './components/twoCol1.vue'
import twoCol2 from './components/twoCol2.vue'
import twoCol3 from './components/twoCol3.vue'
import twoCol4 from './components/twoCol4.vue'
import threeCol1 from './components/threeCol1.vue'
import threeCol2 from './components/threeCol2.vue'
import threeCol3 from './components/threeCol3.vue'
import threeCol4 from './components/threeCol4.vue'
import multiCol1 from './components/multiCol1.vue'
import multiCol2 from './components/multiCol2.vue'
import multiCol3 from './components/multiCol3.vue'
import multiCol4 from './components/multiCol4.vue'
import multiColSameHigh1 from './components/multiColSameHigh1.vue'
import multiColSameHigh2 from './components/multiColSameHigh2.vue'
import fullScreen from './components/fullScreen.vue'

export default new VueRouter({
    routes: [
        {path: '/', component: Home },
        {path: '/horizontalCenter1', component: horizontalCenter1},
        {path: '/horizontalCenter2', component: horizontalCenter2},
        {path: '/horizontalCenter3', component: horizontalCenter3},
        {path: '/horizontalCenter4', component: horizontalCenter4},
        {path: '/verticalCenter1', component: verticalCenter1},
        {path: '/verticalCenter2', component: verticalCenter2},
        {path: '/horizontalVerticalCenter1', component: horizontalVerticalCenter1},
        {path: '/horizontalVerticalCenter2', component: horizontalVerticalCenter2},
        {path: '/horizontalVerticalCenter3', component: horizontalVerticalCenter3},
        {path: '/twoCol1', component: twoCol1},
        {path: '/twoCol2', component: twoCol2},
        {path: '/twoCol3', component: twoCol3},
        {path: '/twoCol4', component: twoCol4},
        {path: '/threeCol1', component: threeCol1},
        {path: '/threeCol2', component: threeCol2},
        {path: '/threeCol3', component: threeCol3},
        {path: '/threeCol4', component: threeCol4},
        {path: '/multiCol1', component: multiCol1},
        {path: '/multiCol2', component: multiCol2},
        {path: '/multiCol3', component: multiCol3},
        {path: '/multiCol4', component: multiCol4},
        {path: '/multiColSameHigh1', component: multiColSameHigh1},
        {path: '/multiColSameHigh2', component: multiColSameHigh2},
        {path: '/fullScreen', component: fullScreen},
    ]
})