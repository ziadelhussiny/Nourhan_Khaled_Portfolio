import html
import re
import sys
import urllib.request
from pathlib import Path


def request(url):
    return urllib.request.Request(
        url,
        headers={
            'User-Agent': 'Mozilla/5.0',
            'Referer': 'https://www.instagram.com/',
        },
    )


instagram_url = sys.argv[1].split('?')[0].rstrip('/') + '/'
output_path = Path(sys.argv[2])

if '/reel/' in instagram_url and output_path.suffix.lower() == '.mp4':
    source_url = instagram_url + 'embed/'
    embed_html = urllib.request.urlopen(request(source_url)).read().decode('utf-8')
    mp4_index = embed_html.find('.mp4')

    if mp4_index < 0:
        raise RuntimeError(f'No video source found for {source_url}')

    url_start = embed_html.rfind('https', 0, mp4_index)
    url_end = embed_html.find('"', mp4_index)
    escaped_url = embed_html[url_start:url_end]
    media_url = html.unescape(escaped_url.replace('\\', ''))
else:
    page_html = urllib.request.urlopen(request(instagram_url)).read().decode('utf-8')
    match = re.search(r'<meta property="og:image" content="([^"]+)"', page_html)
    if not match:
        raise RuntimeError(f'No poster source found for {instagram_url}')
    media_url = html.unescape(match.group(1))

media_bytes = urllib.request.urlopen(request(media_url)).read()
output_path.parent.mkdir(parents=True, exist_ok=True)
output_path.write_bytes(media_bytes)
print(f'{output_path.name}: {len(media_bytes)} bytes')
