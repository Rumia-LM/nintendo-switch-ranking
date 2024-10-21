#**********************************************************************************
#	
#	robots.txtファイルから判断すると(https://kakaku.com/robots.txt)
#	価格.comでは特定のパスに対してWebスクレイピングやクローリングが禁止されていますが、
#	/game/nintendo-switch/ranking_4143/ のページ自体は特にDisallowされていない。
#	このため、スクレイピング自体は利用規約に違反しないようです。
#	
#**********************************************************************************

import requests
from bs4 import BeautifulSoup
import json

# ページのURL
url = 'https://kakaku.com/game/nintendo-switch/ranking_4143/'

try:
    # ページのHTMLを取得
    response = requests.get(url)
    response.raise_for_status()  # HTTPエラーが発生した場合は例外を発生させる

    soup = BeautifulSoup(response.content, 'html.parser')

    # ゲームデータを格納するリスト
    games = []

    # 1位〜30位のデータを取得
    ranking_boxes = soup.find_all('div', class_='rkgBox')[:30]

    for rank, box in enumerate(ranking_boxes, start=1):
        try:
            # ゲームのタイトルを取得
            title = box.find('span', class_='rkgBoxNameItem').text.strip()

            # 最安値を取得
            price = box.find('span', class_='price').text.strip()

            # 画像URLを取得
            image_tag = box.find('img')
            image_url = image_tag['src'] if image_tag else ''

            # 発売日を取得
            release_date_div = box.find('div', class_='rkgDate')
            release_date = release_date_div.text.replace('発売日：', '').strip() if release_date_div else ''

            # メーカー名を取得
            maker_div = box.find('div', class_='rkgMaker')
            maker = maker_div.find('a').text.strip() if maker_div else ''
            
            # ゲーム詳細ページのURLを取得
            detail_link_tag = box.find('a', class_='rkgBoxLink')
            detail_url = detail_link_tag['href'] if detail_link_tag else ''

            # ゲーム情報を辞書に格納
            games.append({
                "rank": rank,
                "title": title,
                "price": price,
                "image_url": image_url,
                "release_date": release_date,
                "maker": maker
            })
        except AttributeError as e:
            print(f"データのパース中にエラーが発生しました（順位: {rank}）：{e}")

    # JSONファイルを生成
    with open('game_data.json', 'w', encoding='utf-8') as f:
        json.dump(games, f, ensure_ascii=False, indent=2)

    print("データの取得と保存が完了しました。")
except requests.exceptions.RequestException as e:
    print(f"ページの取得に失敗しました：{e}")
