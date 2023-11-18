import React from 'react';

const SvgIcon = (props) => {
  switch (props.icon) {
    case 'CARBON':
      return (
        <svg
          className={props.className}
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M313.663 299.077C348.419 264.32 348.419 207.968 313.663 173.211C278.906 138.455 222.554 138.455 187.797 173.212C153.041 207.968 153.041 264.32 187.797 299.077C222.554 333.833 278.906 333.833 313.663 299.077Z"
            fill="#D9D9D9"
          />
          <path
            d="M440.941 423.527C475.698 388.771 475.698 332.419 440.941 297.663C406.185 262.906 349.833 262.906 315.077 297.663C280.32 332.419 280.32 388.771 315.077 423.527C349.833 458.284 406.185 458.284 440.941 423.527Z"
            fill="#188906"
          />
          <path
            d="M440.941 171.797C475.698 137.041 475.698 80.6892 440.941 45.9325C406.185 11.1758 349.833 11.1758 315.077 45.9325C280.32 80.6891 280.32 137.041 315.077 171.797C349.833 206.554 406.185 206.554 440.941 171.797Z"
            fill="#188906"
          />
          <path
            d="M187.798 424.941C222.554 390.185 222.554 333.833 187.797 299.077C153.041 264.32 96.6892 264.32 61.9325 299.077C27.1758 333.833 27.1758 390.185 61.9325 424.941C96.6892 459.698 153.041 459.698 187.798 424.941Z"
            fill="#188906"
          />
          <path
            d="M187.797 173.212C222.554 138.455 222.554 82.1032 187.798 47.3465C153.041 12.5898 96.6892 12.5898 61.9325 47.3465C27.1758 82.1031 27.1758 138.455 61.9325 173.211C96.6892 207.968 153.041 207.968 187.797 173.212Z"
            fill="#188906"
          />
          <path d="M276 319H227V488H276V319Z" fill="#A8776C" />
          <path
            d="M441.38 56C441.38 50.4771 436.903 46 431.38 46H341.38C335.857 46 331.38 50.4771 331.38 56C331.38 61.5228 335.857 66 341.38 66H421.38V146C421.38 151.523 425.857 156 431.38 156C436.903 156 441.38 151.523 441.38 146V56ZM258.071 243.451L438.451 63.0711L424.309 48.9289L243.929 229.309L258.071 243.451Z"
            fill="#D9D9D9"
            fillOpacity="0.2"
          />
          <path
            d="M431.38 419.38C436.903 419.38 441.38 414.903 441.38 409.38V319.38C441.38 313.857 436.903 309.38 431.38 309.38C425.857 309.38 421.38 313.857 421.38 319.38V399.38H341.38C335.857 399.38 331.38 403.857 331.38 409.38C331.38 414.903 335.857 419.38 341.38 419.38H431.38ZM243.929 236.071L424.309 416.451L438.451 402.309L258.071 221.929L243.929 236.071Z"
            fill="#D9D9D9"
            fillOpacity="0.2"
          />
          <path
            d="M62 409.38C62 414.903 66.4771 419.38 72 419.38H162C167.523 419.38 172 414.903 172 409.38C172 403.857 167.523 399.38 162 399.38H82V319.38C82 313.857 77.5228 309.38 72 309.38C66.4771 309.38 62 313.857 62 319.38V409.38ZM245.309 221.929L64.9289 402.309L79.071 416.451L259.451 236.071L245.309 221.929Z"
            fill="#D9D9D9"
            fillOpacity="0.1"
          />
          <path
            d="M72 45C66.4771 45 62 49.4771 62 55V145C62 150.523 66.4771 155 72 155C77.5228 155 82 150.523 82 145V65H162C167.523 65 172 60.5228 172 55C172 49.4771 167.523 45 162 45H72ZM259.451 228.309L79.071 47.9289L64.9289 62.0711L245.309 242.451L259.451 228.309Z"
            fill="#D9D9D9"
            fillOpacity="0.2"
          />
        </svg>
      );
    case 'WETH':
      return (
        <svg
          className={props.className}
          viewBox="0 0 1503 1504"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="287" y="258" width="928" height="844" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1502.5 752C1502.5 1166.77 1166.27 1503 751.5 1503C336.734 1503 0.5 1166.77 0.5 752C0.5 337.234 336.734 1 751.5 1C1166.27 1 1502.5 337.234 1502.5 752ZM538.688 1050.86H392.94C362.314 1050.86 347.186 1050.86 337.962 1044.96C327.999 1038.5 321.911 1027.8 321.173 1015.99C320.619 1005.11 328.184 991.822 343.312 965.255L703.182 330.935C718.495 303.999 726.243 290.531 736.021 285.55C746.537 280.2 759.083 280.2 769.599 285.55C779.377 290.531 787.126 303.999 802.438 330.935L876.42 460.079L876.797 460.738C893.336 489.635 901.723 504.289 905.385 519.669C909.443 536.458 909.443 554.169 905.385 570.958C901.695 586.455 893.393 601.215 876.604 630.549L687.573 964.702L687.084 965.558C670.436 994.693 661.999 1009.46 650.306 1020.6C637.576 1032.78 622.263 1041.63 605.474 1046.62C590.161 1050.86 573.004 1050.86 538.688 1050.86ZM906.75 1050.86H1115.59C1146.4 1050.86 1161.9 1050.86 1171.13 1044.78C1181.09 1038.32 1187.36 1027.43 1187.92 1015.63C1188.45 1005.1 1181.05 992.33 1166.55 967.307C1166.05 966.455 1165.55 965.588 1165.04 964.706L1060.43 785.75L1059.24 783.735C1044.54 758.877 1037.12 746.324 1027.59 741.472C1017.08 736.121 1004.71 736.121 994.199 741.472C984.605 746.453 976.857 759.552 961.544 785.934L857.306 964.891L856.949 965.507C841.69 991.847 834.064 1005.01 834.614 1015.81C835.352 1027.62 841.44 1038.5 851.402 1044.96C860.443 1050.86 875.94 1050.86 906.75 1050.86Z"
            fill="#E84142"
          />
        </svg>
      );
    case 'swap':
      return (
        <svg
          className={props.className}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 423.755 423.755"
        >
          <g>
            <path
              d="M43.84,281.457c-18.585-44.869-18.586-94.29,0-139.159c10.649-25.709,26.678-48.152,46.86-66.135l60.86,60.86V15.099
		H29.635l39.88,39.88c-64.293,58.426-88.5,153.2-53.391,237.959c14.167,34.202,37.07,64.159,66.234,86.634
		c28.275,21.789,61.873,36.201,97.162,41.677l4.601-29.646C120.778,381.774,68.337,340.597,43.84,281.457z"
            />
            <path
              d="M407.516,292.938c21.652-52.272,21.652-109.848,0-162.12c-14.167-34.202-37.071-64.159-66.234-86.633
		C313.007,22.395,279.409,7.983,244.12,2.507l-4.601,29.646c63.342,9.829,115.783,51.005,140.28,110.146
		c18.586,44.869,18.586,94.29,0,139.159c-10.649,25.709-26.678,48.152-46.859,66.135l-60.86-60.86v121.924h121.924l-39.801-39.801
		C377.118,348.099,395.334,322.348,407.516,292.938z"
            />
          </g>
        </svg>
      );
    case 'list':
      return (
        <svg
          className={props.className}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
        </svg>
      );
    default:
      return null;
  }
};

export default SvgIcon;
