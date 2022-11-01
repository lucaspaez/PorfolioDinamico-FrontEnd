import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginUsuario } from 'src/app/modelos/login-usuario';
import { AuthService } from 'src/app/Servicios/auth.service';
import { TokenService } from 'src/app/Servicios/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // form:FormGroup;

  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;


  constructor(private tokenService: TokenService, private authServise: AuthService, private router: Router) {

    // this.form=this.formBuilder.group(
    //   {
    //     email:['',[Validators.required,Validators.email]],
    //     password:['',[Validators.required,Validators.minLength(8)]],
    //     deviceInfo:this.formBuilder.group({
    //         deviceId:["17867868768"],
    //         deviceType: ["DEVICE_TYPE_ANDROID"],
    //         notificationToken:["67657575eeceecc34"]
    //       })
    //   }
    // )

  }

  ngOnInit(): void {

    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }

  }

  onLogin(): void{

    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authServise.login(this.loginUsuario).subscribe(
      data =>{
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate([''])
      }, err =>{
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
      }
    )
  }

  // get Email(){
  //   return this.form.get('email');
  // }

  // get Password(){
  //   return this.form.get('password');
  // }

}
