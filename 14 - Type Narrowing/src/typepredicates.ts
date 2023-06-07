// Type Predicates - criando uma função que checa se um parametro é de um tipo x,
// um type predicate avisa a typescript que o que for retornado ali é desse tipo
// type predicate = (media is TVShow)
function isTVShow(media: Movie | TVShow): media is TVShow {
    return (media as TVShow).episodeDuration !== undefined;
}