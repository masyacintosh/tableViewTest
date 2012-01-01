//tableviewのテスト１

//ウィンドウのプロパティ的なものを設定
var win = Ti.UI.currentWindow;
win.title = 'テーブルビューのテスト1(ノーマルなTableView)';
win.backgroundColor = '#933';

//tableViewに格納するテストデータ
var rows = [
    {title:'Row 1', hasChild:true},
    {title:'Row 2', hasDetail:true},
    {title:'Row 3', hasCheck:true},
    {title:'Row 4'}
];

//tableViewを作る
var tableView = Ti.UI.createTableView({
	data:rows
});

win.add(tableView);
