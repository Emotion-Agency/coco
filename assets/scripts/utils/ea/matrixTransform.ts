interface IScale {
  x: number | string
  y: number | string
}

interface IMove {
  x: number | string
  y: number | string
  z: number | string
}

interface IParams {
  scale?: IScale
  move?: IMove
}

export const matrixTransform = (params: IParams = {}) => {
  const def = {
    scale: params.scale ?? {x: 1, y: 1},
    move: params.move ?? {x: 0, y: 0, z: 0},
  }

  const p = Object.keys(def).map(key => {
    if (typeof def[key] === 'string' || typeof def[key] === 'number') {
      return {x: def[key], y: def[key], z: def[key]}
    }

    return def[key]
  })

  return `matrix3d(
    ${p[0].x ?? 1},0,0,0,
    0,${p[0].y ?? 1},0,0,
    0,0,1,0,
    ${p[1].x ?? 0},${p[1].y ?? 0},${p[1].z ?? 0},1
    )`
}
