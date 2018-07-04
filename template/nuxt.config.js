module.exports = {
  head: {
    title: '{{ name }}',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    'vue-flexboxgrid/dist/vue-flexboxgrid.css',
    '@/assets/scss/app.scss'
  ],
  loading: {
    color: '#744d82'
  },
  plugins: [
    '@/plugins/flexboxgrid.js'
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  // Axios options (https://axios.nuxtjs.org/options.html)
  axios: {
    prefix: '/api',
    browserBaseURL: '/api',
    credentials: true
  },
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
