import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/server',
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
})
