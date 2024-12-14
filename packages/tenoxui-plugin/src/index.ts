import type { CoreConfig } from '@tenoxui/core/full'
import { border } from './border'
import { boxShadow } from './boxShadow'

export const plugins: Record<string, CoreConfig> = {
  border,
  boxShadow
}

export default plugins
