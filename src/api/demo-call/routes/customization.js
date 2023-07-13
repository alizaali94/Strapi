module.exports = {
  routes: [
    {
      method : 'POST',
      path   : '/customization',
      handler: 'demo-call.CustomSettings',
      config: {
        auth: false
      }
    }
  ]
}
