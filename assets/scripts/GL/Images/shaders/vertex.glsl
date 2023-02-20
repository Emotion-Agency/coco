varying vec2 vUv;
varying vec2 vDUv;
varying vec2 vResolution;

uniform float uStrength;
uniform float uViewportY;
uniform float uViewportX;
uniform float uClicked;


void main() {
  vec3 pos = position;
  
  vUv = bgCover(size, resolution, uv);
  vDUv = uv;
  vResolution = size.xy;

  vec4 newPosition = modelViewMatrix * vec4(pos, 1.0);

  float scrollValue = -uStrength;

  newPosition.z += sin((newPosition.y + newPosition.y) / uViewportY * 4. * PI) * scrollValue;
  newPosition.z += sin((newPosition.y + newPosition.x) / uViewportX * 2. * PI) * sin(PI * uClicked) * 60.;

  gl_Position = projectionMatrix * newPosition;
}


