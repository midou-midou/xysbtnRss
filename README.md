# xysbtnRss - 虚研社按钮RSS代理Bot
> 所属项目：[MIMONATCH/xuyanshe-voice-button: 虚研社按钮 - 来自虚研社 小希🤖小桃🍑、小柔💚、兰音🐇、艾露露🐻的声音 (github.com)](https://github.com/MIMONATCH/xuyanshe-voice-button)
>
> 项目功能：订阅b站动态RSS源，转换成所需要对应格式的文件

## 配置

`config`文件夹下，在`rss.js`文件中添加b站用户的信息

```json
{
	name: 'b站用户名',
	uid: 'b站用户uid'
}
```

在项目的`setting`设置下的`secerts`中配置如下仓库变量(这里的部分根据easingthemes/ssh-deploy@main配置)

```
xysbtndeploy  // ssh登录服务器密钥
REMOTE_HOST   // 服务器ip
REMOTE_USER   // 登录服务器用户名
REMOTE_TARGET // 使用的服务器目录
```

## 说明

1. 可以根据自己需求修改action配置yml文件
2. 每6小时执行一次

