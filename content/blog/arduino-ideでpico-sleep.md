---
title: "ArduinoIDEでpico/sleep.hを使う"
date: 2024-05-06T04:58:23+09:00
draft: false
main_menu: false
main_menu_order: 0
weight: 0
tags: [RaspberryPiPico,Arduino]
categorise: [RaspberryPiPico]
description: "ArduinoIDEでpico/sleep.hを使うメモ"
---
1. まずはじめに  
        - ArduinoIDEのRaspberryPiPico環境は構築済みであること  
        - Raspberry Pi Pico Wを使用する  
        - 1.x系のArduinoIDEを使用する  
        - Raspberry Pi Pico/RP2040を使用する  
        - dormantモード移行までやる  
<!--more-->
2. インストール  
        `pacman -Sy git cmake make`  

3. pico-extrasの導入  
        `cd ~/.arduino15/packages/rp2040/hardware/rp2040/X.X.X/`  
        `./lib/platform_inc.txt`に`-iwithprefixbefore/pico-extras/src/rp2_common/pico_sleep/include`を追加  
        `git clone https://github.com/raspberrypi/pico-extras.git`  

4. libpico.aの導入  
        `cd ~/`  
        `git clone https://github.com/earlephilhower/arduino-pico.git`  
        `cd ~/.arduino15/packages/rp2040/hardware/rp2040/X.X.X/`  
        `cp -r ~/arduino-pico/package/ ./`  
        `cd ./tools/`  
        `python get.py`  
        `cd ./libpico/`  
        CMakeLists.txtに`include(../../pico-extras/external/pico_extras_import.cmake)`を追加（`include(pico_sdk_import.cmake)`の次など）  
        CMakeLists.txtに`pico_sleep`と`hardware_sleep`を追加（pico_stdlib辺り）  
        `chmod +x make-libpico.sh`  
        `./make-libpico.sh`  
        `cp ./build/libpico.a ../../lib/libpico.a`  

4. サンプルコード  
	`#include "pico/sleep.h"`  
	`#define EDGE_PIN 10`  
	`void setup(){`  
	`  sleep_run_from_xosc();`  
	`  sleep_goto_dormant_until_edge_high(EDGE_PIN);`  
	`}`  
	`void loop(){`  
	`  pinMode(LED_BUILTIN, OUTPUT);`  
	`  digitalWrite(LED_BUILTIN, HIGH);`  
	`  delay(1000);`  
	`  digitalWrite(LED_BUILTIN, LOW);`  
	`  delay(1000);`  
	`}`  

5. 備考  
	実用的にスリープモードを使用するにはクロックの復元など他の処理も必要  

