import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#c1').show();
    $('#c2').hide();$('#c3').hide();$('#c4').hide();
  }

  btnClick(id:any){
    if(id=='c1'){
    $('#c2').show();
    $('#c1').hide();$('#c3').hide();$('#c4').hide();
    }
    if(id=='c2'){
      $('#c3').show();
      $('#c2').hide();$('#c1').hide();$('#c4').hide();
      }
      if(id=='c3'){
        $('#c4').show();
        $('#c2').hide();$('#c3').hide();$('#c1').hide();
        }
  }
}
