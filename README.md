<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @Date: 2022-03-28 16:09:55
 * @LastEditors: 毅源泉科技
 * @LastEditTime: 2022-03-28 23:34:26
-->

## nuxt2+ssr
## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev 

# build for production and launch server
$ npm run build 
$ npm run start

# generate static project
$ npm run generate
```


## 使用说明

修改.env 文件，添加自己的域名

整合 vue + nuxt + axios + vuex + node/koa 一个基于 Nuxt +pm2 守护进程的 SSR 服务器端渲染官网

目录结构

```
├── assets css，图片等资源都在这
├── components 组件相关
├── locales 多语言
├── layouts 路由布局
├── middleware 中间件
├── pages 路由页面
├── static 静态资源
├── server node+koa
├── store vuex 相关
├── nuxt.config.js nuxt 相关配置
├── package.json 依赖相关
├── README.md 项目介绍
```


## 一、项目简单介绍

1、增加网站 seo、统计脚本代码 （这里以谷歌统计为例）

（1) 在 plugins 目录下创建 ga.js 和gtm.js(谷歌标签管理器)
ga.js

<script>       
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
</script>


gtm.js


<script>
    export default () => {
//   if (!gtmKey) { // In case I have other pages not in the switch statement above
//     return;
//   }
  /* xxxx 需要申请
  ** Include Google Tag Manager
  */
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','xxxx');
</script>

(2) 添加到 nuxt.config.js 文件 plugins 下

```
    plugins:[
        { src: '@/plugins/ga',mode: 'client' }, //只在客户端生效
        { src: '@/plugins/gtm', mode: 'client' },
    ]
``` 

## 二、PC端项目宝塔部署(重点)

    宝塔安装很方便，傻瓜式一步到位试
    记得安装node.js 和 pm2 
    ![Image text](https://gitee.com/bruce168/pics/raw/master/1.png)

1、项目打包
    第一步、npm run build

    第二步、把文件的.nuxt,static,server,package.json,nuxt.config.js,这五个文件（夹）放到服务器目录文件下，为了防止跨域和产生的不必要麻烦，这里将前端代码和后端代码区分开，分别放在不同域名的服务器站点根目录下（也可以在同一站点下部署）

    ![Image text](https://gitee.com/bruce168/pics/raw/master/0.png)

    第三步、用cmd进入目录文件夹，安装依赖，npm install

    第四步、npm run start 此时运行的是 http://localhost:3000 说明依赖安装成功;

2、Nginx配置
    ![Image text](https://gitee.com/bruce168/pics/raw/master/3.png)
    ![Image text](https://gitee.com/bruce168/pics/raw/master/4.png)


    upstream canada {
        server 127.0.0.1:30020;
        keepalive 64;
    }
    server {
        listen 80;
        server_name test.com www.test.com;
        rewrite ^(.*) https://www.test.com permanent;
    }
    server
    {
    # listen 80;
        listen 443 ssl http2;
            listen 88;
        server_name test.com www.test.com;
        index index.php index.html index.htm default.php default.htm default.html;
        root /www/wwwroot/test.com/home;
        location / {
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;  
            proxy_set_header Connection "upgrade";
            proxy_set_header Host $host;
            proxy_set_header X-Nginx-Proxy true;
            proxy_cache_bypass $http_upgrade;
            proxy_pass http://canada; #反向代理
        }
        #SSL-END
        
        #ERROR-PAGE-START  错误页配置，可以注释、删除或修改
        #error_page 404 /404.html;
        #error_page 502 /502.html;
        #ERROR-PAGE-END
        
        #PHP-INFO-START  PHP引用配置，可以注释或修改
        include enable-php-72.conf;
        #PHP-INFO-END
        
        #REWRITE-START URL重写规则引用,修改后将导致面板设置的伪静态规则失效
        include /www/server/panel/vhost/rewrite/test.com.conf;
        #REWRITE-END
        
        #禁止访问的文件或目录
        location ~ ^/(\.user.ini|\.htaccess|\.git|\.svn|\.project|LICENSE|README.md)
        {
            return 404;
        }
        
        #一键申请SSL证书验证目录相关设置
        location ~ \.well-known{
            allow all;
        }
        
        location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
        {
            expires      30d;
            error_log /dev/null;
            proxy_pass http://canada; #反向代理
            access_log /dev/null;
        }
        
        location ~ .*\.(js|css)?$
        {
            expires      12h;
            error_log /dev/null;
            proxy_pass http://canada; #反向代理
            access_log /dev/null; 
        }

        #如项目用到音视频可添加此项
        location ~ .*\.(mp4|mp3)?$
        {
            expires      12h;
            error_log /dev/null;
            proxy_pass http://canada; #反向代理
            access_log /dev/null; 
        }
        access_log  /www/wwwlogs/test.com.log;
        error_log  /www/wwwlogs/test.com.error.log;
    }

    
    以上是nginx的配置内容，除了原有内容外，标红部分为新添加的内容
    
3、PM2守护程序
    当退出npm run start 后，我们项目就访问不了，这时候pm2就排上用场了

    (1) 确保pm2已安装

    (2) pm2 start npm --name "xxx" -- run start 其中xxx 为package.json文件里面的name

    (3) pm2其他命令

        pm2 list                             #显示所以pm2 进程
        pm2 show 0                           #查看进程详细信息，0为PM2进程id 
        pm2 stop all                         #停止PM2列表中所有的进程
        pm2 stop 0                           #停止PM2列表中进程为0的进程
        pm2 reload all                       #重载PM2列表中所有的进程
        pm2 reload 0                         #重载PM2列表中进程为0的进程
        pm2 delete 0                         #删除PM2列表中进程为0的进程
        pm2 delete all                       #删除PM2列表中所有的进程
        pm2 restart 0                        #重启pm2对应的id
        pm2 restart all                      #重启pm2所有进程

    (4) 每次修改内容上传后记得 pm2 restart 0 重启进程


nuxt项目部署就完成

## 最后

文章到这就要结束了。

如果大家觉得这个项目有点意思，欢迎 star。谢谢， O(∩_∩)O~


