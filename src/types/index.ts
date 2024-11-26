import type { Classes, CSSPropertyOrVariable } from '@tenoxui/core'

export type PropertyBasedClasses = {
  [className: string]: {
    [property in CSSPropertyOrVariable]?: string
  }
}

export interface UITypes {
  template: string
  utility: Classes
  classes: PropertyBasedClasses
}
