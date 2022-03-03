"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[162],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9390:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],p={title:"Getting Started"},l=void 0,s={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"OpenWeatherMap PHP API is a PHP client for weather APIs from OpenWeatherMap.org.",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/OpenWeatherMap-PHP-API/docs/getting-started",editUrl:"https://github.com/cmfcmf/OpenWeatherMap-PHP-API/edit/master/docs/docs/getting-started.md",tags:[],version:"current",lastUpdatedBy:"Christian Flach",lastUpdatedAt:1642443495,formattedLastUpdatedAt:"1/17/2022",frontMatter:{title:"Getting Started"},sidebar:"someSidebar",next:{title:"API Key",permalink:"/OpenWeatherMap-PHP-API/docs/api-key"}},c=[{value:"PHP Requirements",id:"php-requirements",children:[],level:2},{value:"Installation",id:"installation",children:[{value:"Required PSR-17/-18 dependencies",id:"required-psr-17-18-dependencies",children:[],level:3}],level:2}],u={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"OpenWeatherMap PHP API")," is a PHP client for weather APIs from ",(0,o.kt)("a",{parentName:"p",href:"http://www.OpenWeatherMap.org"},"OpenWeatherMap.org"),"."),(0,o.kt)("p",null,"This project aims to normalise the provided data and remove inconsistencies.\nIt is ",(0,o.kt)("strong",{parentName:"p"},"not")," maintained by OpenWeatherMap and ",(0,o.kt)("strong",{parentName:"p"},"not")," an official API wrapper."),(0,o.kt)("p",null,"Please note that only the following APIs are supported:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/OpenWeatherMap-PHP-API/docs/apis/current-weather"},"Current Weather Data")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/OpenWeatherMap-PHP-API/docs/apis/weather-forecast"},"16-day/daily and 5-day/3-hourly Forecasts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/OpenWeatherMap-PHP-API/docs/apis/air-pollution"},"Air Pollution (CO, O3, SO2, NO2)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/OpenWeatherMap-PHP-API/docs/apis/uv-index"},"Ultraviolet Index"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"I am open for pull requests to add support for other APIs from OpenWeatherMap\nas long as they do not require a paid subscription. That is because I have no\nmeans to test paid APIs without paying myself.")),(0,o.kt)("h2",{id:"php-requirements"},"PHP Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"PHP 7.1 and later (including PHP 8)")," (if you are still on PHP 5.x, you'll have to use version 2.x of this library)"),(0,o.kt)("li",{parentName:"ul"},"PHP json extension"),(0,o.kt)("li",{parentName:"ul"},"PHP libxml extension"),(0,o.kt)("li",{parentName:"ul"},"PHP simplexml extension")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"This project can be found on ",(0,o.kt)("a",{parentName:"p",href:"https://packagist.org/packages/cmfcmf/openweathermap-php-api"},"Packagist"),"\nand is best installed using ",(0,o.kt)("a",{parentName:"p",href:"http://getcomposer.org"},"Composer"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'composer require "cmfcmf/openweathermap-php-api"\n')),(0,o.kt)("h3",{id:"required-psr-17-18-dependencies"},"Required PSR-17/-18 dependencies"),(0,o.kt)("p",null,"You will also need to have two additional dependencies installed:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A ",(0,o.kt)("a",{parentName:"li",href:"https://www.php-fig.org/psr/psr-17/"},"PSR-17")," compatible HTTP factory implementation."),(0,o.kt)("li",{parentName:"ol"},"A ",(0,o.kt)("a",{parentName:"li",href:"https://www.php-fig.org/psr/psr-18/"},"PSR-18")," compatible HTTP client implementation.")),(0,o.kt)("p",null,"I you are integrating this project into a PHP framework, it most likely already comes with these.\nOtherwise, go through the lists of implementations on Packagist and choose ones that fit your project:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://packagist.org/providers/psr/http-factory-implementation"},"List of PSR-17-compatible implementations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://packagist.org/providers/psr/http-client-implementation"},"List of PSR-18-compatible implementations"))),(0,o.kt)("p",null,"If you don't know which to choose, try these:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'composer require "http-interop/http-factory-guzzle:^1.0" \\\n                "php-http/guzzle6-adapter:^2.0 || ^1.0"\n')))}m.isMDXComponent=!0}}]);