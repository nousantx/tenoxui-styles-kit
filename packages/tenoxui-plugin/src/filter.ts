import type { CoreConfig } from '@tenoxui/core/full'

export const filter: CoreConfig = {
  property: {
    filter: 'filter',
    blur: '--nsx_blur',
    brightness: '--nsx_brightness',
    contrast: '--nsx_contrast',
    grayscale: '--nsx_grayscale',
    'hue-rotate': '--nsx_hue_rotate',
    invert: '--nsx_invert',
    opacity: '--nsx_opacity',
    saturate: '--nsx_saturate',
    sepia: '--nsx_sepia',
    'drop-shadow': '--nsx_drop_shadow'
  },
  values: {
    filter: {
      full: 'blur(var(--nsx_blur, 0))\nbrightness(var(--nsx_brightness, 1))\ncontrast(var(--nsx_contrast, 1))\ngrayscale(var(--nsx_grayscale, 0))\nhue-rotate(var(--nsx_hue-rotate, 0))\ninvert(var(--nsx_invert, 0))\nopacity(var(--nsx_opacity, 1))\nsaturate(var(--nsx_saturate, 1))\nsepia(var(--nsx_sepia, 0))\ndrop-shadow(var(--nsx_drop-shadow, 0 0 0 rgb(0 0 0 / 0)))'
    }
  }
}
