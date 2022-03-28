//这句是只有生产环境才会统计，为了方便测试一开始从测试环境也要使用
if (process.client && process.env.NODE_ENV === 'production') {
    // if (process.client) {
        /*
         ** Google 统计分析脚本
         */
        (function (i, s, o, g, r, a, m) {
          i.GoogleAnalyticsObject = r;
          (i[r] =
            i[r] ||
            function () {
              ;
              (i[r].q = i[r].q || []).push(arguments)
            }),
          (i[r].l = 1 * new Date());
          (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0])
          a.async = 1
          a.src = g
          m.parentNode.insertBefore(a, m)
        })(
          window,
          document,
          'script',
          'https://www.google-analytics.com/analytics.js',
          'ga'
        )
        /*
         ** 当前页的访问统计
         */
        ga('create', 'GTM-WR9L2WN', 'auto')     //这里要填写你自己的google代码  code
      }
      
      export default ({
        app: {
          router
        },
        store,
      }) => {
        /*
         ** 每次路由变更时进行pv统计
         */
        //   if (process.client && process.env.NODE_ENV === 'production') {
        if (process.client) {
          router.afterEach((to, from) => {
            /*
             ** 告诉 GA 增加一个 PV
             */
            ga('set', 'page', to.fullPath)
            ga('send', 'pageview')
            ga('require', 'ec');
          })
        }
      
      }
      
      