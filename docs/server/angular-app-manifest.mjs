
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/arsenalfitness_app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/arsenalfitness_app"
  },
  {
    "renderMode": 2,
    "route": "/arsenalfitness_app/client"
  },
  {
    "renderMode": 2,
    "route": "/arsenalfitness_app/trainer"
  },
  {
    "renderMode": 2,
    "route": "/arsenalfitness_app/booking"
  },
  {
    "renderMode": 2,
    "route": "/arsenalfitness_app/purchase"
  },
  {
    "renderMode": 2,
    "redirectTo": "/arsenalfitness_app",
    "route": "/arsenalfitness_app/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11282, hash: '118ac26fec178fb59bafecb23f8db52c9fd3c6b7b5bc8c9b5d17b8af7a6bb3e8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 974, hash: 'ecfad82a15f873cce77e63bce9476b7a8aa3c5c4135ebdd46a2b5058e3a393a9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 16610, hash: '9a5f48a84e5cc9f511246e3ff2c582bdee425a82decca22a770ff2767b067129', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'client/index.html': {size: 18635, hash: 'c77026df7d1bec339b4be0c0157b73866d9572b8b7caa8fa064dd9bccfb6bed6', text: () => import('./assets-chunks/client_index_html.mjs').then(m => m.default)},
    'booking/index.html': {size: 17044, hash: '62bd40a3c2e17b1f76f03e32c26226574f2d01b1ace899c8e5e993070d4e2db0', text: () => import('./assets-chunks/booking_index_html.mjs').then(m => m.default)},
    'purchase/index.html': {size: 18091, hash: '6546ad2d051aed888b73e73b67ad723bfc411ab8729ed90d25c53766e21445f7', text: () => import('./assets-chunks/purchase_index_html.mjs').then(m => m.default)},
    'trainer/index.html': {size: 20313, hash: 'eb96a29ad6af281c51cb343ee5459a8ed118af982f51d253efcb92b98bfa416c', text: () => import('./assets-chunks/trainer_index_html.mjs').then(m => m.default)},
    'styles-FCWHJG6K.css': {size: 10830, hash: 'P1r1RaqLeSc', text: () => import('./assets-chunks/styles-FCWHJG6K_css.mjs').then(m => m.default)}
  },
};
