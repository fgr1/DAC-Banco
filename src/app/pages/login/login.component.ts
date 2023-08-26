import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
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
  public message: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });

    if (this.authService.userLogged) {
      this.router.navigate(["/initial-client"]);
    }
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.message = params["error"];
    });
  }

  private Login(login: MODEL.Login) {
    this.authService.login(login).subscribe(
      (user) => {
        if (user !== null) {
          this.authService.userLogged = user;
          this.handleNavigate(
            user.type == "cliente" ? "/user-profile" : "/dashboard"
          );
        } else {
          this.message = "Usuário/Senha inválidos.";
        }
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

  public handleNavigate(route: string) {
    this.router.navigate([route]);
  }
}
