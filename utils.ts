export function Optional<T>(v: T | undefined | null) {
  return {
    some: (somecb: (v: T) => void) => ({
      none: (nonecb?: () => void) => {
        if (v !== undefined && v !== null) {
          somecb(v)
        } else {
          if (nonecb) {
            nonecb()
          }
        }
      },
    }),
  }
}
