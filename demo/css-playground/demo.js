$(document).ready(() => {
  // 新增属性,删除属性,值的 autocomplate
  var init = () => {
    // 输入框同步显示的文本的值
    $('.editable-text').each(function () {
      var $this = $(this);
      var value = $this.text();
      // if(tol)
      $this.next('.editable-value').val(value);
    });
    registerEvent();
    render();
  };
  var render = () => {
      var $targetStyle = $('#target-style');
      var style =
      `.target{
        ${gatherStyleRules()}
      }`;
      $targetStyle.html(style);
  };
  var gatherStyleRules = () => {
    var styleArr = [];
    $('.rule').each(function() {
      var $this = $(this);
      var property = $this.find('.property').text();
      var value = $this.find('.value')
                      .text()
                      .replace(/( )+/g, ' ')
                      .replace(/\n/g, '') + ';';
      styleArr.push(`${property}:${value}`);
    });
    return styleArr.join('\n');
  };

  var registerEvent = () => {
    $('.editable').click(function(){
      var $this = $(this);
      $(this).addClass('edit');
    });
    var $editableInput = $('.editable-value');
    $editableInput.filter('[type=text]').blur(function () {
      $(this).closest('.editable').removeClass('edit');
    }).keyup(function (event) {
      var $this = $(this);
      var $editText = $this.prev('.editable-text');
      event.preventDefault();
      // 上 或 下
      if(event.which === 38 || event.which === 40){
          var addNum = event.which === 38 ? 1 : -1;
          var vaule = tools.addNumberVal($this.val(), addNum);
          $this.val(vaule);
          $editText.text(vaule);
      } else {
        $editText.text($this.val());
      }
      render();
    });

    $editableInput.filter('[type=color]').change(function () {
      var $this = $(this);
      var value = $this.val();
      var $editText = $this.prev('.editable-text');
      $editText.text(value);
      render();
      $this.closest('.editable').removeClass('edit');
    });
  };

  var tools = {
    addNumberVal: (numVal, addVal)=>{
      if(!isNaN(numVal)){
        return numVal;
      }
      var num = (numVal + '').indexOf('.') > -1 ? parseFloat(numVal) : parseInt(numVal);
      num = num + addVal;
      var unit = /[a-zA-Z%]+/.exec(numVal)[0];
      return num + unit;

    }
  };

  init();
});
