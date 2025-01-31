
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://kpmmahesh75@gmail.com.github.io/angularWebAPI',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/https://kpmmahesh75@gmail.com.github.io/angularWebAPI"
  },
  {
    "renderMode": 2,
    "route": "/https://kpmmahesh75@gmail.com.github.io/angularWebAPI/book"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1445, hash: '6109be426a06827474f8de446353e5ce005366670bcd7fcbaf113714328a1b4a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1072, hash: '08a224f1c6367850e709ec0961860a96ff920707bafd6db57c21d58071b2e4d3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 1502, hash: 'a48645807053ab8d6cb7b3785669d1e40b7512488acab9dddd1f0e065f294ac6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'book/index.html': {size: 1502, hash: 'a48645807053ab8d6cb7b3785669d1e40b7512488acab9dddd1f0e065f294ac6', text: () => import('./assets-chunks/book_index_html.mjs').then(m => m.default)},
    'styles-ICLARIZ6.css': {size: 120474, hash: '7/hwD/b76Sc', text: () => import('./assets-chunks/styles-ICLARIZ6_css.mjs').then(m => m.default)}
  },
};
