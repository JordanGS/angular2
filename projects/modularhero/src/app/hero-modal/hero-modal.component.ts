import {Component, Input, ViewEncapsulation} from '@angular/core';
import { Hero } from '../hero';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'hero-modal-content',
  templateUrl: './hero-modal-content.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./hero-modal-content.css'] /** This contains the theme for the window **/
})
export class HeroModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'hero-modal',
  templateUrl: './hero-modal.component.html',
  styleUrls: ['hero-modal.component.css', '../app.component.css']
})
export class HeroModalComponent {
  @Input() hero: Hero;
  closeResult: string;
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(HeroModalContent, { windowClass: 'dark-modal' });
    modalRef.componentInstance.name = 'EN';
    modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}

