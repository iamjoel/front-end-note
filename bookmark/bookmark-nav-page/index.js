$(document).ready(function() {
    var avaliableShortcut = '1234567890abcdeghijklmnopqrstuvwxyz'.split(''); //里面是没有f的，f用来做搜索
    var shortcuts = {};
    $('.nav__item>a').each(function() {
        var $link = $(this);
        var key = $link.data('shortcut');
        if (!key) {
            key = $link.text().substr(0, 1);// 默认是第一个字母
        } else {
            if(!/^[0-9a-zA-Z]$/.test(key)){
                console.error('error shortcut %s', key);
                return;
            }
        }
        key = typeof key === 'string' ? key.toLowerCase() : key;
        removeFromArray(avaliableShortcut, key);
        if (!shortcuts[key]) {
            shortcuts[key] = $link.attr('href');

        } else {
            debugger;
            console.error('repeat short cut %s', key);
        }
    });

    console.log('可用的快捷键 %s', avaliableShortcut.join());

    $(document).keyup(function(evt) {
        var key = String.fromCharCode(evt.which).toLocaleLowerCase();
        if (shortcuts[key]) {
            window.open(shortcuts[key], '_blank');
        }
    });

    function removeFromArray(arr, value) {
        var removeIndex = false;
        arr.forEach(function(each, index) {
            if (each === value) {
                removeIndex = index;
            }
        });
        if (removeIndex !== false) {
            arr.splice(removeIndex, 1);
        }
    }


    function AutoComplate() {
        var self = this;
        this.$el = $('.auto-complate');
        this.$input = this.$el.find('.auto-complate__input');
        this.$allLink = $('a').filter(function() {
            var href = $(this).attr('href');
            return href !== '' && href !== '###' && !/^javascript/.test(href) && !$(this).hasClass('.ignore-search');
        });
        this.itemTemplate = $('.auto-complate-template').html();
        this.$resWrap = this.$el.find('.auto-complate__content');


        $(document).keyup(function(evt) {
            var code = evt.which;
            var key = String.fromCharCode(code).toLocaleLowerCase();
            if (self.$el.is(':hidden')) {
                if (key === 'f') { //f   // && evt.shiftKey
                    self.show();
                }
                return;
            }
            if (evt.which === 27) { // ese健
                self.hide();
            } else if (code === 38) { //向上
                self._selectMove('prev');
            } else if (code === 40) { //向下
                self._selectMove('next');
            } else if (evt.which === 13) { // 回车
                var $selectItem = $('.auto-complate__item--selected');
                if ($selectItem.length > 0) {
                    window.open($selectItem.find('a').attr('href'), '_blank');
                }
            }
        }).click(function(evt){
            if($(evt.target).closest('.auto-complate')[0] !== self.$el[0]){
                self.hide();
            }
        });

        this.$input.keyup(function(evt) {
            if (self.$el.is(':hidden')) {
                return;
            }
            var code = evt.which;
            var key = String.fromCharCode(code).toLocaleLowerCase();
            if (evt.which === 27) { // ese健
                self.hide();
            } else if (evt.which === 13) { // 回车
                var $selectItem = $('.auto-complate__item--selected');
                if ($selectItem.length > 0) {
                    window.open($selectItem.find('a').attr('href'), '_blank');
                }
            } else if (code === 38) { //向上
                evt.stopPropagation();
                $(this).blur();
                self._selectMove('prev');
            } else if (code === 40) { //向下
                evt.stopPropagation();
                $(this).blur();
                self._selectMove('next');
            } else {
                evt.stopPropagation();
                var matchStr = $.trim($(this).val());
                if (matchStr !== '') {
                    self.match(self.$input.val());
                } else{
                    self.$resWrap.empty();
                }
            }
        });
    }
    AutoComplate.prototype = {
        show: function() {
            this.$el.show();
            this.$input.focus();
        },
        hide: function() {
            this.$el.hide();
            this.$input.val('');
            this.$resWrap.html('');
        },
        match: function(matchStr) {
            var matchArr = [];
            this.$allLink.each(function() {
                var $link = $(this);
                var name = $link.text();
                var href = $link.attr('href');
                if (name.toLowerCase().indexOf((matchStr + '').toLowerCase()) > -1 || href.toLowerCase().indexOf((matchStr + '').toLowerCase()) > -1) {
                    matchArr.push({
                        name: name,
                        href: href,
                        matchStr: matchStr
                    });
                }
            })
            this._makeAutoComplate(matchArr);
        },
        _makeAutoComplate: function(matchArr) {
            var self = this;
            var html = [];
            matchArr.forEach(function(each) {
                html.push(self._makeItem(each.name, each.href, each.matchStr));
            });
            this.$resWrap.html(html.join(''));
            $('.auto-complate__item:first-child').addClass('auto-complate__item--selected');
        },
        _makeItem: function(name, href, matchStr) {
            var html = this.itemTemplate;
            var reg = new RegExp(matchStr, 'ig');
            var name = name.replace(reg, function(matched){
                return '<span class="auto-complate__match-str">' + matched + '</span>'
            });
            var hrefText = href.replace(reg, function(matched){
                return '<span class="auto-complate__match-str">' + matched + '</span>'
            });
            html = html.replace('{name}', name);
            html = html.replace('{hrefText}', hrefText);
            html = html.replace('{href}', href);
            return html;
        },
        _selectMove: function(dir) {
            var $selectItem = $('.auto-complate__item--selected');
            var $tar;
            if (dir === 'prev') {
                $tar = $selectItem.prev();
            } else if (dir === 'next') {
                $tar = $selectItem.next();
            }
            if ($tar && $tar.length > 0) {
                $selectItem.removeClass('auto-complate__item--selected');
                $tar.addClass('auto-complate__item--selected');
            }

        }
    };


    var autoComplate = new AutoComplate();
});
