import { createComponents } from './utils/create-components'
import styles from './styles'

export const components = createComponents(styles)

export const templates = {
  all: Object.values(components).reduce<Record<string, string>>((acc, curr) => {
    return { ...acc, ...curr }
  }, {}),
  ...Object.entries(components).reduce(
    (acc, [key, value]) => {
      acc[key as keyof typeof styles] = Object.values(value).join(' ')
      return acc
    },
    {} as Record<keyof typeof styles, string>
  )
}

export default { templates, components }
