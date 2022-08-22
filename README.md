<h1>
shader-worker <a href="https://npmjs.org/package/shader-worker"><img src="https://img.shields.io/badge/npm-v1.0.0-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-1,232-FFF.svg?colorA=000"/></a> <a href="https://cdn.jsdelivr.net/npm/shader-worker@1.0.0/dist/shader-worker.min.js"><img src="https://img.shields.io/badge/brotli-222b-333.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
</h1>

<p></p>

Shader toy in a worker.

<h4>
<table><tr><td title="Triple click to select and copy paste">
<code>npm i shader-worker </code>
</td><td title="Triple click to select and copy paste">
<code>pnpm add shader-worker </code>
</td><td title="Triple click to select and copy paste">
<code>yarn add shader-worker</code>
</td></tr></table>
</h4>

## Examples

<details id="example$web" title="web" open><summary><span><a href="#example$web">#</a></span>  <code><strong>web</strong></code></summary>  <ul>    <details id="source$web" title="web source code" open><summary><span><a href="#source$web">#</a></span>  <code><strong>view source</strong></code></summary>  <a href="example/web.ts">example/web.ts</a>  <p>

```ts
import { createShader } from 'shader-worker'

const { canvas } = createShader()

const style = document.createElement('style')
style.textContent = /*css*/ `
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: #000;
  overflow: hidden;
}

canvas {
  width: 100%;
  height: 100%;
}
`
document.body.appendChild(style)
document.body.appendChild(canvas)
```

</p>
</details></ul></details>

## API

<p>  <details id="createShader$1" title="Function" open><summary><span><a href="#createShader$1">#</a></span>  <code><strong>createShader</strong></code><em>()</em>    </summary>  <a href=""></a>  <ul>    <p>      <p><strong>createShader</strong><em>()</em>  &nbsp;=&gt;  <ul>{<p>  <details id="canvas$4" title="Property" ><summary><span><a href="#canvas$4">#</a></span>  <code><strong>canvas</strong></code>    </summary>  <a href=""></a>  <ul><p><span>HTMLCanvasElement</span></p>        </ul></details><details id="worker$5" title="Property" ><summary><span><a href="#worker$5">#</a></span>  <code><strong>worker</strong></code>    </summary>  <a href=""></a>  <ul><p><span>Worker</span></p>        </ul></details></p>}</ul></p></p>    </ul></details></p>

## Credits

- [rpc-mini](https://npmjs.org/package/rpc-mini) by [stagas](https://github.com/stagas) &ndash; A mini RPC for MessagePort interfaces.

## Contributing

[Fork](https://github.com/stagas/shader-worker/fork) or [edit](https://github.dev/stagas/shader-worker) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2022 [stagas](https://github.com/stagas)
