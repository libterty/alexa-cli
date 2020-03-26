# AlEXA Command LINE TOOL

- Feature: Allow you to search top ranking websites
- Feature: Allow you to search top ranking websites by differenct Country

> :warning: Due to Alexa API charge every unit per 0.025 USD, we didn't actually connect to its API. We use local static file instead. However, we did provide the function in `country/index.js` where you can find fetch request being commented. Feel free to revise it if needed.

## How to Install

```bash
npm install alexa -g
```

## How to Use

#### Search by Rate

> :warning: Currently the max request for searching by Rate is `40`

```bash
alexa top -t 20 || alexa top --top 20
```

> response

```
show top 20 sites URL on www.alexa.com. [
  { rank: '1', url: 'Google.com' },
  { rank: '2', url: 'Youtube.com' },
  { rank: '3', url: 'Tmall.com' },
  { rank: '4', url: 'Facebook.com' },
  { rank: '5', url: 'Baidu.com' },
  { rank: '6', url: 'Qq.com' },
  { rank: '7', url: 'Sohu.com' },
  { rank: '8', url: 'Login.tmall.com' },
  { rank: '9', url: 'Taobao.com' },
  { rank: '10', url: 'Yahoo.com' },
  { rank: '11', url: '360.cn' },
  { rank: '12', url: 'Jd.com' },
  { rank: '13', url: 'Wikipedia.org' },
  { rank: '14', url: 'Amazon.com' },
  { rank: '15', url: 'Sina.com.cn' },
  { rank: '16', url: 'Weibo.com' },
  { rank: '17', url: 'Pages.tmall.com' },
  { rank: '18', url: 'Live.com' },
  { rank: '19', url: 'Reddit.com' },
  { rank: '20', url: 'Netflix.com' }
]
```

#### Search by Country

> :warning: Currently the options for searching by Country only support `AL` && `DE`

```bash
alexa country -c DE || alexa country --country DE
```

> response

```
Top 20 sites URL in DE: [
  { rank: '1', url: 'Google.com' },
  { rank: '2', url: 'Youtube.com' },
  { rank: '3', url: 'Google.de' },
  { rank: '4', url: 'Amazon.de' },
  { rank: '5', url: 'Ebay.de' },
  { rank: '6', url: 'Wikipedia.org' },
  { rank: '7', url: 'Facebook.com' },
  { rank: '8', url: 'Reddit.com' },
  { rank: '9', url: 'Ebay-kleinanzeigen.de' },
  { rank: '10', url: 'Livejasmin.com' },
  { rank: '11', url: 'Twitch.tv' },
  { rank: '12', url: 'Gmx.net' },
  { rank: '13', url: 'Netflix.com' },
  { rank: '14', url: 'Web.de' },
  { rank: '15', url: 'Classlifestyle.com' },
  { rank: '16', url: 'Bongacams.com' },
  { rank: '17', url: 'Gazetablic.com' },
  { rank: '18', url: 'Xhamster.com' },
  { rank: '19', url: 'Vk.com' },
  { rank: '20', url: 'Bild.de' }
]
```
