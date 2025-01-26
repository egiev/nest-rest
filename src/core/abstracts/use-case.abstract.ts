export abstract class UseCase<P, R> {
  abstract execute(param?: P): Promise<R>;
}
