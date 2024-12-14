import fs from 'node:fs'
import path from 'node:path'
import { createConfig } from '../rollup.config.base.js'

const packageJson = JSON.parse(fs.readFileSync(path.resolve('package.json'), 'utf-8'))
const name = '__nsx_tui_styles'
const banner = `/*!
 * ${packageJson.name} v${packageJson.version} | ${packageJson.license} License
 *
 * Copyright (c) 2024-present NOuSantx <nousantx@gmail.com>
 *
 * Built Date: ${new Date().toString()}
 */`

const config = createConfig({
  input: './src/index.ts',
  name,
  banner,
  sourcemap: true
})

export default config
