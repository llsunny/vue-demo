export default {
  render(h) {
    return (
      <div>{this.msg}</div>
    )
  },
  data() {
    const data = this.data || []
    return {
      msg: 'test jsx'
    }
  }
}