import { createShader } from '..'

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
