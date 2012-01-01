// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//tab用のWindowを用意
var table1win = Ti.UI.createWindow({url:'table1.js'});
var table2win = Ti.UI.createWindow({url:'table2.js'});
var table3win = Ti.UI.createWindow({url:'table3.js'});

//tabを用意
var tab1 = Ti.UI.createTab({
	title: 'table1',
	window:table1win});
var tab2 = Ti.UI.createTab({
	title: 'table2',
	window:table2win});
var tab3 = Ti.UI.createTab({
	title: 'table3',
	window:table3win})

tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.addTab(tab3);

// open tab group
tabGroup.open();
