(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{300:function(e,n,a){"use strict";a.r(n);var t=a(3),r=a(2),w=a(27),o=a(69),c=a(6),i=a(22),s=a(12),u=a(15),p=a(16),g=a(20),h=a(100),d=new c.a({source:new s.b}),f=new u.a,m=new i.a({source:f,style:function(e){var n=e.getGeometry(),o=[new p.c({stroke:new g.a({color:"#ffcc33",width:2})})];return n.forEachSegment(function(e,n){var a=n[0]-e[0],t=n[1]-e[1],r=Math.atan2(t,a);o.push(new p.c({geometry:new w.a(n),image:new h.a({src:"data/arrow.png",anchor:[.75,.5],rotateWithView:!0,rotation:-r})}))}),o}});new t.a({layers:[d,m],target:"map",view:new r.a({center:[-11e6,46e5],zoom:4})}).addInteraction(new o.c({source:f,type:"LineString"}))}},[[300,0]]]);
//# sourceMappingURL=line-arrows.js.map