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

# ページのURL
url = 'https://kakaku.com/game/nintendo-switch/ranking_4143/'

# ページのHTMLを取得
response = requests.get(url)

# レスポンスが成功したか確認
if response.status_code == 200:
    soup = BeautifulSoup(response.content, 'html.parser')

    # ゲームデータを格納するリスト
    games = []

    # 1位〜30位のデータを取得
    ranking_boxes = soup.find_all('div', class_='rkgBox')[:30]

    for rank, box in enumerate(ranking_boxes, start=1):
        # ゲームのタイトルを取得
        title = box.find('span', class_='rkgBoxNameItem').text.strip()

        # 最安値を取得
        price = box.find('span', class_='price').text.strip()

        # 画像URLを取得
        image_url = box.find('img')['src']

        # 発売日を取得
        release_date = box.find('div', class_='rkgDate').text.replace('発売日：', '').strip()

        # メーカー名を取得
        maker = box.find('div', class_='rkgMaker').find('a').text.strip()

        # ゲーム情報を辞書に格納
        games.append({
            "rank": rank,
            "title": title,
            "price": price,
            "image_url": image_url,
            "release_date": release_date,
            "maker": maker
        })

    # JavaScriptファイルを生成
    with open('game_data.js', 'w', encoding='utf-8') as f:
        f.write('const gameData = [\n')
        for game in games:
            f.write(f'  {{\n')
            f.write(f'    rank: {game["rank"]},\n')
            f.write(f'    title: "{game["title"]}",\n')
            f.write(f'    price: "{game["price"]}",\n')
            f.write(f'    image_url: "{game["image_url"]}",\n')
            f.write(f'    release_date: "{game["release_date"]}",\n')
            f.write(f'    maker: "{game["maker"]}"\n')
            f.write(f'  }},\n')
        f.write('];\n')
else:
    print(f"Failed to retrieve page: {response.status_code}")
