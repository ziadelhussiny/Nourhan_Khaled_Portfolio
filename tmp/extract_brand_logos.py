from pathlib import Path

from pypdf import PdfReader


SOURCE = Path(r'C:\Users\zoz\Desktop\good boy\portfolio content.pdf')
OUTPUT = Path(r'C:\Users\zoz\Desktop\Nourhan-Kaled-Portofolio\public\brand-logos')
NAMES = [
    '01-crystal-shine.png',
    '02-alyaqout-clinics.png',
    '03-zadna-egypt.png',
    '04-nala-global.png',
    '05-nowar-saif.png',
    '06-hoss-mea.png',
    '07-westwood-wpc.png',
    '08-top-management.png',
    '09-melodies-restaurant.png',
    '10-le-cafe-crochet.png',
    '11-arabica-spectrum.png',
    '12-dr-mahmoud-shaker.png',
    '13-kmt-egypt-tours.png',
    '14-jasmine-beauty.png',
]

reader = PdfReader(SOURCE)
images = [image for page in reader.pages for image in page.images]

if len(images) != len(NAMES):
    raise RuntimeError(f'Expected {len(NAMES)} logos, found {len(images)}')

OUTPUT.mkdir(parents=True, exist_ok=True)
for image, name in zip(images, NAMES, strict=True):
    target = OUTPUT / name
    target.write_bytes(image.data)
    print(f'{name}: {len(image.data)} bytes')
