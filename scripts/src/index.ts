import selector from './selector'

interface ModuleConfig {
  elems: Element[] | null
  name: string
}

const modules: ModuleConfig[] = [
  { elems: selector('body'), name: 'theme-picker' },
  { elems: selector('code.block'), name: 'code' },
  { elems: selector('section.component[data-component-category]'), name: 'component-navigator' }
]

const loadModules = async (configs: ModuleConfig[]): Promise<void> => {
  for (const { elems, name } of configs) {
    if (elems === null) continue
    const module = await import(`./${name}/index`)
    module.default(elems)
  }
}

void loadModules(modules)
