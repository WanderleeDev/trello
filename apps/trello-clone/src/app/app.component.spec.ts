import { describe, it, expect } from 'vitest';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should create the component instance', () => {
    const component = new AppComponent();
    expect(component).toBeTruthy();
  });
});
