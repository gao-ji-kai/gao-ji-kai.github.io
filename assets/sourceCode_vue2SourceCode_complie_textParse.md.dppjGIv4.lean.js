import{_ as e,o as p,c as h,k as i,a as s,t as a,R as n}from"./chunks/framework.aAb_t1_d.js";const q=JSON.parse('{"title":"模板解析阶段(文本解析器)","description":"","frontmatter":{"title":"模板解析阶段(文本解析器)"},"headers":[],"relativePath":"sourceCode/vue2SourceCode/complie/textParse.md","filePath":"sourceCode/vue2SourceCode/complie/textParse.md"}'),t={name:"sourceCode/vue2SourceCode/complie/textParse.md"},k=n("",22),r=i("code",null,"tagRE",-1),d=i("code",null,"tagRE",-1),E=i("code",null,"tagRE",-1),c=i("code",null,"delimiters",-1),g=i("code",null,"delimiters",-1),o=i("code",null,"Vue",-1),y=i("code",null,"%",-1),F=n("",14),b=i("code",null,"index",-1),u=i("code",null,"lastIndex",-1),m=i("code",null,"index",-1),C=i("code",null,"_s()",-1),A=i("code",null,"tokens",-1),D=i("code",null,"{'@binding': exp}",-1),x=i("code",null,"rawTokens",-1),B=n("",10);function v(l,_,T,I,w,f){return p(),h("div",null,[k,i("p",null,[s("函数体内首先定义了变量"),r,s("，表示一个正则表达式。这个正则表达式是用来检查文本中是否包含变量的。我们知道，通常我们在模板中写变量时是这样写的：hello "+a(l.name)+"。这里用",1),i("code",null,a(),1),s("包裹的内容就是变量。所以我们就知道，"),d,s("是用来检测文本内是否有"),i("code",null,a(),1),s("。而"),E,s("又是可变的，它是根据是否传入了"),c,s("参数从而又不同的值，也就是说如果没有传入"),g,s("参数，则是检测文本是否包含"),i("code",null,a(),1),s("，如果传入了值，就会检测文本是否包含传入的值。换句话说在开发"),o,s("项目中，用户可以自定义文本内包含变量所使用的符号，例如你可以使用"),y,s("包裹变量如：hello %name%。")]),F,i("p",null,[s("如果"),b,s("不大于"),u,s("，那说明"),m,s("也为0，即该文本一开始就是变量，例如："),i("code",null,a(l.name)+"hello",1),s("。那么此时变量前面没有纯文本，那就不用截取，直接取出匹配结果的第一个元素变量名，将其用"),C,s("包裹存入"),A,s("中，同时再把变量名构造成"),D,s("存入"),x,s("中，如下：")]),B])}const j=e(t,[["render",v]]);export{q as __pageData,j as default};
