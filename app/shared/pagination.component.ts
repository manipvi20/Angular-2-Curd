import { Component, Input,Output, OnInit,EventEmitter, OnChanges } from "@angular/core";

@Component({
    selector: "pagination",
    template: `
        <div *ngIf="items.length > pagesize">
            <ul class="pagination">
            <li class="clickable" [class.disabled]="currentpage == 1" (click)="onprevClick()">
                <a aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li class="clickable" 
            [class.active]="currentpage == page" 
            *ngFor="let page of pages" 
            (click)="onPageChange(page)"> 
                <a>{{page}}</a>
            </li>
            <li class="clickable" [class.disabled]="currentpage == pagesize" (click)="onNextClick(currentpage)">
                <a aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                </a>
            </li>   
            </ul>
        </div>
    `
})

export class PagniationComponent implements OnChanges {
    @Input() items = [];
    @Input() pagesize: number;
    pages: any[];
    currentpage;
    @Output('pageChanged') pageChanged = new EventEmitter();
    ngOnChanges() {
        this.currentpage = 1;
        var pageCount = this.items.length / this.pagesize;
        this.pages = [];
        for (let i=1; i <= pageCount; i++) {
            this.pages.push(i);
        }
    }

    onPageChange(page) {
        this.currentpage = page;
        this.pageChanged.emit(page);
    }

    onNextClick() {
        if(this.currentpage == 1)
            return;
        
        this.currentpage++;
        this.pageChanged.emit(this.currentpage);
    }

    onprevClick() {
        if(this.currentpage == this.pages.length)
            return;
        
        this.currentpage--;
        this.pageChanged.emit(this.currentpage);
    }

}