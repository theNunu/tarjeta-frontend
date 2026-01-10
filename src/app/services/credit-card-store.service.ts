import { inject, Injectable, signal } from "@angular/core";
import { ICreditCard } from "../interfaces/credit-card.interface";


@Injectable({
  providedIn: 'root'
})
export class CreditCardStoreService {
  private _loading = signal(false);
  private _creditCards = signal<ICreditCard[]>([]);

  loading = this._loading.asReadonly();
  creditCards = this._creditCards.asReadonly();
  selectCreditCard = signal<ICreditCard | null>(null);

  loadCreditCards() {
    this._loading.set(true);

    this.creditCards;
  }

  create(creditCard: ICreditCard) {
    const currentCards = this._creditCards();
    this._creditCards.set([...currentCards, creditCard]);
  }

  edit(index: number, updatedCard: ICreditCard) {
    const currentCards = this._creditCards();
    currentCards[index] = updatedCard;
    this._creditCards.set([...currentCards]);
  }

  delete(index: number) {
    const currentCards = this._creditCards();
    currentCards.splice(index, 1);
    this._creditCards.set([...currentCards]);
  }
  
}
