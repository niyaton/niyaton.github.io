from urllib import request
import json
import datetime
from datetime import timezone

url = 'https://api.researchmap.jp/fujiwara.kenji'
response = request.urlopen(url)
content = json.loads(response.read().decode('utf8'))
modified_date = content['rm:modified']
modified_date = modified_date.replace('Z', '+00:00')
modified_date = datetime.datetime.fromisoformat(modified_date)

now = datetime.datetime.now(timezone.utc)
if modified_date < now:
    exit(1)
