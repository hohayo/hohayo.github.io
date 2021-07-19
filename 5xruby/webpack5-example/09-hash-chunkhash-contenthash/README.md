# contenthash

- hash 只要專案的檔案有更改，hashCode 就會不一樣
- chunkhash 以 webpack entry 建立依賴性，生成對應的 hashCode
- contenthash 只要 css 內容不變，那 hashCode 就不會重新產生
- webpack5 只需要用 contenthash 就好
