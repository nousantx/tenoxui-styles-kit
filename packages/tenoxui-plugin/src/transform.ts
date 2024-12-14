import type { CoreConfig } from '@tenoxui/core/full'

export const transform: CoreConfig = {
  property: {
    transform: 'transform',
    rotate: '--nsx_rotate',
    'rotate-y': '--nsx_rotate_y',
    'rotate-x': '--nsx_rotate_x',
    'rotate-z': '--nsx_rotate_z',
    scale: '--nsx_scale',
    'scale-x': '--nsx_scale_x',
    'scale-y': '--nsx_scale_y',
    'scale-z': '--nsx_scale_z',
    skew: '--nsx_skew',
    'skew-x': '--nsx_skew_x',
    'skew-y': '--nsx_skew_y',
    translate: '--nsx_translate',
    'translate-x': '--nsx_translate_x',
    'translate-y': '--nsx_translate_y',
    'translate-z': '--nsx_translate_z'
  },
  values: {
    transform: {
      full: 'rotate(var(--nsx_rotate, 0))\nrotateY(var(--nsx_rotate-y, 0))\nrotateX(var(--nsx_rotate-x, 0))\nrotateZ(var(--nsx_rotate-z, 0))\nscale(var(--nsx_scale, 1))\nscaleY(var(--nsx_scale-y, 1))\nscaleX(var(--nsx_scale-x, 1))\nscaleZ(var(--nsx_scale-z, 1))\nskew(var(--nsx_skew, 0))\nskewY(var(--nsx_skew-y, 0))\nskewX(var(--nsx_skew-x, 0))\ntranslate(var(--nsx_translate, 0))\ntranslateY(var(--nsx_translate-y, 0))\ntranslateX(var(--nsx_translate-x, 0))\ntranslateZ(var(--nsx_translate-z, 0))'
    }
  }
}
