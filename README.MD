# 项目结构 #
```
my-info-viewer/
├── public/
│   ├── index.html        # 主页面（查看你的信息 + 密码输入）
│   └── editor.html       # 编辑页面（文本框 + 保存按钮 + 时间）
├── functions/
│   ├── get_info.js       # 获取已保存内容（从KV中）
│   └── save_info.js      # 保存内容到KV
├── wrangler.toml         # Cloudflare KV配置
└── package.json
```

## 🚀 部署步骤 ##

###在 GitHub 创建仓库并上传以上文件。###

-登录 Cloudflare Pages
，创建项目 → 选择 GitHub 仓库。

-构建命令：空（Static Site）

-输出目录：public

-在「环境变量」中添加：

--PASSWORD（访问密码）

--NAV1~NAV24、N1~N24（导航信息）

-在「Functions」选项中启用 Functions。

--绑定 KV 空间（MY_KV）。
