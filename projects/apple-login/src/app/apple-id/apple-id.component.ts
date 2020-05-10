import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {ApplePasswordComponent} from '../apple-password/apple-password.component';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormService, IUser} from '../services/form.service';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-apple-id',
  templateUrl: './apple-id.component.html',
  styleUrls: ['./apple-id.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppleIdComponent implements OnInit, AfterViewInit {
  showLoader: boolean = false;
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
  @ViewChild('inputAppleIdRef') appleIdRef: ElementRef;
  passwordFactory: ComponentFactory<ApplePasswordComponent>;
  showButton: boolean = true;
  iCloudForm: FormGroup;
  isHide: boolean = true;
  componentRef: ComponentRef<any>;
  @Input() public control: AbstractControl;
  user: IUser;
  showTooltip: boolean;
  currentComponent: any;
  components = [];
  private newValue: void;
  private disableIcon: boolean = false;

  constructor(private factory: ComponentFactoryResolver,
              private renderer: Renderer2, private fb: FormBuilder,
              private cdr: ChangeDetectorRef,
              private formService: FormService,
              private firebaseService: FirebaseService) {

  }

  ngOnInit(): void {
    this.user = {
      username: 'admin@icloud.com',
      password: 'admin'
    };
    this.iCloudForm = this.fb.group({
      username: ['', Validators.required],
    });
    this.formService.getPassword().subscribe(form => {
      if (form) {

        if (this.iCloudForm.get('username').value === this.user.username && this.iCloudForm.get('password').value === this.user.password) {
          this.iCloudForm.patchValue(form);
          // this.firebaseService.login(this.iCloudForm.get('username').value, this.iCloudForm.get('password').value)


        } else {
          this.showTooltip = true;
        }
      }

    });

  }


  onSubmitAppleId() {
    this.renderer.setStyle(this.appleIdRef.nativeElement, 'borderBottom', '0');

    this.showLoader = true;
    if (this.iCloudForm.get('username').value.includes('@icloud.com')) {
      this.disableIcon = true;
    } else {
      const appliIdWithSuffix = this.iCloudForm.get('username').value.concat('@icloud.com');

      this.iCloudForm.get('username').patchValue(appliIdWithSuffix);

    }
    this.getPasswordComponent(this.container);


  }

  // onFocus() {
  //
  //   this.renderer.setStyle(this.appleIdRef.nativeElement, 'borderBottom', '0');
  // }

  ngAfterViewInit() {

  }


  getPasswordComponent(container) {
    this.passwordFactory = this.factory.resolveComponentFactory(ApplePasswordComponent);
    setTimeout(() => {
      this.componentRef = this.container.createComponent(this.passwordFactory);
      this.components.push(this.componentRef.instance);
      // this.currentComponent = this.componentRef.instance;


      this.showLoader = false;
      this.showButton = false;
      this.isHide = false;
      this.cdr.detectChanges();
      this.renderer.setStyle(this.appleIdRef.nativeElement, 'borderBottom', '0');
      this.renderer.addClass(this.appleIdRef.nativeElement, 'isPassword');
      // this.iCloudForm.addControl('password', new FormControl('', Validators.required));


    }, 1000);
  }

  onInputUsername(value: string) {
    console.log(value);
    if (value.includes('@icloud.com')) {
      return;
    } else {
      const component = this.components.find((componentRef) => componentRef instanceof ApplePasswordComponent);
      const componentIndex = this.components.indexOf(component);
      this.showButton = true;
      if (componentIndex !== -1) {
        // Remove component from both view and array
        this.container.remove(componentIndex);
        this.components.splice(componentIndex, 1);
        this.renderer.removeClass(this.appleIdRef.nativeElement, 'isPassword');
        this.renderer.setStyle(this.appleIdRef.nativeElement, 'borderBottom', '1px solid #494949');

      }
    }
  }

  onFocusAppleId(value: string) {
    if (value.includes('@icloud.com')) {
      this.showButton = false;
      this.showLoader = false;
    }else{
      this.showButton = true;
    }
    this.renderer.setStyle(this.appleIdRef.nativeElement, 'borderBottom', '1px solid #494949');


  }
}
