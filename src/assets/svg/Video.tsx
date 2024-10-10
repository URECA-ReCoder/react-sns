import * as React from 'react';
import type { SVGProps } from 'react';
const SvgVideo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    viewBox="0 0 90 90"
    {...props}
  >
    <path fill="url(#Video_svg__a)" d="M0 0h90v90H0z" />
    <defs>
      <pattern
        id="Video_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#Video_svg__b" transform="scale(.01111)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEBUlEQVR4nO2dSWyNURTHf7S0hphWqARBYm3aGCNlJ1ggMcW8KapEbO0MCaGJha0NK2OCsEeE1BBigViYdSAS2mh75SbnJS+NJ1V3ON/33V/y37y893LPPy/fvefcc++DRCKRSCQSiUQikUj0mypgLrAdOA5cBp4Ar4B2oEvULq89kfcck8/Mke9I/IFJwD7gGvANMP+pr8BVoBGoo+AMAzYBt4EeB+ZWUjdwC9gI1FIgRsov7Z1HcyvpM3AYGE2OGQIcBNoiGNxXdgwHZEy5YiHwVIHBffUCqCcH2GfiGaBXgamVZMfWDNSQUaYA9xQYafqph8B0Mka9o2WaCSy7LFxKRlgN/FRgmhmgbDK0DuXs8rwmNoFkY9iJUlZJchDbJOPQ7LUowz7XOhWYYzw8RpajhBkZnfjMP0yQ02KbXCPLIpNzPYi9zj6jwAQTSDapiZZWa874jGPZWBeHNrkaeKwgeBNYT0MXog4qCNpEUlPIenKrgoBNJLWKB945pCBYE1m2lu19++mj5yDOA3uBZwoMraT3vrfFNgUIYmzZhLtHyY7Mn7TBp9G3AwTQF2v8aeCXAnPLdQNP1AUqGlViJnBdgcHlRScvrQz7AgXQnyrhSwVGW+3GA9eUGI0kDY0KilkXcYxtsepQZHSJCcDZiHXwDtftZ3MDDn6g47sTyezZOGSHcqNLrADeBDZ6Kw45nhGjLcMle/0eaLxHcMiVDBld3qF6LkAp1+mEGLIk6ppFQIvH8drvdkbI554PBgObPdVpXrscaMiyqE9su+4Jx8vBLy4H2JUTo0s0ORyvbbNwRt6M3q/V6Lw8OsYAJx23rTl9dKTJkDCTYZaXd4uztLxLCQthEpaspeCHgR9ZTMG3Z8DoQcCaCEWlLUUqk84D7gY2uKRZRSr89+Sl8I+crdZi9NC8bmUhgWkwerXcamAUqMGH0RMVtBvcUGBuSdaL8XjiVgSjxxWtgQa5iiFkS9heuQDFKNR6302OHzwHcEGadZ4rMLOS3oW4+6PITehGZMus3hkhpUFTULWGakRHGrFNQdVIQOxE9UhB0Cbvh4UsC9Lxt3A0K/iVmUA6RURq5PiuybnuS30lKtPkYLrJqTqAqShhScZvnTEVZNsslqGMlTm8GGUNStmZk6t+uqUnXDWrMv4Y6dR4xc/frv75mtGJbwkZY3LEDVMzAD3QcKXP/6yzm5VnkL2SjERfJ7tK1x8rMLWv7JjmkzOqpS9ZQ4n1i1Th7JhyywgJ8m0Egz9Ju9goCkStXMVw03Oi0y0bqeuLdvV8pY4je4D9kqPN2Hb5rgafLQFZp0r62bYBR6UbqEWaZtrK/h6kTV5rkfcclVOs9rPp70ESiUQikUgkEolEgn7yG1n2Mpqx9z2YAAAAAElFTkSuQmCC"
        id="Video_svg__b"
        width={90}
        height={90}
      />
    </defs>
  </svg>
);
export default SvgVideo;
