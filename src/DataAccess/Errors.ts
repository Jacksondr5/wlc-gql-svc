export class WlcError {
  message: string;
  stackTrace: string;
  constructor(message: string) {
    this.message = message;
    this.stackTrace = new Error().stack;
  }
}

export class WlcInputError extends WlcError {
  invalidInputs: string[];
  constructor(message: string, invalidInputs: string[]) {
    super(message);
    this.invalidInputs = invalidInputs;
  }
}
