# _How dumb I used to be, how smart I am now_ prevention

_Please remove these quirks if you can, but keep in mind what they tackle_

_These could be comments but where's the fun in that_

## Text sizing

- The base text sizes are not set through vw (or \[insert unit\] + vw) because that leads to fractional pixel sizes. That can screw up the rendering and make fonts —especially intricate small-caps serifs— look wonky. It's better to avoid that and just use sizes in more common numbers/units.

## That crazy Figure component

- I know. I know. The grid thing is extremely weird. It's just the only way I found to visually group the figure caption and the collapse toggle button whilst keeping the <figcaption> element at the top level. If you're changing it, please think about that first.

## Parsing pipeline

- We don't do HTML → Markdown → HTML because (a) that feels treasonous and (b) the library we use —defuddle— doesn't support keeping certain elements, something that we'd need if we want to have nice things like figures. So we defuddle the HTML, and then use a sanitization library to get rid of wrappers and other things that make our lives hard. The XML injection-focused sanitization library is a bit annoying to use, but it's light and works well.
