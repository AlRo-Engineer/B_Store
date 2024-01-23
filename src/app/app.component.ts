import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currency = '$';
  form = this.fb.group({
    order: ['', Validators.required],
    name: ['', Validators.required],
    phone: ['', Validators.required]
  });

  productsData = [
    {
      image: '1.png',
      title: 'Бургер чеддер & бекон',
      description: 'Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус',
      price: 8,
      weight: 360,
      basePrice: 8,
    },
    {
      image: '2.png',
      title: 'BBQ с беконом и курицей',
      description: 'Булочка бриошь с кунжутом, куриная котлета, сыр чеддер, томат, огурец маринованный, лук маринованный, салат Ромен, бекон, соус BBQ',
      price: 7,
      weight: 390,
      basePrice: 7,
    },
    {
      image: '3.png',
      title: 'Дабл биф бургер',
      description: 'Две говяжьи котлеты, сыр чеддер, салат романо, маринованные огурцы, свежий томат, бекон, красный лук, соус бургер, горчица',
      price: 10,
      weight: 420,
      basePrice: 10,
    },
    {
      image: '4.png',
      title: 'Баварский бургер',
      description: ' Булочка для бургера, говяжья котлета, красный лук, сыр, охотничья колбаска, соус барбекю, соус сырный, салат айсберг',
      price: 7,
      weight: 220,
      basePrice: 7,
    },
    {
      image: '5.png',
      title: 'Бекон чизбургер',
      description: 'Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, сыр, сырный соус, кетчуп, зелень',
      price: 8,
      weight: 220,
      basePrice: 8,
    },
    {
      image: '6.png',
      title: 'Индиана бургер',
      description: 'Булочка для бургера, котлета куриная, грудинка, яйцо, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень',
      price: 9,
      weight: 320,
      basePrice: 9,
    },
    {
      image: '7.png',
      title: 'Вегги бургер',
      description: 'Булочка для бургера, вегетарианская котлета, красный лук, сыр, свежий томат, соус барбекю, соус сырный, салат айсберг',
      price: 8,
      weight: 280,
      basePrice: 8,
    },
    {
      image: '8.png',
      title: 'Плаксивый Джо',
      description: 'Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, красный лук, сыр, перец халапеньо, кетчуп, зелень',
      price: 7,
      weight: 380,
      basePrice: 7,
    },
    {
      image: '9.png',
      title: 'Двойной чиз бургер',
      description: 'Булочка для бургера, две говяжьи котлеты, двойной сыр чеддар, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень',
      price: 11,
      weight: 400,
      basePrice: 11,
    },
    {
      image: '10.png',
      title: 'Фрешбургер',
      description: 'Булочка для бургера, говяжья котлета, бекон, сыр чеддар, яйцо, салями, соус барбекю, соус сырный,\n' +
        '          салат айсберг, свежий томат',
      price: 9,
      weight: 300,
      basePrice: 9,
    },
    {
      image: '11.png',
      title: 'Цуккини бургер',
      description: 'Булочка для бургера, вегетарианская котлета из нута, цуккини на гриле, помидор, огурец маринованный, сыр, горчичный соус, кетчуп, зелень',
      price: 8,
      weight: 320,
      basePrice: 8,
    },
    {
      image: '12.png',
      title: 'Двойной бургер чеддар',
      description: 'Булочка для бургера, котлета говяжья, грудинка, красный лук, огурец маринованный, томат, кетчуп, двойной сыр чеддар, горчица, зелень',
      price: 9,
      weight: 360,
      basePrice: 9,
    },
  ];

  constructor(private fb: FormBuilder) {
  }

  scrollTo(target: HTMLElement, burger?: any) {
    target.scrollIntoView({behavior: 'smooth'});
    if (burger) {
      this.form.patchValue({order: burger.title + ' (' + burger.price + ' ' + this.currency + ')'});
    }
  }

  confirmOrder() {
    if (this.form.valid) {
      alert('Order confirmed');
      this.form.reset()
    }
  }

  changeCurrency() {

    let newCurrency = '$';
    let coefficient = 1;

    if (this.currency === '$') {
      newCurrency = '₽';
      coefficient = 80;
    } else if (this.currency === '₽') {
      newCurrency = 'BYN';
      coefficient = 3;
    } else if (this.currency === 'BYN') {
      newCurrency = '€';
      coefficient = 0.9;
    } else if (this.currency === '€') {
      newCurrency = '¥';
      coefficient = 6.9;
    }

    this.currency = newCurrency;

    this.productsData.forEach((item: any)=> {
      item.price = +(item.basePrice * coefficient).toFixed(1);
    });
  }
}
