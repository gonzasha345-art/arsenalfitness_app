
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/client"
  },
  {
    "renderMode": 2,
    "route": "/trainer"
  },
  {
    "renderMode": 2,
    "route": "/booking"
  },
  {
    "renderMode": 2,
    "route": "/purchase"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11263, hash: '0298eeb9e6465cfd05ff9684047e689107e38fd2fd1b0b6810446170d4897813', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 955, hash: 'e411c417017bfd72ee593db0d1e1dceac13dc5c18e6320db4dbf1d3dde9ccac9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'client/index.html': {size: 18578, hash: 'f69ae9e53721ea1b35037d5a7acaa3cc4c59d67a4422d7157bb98cf4f248f07a', text: () => import('./assets-chunks/client_index_html.mjs').then(m => m.default)},
    'purchase/index.html': {size: 18072, hash: '572f91294d897b155e2f287a588dea5ce2e2301358bd5c11ab88163f75363e25', text: () => import('./assets-chunks/purchase_index_html.mjs').then(m => m.default)},
    'index.html': {size: 16553, hash: 'b812e85cb7fa536cf5be6e5b305c722db2f7409297b5571f9d4ae0a68aa913c6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'trainer/index.html': {size: 20294, hash: 'e1895c24789c8a6b6047af07b1d1bcf0876f22aba5776c44072470b3563cfca3', text: () => import('./assets-chunks/trainer_index_html.mjs').then(m => m.default)},
    'booking/index.html': {size: 17025, hash: 'ac881897bd2e27ee0f81daaa4db7e3c8a3653d1320974cdaee15e017b79c9bba', text: () => import('./assets-chunks/booking_index_html.mjs').then(m => m.default)},
    'styles-FCWHJG6K.css': {size: 10830, hash: 'P1r1RaqLeSc', text: () => import('./assets-chunks/styles-FCWHJG6K_css.mjs').then(m => m.default)}
  },
};
