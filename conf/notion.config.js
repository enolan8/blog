/**
 * 读取Notion相关的配置
 * 如果需要在Notion中添加自定义字段，可以修改此文件
 * 此文件内容可以通过环境变量覆盖，但是不支持用NOTION_CONFIG覆盖
 */
module.exports = {
  // Notion数据库索引，取notion的第几个视图作为站点数据和排序依据
  NOTION_INDEX: process.env.NEXT_PUBLIC_NOTION_INDEX || 0,  // 默认取Notion数据库中的第1个视图
  // 由于计算机是从0开始计数、而非从1开始。因此如果要取第二个视图，可以传1，取第三个视图传2，以此类推,取数据库的最后一个视图可以传-1。

  // 自定义配置notion数据库字段名
  NOTION_PROPERTY_NAME: {
    password: process.env.NEXT_PUBLIC_NOTION_PROPERTY_PASSWORD || '密码',
    type: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE || '类型', // 文章类型，
    type_post: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_POST || '文章', // 当type文章类型与此值相同时，为博文。
    type_page: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_PAGE || '页面', // 当type文章类型与此值相同时，为单页。
    type_notice:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_NOTICE || '公告', // 当type文章类型与此值相同时，为公告。
    type_menu: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_MENU || '菜单', // 当type文章类型与此值相同时，为菜单。
    type_sub_menu:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_SUB_MENU || '二级菜单', // 当type文章类型与此值相同时，为子菜单。
    title: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TITLE || '标题', // 文章标题
    status: process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS || '状态',
    status_publish:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_PUBLISH || '发布', // 当status状态值与此相同时为发布，可以为中文
    status_invisible:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_INVISIBLE || '隐藏', // 当status状态值与此相同时为隐藏发布，可以为中文 ， 除此之外其他页面状态不会显示在博客上
    summary: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SUMMARY || 'summary',
    slug: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SLUG || '路径',
    category: process.env.NEXT_PUBLIC_NOTION_PROPERTY_CATEGORY || '分类',
    date: process.env.NEXT_PUBLIC_NOTION_PROPERTY_DATE || '日期',
    tags: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TAGS || '标签',
    icon: process.env.NEXT_PUBLIC_NOTION_PROPERTY_ICON || '图标',
    ext: process.env.NEXT_PUBLIC_NOTION_PROPERTY_EXT || '拓展' // 扩展字段，存放json-string，用于复杂业务
  },
  NOTION_ACTIVE_USER: process.env.NOTION_ACTIVE_USER || '',
  NOTION_TOKEN_V2: process.env.NOTION_TOKEN_V2 || '' // Useful if you prefer not to make your database public
}
