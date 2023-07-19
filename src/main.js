import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'sakana-widget/lib/index.css';
import SakanaWidget from 'sakana-widget';
// new SakanaWidget().mount('#sakana-widget');




// const takina = SakanaWidget.getCharacter('takina');
// takina.initialState = {
//   ...takina.initialState,
//   i: 0.001,
//   d: 1,
// };
// SakanaWidget.registerCharacter('takina-slow', takina);
// new SakanaWidget({ character: 'takina-slow' }).mount('#sakana-widget');

createApp(App).mount('#app')
