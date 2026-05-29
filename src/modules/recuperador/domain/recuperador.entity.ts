export class Recuperador {
  constructor(
    public readonly id: string,
    public name: string,
    public lastName: string,
    public dni?: string,
    public cuil?: string,
    public birthdate?: Date,
    public active: boolean,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}

  activate() {
    this.active = true;
  }

  deactivate() {
    this.active = false;
  }
}
