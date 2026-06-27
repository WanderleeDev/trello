import { Component, input, output, signal } from '@angular/core';
import { BtnBaseComponent } from '../../../../../shared/presentation/components/btn-base/btn-base.component';
import { form, FormField, debounce, required, pattern, maxLength } from '@angular/forms/signals';
import { CnPipe } from '../../../../../shared/pipes/cn.pipe';

type FormColumn = {
  title: string;
};

@Component({
  selector: 'app-add-list-button',
  templateUrl: './add-list-button.component.html',
  imports: [BtnBaseComponent, FormField, CnPipe],
})
export class AddListButtonComponent {
  readonly class = input('');

  #formColumnModel = signal<FormColumn>({ title: '' });
  protected form = form(this.#formColumnModel, ({ title }) => {
    debounce(title, 500);
    required(title, { message: 'titulo es requerido' });
    pattern(title, /^[A-Za-z0-9 ]+$/, { message: 'sin caracteres especiales' });
    maxLength(title, 100, { message: 'longitud maxima del titulo es 100 caracteres' });
  });
  protected isShow = signal(false);
  readonly emitter = output<string>();

  protected toggleShow(): void {
    this.isShow.update(v => !v);
  }

  protected onSubmit(event: Event) {
    event.preventDefault();
    const { invalid, value } = this.form();
    if (invalid()) return;

    this.emitter.emit(value().title);
    this.form().reset();
    this.isShow.set(false);
  }
}
