# 搭建 Vite + Vue 3 + Typescript + tsx + less 项目 

项目地址: [https://github.com/DuXiaoHeng/vue3-tsx](https://github.com/DuXiaoHeng/vue3-tsx)

### 1. 使用vite脚手架 初始化一个 Vue 3 + Typescript 项目
> 文档： [搭建第一个vue项目](https://www.vitejs.net/guide/#%E6%90%AD%E5%BB%BA%E7%AC%AC%E4%B8%80%E4%B8%AA-vite-%E9%A1%B9%E7%9B%AE)
```bash
npm init @vitejs/app [项目名] --template vue-ts
```

### 2. 配置tsx支持
> 文档： [vue3 jsx 支持](https://www.vitejs.net/guide/features.html#vue)
- 安装 Vue 3 JSX 支持：@vitejs/plugin-vue-jsx
```bash
npm i -D @vitejs/plugin-vue-jsx
```
- 使用 tsx支持插件
```ts
//vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [vue(), vueJsx()]
})

```
### 3. 配置less
>文档：  [css 预处理器](https://www.vitejs.net/guide/features.html#css-%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8)  
> Vite 提供了对 .scss, .sass, .less, .styl 和 .stylus 文件的内置支持。没有必要为他们安装特定的 vite 插件，只需安装预处理器依赖本身。
```bash
npm i -D less
```

### 4. CSS Modules
> 文档：[CSS Modules](https://www.vitejs.net/guide/features.html#css-modules)  

在vue开发中，组件很多，为防止各个组件间样式污染通常需要给组件设置局部生效的样式。
- vue单文件组件：给当前组件文件中的style标签加上 scoped。
```
<style scoped>
</style>
```
- tsx 组件：在样式文件后缀名前加上.module（index.module.less）。在tsx中导入该样式使用。
```less
//index.module.less
.helloWorld {
    h1 {
        text-shadow: 2px 4px #ccc;
    }
    button {
        border: none;
        outline: none;
        padding: 5px 20px;
        background: #8bc34a;
        border-radius: 5px;
        border: 2px solid #a5a4a4;
        cursor: pointer;
    }
}
```
```ts
//index.tsx
import { ref, defineComponent } from 'vue'
import classes from "./index.module.less"
export default defineComponent({
  name: 'HelloWorld',
  setup: (props) => {
    const count = ref(0)
    return () => (
      <div class={classes.helloWorld}>
        <h1>{props.msg}</h1>
        <button onClick={() => { count.value++ }}>
          count is: {count.value}
        </button>
      </div>
    )
  }
})

```
```html
<!--运行后的结果： 生成了一个唯一的类名-->
<div class="_helloWorld_kddoo_1">
  <h1>Hello Vue 3 + TypeScript + Vite</h1>
  <button>count is: 0</button>
</div>
```