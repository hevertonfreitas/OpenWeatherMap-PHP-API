"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[911],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return c}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),k=p(a),c=r,s=k["".concat(d,".").concat(c)]||k[c]||u[c]||l;return a?n.createElement(s,i(i({ref:e},m),{},{components:a})):n.createElement(s,i({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1379:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return k}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={title:"Weather Forecast API",sidebar_label:"Weather Forecast"},d=void 0,p={unversionedId:"apis/weather-forecast",id:"apis/weather-forecast",title:"Weather Forecast API",description:"This API allows you to retrieve 16-day/daily and 5-day/3-hourly weather forecasts.",source:"@site/docs/apis/weather-forecast.md",sourceDirName:"apis",slug:"/apis/weather-forecast",permalink:"/OpenWeatherMap-PHP-API/docs/apis/weather-forecast",editUrl:"https://github.com/cmfcmf/OpenWeatherMap-PHP-API/edit/master/docs/docs/apis/weather-forecast.md",tags:[],version:"current",lastUpdatedBy:"Christian Flach",lastUpdatedAt:1580329038,formattedLastUpdatedAt:"1/29/2020",frontMatter:{title:"Weather Forecast API",sidebar_label:"Weather Forecast"},sidebar:"someSidebar",previous:{title:"Current Weather",permalink:"/OpenWeatherMap-PHP-API/docs/apis/current-weather"},next:{title:"Air Pollution",permalink:"/OpenWeatherMap-PHP-API/docs/apis/air-pollution"}},m=[{value:"<code>$query</code> parameter",id:"query-parameter",children:[{value:"by city name",id:"by-city-name",children:[],level:3},{value:"by city id",id:"by-city-id",children:[],level:3},{value:"by zip code",id:"by-zip-code",children:[],level:3},{value:"by coordinates",id:"by-coordinates",children:[],level:3}],level:2},{value:"<code>$forecasts</code> object",id:"forecasts-object",children:[{value:"<code>$forecast</code> object",id:"forecast-object",children:[],level:3},{value:"only for 5-day/3-hourly forecasts",id:"only-for-5-day3-hourly-forecasts",children:[],level:3},{value:"only for 16-day/hourly forecasts",id:"only-for-16-dayhourly-forecasts",children:[],level:3}],level:2}],u={toc:m};function k(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This API allows you to retrieve 16-day/daily and 5-day/3-hourly weather forecasts."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Corresponding OpenWeatherMap Documentation:"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://openweathermap.org/forecast5"},"5-day/3-hourly Forecasts")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://openweathermap.org/forecast16"},"16-day/daily Forecasts")))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"$owm->getWeatherForecast()")," method takes the following parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$query")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mixed")),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"See below")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$units")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"imperial"'),"|",(0,l.kt)("inlineCode",{parentName:"td"},'"metric"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"imperial"')),(0,l.kt)("td",{parentName:"tr",align:null},"Units to use")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$lang")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"en")),(0,l.kt)("td",{parentName:"tr",align:null},"One of the languages listed at the very bottom of ",(0,l.kt)("a",{parentName:"td",href:"https://openweathermap.org/forecast16#multi"},"the official documentation"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$appid")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''")),(0,l.kt)("td",{parentName:"tr",align:null},"Deprecated, always set to ",(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$days")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int")," (1 - 16)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")),(0,l.kt)("td",{parentName:"tr",align:null},"Number of days to retrieve the forecast for. If ",(0,l.kt)("inlineCode",{parentName:"td"},"$days")," is between 1 and 5, the 5-day/3-hourly forecast API is used. If ",(0,l.kt)("inlineCode",{parentName:"td"},"$days")," is between 6 and 16, the 16-day/daily forecast API is used.")))),(0,l.kt)("p",null,"You can use ",(0,l.kt)("inlineCode",{parentName:"p"},"->getDailyWeatherForecast()")," if instead if you want to retrieve a daily forecast even when a 3-horuly forecast is available."),(0,l.kt)("h2",{id:"query-parameter"},(0,l.kt)("inlineCode",{parentName:"h2"},"$query")," parameter"),(0,l.kt)("p",null,"The first parameter determines the location to get weather data from.\nSeveral possible approaches are possible:"),(0,l.kt)("h3",{id:"by-city-name"},"by city name"),(0,l.kt)("p",null,"Specifying the country is optional."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$forecasts = $owm->getWeatherForecast('Berlin,DE', $units, $lang, '', $days);\n")),(0,l.kt)("h3",{id:"by-city-id"},"by city id"),(0,l.kt)("p",null,"One city id:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$forecasts = $owm->getWeatherForecast(2172797, $units, $lang, '', $days);\n")),(0,l.kt)("h3",{id:"by-zip-code"},"by zip code"),(0,l.kt)("p",null,"Specifying the country is optional."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"// Hyderabad, India\n$forecasts = $owm->getWeatherForecast('zip:500001,IN', $units, $lang, '', $days);\n")),(0,l.kt)("h3",{id:"by-coordinates"},"by coordinates"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$forecasts = $owm->getWeatherForecast(['lat' => 77.73038, 'lon' => 41.89604],\n                                     $units, $lang, '', $days);\n")),(0,l.kt)("h2",{id:"forecasts-object"},(0,l.kt)("inlineCode",{parentName:"h2"},"$forecasts")," object"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"$forecasts")," is an instance of ",(0,l.kt)("inlineCode",{parentName:"p"},"Cmfcmf\\OpenWeatherMap\\WeatherForecast"),".\nIt provides the following data:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lastUpdate")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\\u1e10ateTimeInterface")),(0,l.kt)("td",{parentName:"tr",align:null},"When the data was last updated")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"city->id")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:null},"Internal city id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"city->name")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the city")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"city->country")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"City country code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"city->timezone")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\DateTimeZone"),"|",(0,l.kt)("inlineCode",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null},"City timezone")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"city->lon")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"float")),(0,l.kt)("td",{parentName:"tr",align:null},"City longitude")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"city->lat")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"float")),(0,l.kt)("td",{parentName:"tr",align:null},"City latitude")))),(0,l.kt)("p",null,"To retrieve the forecasts, iterate over the object:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"foreach ($forecasts as $forecast) {\n    // Do something\n}\n")),(0,l.kt)("h3",{id:"forecast-object"},(0,l.kt)("inlineCode",{parentName:"h3"},"$forecast")," object"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"$forecast")," is an instance of ",(0,l.kt)("inlineCode",{parentName:"p"},"Cmfcmf\\OpenWeatherMap\\Forecast")," that extends the ",(0,l.kt)("inlineCode",{parentName:"p"},"Cmfcmf\\OpenWeatherMap\\CurrentWeather")," object."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"time->day")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\DateTimeInterface")),(0,l.kt)("td",{parentName:"tr",align:null},"The day of the forecast")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"time->from")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\DateTimeInterface")),(0,l.kt)("td",{parentName:"tr",align:null},"The exact start time of the forecast. For 16-day/daily forecasts, this corresponds to ",(0,l.kt)("inlineCode",{parentName:"td"},"time->day"),". For 5-day/3-hourly forecasts, it corresponds to the start of the 3-hour window.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"time->to")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\DateTimeInterface")),(0,l.kt)("td",{parentName:"tr",align:null},"The exact end time of the forecast. For 16-day/daily forecasts, this corresponds to ",(0,l.kt)("inlineCode",{parentName:"td"},"time->day")," at ",(0,l.kt)("inlineCode",{parentName:"td"},"23:59:59"),". For 5-day/3-hourly forecasts, it corresponds to the end of the 3-hour window.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"...")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"...")),(0,l.kt)("td",{parentName:"tr",align:null},"All other properties from the ",(0,l.kt)("inlineCode",{parentName:"td"},"CurrentWeather")," object, as described ",(0,l.kt)("a",{parentName:"td",href:"/OpenWeatherMap-PHP-API/docs/apis/current-weather#weather-object"},"here"),".")))),(0,l.kt)("h3",{id:"only-for-5-day3-hourly-forecasts"},"only for 5-day/3-hourly forecasts"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"temperature->now")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Unit")),(0,l.kt)("td",{parentName:"tr",align:null},"Note: This should be named ",(0,l.kt)("inlineCode",{parentName:"td"},"temperature->avg")," and is only named ",(0,l.kt)("inlineCode",{parentName:"td"},"temperature->now")," for backwards compatibility! Returns the average temperature for the given location (i.e, a big city might have multiple temperature measurement stations)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"temperature->min")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Unit")),(0,l.kt)("td",{parentName:"tr",align:null},"Minimum temperature for the given locaiton")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"temperature->max")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Unit")),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum temperature for the given locaiton")))),(0,l.kt)("h3",{id:"only-for-16-dayhourly-forecasts"},"only for 16-day/hourly forecasts"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"temperature->morning")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Unit")),(0,l.kt)("td",{parentName:"tr",align:null},"Temperature at morning")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"temperature->now")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Unit")),(0,l.kt)("td",{parentName:"tr",align:null},"Temperature at day")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"temperature->evening")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Unit")),(0,l.kt)("td",{parentName:"tr",align:null},"Temperature at evening")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"temperature->night")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Unit")),(0,l.kt)("td",{parentName:"tr",align:null},"Temperature at night")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"temperature->min")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Unit")),(0,l.kt)("td",{parentName:"tr",align:null},"Minimum temperature at day")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"temperature->max")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Unit")),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum temperature at day")))))}k.isMDXComponent=!0}}]);