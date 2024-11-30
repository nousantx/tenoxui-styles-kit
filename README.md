# TenoxUI Styles Kit

## About

This package contains predefined UI class names you can use for your tenoxui project, such as `btn`, `btn-sm`, `badge`, `text-2xl`, and many more. With this library, you don't need to re create same styles on every projects.

## Usage

### Install Dependencies

```
npm install @tenoxui/core @nousantx/tenoxui-utility-styles @nousantx/tenoxui-image-generator-config -D
```

### React/Preact Example

Create `styler.js` file :

```javascript
import { useLayoutEffect } from 'react' // or 'preact/hooks'
import { MakeTenoxUI } from '@tenoxui/core'
import { config } from '@nousantx/tenoxui-image-generator-config'
import { templates } from '@nousantx/tenoxui-utility-styles'

export const styler = () => {
  useLayoutEffect(() => {
    document.querySelectorAll('*[class]').forEach((element) => {
      new MakeTenoxUI({
        ...config,
        element,
        aliases: templates.all
      }).useDOM()
    })
  }, [])
}
```

Use in your component :

```javascript
import { styler } from './styler'

const App = () => {
  styler()
  return (
    <div className="flex gap-2rem">
      <button className="btn">Button</button>
      <button className="btn btn-ghost">Button</button>

      <span className="badge badge-danger">Button</span>

      <h1 class="text-2xl">Hello</h1>
      <p class="text-md">Lorem ipsum dolor sit amet.</p>
    </div>
  )
}

export default App
```

This library not only can be used in your react project. But make sure to use `tenoxui/core v1.3+`.

## LICENSE

MIT
