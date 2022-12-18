import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery'
@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function () {
      $('.genealogy-tree ul').hide();
      $('.genealogy-tree>ul').show();
      $('.genealogy-tree ul.active').show();
      $('.genealogy-tree li').on('click', function (e) {
          var children = $(this).find('> ul');
          if (children.is(":visible")) children.hide('fast').removeClass('active');
          else children.show('fast').addClass('active');
          e.stopPropagation();
      });
  });
    }



}
