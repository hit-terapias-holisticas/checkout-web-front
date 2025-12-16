const spacingValues = {
  0: 0,
  2: 2,
  4: 4,
  8: 8,
  12: 12,
  16: 16,
  20: 20,
  24: 24,
  32: 32,
  40: 40,
  48: 48,
  56: 56,
  64: 64,
  72: 72,
  80: 80,
  88: 88,
  96: 96,
  104: 104,
} as const;

export type SpacingKey = keyof typeof spacingValues;
export type SpacingValue = (typeof spacingValues)[SpacingKey];

export const spacing = (key: SpacingKey): string => `${spacingValues[key]}px`;
