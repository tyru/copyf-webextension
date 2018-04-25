import html from 'escape-html'
import shrink from './shrink'


function mapped(f) {
  return ary => ary.map(f);
}


export default {
  html: mapped(html),

  quote: mapped(JSON.stringify),

  reverse: ary => [].concat(ary).reverse(),

  shrink: mapped(shrink),

  sort: ary => [].concat(ary).sort(),

  trim: mapped(it => it.trim()),

  unique: ary => {
    let has = {};
    let result = [];
    ary.forEach(it => has[it] || (has[it] = true, result.push(it)));
    return result;
  },
}
