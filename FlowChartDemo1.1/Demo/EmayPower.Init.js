/// <reference path="jquery-1.4.1-vsdoc.js" />
/*
*  DragFlow初始化类，主要包括：
*  1、初始化流程默认显示样式；
*  2、解析流程步骤及步骤关系；
*  3、设置所有元素的可拖拽性、目标节点、源节点等
*  4、设置右键菜单；
*  Author:limq
*  date:2012.12.08
*/
(function () {
    window.DragFlow = {
        init: function () {
            //jsplum默认样式
            jsPlumb.importDefaults({
                DragOptions: { cursor: "pointer", zIndex: 2000 },
                
                HoverClass: "connector-hover",
                HoverPaintStyle: { strokeStyle: "#7ec3d9" },
                Endpoint: "Rectangle",
                Anchors: ["TopCenter", "TopCenter"],
                PaintStyle: {
                    lineWidth: 2,
                    strokeStyle: "black"
                },
                Overlays: [["PlainArrow", { location: 1, width: 10, length: 12}]
                //                ,
                //					["Label", {
                //					    location: 0.1,
                //					    id: "label",
                //					    cssClass: "aLabel"
                //					}]
                    ]
            });



            var connectorStrokeColor = "rgba(50, 50, 200, 1)",
				connectorHighlightStrokeColor = "rgba(180, 180, 200, 1)",
				hoverPaintStyle = { strokeStyle: "#7ec3d9" }; 		// hover paint style is merged on normal style, so you 

            jsPlumb.bind("contextmenu", function (component, originalEvent) {
                //alert("context menu on component " + component.id);
                originalEvent.preventDefault();
                return false;
            });
            // 链接创建成功事件，在此事件中可以加入增加链接的逻辑
            jsPlumb.bind("jsPlumbConnection", function (conn) {
                if (isfirstaddrelation) {
                    Config.AddConnection(conn);
                }
            });

            jsPlumb.bind("jsPlumbConnectionDetached", function (conn) {
               

            });


            jsPlumb.bind("Endpointclick", function (conn) {
                
            });

            // 删除创建成功事件，在此事件中可以加入删除链接的逻辑
            jsPlumb.bind("jsPlumbConnectionDetached", function (conn) {
                Config.DelConnection(conn);
            });


            jsPlumb.bind("dblclick", function (c) {
                if (Config.DelConnectionBefore(c)) { jsPlumb.detach(c); }
            }); 
            DragFlow.initEndpoints("");
            // 设置所有节点为连接目标节点
            jsPlumb.makeTarget(jsPlumb.getSelector(".lzemay_wModeS"), {
                dropOptions: { hoverClass: "dragHover" },
                //anchor: "Continuous",
                anchor: "LeftMiddle",
                endpoint: "Blank"
                //anchor:"TopCenter"
            });


            // make all .window divs draggable
            jsPlumb.draggable(jsPlumb.getSelector(".lzemay_wModeS"));

            // 设置所有节点的右键菜单
            DragFlow.makecontextmenu("", true);

        }
    };
})();
