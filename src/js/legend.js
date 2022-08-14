export function byField(field) {
  return (a, b) => (a[field] < b[field] ? 1 : -1);
}

export function persons(val) {
  if (val > 50 && val <= 100) {
    return 'healthy';
  } if (val >= 15 && val <= 50) {
    return 'wounded';
  } if (val < 15 && val >= 1) {
    return 'critical';
  }
  return 'god mode or person death';
}
