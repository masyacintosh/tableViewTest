//TableViewのテスト２

//ウィンドウのプロパティ的なものを設定
var win = Ti.UI.currentWindow;
win.title = 'テーブルビューのテスト2(グループ化したTableView)';
win.backgroundColor = '#339';

//tableViewに格納するテストデータ
var rows = [
    {title:'Row 1', hasChild:true,header:'header 1'},
    {title:'Row 2', hasDetail:true},
    {title:'Row 3', hasCheck:true,header:'header 2'},
    {title:'Row 4'}
];

// テーブルビューのstyleを指定する。
var tableview = Titanium.UI.createTableView({
    data: rows,
    style: Titanium.UI.iPhone.TableViewStyle.GROUPED
});

win.add(tableview);
