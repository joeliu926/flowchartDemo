/// <reference path="jquery-1.4.1-vsdoc.js" />
/*
*  DragFlow��ʼ���࣬��Ҫ������
*  1����ʼ������Ĭ����ʾ��ʽ��
*  2���������̲��輰�����ϵ��
*  3����������Ԫ�صĿ���ק�ԡ�Ŀ��ڵ㡢Դ�ڵ��
*  4�������Ҽ��˵���
*  Author:limq
*  date:2012.12.08
*/
(function () {
    window.DragFlow = {
        init: function () {
            //jsplumĬ����ʽ
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
            // ���Ӵ����ɹ��¼����ڴ��¼��п��Լ����������ӵ��߼�
            jsPlumb.bind("jsPlumbConnection", function (conn) {
                if (isfirstaddrelation) {
                    Config.AddConnection(conn);
                }
            });

            jsPlumb.bind("jsPlumbConnectionDetached", function (conn) {
               

            });


            jsPlumb.bind("Endpointclick", function (conn) {
                
            });

            // ɾ�������ɹ��¼����ڴ��¼��п��Լ���ɾ�����ӵ��߼�
            jsPlumb.bind("jsPlumbConnectionDetached", function (conn) {
                Config.DelConnection(conn);
            });


            jsPlumb.bind("dblclick", function (c) {
                if (Config.DelConnectionBefore(c)) { jsPlumb.detach(c); }
            }); 
            DragFlow.initEndpoints("");
            // �������нڵ�Ϊ����Ŀ��ڵ�
            jsPlumb.makeTarget(jsPlumb.getSelector(".lzemay_wModeS"), {
                dropOptions: { hoverClass: "dragHover" },
                //anchor: "Continuous",
                anchor: "LeftMiddle",
                endpoint: "Blank"
                //anchor:"TopCenter"
            });


            // make all .window divs draggable
            jsPlumb.draggable(jsPlumb.getSelector(".lzemay_wModeS"));

            // �������нڵ���Ҽ��˵�
            DragFlow.makecontextmenu("", true);

        }
    };
})();
