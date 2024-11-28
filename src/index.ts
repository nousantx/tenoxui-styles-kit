import { toChildString } from '@nousantx/someutils'
import { createComponents } from './utils/create-components'
import styles from './styles'

const components = createComponents(styles)

export const templates = {
  // all combined strings
  all: toChildString(
    Object.values(components).reduce<Record<string, string>>((acc, curr) => {
      return { ...acc, ...curr }
    }, {})
  ),
  // each strings generated
  ...Object.entries(components).reduce(
    (acc, [key, value]) => {
      acc[key as keyof typeof styles] = toChildString(value)
      return acc
    },
    {} as Record<keyof typeof styles, string>
  )
}

export default templates
