// import { Rpc, rpc } from 'rpc-mini'

export const createShader = () => {
  const canvas = document.createElement('canvas')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const offscreen = (canvas as any).transferControlToOffscreen()

  // @ts-ignore
  const workerUrl = new URL('./shader-worker.js', import.meta.url).href
  const worker = new Worker(workerUrl, { type: 'module' })

  worker.postMessage({ canvas: offscreen }, [offscreen])
  // const workerRpc: Rpc = rpc(worker)

  return { canvas, worker }
}
