type RecuperadorProps = {
  id: string;
  name: string;
  lastName: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  dni?: string;
  cuil?: string;
  birthdate?: Date;
};

export class Recuperador {
  readonly id: string;
  name: string;
  lastName: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  dni?: string;
  cuil?: string;
  birthdate?: Date;

  constructor(props: RecuperadorProps) {
    Object.assign(this, props);
  }

  activate() {
    this.active = true;
    this.updatedAt = new Date();
  }

  deactivate() {
    this.active = false;
    this.updatedAt = new Date();
  }
}
