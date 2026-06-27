import { describe, it, expect } from 'vitest';

describe('infrastructure barrel exports', () => {
  it('should export BoardMockRepository from index', async () => {
    const mod = await import('./index');
    expect(mod).toHaveProperty('BoardMockRepository');
  });
});
