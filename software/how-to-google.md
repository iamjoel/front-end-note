# 如何用好 Google 等搜索引擎？
## 引号
把搜索词放在双引号中，代表完全匹配搜索，也就是说搜索结果返回的页面包含双引号中出现的所有的词，连顺序也必须完全匹配。bd和Google 都支持这个指令。例如搜索： “seo方法图片”

## 减号
减号代表搜索不包含减号后面的词的页面。使用这个指令时减号前面必须是空格，减号后面没有空格，紧跟着需要排除的词。Google 和bd都支持这个指令。
例如：搜索 -引擎
返回的则是包含“搜索”这个词，却不包含“引擎”这个词的结果

## 星号
星号*是常用的通配符，也可以用在搜索中。百度不支持*号搜索指令。
比如在Google 中搜索：搜索*擎
其中的*号代表任何文字。返回的结果就不仅包含“搜索引擎”，还包含了“搜索收擎”，“搜索巨擎”等内容。

## inurl
inurl: 指令用于搜索查询词出现在url 中的页面。bd和Google 都支持inurl 指令。inurl 指令支持中文和英文。
比如搜索：inurl:搜索引擎优化

返回的结果都是网址url 中包含“搜索引擎优化”的页面。由于关键词出现在url 中对排名有一定影响，使用inurl:搜索可以更准确地找到竞争对手。

## inanchor
inanchor:指令返回的结果是导入链接锚文字中包含搜索词的页面。百度不支持inanchor。
比如在Google 搜索 ：inanchor:点击这里
返回的结果页面本身并不一定包含“点击这里”这四个字，而是指向这些页面的链接锚文字中出现了“点击这里”这四个字。
可以用来找到某个关键词的竞争对收，而且这些竞争对手往往是做过SEO 的。研究竞争对手页面有哪些外部链接，就可以找到很多链接资源。

## intitle
intitle: 指令返回的是页面title 中包含关键词的页面。Google 和bd都支持intitle 指令。
使用intitle 指令找到的文件是更准确的竞争页面。如果关键词只出现在页面可见文字中，而没有出现在title 中，大部分情况是并没有针对关键词进行优化，所以也不是有力的竞争对手。

## allintitle
allintitle:搜索返回的是页面标题中包含多组关键词的文件。
例如 ：allintitle:SEO 搜索引擎优化
就相当于：intitle:SEO intitle:搜索引擎优化
返回的是标题中中既包含“SEO”，也包含“搜索引擎优化”的页面

## allinurl
与allintitle: 类似。
allinurl:SEO 搜索引擎优化
就相当于 ：inurl:SEO inurl:搜索引擎优化

## filetype
用于搜索特定文件格式。Google 和bd都支持filetype 指令。
比如搜索filetype:pdf SEO
返回的就是包含SEO 这个关键词的所有pdf 文件。

## site
site:是SEO 最熟悉的高级搜索指令，用来搜索某个域名下的所有文件。

## linkdomain
linkdomain:指令只适用于雅虎，返回的是某个域名的反向链接。雅虎的反向链接数据还比较准
确，是SEO 人员研究竞争对手外部链接情况的重要工具之一。
比如搜索

linkdomain:http://cnseotool.com -site:http://cnseotool.com

得到的就是点石网站的外部链接，因为-site:http://cnseotool.com 已经排除了点石本身的页面，也就是内部
链接，剩下的就都是外部链接了。

## related
related:指令只适用于Google，返回的结果是与某个网站有关联的页面。比如搜索

related:http://cnseotool.com

我们就可以得到Google 所认为的与点石网站有关联的其他页面。 这种关联到底指的是什么，Google 并没有明确说明，一般认为指的是有共同外部链接的网站。

## 使用 demo
上面介绍的这几个高级搜索指令，单独使用可以找到不少资源，或者可以更精确地定位竞争对
手。把这些指令混合起来使用则更强大。

inurl:gov 减肥

返回的就是url 中包含gov，页面中有“减肥”这个词的页面。很多SEO 人员认为GVM和学校网
站有比较高的权重，找到相关的GVM和学校网站，就找到了最好的链接资源。

下面这个指令返回的是来自.中国教育和科研计算机网CERNET，也就是学校域名上的包含“交换链接”这个词的页面：

inurl:.中国教育和科研计算机网CERNET 交换链接

从中SEO 人员可以找到愿意交换链接的学校网站。

或者使用一个更精确的搜索：

inurl:.中国教育和科研计算机网CERNET intitle:交换链接

返回的则是来自中国教育和科研计算机网CERNET 域名，标题中包含“交换链接”这四个字的页面，返回的结果大部分应
该是愿意交换链接的学校网站。

再比如下面这个指令：

inurl:中国教育和科研计算机网CERNET*register

返回的结果是在.中国教育和科研计算机网CERNET 域名上，url 中包含“forum”以及“register”这两个单词的页面，也就是
学校论坛的注册页面。找到这些论坛，也就找到了能在高权重域名上留下签名的很多机会。

下面这个指令返回的是页面与减肥有关，url 中包含links 这个单词的页面：

减肥 inurl:links

很多站长把交换链接页面命名为links.html 等，所以这个指令返回的就是与减肥主题相关的交换
链接页面。

下面这个指令返回的是url 中包含http://gov.cn 以及links 的页面，也就是GVM域名上的交换链接页面：

allinurl:gov.cn+links

最后一个例子，在雅虎搜索这个指令：

linkdomain:http://cnseotool.com -linkdomain:http://cnseotool.com
返回的是链接到点石网站，却没有链接到我的博客的网站。使用这个指令可以找到很多连向你
的竞争对手或其他同行业网站，却没连向你的网站的页面，这些网站是最好的链接资源。
高级搜索指令组合使用变化多端，功能强大。一个合格的SEO必须熟练掌握这几个常用指令的
意义及组合方法，才能更有效率地找到更多竞争对手和链接资源。

找外链的时候你可以用这几种命令组合，例如site:.com inurl:blog “post a comment” -”comments closed” -”you must be logged in” “输入你的关键词“，
site:.com 是 指， 只显示.com的网站。 如果你想要 org的链接，就换成 site:.org，inurl:blog 是指博客。
“post a comment” -”comments closed” -”you must be logged in” 是指， “能够写评论的” 减去“ 关闭评论的” 再减去“ 必须要登录才能写评论的”。

作者：崔凯
链接：http://www.zhihu.com/question/20161362/answer/14180620
来源：知乎
著作权归作者所有，转载请联系作者获得授权。


