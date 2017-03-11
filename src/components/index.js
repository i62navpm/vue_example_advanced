const requires = require.context('./', false, /\.vue$/)
const obj = {}

requires.keys().forEach((filepath) => {
  let [, filename] = filepath.match(/\/([^.]+?)\./) || []
  obj[filename] = requires(filepath)
})

export default obj
