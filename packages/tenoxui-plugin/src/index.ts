import type { CoreConfig } from '@tenoxui/core/full'
import { border } from './border'
import { boxShadow } from './boxShadow'
import { ring } from './ring'
import { gridSystem } from './grid'
import { transform } from './transform'
import { filter } from './filter'

export const plugins: Record<string, CoreConfig> = {
  border,
  boxShadow,
  ring,
  gridSystem,
  transform,
  filter
}

export default { border, boxShadow, ring, gridSystem, transform, filter }
