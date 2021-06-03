import { defineComponent, ref,} from "vue"
import HelloWorld from './components/HelloWorld'
import logoImg from './assets/logo.png'
import './App.less'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <img alt="Vue logo" src={logoImg} />
        <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
      </>
    )
  }
})
