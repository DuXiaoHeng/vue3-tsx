import { ref, defineComponent } from 'vue'
// import classes from "./index.module.css"
import classes from "./index.module.less"
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: (props) => {
    const count = ref(0)
    return () => (
      <div class={classes.helloWorld}>
        <h1>{props.msg}</h1>
        <button onClick={() => { count.value++ }}>count is: {count.value}</button>
      </div>
    )
  }
})
