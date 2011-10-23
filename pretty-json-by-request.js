javascript:var%20prettyPrint=(function(){var%20b={el:function(f,d){var%20e=document.createElement(f),c;d=b.merge({},d);if(d&&d.style){var%20g=d.style;b.applyCSS(e,d.style);delete%20d.style}for(c%20in%20d){if(d.hasOwnProperty(c)){e[c]=d[c]}}return%20e},applyCSS:function(c,d){for(var%20g%20in%20d){if(d.hasOwnProperty(g)){try{c.style[g]=d[g]}catch(f){}}}},txt:function(c){return%20document.createTextNode(c)},row:function(e,f,c){c=c||"td";var%20h=b.count(e,null)+1,g=b.el("tr"),i,d={style:b.getStyles(c,f),colSpan:h,onmouseover:function(){var%20j=this.parentNode.childNodes;b.forEach(j,function(k){if(k.nodeName.toLowerCase()!=="td"){return}b.applyCSS(k,b.getStyles("td_hover",f))})},onmouseout:function(){var%20j=this.parentNode.childNodes;b.forEach(j,function(k){if(k.nodeName.toLowerCase()!=="td"){return}b.applyCSS(k,b.getStyles("td",f))})}};b.forEach(e,function(j){if(j===null){return}i=b.el(c,d);if(j.nodeType){i.appendChild(j)}else{i.innerHTML=b.shorten(j.toString())}g.appendChild(i)});return%20g},hRow:function(c,d){return%20b.row(c,d,"th")},table:function(h,e){h=h||[];var%20d={thead:{style:b.getStyles("thead",e)},tbody:{style:b.getStyles("tbody",e)},table:{style:b.getStyles("table",e)}},g=b.el("table",d.table),f=b.el("thead",d.thead),c=b.el("tbody",d.tbody);if(h.length){g.appendChild(f);f.appendChild(b.hRow(h,e))}g.appendChild(c);return{node:g,tbody:c,thead:f,appendChild:function(i){this.tbody.appendChild(i)},addRow:function(k,j,i){this.appendChild(b.row.call(b,k,(j||e),i));return%20this}}},shorten:function(d){var%20c=40;d=d.replace(/^\s\s*|\s\s*$|\n/g,"");return%20d.length>c?(d.substring(0,c-1)+"..."):d},htmlentities:function(c){return%20c.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},merge:function(h,g){if(typeof%20h!=="object"){h={}}for(var%20f%20in%20g){if(g.hasOwnProperty(f)){var%20c=g[f];if(typeof%20c==="object"){h[f]=b.merge(h[f],c);continue}h[f]=c}}for(var%20e=2,d=arguments.length;e<d;e++){b.merge(h,arguments[e])}return%20h},count:function(c,g){var%20f=0;for(var%20e=0,d=c.length;e<d;e++){if(c[e]===g){f++}}return%20f},thead:function(c){return%20c.getElementsByTagName("thead")[0]},forEach:function(d,f){var%20c=d.length,e=-1;while(c>++e){if(f(d[e],e,d)===false){break}}return%20true},type:function(c){try{if(c===null){return"null"}if(c===undefined){return"undefined"}var%20f=Object.prototype.toString.call(c).match(/\s(.+?)\]/)[1].toLowerCase();if(c.nodeType){if(c.nodeType===1){return"domelement"}return"domnode"}if(/^(string|number|array|regexp|function|date|boolean)$/.test(f)){return%20f}if(typeof%20c==="object"){return%20c.jquery&&typeof%20c.jquery==="string"?"jquery":"object"}if(c===window||c===document){return"object"}return"default"}catch(d){return"default"}},within:function(c){return{is:function(e){for(var%20d%20in%20c){if(c[d]===e){return%20d}}return""}}},common:{circRef:function(e,c,d){return%20b.expander("[POINTS%20BACK%20TO%20<strong>"+(c)+"</strong>]","Click%20to%20show%20this%20item%20anyway",function(){this.parentNode.appendChild(a(e,{maxDepth:1}))})},depthReached:function(d,c){return%20b.expander("[DEPTH%20REACHED]","Click%20to%20show%20this%20item%20anyway",function(){try{this.parentNode.appendChild(a(d,{maxDepth:1}))}catch(f){this.parentNode.appendChild(b.table(["ERROR%20OCCURED%20DURING%20OBJECT%20RETRIEVAL"],"error").addRow([f.message]).node)}})}},getStyles:function(d,c){c=a.settings.styles[c]||{};return%20b.merge({},a.settings.styles["default"][d],c[d])},expander:function(e,d,c){return%20b.el("a",{innerHTML:b.shorten(e)+'%20<b%20style="visibility:hidden;">[+]</b>',title:d,onmouseover:function(){this.getElementsByTagName("b")[0].style.visibility="visible"},onmouseout:function(){this.getElementsByTagName("b")[0].style.visibility="hidden"},onclick:function(){this.style.display="none";c.call(this);return%20false},style:{cursor:"pointer"}})},stringify:function(e){var%20d=b.type(e),g,f=true;if(d==="array"){g="[";b.forEach(e,function(j,h){g+=(h===0?"":",%20")+b.stringify(j)});return%20g+"]"}if(typeof%20e==="object"){g="{";for(var%20c%20in%20e){if(e.hasOwnProperty(c)){g+=(f?"":",%20")+c+":"+b.stringify(e[c]);f=false}}return%20g+"}"}if(d==="regexp"){return"/"+e.source+"/"}if(d==="string"){return'"'+e.replace(/"/g,'\\"')+'"'}return%20e.toString()},headerGradient:(function(){var%20d=document.createElement("canvas");if(!d.getContext){return""}var%20c=d.getContext("2d");d.height=30;d.width=1;var%20f=c.createLinearGradient(0,0,0,30);f.addColorStop(0,"rgba(0,0,0,0)");f.addColorStop(1,"rgba(0,0,0,0.25)");c.fillStyle=f;c.fillRect(0,0,1,30);var%20e=d.toDataURL&&d.toDataURL();return"url("+(e||"")+")"})()};var%20a=function(g,k){k=k||{};var%20f=b.merge({},a.config,k),c=b.el("div"),d=a.config,h=0,i={},e=false;a.settings=f;var%20j={string:function(l){return%20b.txt('"'+b.shorten(l.replace(/"/g,'\\"'))+'"')},number:function(l){return%20b.txt(l)},regexp:function(n){var%20q=b.table(["RegExp",null],"regexp");var%20l=b.table();var%20m=b.expander("/"+n.source+"/","Click%20to%20show%20more",function(){this.parentNode.appendChild(q.node)});l.addRow(["g",n.global]).addRow(["i",n.ignoreCase]).addRow(["m",n.multiline]);q.addRow(["source","/"+n.source+"/"]).addRow(["flags",l.node]).addRow(["lastIndex",n.lastIndex]);return%20f.expanded?q.node:m},domelement:function(m,r){var%20q=b.table(["DOMElement",null],"domelement"),n=["id","className","innerHTML","src","href"],l=m.nodeName||"";q.addRow(["tag","&lt;"+l.toLowerCase()+"&gt;"]);b.forEach(n,function(s){if(m[s]){q.addRow([s,b.htmlentities(m[s])])}});return%20f.expanded?q.node:b.expander("DOMElement%20("+l.toLowerCase()+")","Click%20to%20show%20more",function(){this.parentNode.appendChild(q.node)})},domnode:function(l){var%20n=b.table(["DOMNode",null],"domelement"),m=b.htmlentities((l.data||"UNDEFINED").replace(/\n/g,"\\n"));n.addRow(["nodeType",l.nodeType+"%20("+l.nodeName+")"]).addRow(["data",m]);return%20f.expanded?n.node:b.expander("DOMNode","Click%20to%20show%20more",function(){this.parentNode.appendChild(n.node)})},jquery:function(m,n,l){return%20j.array(m,n,l,true)},object:function(q,m,w){var%20l=b.within(i).is(q);if(l){return%20b.common.circRef(q,l,f)}i[w||"TOP"]=q;if(m===f.maxDepth){return%20b.common.depthReached(q,f)}var%20x=b.table(["Object",null],"object"),n=true;for(var%20r%20in%20q){if(!q.hasOwnProperty||q.hasOwnProperty(r)){var%20y=q[r],v=b.type(y);n=false;try{x.addRow([r,j[v](y,m+1,r)],v)}catch(u){if(window.console&&window.console.log){console.log(u.message)}}}}if(n){x.addRow(["<small>[empty]</small>"])}else{x.thead.appendChild(b.hRow(["key","value"],"colHeader"))}var%20s=(f.expanded||e)?x.node:b.expander(b.stringify(q),"Click%20to%20show%20more",function(){this.parentNode.appendChild(x.node)});e=true;return%20s},array:function(m,v,q,n){var%20l=b.within(i).is(m);if(l){return%20b.common.circRef(m,l)}i[q||"TOP"]=m;if(v===f.maxDepth){return%20b.common.depthReached(m)}var%20s=n?"jQuery":"Array",r=b.table([s+"("+m.length+")",null],n?"jquery":s.toLowerCase()),u=true;if(n){r.addRow(["selector",m.selector])}b.forEach(m,function(x,w){u=false;r.addRow([w,j[b.type(x)](x,v+1,w)])});if(!n){if(u){r.addRow(["<small>[empty]</small>"])}else{r.thead.appendChild(b.hRow(["index","value"],"colHeader"))}}return%20f.expanded?r.node:b.expander(b.stringify(m),"Click%20to%20show%20more",function(){this.parentNode.appendChild(r.node)})},"function":function(s,v,q){var%20m=b.within(i).is(s);if(m){return%20b.common.circRef(s,m)}i[q||"TOP"]=s;var%20u=b.table(["Function",null],"function"),r=b.table(["Arguments"]),n=s.toString().match(/\((.+?)\)/),l=s.toString().match(/\(.*?\)\s+?\{?([\S\s]+)/)[1].replace(/\}?$/,"");u.addRow(["arguments",n?n[1].replace(/[^\w_,\s]/g,""):"<small>[none/native]</small>"]).addRow(["body",l]);return%20f.expanded?u.node:b.expander("function(){...}","Click%20to%20see%20more%20about%20this%20function.",function(){this.parentNode.appendChild(u.node)})},date:function(l){var%20m=b.table(["Date",null],"date"),n=l.toString().split(/\s/);m.addRow(["Time",n[4]]).addRow(["Date",n.slice(0,4).join("-")]);return%20f.expanded?m.node:b.expander("Date%20(timestamp):%20"+(+l),"Click%20to%20see%20a%20little%20more%20info%20about%20this%20date",function(){this.parentNode.appendChild(m.node)})},"boolean":function(l){return%20b.txt(l.toString().toUpperCase())},"undefined":function(){return%20b.txt("UNDEFINED")},"null":function(){return%20b.txt("NULL")},"default":function(){return%20b.txt("prettyPrint:%20TypeNotFound%20Error")}};c.appendChild(j[(f.forceObject)?"object":b.type(g)](g,h));return%20c};a.config={expanded:true,forceObject:false,maxDepth:3,styles:{array:{th:{backgroundColor:"#6DBD2A",color:"white"}},"function":{th:{backgroundColor:"#D82525"}},regexp:{th:{backgroundColor:"#E2F3FB",color:"#000"}},object:{th:{backgroundColor:"#1F96CF"}},jquery:{th:{backgroundColor:"#FBF315"}},error:{th:{backgroundColor:"red",color:"yellow"}},domelement:{th:{backgroundColor:"#F3801E"}},date:{th:{backgroundColor:"#A725D8"}},colHeader:{th:{backgroundColor:"#EEE",color:"#000",textTransform:"uppercase"}},"default":{table:{borderCollapse:"collapse",width:"100%"},td:{padding:"5px",fontSize:"12px",backgroundColor:"#FFF",color:"#222",border:"1px%20solid%20#000",verticalAlign:"top",fontFamily:'"Consolas","Lucida%20Console",Courier,mono',whiteSpace:"nowrap"},td_hover:{},th:{padding:"5px",fontSize:"12px",backgroundColor:"#222",color:"#EEE",textAlign:"left",border:"1px%20solid%20#000",verticalAlign:"top",fontFamily:'"Consolas","Lucida%20Console",Courier,mono',backgroundImage:b.headerGradient,backgroundRepeat:"repeat-x"}}}};return%20a})();var%20t=document.getElementsByTagName("body")[0].innerHTML;t=t.replace("<pre>","").replace("</pre>","");var%20o=null;try{eval("o%20=%20("+t+");")}catch(ex){document.body.insertBefore("Don't%20parse%20this%20as%20JSON%20>%20|"+t+"|",document.body.firstChild)}if(o!==null){var%20p=prettyPrint(o,{expanded:false,forceObject:true,maxDepth:5});document.body.insertBefore(p,document.body.firstChild)}void(0);