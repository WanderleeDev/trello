import { describe, it, expect } from 'vitest';

describe('domain barrel exports', () => {
  it('should export BoardRepository from index', async () => {
    const mod = await import('./index');
    expect(mod).toHaveProperty('BoardRepository');
  });
});
