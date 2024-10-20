#**********************************************************************************
#	
#	1ページ分のHTMLをテキストデータとして取得して、画像はダウンロードしない
#   get_html.pyはテスト用の機能であり、Webページ生成の構造には関係していません
# 	
#**********************************************************************************

import requests
from bs4 import BeautifulSoup

# ページのURL
url = 'https://kakaku.com/game/nintendo-switch/ranking_4143/'

# ページを取得
response = requests.get(url)

# レスポンスが成功したか確認
if response.status_code == 200:
    # エンコーディングの自動検出
    response.encoding = response.apparent_encoding  # ここで推測されるエンコーディングを設定
    # 価格comではshift-jisが採用されている

    # BeautifulSoupでパースしてエンコーディングを処理
    soup = BeautifulSoup(response.content, 'html.parser')
    
    # HTMLをテキストとして取得
    html_text = soup.prettify()
    
    # ファイルに保存する
    with open('page_source.html', 'w', encoding='utf-8') as file:
        file.write(html_text)
else:
    print(f"ページを取得できませんでした: {response.status_code}")
