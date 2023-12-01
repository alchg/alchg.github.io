---
title: "Raspberry Pi PicoでMML Playerを作ってみた"
date: 2023-12-01T14:36:34+09:00
draft: false
main_menu: false
main_menu_order: 0
weight: 0
tags: [RaspberryPiPico]
categorise: [プログラミング]
description: "Raspberry Pi PicoでのMMLプレイヤー制作のまとめです。"
---
1. まずはじめに  
Raspberry Pi PicoにはPWMという電流を制御する機能が備わっているので、これを用いてスピーカーを振動させて音を出しています。  
また、あまり費用をかけずに作ることを目的としていますので最小限度で構成されています。  
<!--more-->
2. 必要な部品  
- Raspberry Pi Pico  
![Raspberry Pi Pico](/image/2023-12-01-raspberrypipico.png)  
※画像はRaspberry Pi Pico Wです。  

- モノラルイヤホンジャック  
![モノラルイヤホンジャック](/image/2023-12-01-audiojack.png)  
Amazonでも購入できます。  

- ダイソーの３００円スピーカー  
![ダイソーの３００円スピーカー](/image/2023-12-01-speaker.png)  
ダイソーで買えます。  

- 加えて配線類です。ブレッドボードとジャンプワイヤを使いましたが、ワニ口クリップでも良いと思います。  

2. 手順  
        1. ArduinoIDEで[RP2040_MML_PLAYER.ino](https://github.com/alchg/RP2040_MML_Player)をファイルシステム付きでアップロードする。  
        2. PicoLittleFS-0.2.0などで[data](https://github.com/alchg/RP2040_MML_Player)フォルダの中身をアップロードする。  
        ご自身で用意したMMLを上書きすることもできます。  
        3. GPIO 0とGNDをイヤフォンなどに接続すると演奏が聞こえます。  
        今回はモノラルイヤホンジャックを使いました。  

3. 実演  
[https://youtu.be/bq-LyPG--Lk](https://youtu.be/bq-LyPG--Lk)  

4. 終りに  
	PWMを使った音の出し方などは参考ページが他にありますので検索をご利用ください。  
        またMMLは自分自身で打ち込んだものなので著作権は放棄していません。基本的に使用フリーですがご注意ください。  
