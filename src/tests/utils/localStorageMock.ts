export class LocalStorageMock {
  private store: { [key: string]: string };
  public length = 0;
  constructor() {
    this.store = {};
  }
  getItem(key: string) {
    return this.store[key] || null;
  }
  setItem(key: string, value: string) {
    this.store[key] = String(value);
  }
  clear() {}
  key(index: number): string | null {
    return null;
  }
  removeItem(key: string): void {}
}
