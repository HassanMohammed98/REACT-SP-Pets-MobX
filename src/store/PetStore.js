import React from "react";
import petsData from "../petsData";
import { makeAutoObservable } from "mobx";

class PetStore {
  pets = petsData;
  constructor() {
    makeAutoObservable(this);
  }
  handleAdopt = (petId) => {
    this.pets = this.pets.filter((pet) => pet.id !== petId);
  };
}
const store = new PetStore();

export default store;
