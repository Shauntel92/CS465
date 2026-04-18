import { InjectionToken } from '@angular/core';

export const BROWSER_STORAGE = new InjectionToken<Storage | null>(
  'Browser Storage',
  {
    providedIn: 'root',
    factory: () =>
      typeof window !== 'undefined' && typeof localStorage !== 'undefined'
        ? localStorage
        : null
  }
);