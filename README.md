# maskash-browser
安装依赖：

```node
npm install
```

运行：

```
npm run serve
```

或者通过 `npm run build`编译生成静态资源dist（已同步推送到github中）

```
npm run build
```

直接点击dist中的index.html启动。（因暂未添加修改端口功能，通过index进入浏览器的geth端口默认为8545）

```javascript
// 保存文件
save: function (data, filename) {
      if (!data) {
        console.error('Console.save: No data')
        return
      }
      if (!filename) filename = 'console.json'
      if (typeof data === 'object') {
        data = JSON.stringify(data, undefined, 4)
      }
      const blob = new Blob([data], { type: 'text/json' })
      const e = document.createEvent('MouseEvents')
      const a = document.createElement('a')
      a.download = filename
      a.href = window.URL.createObjectURL(blob)
      a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
      e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
      a.dispatchEvent(e)
    }
```
