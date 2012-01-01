var win = Ti.UI.currentWindow;
win.title = 'tableViewRowのテスト';

//tableViewRowの場合はSectionがあったほうがいいっぽい。
var sections = [];

//tableViewに格納するテストデータ
/*var rows = [
    {title:'Row 1', hasChild:true,header:'header 1'},
    {title:'Row 2', hasDetail:true},
    {title:'Row 3', hasCheck:true,header:'header 2'},
    {title:'Row 4',Switch1}
];*/

//section1のヘッダー：header 1
var section1 = Ti.UI.createTableViewSection({
	headerTitle:'header 1'
});
//section1のrow：row1
var row1 = Ti.UI.createTableViewRow({
	title: 'Row 1',
	hasChild:true
});
//section1のrow：row2
var row2 = Ti.UI.createTableViewRow({
	title: 'Row 2',
	hasDetail:true
});

//section1 viewSectionにrowをaddする
section1.add(row1);
section1.add(row2);

//最初に作った配列のsectionsにpushする
sections.push(section1);

//section2 のヘッダー：header 2
var section2 = Ti.UI.createTableViewSection({
	headerTitle:'header 2'
});

var row3 = Ti.UI.createTableViewRow({
	title: 'Switch',
	touchEnabled:false,
	selectionStyle : Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE
});

var Switch1=Ti.UI.createSwitch({
               style:Ti.UI.iPhone.SWITCH_STYLE_CHECKBOX,
               value:false,
               Name:'Switch1',
               right:0
             });
row3.add(Switch1);
section2.add(row3);
sections.push(section2);

Switch1.addEventListener('change',function(e){
	alert(e.value);
});

// テーブルビューのstyleを指定する。
var tableview = Titanium.UI.createTableView({
    data: sections,
    style: Titanium.UI.iPhone.TableViewStyle.GROUPED
});

tableview.addEventListener('click',function(e){
//touchEnabledがfalseを除くのとhasChildとhasDetailがtrueの時のみ実行
if(e.rowData.touchEnabled || e.rowData.hasChild || e.rowData.hasDetail){
	//hasChildとhasDetailの違いを探る
	var cWin = Ti.UI.createWindow({
		backGroundcolor:'#fff'
	});
	var sView = Ti.UI.createScrollView({
		contentWidth:'auto',
		contentHeight:'auto',
		top:0,
		showVerticalScrollIndicator:true,
		showHorizontalScrollIndicator:true
	})
	var lText = Ti.UI.createLabel({
		text:'',
		height:'auto',
		width:300,
		top:10,
		font:{fontSize:13},
		color:'#777'
	});
	sView.add(lText);
	cWin.add(sView);
	lText.text = e;
	Ti.UI.currentTab.open(cWin,{animated:true});
}
});

win.add(tableview);