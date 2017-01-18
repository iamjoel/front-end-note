function removeHtmlTab(tab) {
 return tab.replace(/<[^<>]+?>/g,'');//删除所有HTML标签
}