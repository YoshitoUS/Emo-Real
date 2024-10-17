## 制作物イメージ
![IMG_4343](https://github.com/user-attachments/assets/ca5a67d4-ae1c-4437-9679-187bc108a798)
<img width="467" alt="スクリーンショット 2024-07-09 23 36 06" src="https://github.com/user-attachments/assets/807d14a4-d393-4753-bbf7-8b88f2997142">
<img width="351" alt="スクリーンショット 2024-07-09 23 37 31" src="https://github.com/user-attachments/assets/48e03b23-086f-41a0-bd4d-7fd8002a5a0b">

![IMG_3565 JPG](https://github.com/user-attachments/assets/ee306c5c-0270-4a5a-9734-5a245f3b2b83)

## 使用の流れ


## 概要
このシステムは、チーム内のメンバーに自分の感情を緩やかに共有するためのものです。スマートウォッチから感情の入力を行い、その情報がSlackのステータスや座席表に自動で反映されます。また、一日の終わりには、Slack Botがその日の感情の振り返りを行います。

## 役割
UI以外の全ての機能を実装しました。Processingで作成したアプリからHTTP通信を用いて、GASで開発したWebアプリへデータを送信し、スプレッドシートとSlackステータスを更新する仕組みを構築しました。また、Slack Botを通じて、1日の終わり（18:00）に各ユーザーにその日の感情の遷移を報告する設計を行いました。

## 使用技術
GAS，Slack API，Processing

## 成果
サポーターズ様主催のハッカソンにて努力賞を受賞しました．
