import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CepService } from "src/app/services/cep.service";
import { MODEL } from "src/app/shared";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  public accountForm: FormGroup;

  constructor(private cepService: CepService, fb: FormBuilder) {
    this.accountForm = fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      cpf: ["", Validators.required],
      salary: ["", Validators.required],
      cellphone: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      cep: ["", Validators.required],
    });
  }

  ngOnInit() {}

  private autocompleteAddress(cep: MODEL.Cep) {
    const { localidade, uf } = cep;
    this.accountForm.patchValue({
      city: localidade,
      state: uf,
    });
  }

  private searchCep(cep: string) {
    this.cepService.getCep(cep).subscribe((cep) => {
      this.autocompleteAddress(cep);
    });
  }

  private validateCep(cep: string) {
    if (cep.replace(/\D/g, "") === "") return null;

    let validCepRegex = /^[0-9]{8}$/;
    if (!validCepRegex.test(cep)) return null;

    return cep;
  }

  public onBlur(event: any) {
    let cep = event.target.value;
    let isValid = this.validateCep(cep);

    if (isValid) {
      this.searchCep(cep);
    } else {
      alert("Formato de CEP inválido.");
    }
  }

  public onSubmit() {
    const { value, valid, errors } = this.accountForm;
    const { username, email, cpf, tel, city, state, cep } = value;

    console.log(value, valid, errors);
  }
}
