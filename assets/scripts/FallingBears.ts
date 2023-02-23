import Matter from 'matter-js'
import { clamp, resize } from './utils/ea'

const size = (pcSize, mobSize) => {
  const min = 375
  const max = 1440
  const addSize = pcSize - mobSize
  const maxWidth = max - min

  return mobSize + addSize * ((window.innerWidth - min) / maxWidth)
}

// let count = 0

export type fallingBearsReturn = {
  play: () => void
  stop: () => void
}

export const fallingBears = (
  parent: HTMLElement,
  withInitial: boolean
): fallingBearsReturn => {
  let w = parent.offsetWidth
  let h = parent.offsetHeight
  const ratio = 2

  let isInit = false

  const Engine = Matter.Engine
  const Render = Matter.Render
  const Runner = Matter.Runner
  const MouseConstraint = Matter.MouseConstraint
  const Mouse = Matter.Mouse
  const World = Matter.World
  const Bodies = Matter.Bodies

  // create an engine
  const engine = Engine.create()
  const world = engine.world

  // world.gravity.y = 0.1

  // if (count > 10) {
  world.gravity.y = 0.06
  // }

  // create a renderer
  const render = Render.create({
    element: parent,
    engine,
    options: {
      width: w,
      height: h,
      pixelRatio: 1,
      background: 'transparent',
      wireframes: false,
    },
  })

  const opts = {
    render: { fillStyle: '#ffffff', visible: false },
    isStatic: true,
  }

  const floorHeight = 160

  // const ground = Bodies.rectangle(
  //   0,
  //   h + floorHeight / 2,
  //   w * ratio,
  //   floorHeight,
  //   opts
  // )

  const wallLeft = Bodies.rectangle(
    -floorHeight / 2,
    -h,
    floorHeight,
    h * ratio + floorHeight + h * ratio,
    opts
  )

  const wallRight = Bodies.rectangle(
    w + floorHeight / 2,
    -h,
    floorHeight,
    h * ratio + floorHeight + h * ratio,
    opts
  )

  // const roof = Bodies.rectangle(0, -h, w * ratio, floorHeight, opts)

  World.add(world, [wallLeft, wallRight])

  let scale = size(0.6, 0.4)

  const createBears = (isInital: boolean) => {
    const bear = {
      sizes: {
        w: 138,
        h: 179,
      },
    }

    let xPos = Math.random() * w
    xPos = clamp(xPos, bear.sizes.w * scale, w)

    const yPos = !isInital ? -floorHeight : Math.random() * h

    const el = Bodies.rectangle(
      xPos,
      yPos,
      bear.sizes.w * scale,
      bear.sizes.h * scale,
      {
        isSleeping: false,
        restitution: 1,
        frictionAir: 0.0001,
        velocity: { x: 0, y: 0 },
        angle: Math.random() * 0.5,
        render: {
          sprite: {
            texture: '/images/bear.png',
            xScale: scale,
            yScale: scale,
          },
        },
      }
    )

    if (Matter.Composite.allBodies(engine.world).length <= 100) {
      World.add(world, el)
    }

    // count = Matter.Composite.allBodies(engine.world).length

    Matter.Events.on(render, 'afterRender', function () {
      const bounds = el.bounds
      if (bounds.max.y > h + (floorHeight / 2 + 100)) {
        Matter.Composite.remove(engine.world, el)
      }
    })
  }

  const mouse = Mouse.create(render.canvas)

  const mouseConstraint = MouseConstraint.create(engine, {
    mouse,
    constraint: {
      stiffness: 0.02,
      angularStiffness: 0.02,
      render: {
        visible: false,
      },
    },
  })

  World.add(world, mouseConstraint)

  // keep the mouse in sync with rendering
  render.mouse = mouse

  Render.run(render)

  const runner = Runner.create()
  Runner.run(runner, engine)

  const onResize = () => {
    w = parent.offsetWidth
    h = parent.offsetHeight

    render.bounds.max.x = w
    render.bounds.max.y = h

    render.options.width = w
    render.options.height = h
    render.canvas.width = w
    render.canvas.height = h

    render.canvas.style.width = w
    render.canvas.style.height = w

    scale = size(0.6, 0.4)
  }

  resize.on(onResize)

  return {
    stop: () => {
      console.log('stop')
      Render.stop(render)
    },
    play: () => {
      console.log('init')
      Render.run(render)
      Runner.run(runner, engine)

      if (isInit) {
        return
      }

      if (withInitial) {
        for (let i = 0; i < 20; i++) {
          createBears(true)
        }
      }

      setInterval(() => {
        createBears(false)
      }, 300)

      isInit = true
    },
  }
}
