const selector = (def: string): Element[] | null => {
  const elems = document.querySelectorAll(def)
  return elems.length === 0 ? null : Array.from(elems)
}

export default selector
