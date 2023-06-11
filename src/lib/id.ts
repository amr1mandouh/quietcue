export function createId(prefix = 'piece'): string {
  const random = globalThis.crypto?.randomUUID?.()
  return random ? prefix + '-' + random : prefix + '-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8)
}

