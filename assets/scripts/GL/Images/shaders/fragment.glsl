varying vec2 vUv;
varying vec2 vResolution;

uniform sampler2D uTexture;
uniform float uStrength;
uniform float uVisible;
uniform float uHover;
uniform float uClicked;

const float defaultScale = 1.;

vec4 tex(in vec2 st) {
   return texture2D(uTexture, st);
}


void main() {

   vec2 uv = vUv;

   if (uv.y > 1.0 || uv.y < 0.0) {
      discard;
   }

   vec2 newUv = uv;
   float angle = 1.55;

   float roundblend = sin(PI * uHover) * (1. - uClicked);

   vec2 p = (newUv - vec2(0.5, 0.5)) * (defaultScale) + vec2(0.5, 0.5);
   vec2 offset = uStrength / 150.0 * vec2(cos(angle), sin(angle)) + roundblend * 0.05;

   float t = uStrength + ((1.0 - uVisible) * 10.0) + roundblend;
   float _Speed = 1.0;
   float res = t * _Speed * 3.0 + 0.01;

   if (abs(res) > 0.0) {
      p *= vResolution.xy / res;
      p = floor(p);
      p /= vResolution.xy / res;
      p += res * 0.002;
   }

   vec4 cr = tex(p + offset * 0.2);
   vec4 cga = tex(p + offset * 0.1);
   vec4 cb = tex(p - offset * 0.3);

   vec4 img = vec4(cr.r, cga.g, cb.b, 1.0);

   vec4 finalTexture = img;

   // finalTexture.rgb = mix(finalTexture.rgb, 1. - finalTexture.rgb, abs(uHover));

   gl_FragColor = finalTexture * uVisible;
}