import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    viewBox="0 0 90 90"
    {...props}
  >
    <path fill="url(#Plus_svg__a)" d="M0 0h90v90H0z" />
    <defs>
      <pattern
        id="Plus_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#Plus_svg__b" transform="scale(.01111)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB1UlEQVR4nO3byUoDURSE4do5D+/g9HgOIILDQvDpVNxonBLwEYygy1DScHUhIumm23v75P/gbMzm3KIWEU4kAAAAALNgQdJ87iWiWpd0IelFktOMJJ1LWsu9XBQ7PwL+OVXg27mX7LtlScM/Qv6aJ0lLuZfts6MpQv6aw9zL9tlNjaCvcy/bZx81gn7PvWyfueagIYL+J6bRBB2KaTRBh2IaTdChmEYTdCim0QQdimk0QYdiGk3QoZhGE3QoptEEHYppNEGHYhpN0J2q7tsO0lXQW4PGueczTm/f7/LWr7rYvC/gsS5kBpI2u7jqJGT9esXa6n32WQENcqFz2mbQowIe5EKnut9uxZykSQEPcqEzSRkRtHoStKb8ecOszlAtOi3gQS50jtv+ejco4FEubB4lrapl1ZdzwtZ3yLeSNtSRRUl7kq7Sv6OesRlLupS0m7IIwzUHDRH0PzGNJuhQTKMJOhTTaIIOxTSaoEMxjSboUEyjCToU02iCDsU0mqBDMY0m6FBMowk6FNNogg5lXKPRr7mX7bPrGkFXF0Ro6KBG0NWZFhpamvKw8i7aLVwOW5Ie/gj5vsurzlmzIukkXddP0jynv1WfoQNzbf5mBAAAAICK9QkSkO5NnQjE8wAAAABJRU5ErkJggg=="
        id="Plus_svg__b"
        width={90}
        height={90}
      />
    </defs>
  </svg>
);
export default SvgPlus;
