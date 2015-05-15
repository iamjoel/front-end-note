$(document).ready(function() {
    function queueCall(fn, time, ctx) {
        ctx = ctx || fn;
        time = time || 200;
        var argsArr = []; // 执行方法的队列
        setInterval(function() {
            if (argsArr.length === 0) {
                return;
            }
            var args = argsArr.shift();
            fn.apply(ctx, args);
        }, time);
        return function() {
            argsArr.push(arguments);
        };
    };
    var signIn = {
        $el: $('.sign-in'),
        $totalNum: $('#total-num'),
        totalNum: 0,
        ROW: 8,
        COL: 8,
        // MAXNUM: 5,//最多出现人数
        MAXNUM: 10, //最多出现人数
        DEFAULT_AVATAR_URL: 'img/avatar/default.png',
        showItemLocArr: [],
        isAnim: false,
        addArr: [],
        makeRandomNoRepeatLoc: function() {
            var loc = this.makeRandomLoc();
            while (this.isInShowItem(loc)) {
                loc = this.makeRandomLoc();
            }
            return loc;
        },
        makeRandomLoc: function() {
            return {
                row: Math.floor(Math.random() * this.ROW),
                col: Math.floor(Math.random() * this.COL)
            };
        },
        isInShowItem: function(loc) {
            var isIn = false;
            this.showItemLocArr.forEach(function(each) {
                if (each.row === loc.row && each.col === loc.col) {
                    isIn = true;
                    return false;
                }
            })
            return isIn;
        },
        makeEmptyItem: function() {
            return '<span class="sign-in__line__item"></span>';
        },
        addItem: function(itemURL) {
            if (this.showItemLocArr.length >= this.MAXNUM) {
                this.removeRandomItem(this.makeAndAnimItem, itemURL);
            } else {
                this.makeAndAnimItem(itemURL);
            }
        },
        makeAndAnimItem: function(itemURL) {
            var self = this;
            // fix 被调用太频繁时，人数会大于最大人数. 稍后还会继续加1个
            if (this.showItemLocArr.length + 1 > this.MAXNUM) {
                var locArrs = this.showItemLocArr.splice(0, this.showItemLocArr.length - this.MAXNUM + 1);
                locArrs.forEach(function(loc) {
                    $('#item-col-' + loc.col + '-row-' + loc.row).remove();
                });
            }
            itemURL = itemURL || this.DEFAULT_AVATAR_URL;
            var loc = this.makeRandomNoRepeatLoc();
            this.showItemLocArr.push(loc);
            console.log(JSON.stringify(loc));
            var $img = $('<img>');
            $img.attr('src', itemURL).attr('id', 'item-col-' + loc.col + '-row-' + loc.row);
            $img.addClass('sign-in__img--anim');
            this.$el.append($img);
            var $target = this.$rows.eq(loc.row).find('.sign-in__line__item').eq(loc.col);
            var pos = $target.position();
            $img.addClass('sign-in__img');
            $img.fadeIn('slow', function() {
                var imgPos = $img.position();
                var offsetX = pos.left - imgPos.left + 'px';
                var offsetY = pos.top - imgPos.top + 'px';
                var translate3dStr = 'translate3d(' + offsetX + ',' + offsetY + ',0)';
                var scaleX = self.itemWidth/$img.width();
                var scaleY = self.itemHeight/$img.height();
                var scaleStr = 'scale(' + scaleX + ',' + scaleY + ')';
                setTimeout(function() {
                    $img.css({
                        transform: [translate3dStr, scaleStr].join(' ') // 3D加速
                    });
                }, 200);
            });

            this.$totalNum.text(++this.totalNum);
        },
        removeRandomItem: function(done, itemURL) {
            var loc = this.showItemLocArr.splice(0, 1)[0];
            var self = this;
            if (!loc) {
                return;
            }
            $('#item-col-' + loc.col + '-row-' + loc.row).fadeOut(600, function() {
                $(this).remove();
                done.call(self, itemURL);
            });

        },
        makeRow: function() {
            var html = [];
            html.push('<div class="sign-in__line">');
            for (var i = 0; i < this.COL; i++) {
                html.push(this.makeEmptyItem());
            }
            html.push('</div>');
            return html.join('');
        },
        init: function() {
            var html = [];
            for (var i = 0; i < this.ROW; i++) {
                html.push(this.makeRow());
            }
            this.$el.html(html.join(''));
            this.$rows = this.$el.find('.sign-in__line');
            var $item = $('.sign-in__line__item');
            this.itemWidth = $item.width();
            this.itemHeight = $item.height();
            this.addItem = queueCall(this.addItem, 2000, this); // 避免短时间调用太频繁
        }
    }

    signIn.init();

    $('.add-btn').click(function() {
        signIn.addItem();
    })

});
