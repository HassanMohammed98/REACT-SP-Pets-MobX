import { useState } from "react";
import store from "../store/PetStore";

export default function PetItem({ pet }) {
  const [petStatus, letPetStatus] = useState(false);
  const [petImage, setpetImage] = useState(pet.image);
  const petStatusChange = (change) => {
    // console.log(pet);
    letPetStatus(change);
    if (change === false) {
      setpetImage(pet.image);
    } else {
      setpetImage(pet.image2);
    }
  };
  return (
    <div class="col-lg-4 col-md-8 col-sm-10">
      <div class="single-doctor">
        <img className="image" alt={pet.name} src={petImage} />
        <div class="content">
          <h3>{pet.name}</h3>
          <button
            type="button"
            class={`btn m-2 ${!petStatus ? "btn-info" : "btn-danger"}`}
            onClick={() => petStatusChange(!petStatus)}
          >
            {!petStatus ? "Pet" : "Un-pet"}
          </button>
          <button
            type="button"
            class="btn btn-info m-2"
            onClick={() => store.handleAdopt(pet.id)}
          >
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}
