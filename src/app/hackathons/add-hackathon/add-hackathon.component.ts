import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { Hackathon } from 'src/app/models/hackathon.model';


@Component({
  selector: 'app-add-hackathon',
  templateUrl: './add-hackathon.component.html',
  styleUrls: ['./add-hackathon.component.scss']
})
export class AddHackathonComponent implements OnInit {

  @Output() emitChallenge = new EventEmitter<Hackathon>();

  @Output() cancelAddition = new EventEmitter<string>();

  visible = true;

  selectable = true;

  removable = true;

  addOnBlur = true;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  fg: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.fg = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      tags: this.formBuilder.array(['Feature', 'Tech']),
    });
  }

  get tagControls(): FormArray {
    return this.fg.controls['tags'] as FormArray;
  }

  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add a tag
    if ((value || "").trim()) {
      this.tagControls.push(this.formBuilder.control(value));
    }

    // Reset the input value
    if (input) {
      input.value = "";
    }
  }

  removeTag(tag: string): void {
    const index = this.tagControls.value.indexOf(tag);
    if (index >= 0) {
      this.tagControls.removeAt(index);
    }
  }

  addChallenge() {
    if (this.fg.valid) {
      this.emitChallenge.emit(this.fg.value);
    }
  }

  cancel() {
    this.cancelAddition.emit('true');
  }

}
