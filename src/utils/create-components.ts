type ComponentFunction = (className: string) => Record<string, string>
type ComponentObject = Record<string, ComponentFunction>
type ComponentResult<T extends ComponentObject> = {
  [K in keyof T]: ReturnType<T[K]>
}

export const createComponents = <T extends ComponentObject>(
  componentObject: T
): ComponentResult<T> => {
  return Object.entries(componentObject).reduce((acc, [key, func]) => {
    acc[func.name as keyof T] = func(key) as ReturnType<T[keyof T]>
    return acc
  }, {} as ComponentResult<T>)
}
