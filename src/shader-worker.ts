// import { rpc } from 'rpc-mini'
import Shader from './js/shader'

declare const self: Window & { t: number }

declare let t: number

self.t = 1000

console.log('started')
self.onmessage = ({ data }) => {
  console.log('received')
  self.onmessage = null

  const canvas = data.canvas as HTMLCanvasElement
  const shader = new Shader(canvas)

  let animFrame: any

  function sin(x: number) {
    return Math.sin(x * t * Math.PI * 2)
  }

  let n = 0
  const tick = () => {
    t = performance.now() * 0.001

    shader.set('t', t)
      // .fragex('add = texture(prev, st.xy).rgb*.1;')
      .clear(1)
      .clear(2, n === 0)
      .clear(3, n === 0)
      // .read(0)

      // .blit(2)

      // .quad()
      // // .random(10, [1212, 3434, 5353].seq(1 / 4))
      // // .random(10, [1212, 3434, 5353].seq(1 / 4))
      // .color([1, 1, 1, 1])
      // // .light([-2.18, 1, -2])
      // // .rotate(t * 20, [1, 1, 1])
      // // .vert('light *= mod(norm, _)', [4.35])
      // .blend(1, '1-sc dc')
      // // .blend(1, 'sa sa')

      .model('/stl/orpheus.stl')
      .color([5.5, .0, 0, 1])
      .light([-.18, -.896, -.02018])
      .rotate(90, [.09, 0 + sin(.0003) * .054, -0.011])
      // .vert('light *= mod(norm, _)', [1.35])
      // .vert('pos.y -= norm.z * _', [sin(.013) * 100])
      .frag('col *= mod(norm.z, _)', [4.5])
      .zoom(.15)
      .draw(1)
      // .quad()
      // .tex(1)
      // .frag('st = (st-.5) * 1. * cos(t*.02) * mat2(cos(_),-sin(_),sin(_),cos(_))', [t * .05])

      // .draw()
      // .blend(3, 'sa sa')

      .quad()
      .glitch(.05)
      // @ts-ignore
      .texrgba(1, ['rgba', 'rgba', 'rgba', 'rgba', 'rgba', 'rgba', 'rgba', 'rrrr'].seq(1 / 4))
      // .tex(1)
      .blend(2, '1-sa 1-sa')
      .quad()
      .tex(2)
      .draw()
    // // .on(4, 1 / 2).rotate(t * 50, [1, 1, 1])
    // // .texrgba(1, ['rgba', 'bbba'].seq(1))
    // // .frag('col.a = 0.999')
    // // .blit(2)
    // .blend(2, 'sa sc')
    // // .frag('col.a = 0.999').blend(2, '1-sc 1-sc')
    // .quad().tex(2).blend(3, 'sc dc') //.blit(3)
    // .quad().tex(2).blend(3, '1-sa sa') //.blit(3)

    // // .quad()
    // // .on(8, 1 / 16).frag('st *= 4.') //+randf(st.y*10.)-.5>.5 ? randf(t*5.)>.5?.0:.03 : 0.')
    // // .on(5, 1 / 16).frag('st *= 2.') //+randf(st.y*10.)-.5>.5 ? randf(t*5.)>.5?.0:.03 : 0.')
    // .tex(3).draw() //.blit(4)

    // .youtube('FJ3N_2r6R-o')
    // .glitch(.5)
    // .texrgba('video')
    // .on(4, 1 / 8).draw()

    n++
    animFrame = requestAnimationFrame(tick)
  }

  animFrame = requestAnimationFrame(tick)

  // just to use it
  console.log(animFrame)
}
