import urllib.request
import re
import json

req = urllib.request.Request('https://youtu.be/6Pk0pJTrRrs', headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')
match = re.search(r'var ytInitialData = ({.*?});</script>', html, re.DOTALL)
if match:
    data = json.loads(match.group(1))
    try:
        # Navigate the complex JSON structure to find the description
        contents = data['contents']['twoColumnWatchNextResults']['results']['results']['contents']
        for item in contents:
            if 'videoSecondaryInfoRenderer' in item:
                desc_runs = item['videoSecondaryInfoRenderer']['description']['runs']
                desc = ''.join([run['text'] for run in desc_runs])
                print(desc)
                break
            # YouTube recently changed this to be inside engagedView
            elif 'videoPrimaryInfoRenderer' in item:
                pass
        
        # Another common location
        if 'microformat' in data and 'playerMicroformatRenderer' in data['microformat']:
            print("--- Microformat Description ---")
            print(data['microformat']['playerMicroformatRenderer']['description']['simpleText'])
    except Exception as e:
        print(f"Error parsing: {e}")
