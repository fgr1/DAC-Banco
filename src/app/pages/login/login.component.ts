import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/services";
import { MODEL } from "src/app/shared";
import { Login } from "src/app/shared/models";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  ngOnInit() {}

  private Login(login: MODEL.Login) {
    this.authService.login(login).subscribe(
      (login) => {
        alert(`Efetuando login...`);
      },
      (error) => {
        alert(`Ocorreu um erro ao logar`);
      }
    );
  }

  public onSubmit() {
    const { value, valid } = this.loginForm;

    if (valid) {
      const { email, password } = value;
      const login = new Login(email, password);
      this.Login(login);
    } else {
      alert("Formulário inválido! Preencha todos os campos");
    }
  }
}
