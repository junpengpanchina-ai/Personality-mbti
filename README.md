# Personality-mbti

## Date input and lunar conversion

The Bazi/MBTI analysis page (`bazi-test.html`) accepts both Gregorian and Chinese lunar-style dates. The input field `bDate` supports the following formats (single-digit month/day allowed):

- Gregorian formats
  - YYYY-MM-DD (e.g., 2020-01-01)
  - YYYY/MM/DD (e.g., 2020/01/01)
  - MM/DD/YYYY (e.g., 12/25/1990)
  - YYYYMMDD (e.g., 20200131)
  - YYYY.M.D (e.g., 2020.1.1)
  - YYYY年M月D日 (e.g., 2020年1月1日)
- English month names
  - Jan 1, 2020 / October 3rd 2020 / Oct. 3, 2020
- Chinese month words
  - 一月…十二月（混排亦可，如 一月 1, 2020）
- Chinese lunar-style expressions (auto-converted to solar/Gregorian)
  - 农历/阴历 标识：例如 农历2020年十月初三、阴历2020年正月十五
  - 闰月：例如 农历2020年闰四月初一
  - 中文日序词：初X、十X、X十Y、廿X(20+)、卅X(30+)、正(=1)

Behavior
- On blur, the input is validated and normalized. If a lunar/阴历/闰月 expression is detected, the app converts it to a solar date using `lunar-javascript` and shows a toast: “已转换为阳历：YYYY-MM-DD”.
- If the input is invalid or cannot be converted, a toast explains supported formats and the field retains focus for correction.

Dependencies
- `lunar-javascript` (loaded from local `./libs/lunar.min.js` with CDN fallbacks: jsDelivr/unpkg). The loader tries multiple sources and shows a toast on failure.

Troubleshooting
- If the button appears unresponsive, check the browser console for library loading errors. The page will attempt to load `lunar-javascript` automatically on demand.
- Ensure network is available for CDN fallbacks if the local file is missing.

Examples (copy & paste)
- 2020-01-01
- 1/1/2020
- 20200131
- 2020.1.1
- 2020年1月1日
- Jan 1, 2020
- 农历2020年十月初三
- 农历2020年闰四月初一

