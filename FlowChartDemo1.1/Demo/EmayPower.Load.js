(function () {
    jsPlumb.DemoList = {
        initEleM: function (id) {
            DragFlow.makeSourceById(id);
            jsPlumb.draggable(id);
            DragFlow.makeTargetById(id);
            DragFlow.makecontextmenu(id, false);
            $('#' + id).dblclick(function () { Config.DrapDivdblclick(this); });

        },
        find: function (id) {
            for (var i = 0; i < entries.length; i++) {
                if (entries[i].id === id) {
                    var next = i < entries.length - 1 ? i + 1 : 0,
						prev = i > 0 ? i - 1 : entries.length - 1;
                    return {
                        current: entries[i],
                        prev: entries[prev],
                        next: entries[next],
                        idx: i
                    };
                }
            }
        },
        initDate: function (ejson) {
            var rData = Config.GetInitData();
            if ($.fn.isJson(ejson)) {
                rData = ejson;
            }
            $.each(rData, function (i, item) {
                var rDataP = item.Position, rDataR = item.Relation;
                if (typeof (rDataP) != 'undefined') {
                    $.each(rDataP, function (j, itemP) {
                        var IPPArray = itemP.IPP.split('_emaycn_');
                        var newid = IPPArray[0];
                        Config.LoadDrapDiv(newid, '', IPPArray[1], IPPArray[2], IPPArray[3], IPPArray[4], IPPArray[5], "I");
                    })
                }
            })
        },
        initDateRelation: function (ejson) {
            var rData = Config.GetInitData();
            if ($.fn.isJson(ejson)) {
                rData = ejson;
            }
            $.each(rData, function (i, item) {
                var rDataP = item.Position, rDataR = item.Relation;
                if (typeof (rDataR) != 'undefined') {
                    $.each(rDataR, function (j, itemR) {
                        var IPRArray = itemR.IPR.split('_emaycn_');
                        var common = { anchors: ["Continuous"], connector: ["Flowchart", { curviness: 20}], connectorStyle: { strokeStyle: "black", lineWidth: 1 }, endpoints: ["Blank"] };
                        try {
                            jsPlumb.connect({ source: IPRArray[0], target: IPRArray[1] }, common);
                        } catch (ex) { }
                    })
                }
            })
        },
//        refreshDateState: function (ejson) {
//            var rData = Config.GetInitData();
//            if ($.fn.isJson(ejson)) {
//                rData = ejson;
//            }
//            $.each(rData, function (i, item) {
//                var rDataP = item.Position, rDataR = item.Relation;
//                if (typeof (rDataP) != 'undefined') {
//                    $.each(rDataP, function (j, itemP) {
//                        var IPPArray = itemP.IPP.split('_emaycn_');
//                        var newid = IPPArray[0];
//                        switch (IPPArray[5]) {
//                            case "1":
//                                $("#" + newid + " div:nth-child(2)").removeClass().addClass("ep_lzemay1");
//                                break;
//                            case "2":
//                                $("#" + newid + " div:nth-child(2)").removeClass().addClass("ep_lzemay2");
//                                break;
//                            case "3":
//                                $("#" + newid + " div:nth-child(2)").removeClass().addClass("ep_lzemay3");
//                                break;
//                            case "4":
//                                $("#" + newid + " div:nth-child(2)").removeClass().addClass("ep_lzemay4");
//                                break;
//                            default:
//                                $("#" + newid + " div:nth-child(2)").removeClass().addClass("ep_lzemay1");
//                                break;
//                        }
//                    
//                        Config.SetDrapDivStr(newid, IPPArray[3], 'TOP');
//                        Config.SetDrapDivStr(newid, IPPArray[4], 'LOWER');
//                    })
//                }
//            })
//        },
        init: function () {
            var bod = document.body;
            var Dhtm = Config.LoadList();
            if (Dhtm.length > 1) {
                var d = document.createElement("div");
                d.className = "renderMode";
                d.innerHTML = Config.LoadList();
                bod.appendChild(d);
            }

            $(".lzemay_wMode").draggable({ helper: "clone", drag: function (event, ui) {

            }
            });

            $("#demo_emdrap").droppable({
                drop: function (event, ui) {
                    if (ui.draggable[0].className.indexOf("lzemay_wMode") > 0) {
                        var Fdiv = ui.draggable[0];
                        var newid = Math.floor(Math.random() * 100000 + 1);
                        Config.DraggableDrapDiv(event, this, Fdiv, newid);

                    }
                }
            });
        }
    };
})();