importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/042f63fda3d4e5560a37.js",
    "revision": "39a059f4c4aedb967531aa693eeb59fe"
  },
  {
    "url": "/_nuxt/1ee381c24e3745a24332.js",
    "revision": "9c22e66e67346e0e8c084e174c7cf1c3"
  },
  {
    "url": "/_nuxt/1f7a535e6ece4eda0dac.js",
    "revision": "e198a02a39eae09ce9361478f77de40d"
  },
  {
    "url": "/_nuxt/238827ae6de5a677747e.js",
    "revision": "3a786a3c050116efdfc280f9f263ee8c"
  },
  {
    "url": "/_nuxt/4df9f0f686a714c8a245.js",
    "revision": "18ea8db49971df2c41539e2c36d00a23"
  },
  {
    "url": "/_nuxt/59c2df84a026fd7a0a92.js",
    "revision": "2521df241f3970ea1b65fa0f0298c9b5"
  },
  {
    "url": "/_nuxt/79543fd6e941adc9c6b5.js",
    "revision": "d812761aa25c66cca5d9eb562a0040ac"
  },
  {
    "url": "/_nuxt/8f6262485cd6eae0b6f3.js",
    "revision": "dfab552feaeb007b184b3c7e854df5a2"
  },
  {
    "url": "/_nuxt/99e198512e93c124d42a.js",
    "revision": "5a409004ac43e1c2bb67121022e6fd8f"
  },
  {
    "url": "/_nuxt/9fdae26bb719ba3f625c.js",
    "revision": "2af467ea2b18af5e5d2d013421ded994"
  },
  {
    "url": "/_nuxt/acf2be4dfbfdb5e44720.js",
    "revision": "6072fec4ae6bb1ce1698677269b85c01"
  },
  {
    "url": "/_nuxt/c3c78a8b806d19188b09.js",
    "revision": "2a6ad35071dc1cb6e1e2f31bbf0b49cc"
  },
  {
    "url": "/_nuxt/ce904e9fa6381c772994.js",
    "revision": "e66ac924d48833354901a16f87d4ec37"
  },
  {
    "url": "/_nuxt/d5da4a11cfaf3285692f.js",
    "revision": "2774eb8fe892f4c04929d928b3406107"
  },
  {
    "url": "/_nuxt/d6a16e5a9414fb72f363.js",
    "revision": "6f91f09f1749d1e4bd1a67a0817421cb"
  }
], {
  "cacheId": "multisender.app",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')
