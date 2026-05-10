import { Injectable } from "@angular/core";

import { DIETS_MOCK } from "../mocks/diets.mock";

@Injectable({
  providedIn: 'root'
})
export class DietService {

    getDietByUser(userName: string) {
        const userDiets = DIETS_MOCK.find(diet => diet.user === userName)?.diets;
        return userDiets?.find(diet => diet.id === 1) || null;
    }
}