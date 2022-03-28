// plugins/gtm.js

// let gtmKey="GTM-WR9L2WN";

// In this example I care about the page title but you can use other properties if you'd like
// switch(document.title) {
//   case 'Title 1':
//     gtmKey = 'GTM-WR9L2WN';
//     break;
//   case 'Title 2':
//     gtmKey = 'GTM-XXXXXX2';
//     break;
//   default:
//     break;
// }

export default () => {
//   if (!gtmKey) { // In case I have other pages not in the switch statement above
//     return;
//   }
  /*
  ** Include Google Tag Manager
  */
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-WR9L2WN');
//   (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//     j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//     'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//   })(window,document,'script','dataLayer', gtmKey);
}