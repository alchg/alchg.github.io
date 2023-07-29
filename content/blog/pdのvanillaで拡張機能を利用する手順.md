---
title: "Pure Data拡張機能の導入"
date: 2023-07-29T14:49:57+09:00
draft: false
main_menu: false
main_menu_order: 0
weight: 0
tags: [PD]
categorise: [PD]
description: "PD Vanillaの拡張機能導入手順メモです。"
---
1. まずはじめに  
	- 例としてcomportという拡張機能を導入します。
	- Pure Data Vanillaを導入済みであることが前提です。  
	- 環境はArch Linuxです。  
<!--more-->
2. 手順  
	1. helpメニューからFind externalsを選択  
		![step01](/image/2023-07-29-setp01.png)  

	2. comportと入力してSearchを選択  
		![step02](/image/2023-07-29-setp02.png)  

	3. comportが表示されるので選択し、Installを選択  
		![step03](/image/2023-07-29-setp03.png)  

	4. インストール先フォルダを選択し、OKを選択  
		![step04](/image/2023-07-29-setp04.png)  

	5. Yesを選択  
		![step05](/image/2023-07-29-setp05.png)  

	6. FileメニューからEdit Preferencesを選択  
		![step06](/image/2023-07-29-setp06.png)  

	7. Startupを選択、Newを選択、comportを入力しEnter、Applyを選択  
		![step07](/image/2023-07-29-setp07.png)  

	8. Pathを選択し、Newを選択  
		![step08](/image/2023-07-29-setp08.png)  

	9. 拡張機能をインストールしたディレクトリを選択し、OKを選択  
		![step09](/image/2023-07-29-setp09.png)  

	10. パスディレクトリを確認し、OKを選択  
		![step10](/image/2023-07-29-setp10.png)  

	11. comportのオブジェクトが作成できることを確認  
		![step11](/image/2023-07-29-setp11.png)  

3. 備考  
	- Arch Linuxでcomportを使う場合はユーザーにシリアル通信の為の権限が必要です。  

		 ユーザをuucpグループに追加する例：`gpasswd -a user uucp`  
 
