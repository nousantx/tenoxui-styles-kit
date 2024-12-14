import type { CoreConfig } from '@tenoxui/core/full'

export const ring: CoreConfig = {
  property: {
    ring: '--nsx_ring-color',
    'ring-offset': '--nsx_ring-offset-color'
  },
  classes: {
    '--nsx_ring-offset-width': {
      'ring-offset-0': '0px',
      'ring-offset-1': '1px',
      'ring-offset-2': '2px',
      'ring-offset-4': '4px',
      'ring-offset-8': '8px'
    },
    '--nsx_ring-offset': {
      'ring-offset-0':
        '0 0 0 var(--nsx_ring-offset-width) rgb(var(--nsx_ring-offset-color, 0 0 0))',
      'ring-offset-1':
        '0 0 0 var(--nsx_ring-offset-width) rgb(var(--nsx_ring-offset-color, 0 0 0))',
      'ring-offset-2':
        '0 0 0 var(--nsx_ring-offset-width) rgb(var(--nsx_ring-offset-color, 0 0 0))',
      'ring-offset-4':
        '0 0 0 var(--nsx_ring-offset-width) rgb(var(--nsx_ring-offset-color, 0 0 0))',
      'ring-offset-8': '0 0 0 var(--nsx_ring-offset-width) rgb(var(--nsx_ring-offset-color, 0 0 0))'
    },
    boxShadow: {
      'ring-0':
        'var(--nsx_ring-offset), 0 0 0 calc(0px + var(--nsx_ring-offset-width)) rgb(var(--nsx_ring-color, 0 0 0))',
      'ring-1':
        'var(--nsx_ring-offset), 0 0 0 calc(1px + var(--nsx_ring-offset-width)) rgb(var(--nsx_ring-color, 0 0 0))',
      'ring-2':
        'var(--nsx_ring-offset), 0 0 0 calc(2px + var(--nsx_ring-offset-width)) rgb(var(--nsx_ring-color, 0 0 0))',
      ring: 'var(--nsx_ring-offset), 0 0 0 calc(3px + var(--nsx_ring-offset-width)) rgb(var(--nsx_ring-color, 0 0 0))',
      'ring-4':
        'var(--nsx_ring-offset), 0 0 0 calc(4px + var(--nsx_ring-offset-width)) rgb(var(--nsx_ring-color, 0 0 0))',
      'ring-8':
        'var(--nsx_ring-offset), 0 0 0 calc(8px + var(--nsx_ring-offset-width)) rgb(var(--nsx_ring-color, 0 0 0))'
    }
  }
}
