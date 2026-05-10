export const DIET_KATY_MOCK = [
    {
        id: 1,
        title: 'Pré Cutting',
        patientName: 'Katy',
        description: 'Dieta focada em perda de gordura com déficit calórico controlado.',
        meals: [
            {
                id: 1,
                name: 'Café da Manhã',
                items: [
                    { name: 'Tapioca', quantity: '100g' },
                    { name: 'Ovos grandes', quantity: '2un' },
                    { name: 'Mussarela', quantity: '15g (1 fatia)' },
                    { name: 'Mamão', quantity: '100g' },
                    { name: 'Leite desnatado', quantity: '150ml' }
                ],
                calories: 413.2
            },
            {
                id: 2,
                name: 'Almoço',
                items: [
                    { name: 'Arroz integral cozido', quantity: '120g' },
                    { name: 'Feijão cozido', quantity: '100g' },
                    { name: 'Peito de frango grelhado', quantity: '100g' },
                    { name: 'Azeite de oliva extra virgem', quantity: '15ml' },
                    { name: 'Legumes', quantity: '150g' },
                    { name: 'Abacaxi', quantity: '100g' }
                ],
                calories: 607.3
            },
            {
                id: 3,
                name: 'Lanche da Tarde',
                items: [
                    { name: 'Farinha de Aveia', quantity: '40g' },
                    { name: 'Ovo', quantity: '1un' },
                    { name: 'Mussarela', quantity: '15g (1 fatia)' },
                    { name: 'Atum sólido ao natural', quantity: '120g' },
                    { name: 'Leite desnatado', quantity: '150ml' }
                ],
                calories: 469.5
            },
            {
                id: 4,
                name: 'Janta',
                items: [
                    { name: 'Whey protein concentrado', quantity: '30g' },
                    { name: 'Farinha de Aveia', quantity: '20g' },
                    { name: 'Castanha do Pará', quantity: '20g' },
                    { name: 'Banana', quantity: '1un' }
                ],
                calories: 331.9
            }
        ],
        total: {
            calories: 1821.8
        }
    }
]
