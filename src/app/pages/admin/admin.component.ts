import { Component, OnInit } from '@angular/core';
import { Manager } from 'src/app/shared/models';
import { AdministratorService } from 'src/app/services/administrator.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  gerentes: Manager[] = [];

  constructor(private adminService: AdministratorService) { }

  ngOnInit(): void {
    this.gerentes = this.listarManagers();
  }
  
  listarManagers(): Manager[] {
    //return this.adminService.listarManagers();
    throw new Error('Method not implemented.');
  }

}
