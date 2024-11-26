// index.ts
import { merge, transformClasses } from '@nousantx/someutils'
import type { Classes } from '@tenoxui/core'
import tx from './utils/assigner'

const button = tx.button()

export const stringTemplate: string = `
  ${button.template}
  (.badge): bg-red-400;
`

export const styles: Classes = merge(button.utility, transformClasses(button.classes))

export default {
  stringTemplate,
  styles
}
