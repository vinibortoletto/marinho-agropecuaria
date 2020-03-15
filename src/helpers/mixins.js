export function Breakpoint(width) {
  return `only screen and (min-width: ${width}px)`;
}

export function AbsoluteCenter() {
  return "position: absolute; top: 50%; left: 50%;";
}

export function Size(width, height) {
  if (width && height) {
    return `width: ${width}; height: ${height}`;
  } else if (width === "button") {
    return `width: 10rem; height: 3rem`;
  } else if (width === "buttonMini") {
    return `width: 7rem; height: 2.5rem`;
  } else if (width === "hero") {
    return `width: 100%; height: 100vh`;
  } else {
    return `width: ${width}; height: ${width}`;
  }
}

export function FlexCenter() {
  return "display: flex; justify-content: center; align-items: center;";
}
