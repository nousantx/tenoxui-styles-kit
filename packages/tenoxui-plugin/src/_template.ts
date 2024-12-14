import { CoreConfig } from '@tenoxui/core/full'
import { createProperty } from '@nousantx/someutils'

export const _template: CoreConfig = {
  property: {
    ...createProperty(
      {
        // colored properties goes here
        // it will use custom value and support the color from tenoxui values
        bg: 'backgroundColor'
      },
      'rgb({0} / var(--{1}-opacity, 1))'
    ),
    // other properties
    bg: 'background'
  }
}
