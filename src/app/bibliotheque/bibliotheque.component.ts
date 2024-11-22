import { Component } from '@angular/core';
import { livre } from './livre';
@Component({
  selector: 'app-bibliotheque',
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.css']
})
export class BibliothequeComponent {
  id = 3;
  afficherr = false;
  isformVisible = false;
  title = "";
  auteur = "";
  prix = 0;
  date: string = "";
  tab: livre[] = [
    { id: 1, title: "Atomic Habits", auteur: "James Clear", prix: 15, date: "12/12/2022", score: 0 },
    { id: 2, title: "Le crépuscule d'une isode", auteur: "Micheal Ofrer", prix: 4, date: "12/12/2022", score: 0 }
  ];
  score = 0;
  editIndex: number | null = null;
  confirmer() {
    if (this.title.trim() && this.auteur.trim() && this.prix > 0 && this.date.trim()) {
      const newLivre = new livre(this.id, this.title, this.auteur, this.prix, this.date, this.score);
      if (this.editIndex !== null) {
        this.tab[this.editIndex] = newLivre;
        this.editIndex = null; 
      } else {
        newLivre.id = this.id++;
        this.tab.push(newLivre);
      }
      this.resetForm();
    } else {
      alert("Veuillez saisir des valeurs valides !");
    }
  }
  resetForm() {
    this.isformVisible = false;
    this.title = "";
    this.auteur = "";
    this.prix = 0;
    this.date = "";
    this.score = 0;
  }
  supprimer(i: number) {
    if (confirm("Êtes-vous sûr de vouloir supprimer le livre ?")) {
      this.tab.splice(i, 1);
    }
  }

  editer(i: number) {
    const livre = this.tab[i];
    this.isformVisible = true;
    this.editIndex = i;
    this.title = livre.title;
    this.prix = livre.prix;
    this.auteur = livre.auteur;
  }




}
