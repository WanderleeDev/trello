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

}
