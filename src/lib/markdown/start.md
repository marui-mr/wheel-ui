# 开始

开始前务必确保已[安装](#/doc/install)本组件库。

你需要在代码中引入相应组件,代码如下：

```import {Button, Tabs, Tab, Switch, Dialog, openDialog} from "wheel-ui"```

然后就可以开始使用我提供的组件了。

下面提供一个使用示例：

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>

<script lang="ts">
import {Button, Tabs, Tab, Switch, Dialog, openDialog} from "wheel-ui"

export default {
  components: {Button}
}
</script>
```

