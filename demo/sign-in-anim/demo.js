$(document).ready(function() {
    var signIn = {
        $el: $('.sign-in'),
        $totalNum: $('#total-num'),
        totalNum: 0,
        ROW: 20,
        COL: 10,
        // MAXNUM: 5,//最多出现人数
        MAXNUM: 100,//最多出现人数
        DEFAULT_AVATAR_URL: 'img/avatar/default.png',
        showItemLocArr: [],
        isAnim: false,
        addArr: [],
        makeRandomNoRepeatLoc: function  () {
            var loc = this.makeRandomLoc();
            while(this.isInShowItem(loc)){
                loc = this.makeRandomLoc();
            }
            return loc;
        },
        makeRandomLoc: function  () {
            return {
                row: Math.floor(Math.random() * this.ROW),
                col: Math.floor(Math.random() * this.COL)
            };
        },
        isInShowItem: function  (loc) {
            var isIn = false;
            this.showItemLocArr.forEach(function (each) {
                if(each.row === loc.row && each.col === loc.col){
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
            if(this.showItemLocArr.length >= this.MAXNUM){
                this.removeRandomItem(this.makeAndAnimItem, itemURL);
            } else {
                this.makeAndAnimItem(itemURL);
            }
        },
        makeAndAnimItem: function (itemURL) {
            // fix 被调用太频繁时，人数会大于最大人数. 稍后还会继续加1个
            if(this.showItemLocArr.length + 1 > this.MAXNUM){
                var locArrs = this.showItemLocArr.splice(0, this.showItemLocArr.length - this.MAXNUM + 1);
                locArrs.forEach(function (loc) {
                    $('#item-col-' + loc.col + '-row-' + loc.row).remove();
                });
            }
            itemURL = itemURL || this.DEFAULT_AVATAR_URL;
            var loc = this.makeRandomNoRepeatLoc();
            this.showItemLocArr.push(loc);
            console.log(JSON.stringify(loc));
            var $img =  $('<img>');
            $img.attr('src', itemURL).attr('id', 'item-col-' + loc.col + '-row-' + loc.row);
            $img.addClass('sign-in__img--anim');
            this.$el.append($img);
            var $target = this.$rows.eq(loc.row).find('.sign-in__line__item').eq(loc.col);
            var pos = $target.position();
            $img.addClass('sign-in__img');
            $img.css({
                left: pos.left,
                top: pos.top,
            }, 2000);

            this.$totalNum.text(++this.totalNum);
        },
        removeRandomItem: function (done, itemURL) {
            var loc = this.showItemLocArr.splice(0,1)[0];
            var self = this;
            if(!loc){
                return;
            }
            $('#item-col-' + loc.col + '-row-' + loc.row).fadeOut(600, function  () {
                $(this).remove();
                done.call(self, itemURL);
            });

        },
        makeRow: function () {
            var html = [];
            html.push('<div class="sign-in__line">');
            for(var i = 0;i<this.COL;i++){
                html.push(this.makeEmptyItem());
            }
            html.push('</div>');
            return html.join('');
        },
        init: function () {
            var html = [];
            for(var i = 0;i<this.ROW;i++){
                html.push(this.makeRow());
            }
            this.$el.html(html.join(''));
            this.$rows = this.$el.find('.sign-in__line');
        }
    }

    signIn.init();

    $('.add-btn').click(function () {
        signIn.addItem();
    })

});
