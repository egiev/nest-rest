export abstract class GenericRepository<T> {
  abstract find(query: Partial<T>): Promise<T[]>;

  abstract findOne(id: string): Promise<T | null>;

  abstract create(item: T): Promise<T>;

  abstract update(item: T): Promise<T>;

  abstract delete(id: string): Promise<unknown>;
}
