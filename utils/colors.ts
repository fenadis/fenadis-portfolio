function hslToHex(h: number, s: number, l: number) {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, '0');
    };
    const result = `#${f(0)}${f(8)}${f(4)}`;
    return result;
  }
  
  function getCSSColorValue(propertyName: string): string {
    const root = getComputedStyle(document.documentElement);
    const value = root.getPropertyValue(propertyName).trim();
  
    // Parse the numeric values
    const [r, g, b] = value.split(',').map(Number);
  
    // Convert to HEX
    return `#${((1 << 24) + (r << 16) + (g << 8) + b)
      .toString(16)
      .slice(1)
      .toUpperCase()}`;
  }
  
  
  
  
  export { hslToHex, getCSSColorValue };