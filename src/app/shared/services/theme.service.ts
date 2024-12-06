<<<<<<< HEAD
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  #isDarkTheme: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.#isDarkTheme = this.matchTheme();
  }

  public matchTheme(): boolean {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  }

=======
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, Signal, signal } from '@angular/core';

type ThemeType = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly LOCAL_KEY = 'theme';
  private readonly $theme = signal<ThemeType>('light');

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    if (isPlatformBrowser(platformId)) {
      this.initTheme();
    }
  }

  public getTheme(): Signal<ThemeType> {
    return this.$theme.asReadonly();
  }

  public toggleTheme(): void {
    this.$theme.update((theme) => {
      const currentTheme = theme === 'light' ? 'dark' : 'light';
      this.saveTheme(currentTheme);

      return currentTheme;
    });
  }

  private getLocalTheme(): ThemeType | null {
    const localTheme = localStorage.getItem(this.LOCAL_KEY);

    if (!localTheme || (localTheme !== 'dark' && localTheme !== 'light')) {
      return null;
    }

    return localTheme as ThemeType;
  }

  private getPreferenceUser(): ThemeType {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  private initTheme(): void {
    const localTheme = this.getLocalTheme();
    const preferenceTheme = this.getPreferenceUser();

    if (localTheme) {
      return this.$theme.set(localTheme);
    }

    this.$theme.set(preferenceTheme);
  }

  private saveTheme(theme: ThemeType): void {
    localStorage.setItem(this.LOCAL_KEY, theme);
  }
>>>>>>> b488a22 (feat board)
}
