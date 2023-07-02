import colorProcessor, { isColorData } from './sass-processors/colors.js'
import fontProcessor, { isFontData } from './sass-processors/fonts.js'
import spacingProcessor from './sass-processors/spacing.js'
import defaultProcessor from './sass-processors/default.js'

const generateSass = (name: string, data: { [key: string]: any }): string[] => {
  const lines = []
  name = name === 'breakpoints' ? 'spacing' : name

  for (const key in data) {
    switch (name) {
      case 'color':
        if (isColorData(data[key])) lines.push(colorProcessor(key, data[key])); break
      case 'fonts':
        if (isFontData(data[key])) lines.push(fontProcessor(key, data[key])); break
      case 'spacing':
        lines.push(spacingProcessor(key, data[key])); break
      default:
        lines.push(defaultProcessor(key, data[key])); break
    }
  }
  return lines
}

export default generateSass
