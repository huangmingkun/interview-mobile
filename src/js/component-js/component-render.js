var child = {
  render (h) {
    // console.log('hhhhhh', h)
    const tag = ['div', 'p', 'strong', 'h1', 'h2', 'textarea'][this.level - 1]
    return h(tag, this.$slots.default)
  },
  props: {
    level: { type: Number, required: true }
  }
}
export default child
