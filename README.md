# uclassify-simple-usage

``` javascript
import uClassify from '../lib/uclassify';

const uc = new uClassify('<YOU-API-KEY-HERE>');

uc.detectLang(domain, (err, res) => {
  if(err) {
    throw new Error(err)
  } else {
    let result = JSON.parse(res.body);
  }
})

uc.tonality(domain, (err, res) => {
  if(err) {
    throw new Error(err)
  } else {
    let result = JSON.parse(res.body);
  }
})
```


