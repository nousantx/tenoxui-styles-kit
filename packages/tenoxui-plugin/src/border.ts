import { CoreConfig } from '@tenoxui/core/full'
import { createProperty } from '@nousantx/someutils'

export const border: CoreConfig = {
  property: {
    // border color
    ...createProperty(
      {
        bc: 'borderColor',
        'bc-t': 'borderTopColor',
        'bc-b': 'borderBottomColor',
        'bc-l': 'borderLeftColor',
        'bc-r': 'borderRightColor'
      },
      'rgb({0} / var(--{1}-opacity, 1))'
    ),
    // border property
    bdr: 'border',
    'bdr-t': 'borderTop',
    'bdr-r': 'borderRight',
    'bdr-b': 'borderBottom',
    'bdr-l': 'borderLeft',
    'bdr-img': 'borderImage',
    // border width
    bw: 'borderWidth',
    'bw-t': 'borderTopWidth',
    'bw-r': 'borderRightWidth',
    'bw-b': 'borderBottomWidth',
    'bw-l': 'borderLeftWidth',
    // border style
    bs: 'borderStyle',
    'bs-t': 'borderTopStyle',
    'bs-b': 'borderBottomStyle',
    'bs-l': 'borderLeftStyle',
    'bs-r': 'borderRightStyle',
    // border Radius
    br: 'borderRadius',
    'br-t': ['borderTopRightRadius', 'borderTopLeftRadius'],
    'br-b': ['borderBottomRightRadius', 'borderBottomLeftRadius'],
    'br-l': ['borderBottomLeftRadius', 'borderTopLeftRadius'],
    'br-r': ['borderBottomRightRadius', 'borderTopRightRadius'],
    'br-tl': 'borderTopLeftRadius',
    'br-tr': 'borderTopRightRadius',
    'br-bl': 'borderBottomLeftRadius',
    'br-br': 'borderBottomRightRadius',
    // outline
    ol: 'outline',
    'ol-w': 'outlineWidth',
    'ol-c': 'outlineColor',
    'ol-s': 'outlineStyle'
  }
}
