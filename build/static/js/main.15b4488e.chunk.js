(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(4),u=n.n(i),c=(n(14),n(2)),r=n(5),s=n(6),o=n(1),h=n(7),d=n(8),p=(n(15),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={inputValue:"",list:[]},a.handleInputChange=a.handleInputChange.bind(Object(o.a)(a)),a.handleBtnClick=a.handleBtnClick.bind(Object(o.a)(a)),a.handleItemDelete=a.handleItemDelete.bind(Object(o.a)(a)),a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return l.a.createElement(a.Fragment,null,l.a.createElement("div",null,l.a.createElement("label",null,"\u8f93\u5165\u5185\u5bb9\uff0c\u70b9\u51fb\u6dfb\u52a0\u589e\u52a0\u6761\u76ee\uff0c\u70b9\u51fb\u5df2\u6709\u6761\u76ee\u8fdb\u884c\u5220\u9664"),l.a.createElement("br",null),l.a.createElement("input",{className:"input",value:this.state.inputValue,onChange:this.handleInputChange}),l.a.createElement("button",{onClick:this.handleBtnClick},"\u6dfb\u52a0")),l.a.createElement("ul",null,this.state.list.map((function(t,n){return l.a.createElement("li",{key:n,onClick:e.handleItemDelete},t)}))))}},{key:"handleInputChange",value:function(e){var t=e.target.value;this.setState((function(){return{inputValue:t}}))}},{key:"handleBtnClick",value:function(){this.setState((function(e){return{list:[].concat(Object(c.a)(e.list),[e.inputValue]),inputValue:""}}))}},{key:"handleItemDelete",value:function(e){this.setState((function(t){var n=Object(c.a)(t.list);return n.splice(e,1),{list:n}}))}}]),n}(a.Component));u.a.render(l.a.createElement(p,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.15b4488e.chunk.js.map