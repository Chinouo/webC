let p = document.getElementsByClassName("web_container");
console.log(p[0])

//
function addURL(name,url,src,node){
    let x = document.createElement("div");
    let img = document.createElement("img");
    let href = document.createElement("a");

   
    img.setAttribute("class","icon");
    img.setAttribute("src",src);

    href.setAttribute("target","_blank")
    href.setAttribute("class","des");
    href.setAttribute("href",url);
    href.appendChild(img);
    href.appendChild(document.createTextNode(name));
    
    x.appendChild(href);
    
    x.setAttribute("class","url_style");


    node.appendChild(x);
  
}

//设置生活字体的颜色
let x = document.getElementById("life");
console.log(x)
let num = 
x.setAttribute("style",
        `background-image:linear-gradient(${Math.random() *360}deg, ${getColor()}, ${getColor()});
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;`
)


function getColor(){  
    return  '#' +  
      (function generate(color){  
      return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)])  
        && (color.length == 6) ?  color : generate(color);  
    })('');  
  }  

//效率 音乐 生活  创意
  addURL("行业报告","http://report.seedsufe.com/#/report/","null",p[0]);
  addURL("商用图片","https://www.pexels.com/zh-cn/","null",p[0]);
  addURL("3D模型","https://sketchfab.com/","null",p[0]);
  addURL("动作","https://www.dimensions.com/","null",p[0]);
  addURL("动态图表","https://hanabi.data-viz.cn/index?lang=zh-CN/","null",p[0]);
  addURL("找音乐","https://www.tunefind.com/","null",p[0]);
  addURL("约稿","https://www.mihuashi.com/artists","null",p[0]);
  addURL("伴奏提取","https://www.lalal.ai/","null",p[0]);
  addURL("临时验证码","https://www.materialtools.com/","null",p[0]);
  addURL("临时邮箱","https://www.linshiyouxiang.net/","null",p[0]);


  addURL("音乐制作","https://learningmusic.ableton.com/","null",p[1]);


  addURL("迪士尼化","https://toonme.com/","null",p[2]);

  addURL("医疗","https://www.msdmanuals.com/zh#mission/","null",p[3]);

