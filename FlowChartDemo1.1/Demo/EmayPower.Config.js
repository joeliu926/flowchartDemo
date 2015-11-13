(function () {
    Config = {
        LoadList: function (id) {
            // return '';
            return '<div class="w_lzemay lzemay_wMode" id="begin"> <div class="ep_lzemay"></div>   <img src="Images/BPS/begin.png" /></div>' + '<br/><br/><br/><br/>' +
                '<div class="w_lzemay lzemay_wMode" id="time"><div class="ep_lzemay"></div>   <img src="Images/BPS/time.png" /></div>' + '<br/><br/><br/><br/>' +
                '<div class="w_lzemay lzemay_wMode" id="wait"><div class="ep_lzemay"></div>   <img src="Images/BPS/wait.png" /></div>' + '<br/><br/><br/><br/>' +
                '<div class="w_lzemay lzemay_wMode" id="lsearch"><div class="ep_lzemay"></div>   <img src="Images/BPS/lsearch.png" /></div>' + '<br/><br/><br/><br/>' +
                '<div class="w_lzemay lzemay_wMode" id="lshield"><div class="ep_lzemay"></div>   <img src="Images/BPS/lshield.png" /></div>' + '<br/><br/><br/><br/>' +
                '<div class="w_lzemay lzemay_wMode" id="lsplit"><div class="ep_lzemay"></div>   <img src="Images/BPS/lsplit.png" /></div>' + '<br/><br/><br/><br/>' +
            //  '<div class="w_lzemay lzemay_wMode" id="coalition"><div class="ep_lzemay"></div> <img src="Images/BPS/coalition.png" /></div>' + '<br/><br/><br/><br/>' +
            //  '<div class="w_lzemay lzemay_wMode" id="remove"><div class="ep_lzemay"></div>   <img src="Images/BPS/remove.png" /></div>' + '<br/><br/><br/><br/>' +
            //  '<div class="w_lzemay lzemay_wMode" id="paichong"><div class="ep_lzemay"></div> <img src="Images/BPS/paichong.png" /></div>' + '<br/><br/><br/><br/>' +
            //  '<div class="w_lzemay lzemay_wMode" id="respond"><div class="ep_lzemay"></div>  <img src="Images/BPS/respond.png" /></div>' + '<br/><br/><br/><br/>' +
            //  '<div class="w_lzemay lzemay_wMode" id="clients"><div class="ep_lzemay"></div>  <img src="Images/BPS/clients.png" /></div>' + '<br/><br/><br/><br/>' +
            //  '<div class="w_lzemay lzemay_wMode" id="youhui"><div class="ep_lzemay"></div>   <img src="Images/BPS/youhui.png" /></div>' + '<br/><br/><br/><br/>' +
            //  '<div class="w_lzemay lzemay_wMode" id="spyh"><div class="ep_lzemay"></div>   <img src="Images/BPS/spyh.png" /></div>' + '<br/><br/><br/><br/>' +
            //  '<div class="w_lzemay lzemay_wMode" id="note"><div class="ep_lzemay"></div>   <img src="Images/BPS/note.png" /></div>' + '<br/><br/><br/><br/>' +
                '<div class="w_lzemay lzemay_wMode" id="yhqfk"><div class="ep_lzemay"></div>   <img src="Images/BPS/yhqfk.png" /></div>' + '<br/><br/><br/><br/>' +
                '<div class="w_lzemay lzemay_wMode" id="acookie"><div class="ep_lzemay"></div>   <img src="Images/BPS/acookie.png" /></div>' + '<br/><br/><br/><br/>' +
                '<div class="w_lzemay lzemay_wMode" id="analysisorder"><div class="ep_lzemay"></div>   <img src="Images/BPS/analysisorder.png" /></div>';
        },
        DraggableDrapDiv: function (event, Fwind, Fdiv, newid) {

            fid = Fdiv.id;
            if (event == null) {

            }

            if (fid.indexOf('_m_') == -1) {
                var plx = event.pageX - $(Fdiv).offset().left; var ply = event.pageY - $(Fwind).offset().top;
                newid = fid + '_m_' + newid;
                $(Fwind).append('<div class="w_lzemay lzemay_wModeS" style="left:' + plx + 'px;top:' + ply + 'px;" id="' + newid + '"> <div class="ep_lzemay"></div><div class="ep_lzemay1"></div> <div class="ep_lzemayUP"></div><div class="ep_lzemayDown"></div> <img src="Images/BPS/' + fid + '.png" /></div>');
                jsPlumb.DemoList.initEleM(newid);

                var miandrpdiv = $('#' + newid);
                miandrpdiv.bind('mousemove', function (event) { miandrpdiv.find(".ep_lzemay").show(); });
                miandrpdiv.bind('mouseleave', function (event) { miandrpdiv.find(".ep_lzemay").hide(); });
            }

            $("#PositionText").text($("#PositionText").text() + "__" + Math.floor($('#' + fid).position().top));
           // alert($('#demo_emdrap').scrollLeft());
        },
        //创建DIV
        LoadDrapDiv: function (divid, sid, x, y, upstr, lowerstr, icon, type) {
            var emaycomparee;
            if (type == "I") {
                var Ttype = divid.split('_m_')[0];

                $("#demo_emdrap").append('<div class="w_lzemay lzemay_wModeS" style="left:' + x + 'px;top:' + y + 'px;" id="' + divid + '"><div class="ep_lzemay"></div>  <div class="ep_lzemay' + icon + '"></div> <div class="ep_lzemayUP">' + upstr + '</div><div class="ep_lzemayDown">' + lowerstr + '</div> <img src="Images/BPS/' + Ttype + '.png" /></div>');
                jsPlumb.DemoList.initEleM(divid);
                //为解决dorado不能绑定droppable事件的写的rubbish
                var miandrpdiv = $('#' + divid);
                miandrpdiv.bind('mouseup', function (event) { var Y = $('#' + this.id).position().top; var X = $('#' + this.id).position().left; if (emaycomparee != Y + X) { Config.DraggableDrapDiv(event, $("#demo_emdrap"), this, '_m_'); } }); $('#' + divid).bind('mousedown', function (event) { var Y = $('#' + this.id).position().top; var X = $('#' + this.id).position().left; emaycomparee = Y + X; });
                miandrpdiv.bind('mousemove', function (event) { miandrpdiv.find(".ep_lzemay").show(); });
                miandrpdiv.bind('mouseleave', function (event) { miandrpdiv.find(".ep_lzemay").hide(); });
            }

            if (type == "O") {
                var newid = divid + '_m_' + sid; 
                $("#demo_emdrap").append('<div class="w_lzemay lzemay_wModeS" style="left:' + x + 'px;top:' + y + 'px;" id="' + newid + '"> <div class="ep_lzemay"></div> <div class="ep_lzemay' + icon + '"></div><div class="ep_lzemayUP">' + upstr + '</div><div class="ep_lzemayDown">' + lowerstr + '</div> <img src="Images/BPS/' + divid + '.png" /></div>');
                jsPlumb.DemoList.initEleM(newid);
                //为解决dorado不能绑定droppable事件的写的rubbish
                var miandrpdiv = $('#' + newid);
                miandrpdiv.bind('mouseup', function (event) { var Y = $('#' + this.id).position().top; var X = $('#' + this.id).position().left; if (emaycomparee != Y + X) { Config.DraggableDrapDiv(event, $("#demo_emdrap"), this, '_m_'); } }); $('#' + newid).bind('mousedown', function (event) { var Y = $('#' + this.id).position().top; var X = $('#' + this.id).position().left; emaycomparee = Y + X; });
                miandrpdiv.bind('mousemove', function (event) { miandrpdiv.find(".ep_lzemay").show(); });
                miandrpdiv.bind('mouseleave', function (event) { miandrpdiv.find(".ep_lzemay").hide(); });
            }
        },
        //删除关系
        DelConnection: function (conn) {
            var newstr = "删除connectionID:" + conn.connection.id + "初始ID：" + conn.sourceId + "," + conn.targetId;

            var overlay = conn.connection.getOverlay("label");

        },
        //删除关系
        DelConnectionBefore: function (conn) {
            return true;
            //return false;
            //var newstr = "删除connectionID:" + conn.connection.id + "初始ID：" + conn.sourceId + "," + conn.targetId; 
            //var overlay = conn.connection.getOverlay("label");
        },
        //添加关系
        AddConnection: function (conn) {
            //var newstr = "connectionID:" + conn.connection.id + "初始ID：" + conn.sourceId + "," + conn.targetId; 
            //设置连线标签 
            //conn.connection.getOverlay("label").setLabel(conn.connection.id); 
            //conn.connection.hideOverlay("label"); 
            //jsPlumb.detach(conn);
        },
        //删除DIV
        DelDrapDiv: function (div) {
            jsPlumb.detachAllConnections(div.id);
            $('#' + div.id).remove();
        },
        //保存流程图
        SaveFlowMap: function (div) {

        },
        //双击DIV
        DrapDivdblclick: function (div) {
            alert(div.innerHTML);
        },
        //初始化流程图 
        LoadInitJSON: function (Json) {
            isfirstaddrelation = false;
            $(".w_lzemay").each(function (i, elm) {

                jsPlumb.detachAllConnections(elm.id);
                $('#' + elm.id).remove();
            });
            jsPlumb.DemoList.initDate(Json); jsPlumb.DemoList.initDateRelation(Json);
            isfirstaddrelation = true;

        },
//        refreshDateState: function (Json) {
//            jsPlumb.DemoList.refreshDateState(Json);
//        },
        //初始化流程图(如果LoadInitJSON没有给值，这个为默认值)
        GetInitData: function () {
            //return jQuery.parseJSON('{"rData":{"Position":[{"IPP":"begin_m_39_emaycn_59.0_emaycn_58.0_emaycn__emaycn_开始_emaycn_1"},{"IPP":"time_m_40_emaycn_309.0_emaycn_58.0_emaycn__emaycn_查询_emaycn_1"},{"IPP":"lsearch_m_41_emaycn_309.0_emaycn_162.0_emaycn__emaycn_查询_emaycn_1"},{"IPP":"kh_clients_m_42_emaycn_863.0_emaycn_143.0_emaycn__emaycn_目标组_emaycn_1"},{"IPP":"intersection_m_69_emaycn_593.0_emaycn_143.0_emaycn__emaycn_交集_emaycn_4"},{"IPP":"mb_note_m_634_emaycn_216.0_emaycn_287.0_emaycn__emaycn_短信_emaycn_4"}],"Relation":[{"IPR":"begin_m_39_emaycn_time_m_40"},{"IPR":"time_m_40_emaycn_lsearch_m_41"},{"IPR":"intersection_m_69_emaycn_kh_clients_m_42"},{"IPR":"lsearch_m_41_emaycn_intersection_m_69"}]}}');
            return '';
        },
        //设置拖动div的显示文字
        SetDrapDivStr: function (DrapDivID, Str, TYPE) { switch (TYPE) { case "TOP": $("#" + DrapDivID + ">.ep_lzemayUP").html(Str); break; case "LOWER": $("#" + DrapDivID + ">.ep_lzemayDown").html(Str); break; } },
         
        PasteDrapDiv: function (SourceId, x, y) {
            //alert(SourceId);
            //alert(x);
            //alert(y);
            return true;
        },
        //设置流程图的编辑状态
        SetUnDrap: function (Bol) {
            switch (Bol) {
                case "True":
                    if ($(".lzemay_wModeS").attr("class").indexOf("ui-state-disabled") >= 0) {
                        jsPlumb.setDraggable($(".lzemay_wModeS"), true);
                        jsPlumb.repaintEverything();
                        DragFlow.initEndpoints();
                        jsPlumb.bind("dblclick", function (c) {
                            if (Config.DelConnectionBefore(c)) {
                                jsPlumb.detach(c);
                            }
                        });
                        $('body').append('<div id="myMenu1" style="position: absolute; z-index: 2000; display: none;"><ul><li id="delete"><img src="Images/delete.gif" />删除</li></ul> </div>');
                        DragFlow.makecontextmenu("", true);
                    }
                    break;
                case "False":
                    jsPlumb.unbind("dblclick");
                    jsPlumb.setDraggable($(".lzemay_wModeS"), false);
                    $(".ep_lzemay").unbind();
                    //$(".lzemay_wModeS").unbind("dblclick");
                    $("#myMenu1").remove();
                    break;
                default:
                    jsPlumb.setDraggable($(".lzemay_wModeS"), true);
                    break;
            }
        }
    }
})();