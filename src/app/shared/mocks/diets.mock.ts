export const DIETS_MOCK = [
    {
        id: 1,
        title: 'Dieta de Bulking',
        patientName: 'Daniel Vaz Villalobos Martins',
        description: 'Dieta focada em ganho de massa muscular com superávit calórico.',
        meals: [
            {
                id: 1,
                name: 'Café da Manhã',
                items: [
                    { name: 'Whey protein concentrado', calories: 120, quantity: 1, unit: 'scoop' },
                    { name: 'Aveia em flocos', calories: 150, quantity: 40, unit: 'g' },
                    { name: 'Banana', calories: 105, quantity: 1, unit: 'unidade' },
                    { name: 'Castanha do Pará', calories: 200, quantity: 30, unit: 'g' },
                    { name: 'Cacau em pó 100%', calories: 12, quantity: 5, unit: 'g' },
                    { name: 'Psyllium', calories: 20, quantity: 10, unit: 'g' },
                    { name: 'Leite desnatado', calories: 90, quantity: 200, unit: 'ml' }
                ]
            }, {
                id: 2,
                name: 'Almoço'
            }, {
                id: 3,
                name: 'Jantar'
            }
        ]
    } 
]