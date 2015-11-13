/// <reference path="jquery-1.4.1-vsdoc.js" />
/*
*  DragFlow JQuery方法类，主要包括：
*  1、初始化端点、设置目标节点、源节点；
*  2、设置右键菜单；
*  3、设置所有元素的可拖拽性、目标节点、源节点等
*  4、设置右键菜单；
*  Author:liuzhao
*  date:2012.12.08
*/
(function ($) {
    // 初始化端点，把所有带有ep样式元素的父节点设置为源节点
    DragFlow.initEndpoints = function (nextColour) {
        $(".ep_lzemay").each(function (i, e) {
            var p = $(e).parent();
            jsPlumb.makeSource($(e),
            {
                //parent: e,
                parent: p,
                // anchor: "Continuous",
                anchor: "RightMiddle",
                //anchor: "Continuous",
                connector: ["Flowchart", { curviness: 20}],
                connectorStyle: { strokeStyle: "black", lineWidth: 2 },
                endpoint: "Blank",
                maxConnections: 20,
                deleteEndpointsOnDetach: true,
                onMaxConnections: function (info, e) {
                    alert("最大连接数为 (" + info.maxConnections + ") reached");
                }
            });
        });
    };
    // 设置元素为连接源节点
    DragFlow.makeSourceById = function (newid) {
        jsPlumb.makeSource($("#" + newid + "").find(".ep_lzemay"),
                            {
                                parent: newid,
                                // anchor: "Continuous",
                                anchor: "RightMiddle",
                                connector: ["Flowchart", { curviness: 20}],
                                connectorStyle: { strokeStyle: "black", lineWidth: 2 },
                                endpoint: "Blank",
                                maxConnections: 20,
                                onMaxConnections: function (info, e) {
                                    alert("最大连接数为 (" + info.maxConnections + ") ！！");
                                }
                            });
    };
    // 设置连接目标节点
    DragFlow.makeTargetById = function (newid) {
        jsPlumb.makeTarget(newid, {
            dropOptions: { hoverClass: "dragHover" },
            //anchor: "Continuous",
            anchor: "LeftMiddle",
            endpoint: "Blank"
            //anchor:"TopCenter"
        });
    };
    // 设置元素右键菜单
    DragFlow.makecontextmenu = function (newid, isAllElements) {
        var els = $("#" + newid);
        if (isAllElements) {
            els = $(".lzemay_wMode");
        };

        els.contextMenu('myMenu1',
             {
                 onContextMenu: function (e) {
                     var plx = e.pageX - $("#demo_emdrap").offset().left;
                     var ply = e.pageY - $("#demo_emdrap").offset().top;
                     clipboardDataposition = plx + '_m_' + ply;
                     return true;
                 },
                 onShowMenu: function (e, menu) {
                     if (clipboardDatastring == '') {
                         $('#paste', menu).remove();
                     }
                     return menu;
                 },
                 bindings:
                  {
                      'copy': function (t) {
                          clipboardDatastring = t.id;
                      },
                      'paste': function (t) {
                          if (clipboardDatastring != '') {
                              var plx = clipboardDataposition.split('_m_')[0]; var ply = clipboardDataposition.split('_m_')[1];

                              Config.PasteDrapDiv(clipboardDatastring, plx, ply);
                          }
                      },
                      'edit': function (t) {
                          alert('is not active...so .sorry');
                      },
                      'delete': function (t) {
                          Config.DelDrapDiv(t);
                      },
                      'save': function (t) {
                          Config.SaveFlowMap(t);
                      }
                  }
             });
          }

          //此对象应该放Render.js 在load的时候做一次性初始化
          $("#demo_emdrap").contextMenu('myMenu2',
                         {
                             onContextMenu: function (e) {
                                 var plx = e.pageX - $("#demo_emdrap").offset().left;
                                 var ply = e.pageY - $("#demo_emdrap").offset().top;
                                 clipboardDataposition = plx + '_m_' + ply;
                                 if (clipboardDatastring == '') { return false; }
                                 return true;
                             },
                             onShowMenu: function (e, menu) {
                                 //如果粘贴字符为空那右菜单不显示(因为drodra那边右健只有一个粘贴菜单)
                                 if (clipboardDatastring == '') {
                                     $('#paste', menu).remove();
                                 }
                                 return menu;
                             },
                             bindings:
                              {
                                  'paste': function (t) {
                                      if (clipboardDatastring != '') {
                                          var plx = clipboardDataposition.split('_m_')[0]; var ply = clipboardDataposition.split('_m_')[1];

                                          Config.PasteDrapDiv(clipboardDatastring, plx, ply);
                                      }

                                  },
                                  'delete': function (t) {
                                      if (confirm("确认删除所有节点信息?")) {
                                          $(".lzemay_wModeS").each(function (i, val) {
                                              Config.DelDrapDiv(val);
                                          });
                                      }
                                  }
                              }
                         });
      })(jQuery);

  