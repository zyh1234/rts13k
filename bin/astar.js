function Vector(e,t){var n={X:e,Y:t,is:function(e){return n.X===e.X&&n.Y===e.Y},distanceTo:function(e){return Math.sqrt(Math.pow(Math.abs(n.X-e.X),2)+Math.pow(Math.abs(n.Y-e.Y),2))}};return n}function isInList(e,t){for(var n=0;n<t.length;n++)if(e.P.is(t[n].P))return n;return-1}function findPath(e,t,n){var r=[],i=[],s=Vector(t.X,t.Y),o=Vector(n.X,n.Y),u=s,a={G:0,H:s.distanceTo(o),F:s.distanceTo(o),P:s},f,l,c,h,p;r.push(a);while(r.length>0){u=a.P;var d=[{G:a.G+1,H:0,F:0,P:Vector(u.X,u.Y-1)},{G:a.G+1,H:0,F:0,P:Vector(u.X-1,u.Y-1)},{G:a.G+1,H:0,F:0,P:Vector(u.X-1,u.Y)},{G:a.G+1,H:0,F:0,P:Vector(u.X,u.Y+1)},{G:a.G+1,H:0,F:0,P:Vector(u.X+1,u.Y+1)},{G:a.G+1,H:0,F:0,P:Vector(u.X+1,u.Y)},{G:a.G+1,H:0,F:0,P:Vector(u.X+1,u.Y-1)},{G:a.G+1,H:0,F:0,P:Vector(u.X-1,u.Y+1)}];i.push(a),r.splice(isInList(a,r),1);for(f=0;f<d.length;f++)if(d[f].P.X>0&&d[f].P.Y>0&&d[f].P.X<e.length&&d[f].P.Y<e[0].length){l=d[f];if(l.P.is(o)){c=[],l.parent=a,c.unshift({X:l.P.X,Y:l.P.Y});while(!l.P.is(s))l=l.parent,c.unshift({X:l.P.X,Y:l.P.Y});return c}if(isInList(l,i)===-1&&(e[l.P.X][l.P.Y]===0||e[l.P.X][l.P.Y]===2)){l.H=l.P.distanceTo(o),l.F=l.G+l.H;var v=r[isInList(l,r)];v&&v.F>l.F?(v.parent=a,v.F=l.F,v.G=l.G):v||(l.parent=a,r.push(l))}}p=0;for(h=0;h<r.length;h++)r[h].F<r[p].F&&(p=h);a=r[p]}return[]}onmessage=function(e){postMessage(findPath(e.data.collisionMap,Vector(e.data.x1,e.data.y1),Vector(e.data.x2,e.data.y2)))};