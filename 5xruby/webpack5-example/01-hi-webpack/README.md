# hi-webpack

## 1 安裝套件包
```
npm install 套件包名稱
```
- 小技巧：所有的 package 套件包都是小寫
  - ext: npm install jquery
- 然後 install 可以縮寫成 i
  - ext: npm i react
  - ext: npm i vue

- - - 

## 2 安裝套件包 devDependencies
- 會被寫到 package.json 裡的 devDependencies
```
npm install 套件包名稱 -D 
```


- - - 

## 3 指定套件包版本
- 查尋套件包可用的所有版本
```
npm view webpack versions
```
- 加個@x.x.x 就可以指定版本
```
npm install webpack@5.4.0
```
---

### install package Command line
> 當專案沒有 node_modeuls 資料幾，可以使用以下指令重新安裝
``` bash
npm install
```

### Development Command line
> 本機開發用
``` bash
# build for developemnt
npm run start
```

### Production Command line
> 打包 production 用
``` bash
# build for production with minification
npm run build
```
