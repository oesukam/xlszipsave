Xlszipsave
=======

Lightweight JSON to create, zip and save xls file from browsers

## How to install
```
  yarn add xlszipsave
  or
  npm install --save xlszipsave
```
## How to use
```
  import { xls, filesaver } from 'xlszipsave';

  const sheet = {
    data: [
      [
        {
          value: 'Excel',
          type: 'string'
        },
        {
          value: 1000,
          type: 'number'
        }
      ]
    ]
  };

  xls(sheet).then(blob => {
    filesave.saveAs(blob, 'excel.xlsx');
  })

```
### Excel Table output
| Excel | 1000 |
|-------|------|
## Issues
Should it happen that the tool broke down on you please head to our [Issue tracker](https://github.com/oesukam/xlszipsave/issues)
1. Search if the issue is already discussed or explained.
2. If no luck feel free to open a new issue and we will get back to you as soon as possible.
