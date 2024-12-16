import type { CoreConfig } from '@tenoxui/core/full'

export const typography: CoreConfig = {
  property: {
    tracking: 'letterSpacing'
  },
  classes: {
    textAlign: {
      'text-left': 'left',
      'text-right': 'right',
      'text-center': 'center',
      'text-justify': 'justify'
    },
    letterSpacing: {
      'tracking-tighter': '-0.05em',
      'tracking-tight': '-0.025em',
      'tracking-normal': '0em',
      'tracking-wide': '0.025em',
      'tracking-wider': '0.05em',
      'tracking-widest': '0.1em'
    },
    fontWeight: {
      'font-thin': '100',
      'font-extralight': '200',
      'font-light': '300',
      'font-normal': '400',
      'font-medium': '500',
      'font-semibold': '600',
      'font-bold': '700',
      'font-extrabold': '800',
      'font-black': '900'
    },
    textTransform: {
      capitalize: 'capitalize',
      lowercase: 'lowercase',
      uppercase: 'uppercase'
    },
    fontStyle: {
      italic: 'italic'
    }
  },
  aliases: {
    'text-4xl': 'fs-4.5rem lh-4.75rem ls--0.025em fw-700',
    'text-3xl': 'fs-3.75rem lh-4.5rem ls--0.025em fw-700',
    'text-2xl': 'fs-3rem lh-lh-3.75rem ls--0.020em fw-700',
    'text-xl': 'fs-2.25rem lh-2.75rem ls--0.025em fw-600',
    'text-lg': 'fs-1.875rem lh-2.25rem ls--0.015em fw-600',
    'text-md': 'fs-1.25rem lh-1.75rem ls--0.015em fw-500',
    text: 'fs-1rem lh-1.4 ls--0.015em',
    'text-sm': 'fs-0.875rem lh-1.3 ls--0.015em',
    'text-xs': 'fs-0.75rem lh-1.3 ls--0.015em'
  }
}
