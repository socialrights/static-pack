// ## vendors
import 'bootstrap'
import Prism from 'prismjs'


// ## originals
import './scripts/index'
import './styles/index.styl'

Prism.highlightAll()

// svg
function requireAll(r) {
  r.keys().forEach(r)
}
requireAll(require.context('./images/', true, /\.svg$/))
