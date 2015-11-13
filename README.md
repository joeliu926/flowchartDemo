# flowchartDemo
此项目为基于jsPlumb与jquery写一个画流程图的控件。提供了一系统列操作方法.


Config 对象提供流程图操作方法
//加载原始节点
Config.LoadList

//加载可拖动节点
Config.LoadDrapDiv

//删除节点间关系后调用方法
Config.DelConnection

//删除节点间关系前调用用的方法
Config.DelConnectionBefore

//添加两个节点之前的关系
Config.AddConnection

//删除DIV
Config.DelDrapDiv

//双击DIV后触发事件
Config.DrapDivdblclick

//根据josn初始化流程图
Config.LoadInitJSON

//设置拖动div的显示文字
Config.SetDrapDivStr

//设置流程图的编辑状态
//参数bool
Config.SetUnDrap(false);
