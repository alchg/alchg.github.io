---
title: "ArchLinuxでRaspberry Pi PicoをArduino IDEから使う"
date: 2023-05-16T11:44:33+09:00
draft: false
main_menu: false
main_menu_order: 0
weight: 10
tags: [RaspberryPiPico,Arduino]
categorise: [ArchLinux]
description: "ArchLinuxでRaspberryPiPicoをArduinoIDEから使う時のまとめ"
---
1. まずはじめに  
	- ArchLinuxのGUI環境は構築済みであること  
	- Raspberry Pi Picoを使用する  
	- 1.x系のArduinoIDEを使用する  
	- Raspberry Pi Pico/RP2040を使用する  
	- Lチカまでやる  
<!--more-->
2. インストール  
	`pacman -Sy arduino python udisks2`

3. シリアル通信に必要なのでユーザーをuucpグループに追加  
	`gpasswd -a user uucp`  

4. 再起動

5. ArduinoIDE設定  
	1. メニューからFile>Preferencesを選択  

	2. Additional Boards Manager URLsにURLを追加する  
		`https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json`  

		![step2](/image/2023-05-16-step02.png)  

	3. メニューからTools>Board>Board Managerを選択  

	4. Raspberry Pi Pico/RP2040をインストール  
		![step4](/image/2023-05-16-step04.png)  

	5. ArduinoIDEを再起動  

	6. メニューからFile>Examples>01.Basics>Blinkを選択  

	7. ブートセルボタンを押しながらRaspberryPiPicoを接続  

	8. メニューからTools>BoardがRaspberryPiPicoになってることを確認  

	9. メニューからTools>Port>UF2 Boardを選択  

	10. サンプルプログラムをアップロード  
		Lチカが始まります

	11. 備考  
		次回以降のアップロードはPortに`/dev/ttyACM0(Raspberry Pi Pico)`等を選択します。  


