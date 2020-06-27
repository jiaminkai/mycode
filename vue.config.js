module.exports = {
    devServer:{
      proxy: {
        '/api': {
          //设置你调用的接口域名和端口号 别忘了加http
          target: 'http://118.25.222.68:5757/heyushuo',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      
}
    }
   

  }