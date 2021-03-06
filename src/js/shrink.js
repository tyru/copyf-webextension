
import Amazon from 'amazon-helpers'
import URL from 'url-parse'


function aliexpress(url) {
  if (!/^.+\.aliexpress.com$/.test(url.hostname))
    return;

  let [_, productId] = url.pathname.match(/^\/item\/(?:[^\/]+\/)?(.+)\.html$/) || [];
  if (!productId)
    return;

  return 'https://www.aliexpress.com/item/-/' + productId + '.html';
}

function mercari(url) {
  if (!/^item\.mercari\.com$/.test(url.hostname))
    return;

  return 'https://item.mercari.com' + url.pathname;
}

function raw(f) {
  return url => f(url.href)
}


const shrinkers = [
  raw(Amazon.getProductUrl),
  aliexpress,
  mercari,
];


export default url => {
  let u = new URL(url);

  for (let s of shrinkers) {
    let result = s(u);
    if (result)
      return result;
  }

  return url;
}
