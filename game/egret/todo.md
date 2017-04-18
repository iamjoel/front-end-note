## 未整理
http://edn.egret.com/cn/docs/page/106
          显示类 要放在容器中。 容器对象如stage，Sprite：轻量级显示容器

  1. 显示类中 有  Shape，Bitmap，Sprite
  2. 显示类中 的属性有
    1. 
      * alpha：透明度

      * width：宽度

      * height：高度

      * rotation：旋转角度

      * scaleX：横向缩放

      * scaleY：纵向缩放

      * skewX：横向斜切

      * skewY：纵向斜切

      * visible：是否可见

      * x：X轴坐标值

      * 
y：Y轴坐标值


    2. 可以创建自己的显示类。 继承

  3. 碰撞检测 isHit:boolean = shp.hitTestPoint( 10, 10 );

shp.graphics.lineStyle( 10, 0x00ff00 ); 描边
shp.graphics.clear();
加载资源 RES.getResAsync(资源名称 ,compFunc:Function,thisObject:any) 资源名称是 resources 下的 res.json 中定义的  （纹理 Texture）
RES.createGroup("initLoad", ["preload","bgPic","animation","sound"]);
        RES.loadGroup("initLoad");

var action = new erg.()
图片重复
 img.width *= 2;
img.height *= 3;
img.fillMode = egret.BitmapFillMode.REPEAT;

http://huodong.mobilem.360.cn/0422/index.html
http://edn.egret.com/cn/docs/page/929

http://g.idods.cn/fyzg/game.html?id=b1Atb251RkozNm9vTWg5NXlzcmpPSmpEQTZwNA==&f=zf&isappinstalled=0&r=0.886812582379207
global_sprite

https://github.com/eperfect/EgretScreenFit

白鹭引擎使用初体验
最近有白鹭引擎做了个简单的游戏。体验如下

文件结构，依赖，资源配置
资源加载
图片精灵
动画 Tween
动作
