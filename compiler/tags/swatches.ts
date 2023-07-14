import { colord, extend } from 'colord'
import cmykPlugin from 'colord/plugins/cmyk'

extend([cmykPlugin])

const renderSwatches = (data: { [key: string]: any }): string => {
  if (data.color === undefined) return ''
  const colors = Object.keys(data.color).map(color => {
    const { name, hex } = data.color[color]
    const val = colord(hex)
    const rgb = val.toRgb()
    const cmyk = val.toCmyk()
    const hsl = val.toHsl()
    const hsv = val.toHsv()

    const rows = [
      { heading: 'Hex', val: val.toHex() },
      { heading: 'RGB', val: `${rgb.r}, ${rgb.g}, ${rgb.b}` },
      { heading: 'CMYK', val: `${cmyk.c}, ${cmyk.m}, ${cmyk.y}, ${cmyk.k}` },
      { heading: 'HSL', val: `${hsl.h}&deg;, ${hsl.s}, ${hsl.l}` },
      { heading: 'HSV', val: `${hsv.h}&deg;, ${hsv.s}, ${hsv.v}` }
    ]

    return `<li id="swatch-${color}" style="background: ${hex as string};"><h4>${name as string}</h4><table><tbody>${rows.map(row => `<tr><th>${row.heading}</th><td>${row.val}</td></tr>`).join('')}</tbody></table></li>`
  })

  if (colors.length < 1) return ''
  return `<ul class="swatches">${colors.join('')}</ul>`
}

export default renderSwatches
