import { describe, it, expect } from 'vitest';
import { Board, BoardTemplate } from './board.model';

describe('Board model', () => {
  it('should create a Board with expected fields', () => {
    const board: Board = {
      id: 'test-1',
      name: 'Test Board',
      description: 'A test board',
      image: 'https://example.com/image.jpg',
      starred: false,
    };

    expect(board.id).toBe('test-1');
    expect(board.name).toBe('Test Board');
    expect(board.description).toBe('A test board');
    expect(board.image).toBe('https://example.com/image.jpg');
    expect(board.starred).toBe(false);
  });

  it('should create a BoardTemplate with expected fields', () => {
    const template: BoardTemplate = {
      id: 'template-1',
      name: 'Test Template',
      imageUrl: 'https://example.com/template.jpg',
      description: 'A template',
    };

    expect(template.id).toBe('template-1');
    expect(template.name).toBe('Test Template');
    expect(template.imageUrl).toBe('https://example.com/template.jpg');
    expect(template.description).toBe('A template');
  });

  it('should allow BoardTemplate without optional description', () => {
    const template: BoardTemplate = {
      id: 'template-2',
      name: 'Minimal Template',
      imageUrl: 'https://example.com/minimal.jpg',
    };

    expect(template.description).toBeUndefined();
  });
});
