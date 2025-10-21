import { Injectable } from "@angular/core";

import { DIETS_MOCK } from "../mocks/diets.mock";

@Injectable({
  providedIn: 'root'
})
export class DietService {
    getDiet(dietId: number) {
        return DIETS_MOCK.find(diet => diet.id === dietId);
    }
}