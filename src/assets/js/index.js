window.onload=function(){
	//1.初始化数据
	var json = [];
	for(var i=1;i<=10000;i++){
		var a = {"ID":i+"","Name":"好多鱼"+i,"ParentName":"上瞧不起不早不晚颗一条鱼"+i,"Level":i,"Desc":"测试"+i};
		json.push(a);
	}
    getTable("tb_departments",'toolbar',json);
    getTable("ta",'toolbar',json);
    getTable("tb3",'toolbar',json);
    //2.初始化Table
    //TableInit("tb_departments",'toolbar',json);	
	
    //3.初始化Button的点击事件
    // var oButtonInit = new ButtonInit();
    // oButtonInit.Init();
    

}

function createTable(id,column,data,toolbarId,option){
    if(typeof(option) !="object"){
        option = {
            //url: 'bootJson.json',         //请求后台的URL（*）
            //contentType: 'application/json;charset=UTF-8',//这里我就加了个utf-8
            //data:json,
            dataType: 'json',
            //method: 'get',                      //请求方式（*）
            //toolbar: '#'+toolbarId,                //工具按钮用哪个容器
            striped: true,                      //是否显示行间隔色
            cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,                   //是否显示分页（*）
            sortable: true,                     //是否启用排序
            sortOrder: "asc",                   //排序方式
            //queryParams: queryParams(),//传递参数（*）
            sidePagination: "client",           //分页方式：client客户端分页，server服务端分页（*）
            pageNumber:1,                       //初始化加载第一页，默认第一页
            pageSize: 10,                       //每页的记录行数（*）
            pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
            search: false,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
            strictSearch: true,
            showColumns: true,                  //是否显示所有的列
            showRefresh: true,                  //是否显示刷新按钮
            minimumCountColumns: 2,             //最少允许的列数
            clickToSelect: true,                //是否启用点击选中行
            //height: 500,                        //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            uniqueId: "ID",                     //每一行的唯一标识，一般为主键列
            showToggle:true,                    //是否显示详细视图和列表视图的切换按钮
            cardView: false,                    //是否显示详细视图
            detailView: false,                   //是否显示父子表
           // columns: column
        }
    }
    option["data"] = data;
    option['columns'] = column==null||column==undefined?[]:column;
    if(toolbarId!=""&&typeof(toolbarId)=='string'){
        option['toolbar'] = "#"+toolbarId;
    }
    
     $('#'+id).bootstrapTable(option);
     $('#'+id).bootstrapTable('hideLoading');
}

function getTable(id,toolbarId,json){
     var column = [];
    if(id=='tb_departments'||id=="tb3"){
        column = [{
                checkbox: true,
                field:'ck'
            },{
                field: 'ID',
                title: '部门ID',
            }, {
                field: 'Name',
                title: '部门名称'
            }, {
                field: 'ParentName',
                title: '上级部门'
            }, {
                field: 'Level',
                title: '部门级别'
            }, {
                field: 'Desc',
                title: '描述'
            }, {
                field: 'Name',
                title: '部门名称'
            }, {
                field: 'ParentName',
                title: '上级部门'
            }, {
                field: 'Level',
                title: '部门级别'
            }, {
                field: 'Desc',
                title: '描述'
            }, {
                field: 'Name',
                title: '部门名称'
            }, {
                field: 'ParentName',
                title: '上级部门'
            }, {
                field: 'Level',
                title: '部门级别'
            }, {
                field: 'Desc',
                title: '描述'
            }];
    }else{
        column =  [{
                checkbox: true,
                field:'ck'
            },{
                field: 'ParentName',
                title: '上级部门'
            }, {
                field: 'Level',
                title: '部门级别'
            }, {
                field: 'Desc',
                title: '描述'
            }];
    }
    if(id=='tb_departments'){
        toolbarId = 'toolbar2';
    }
     $('#'+id).bootstrapTable({
            //url: 'bootJson.json',         //请求后台的URL（*）
            contentType: 'application/json;charset=UTF-8',//这里我就加了个utf-8
            data:json,
            dataType: 'json',
            method: 'get',                      //请求方式（*）
            toolbar: '#'+toolbarId,                //工具按钮用哪个容器
            striped: true,                      //是否显示行间隔色
            cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,                   //是否显示分页（*）
            sortable: true,                     //是否启用排序
            sortOrder: "asc",                   //排序方式
            //queryParams: queryParams(),//传递参数（*）
            sidePagination: "client",           //分页方式：client客户端分页，server服务端分页（*）
            pageNumber:1,                       //初始化加载第一页，默认第一页
            pageSize: 10,                       //每页的记录行数（*）
            pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
            search: false,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
            strictSearch: true,
            showColumns: true,                  //是否显示所有的列
            showRefresh: true,                  //是否显示刷新按钮
            minimumCountColumns: 2,             //最少允许的列数
            clickToSelect: true,                //是否启用点击选中行
            //height: 500,                        //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            uniqueId: "ID",                     //每一行的唯一标识，一般为主键列
            showToggle:true,                    //是否显示详细视图和列表视图的切换按钮
            cardView: false,                    //是否显示详细视图
            detailView: false,                   //是否显示父子表
            columns: column
        });
     $('#'+id).bootstrapTable('hideLoading');
}


 function openNav(){
      	var id = getParam('id');
      	for (var i = 0;i<id.length;i++) {
      		var newId = id.substring(0,i+1);
      		if(i==id.length-1){
      			$('#'+newId).addClass('cuHover');
      		}else{
      			//$('#'+newId).parent('li').addClass('active');
      			$('#'+newId).parent('li').toggleClass('active').children('ul').slideToggle().toggleClass('metis-close').toggleClass('metis-open');
      		}
      	}
      }
