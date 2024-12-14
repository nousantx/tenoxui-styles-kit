import { CoreConfig } from '@tenoxui/core/full'

export const boxShadow: CoreConfig = {
  property: {
    shadow: '--nsx_shadow-color',
    'shadow-opacity': '--nsx_shadow-opa'
  },
  classes: {
    boxShadow: {
      // shadow
      'shadow-sm': '0 1px 2px 0 rgb(var(--nsx_shadow-color, 0 0 0) / var(--nsx_shadow-opa, 0.05))',
      shadow:
        '0 1px 3px 0 rgb(var(--nsx_shadow-color, 0 0 0) / var(--nsx_shadow-opa, 0.1)), 0 1px 2px -1px rgb(var(--nsx_shadow-color, 0 0 0) / var(--nsx_shadow-opa, 0.1))',
      'shadow-md':
        '0 4px 6px -1px rgb(var(--nsx_shadow-color, 0 0 0) / var(--nsx_shadow-opa, 0.1)), 0 2px 4px -2px rgb(var(--nsx_shadow-color, 0 0 0) / var(--nsx_shadow-opa, 0.1))',
      'shadow-lg':
        '0 10px 15px -3px rgb(var(--nsx_shadow-color, 0 0 0) / var(--nsx_shadow-opa, 0.1)), 0 4px 6px -4px rgb(var(--nsx_shadow-color, 0 0 0) / var(--nsx_shadow-opa, 0.1))',
      'shadow-xl':
        '0 20px 25px -5px rgb(var(--nsx_shadow-color, 0 0 0) / var(--nsx_shadow-opa, 0.1)), 0 8px 10px -6px rgb(var(--nsx_shadow-color, 0 0 0) / var(--nsx_shadow-opa, 0.1))',
      'shadow-2xl':
        '0 25px 50px -12px rgb(var(--nsx_shadow-color, 0 0 0) / var(--nsx_shadow-opa, 0.25))',
      'shadow-inner':
        'inset 0 2px 4px 0 rgb(var(--nsx_shadow-color, 0 0 0) / var(--nsx_shadow-opa, 0.05))',
      'shadow-none': '0 0 #0000'
    }
  }
}
