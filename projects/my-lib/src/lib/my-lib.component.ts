import { Component, OnInit, Inject, ViewContainerRef, ViewChild, ComponentFactoryResolver, AfterViewInit } from '@angular/core';
import { CONFIG_TOKEN } from './services/config.token';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'lib-my-lib',
  templateUrl: './my-lib.component.html',
  styles: []
})
export class MyLibComponent implements OnInit, AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef, static: false }) container;

  constructor(
    @Inject(CONFIG_TOKEN) private config,
    private factoryResolver: ComponentFactoryResolver,
    private vc: ViewContainerRef,
    private dialog: MatDialog,
    private http: HttpClient
  ) {
    console.log(this.config)
  }

  ngOnInit() {

  }

  call() {
    this.http.get('fakeurl').subscribe(() => {
      
    })
  }

  open(errorCode) {
    this.dialog.open(this.config.component, { data: this.config.errors.find(e => e.code === errorCode).data })
  }

  ngAfterViewInit() {
    // const factoryResolver = this.factoryResolver.resolveComponentFactory(this.config.component)
    // this.container.createComponent(factoryResolver);
  }

}
