function getFarmAnimalSound(animal) {
    // os 3 animais tem exatamente as mesmas propriedades, então vamos adicionar um discriminador
    // adicionamos a mesma propriedade com literal values a todas as interfaces que estamos comparando
    switch (animal.kind) {
        case "pig":
            return 'Oink!';
        case "rooster":
            return 'Popopó!';
        case "cow":
            return 'Môooo!';
    }
}
export { getFarmAnimalSound };
