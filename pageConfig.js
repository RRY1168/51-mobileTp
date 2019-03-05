let pageConfig = {
  name: '页面文件名',                    //此名称必须使用英文，用于保存文件使用
  cname: '文件名称',                    //用于标识文件使用名，可使用中文字符
  filetype: 'html',                    //文件保存格式，默认为.html，可配置成.php
  title: '页面标题',                    //页面titile内容
  css: ['base', 'pop', 'style.scss'], //页面引用css列表，默认后缀.js，可自定义后缀
  js: ['base', 'pop'],                //页面引用js列表，默认后缀.js
  js: [['base'], ['zepto']],          //页面引用js列表的另一种形式，可配置底部引用文件
  template: 'h5',                     //页面引用的模板名称，前期已配置/另外文件表示
  data: {}                            //页面内使用的数据
};
