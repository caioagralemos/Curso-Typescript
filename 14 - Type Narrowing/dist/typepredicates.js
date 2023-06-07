"use strict";
// Type Predicates - criando uma função que checa se um parametro é de um tipo x,
// um type predicate avisa a typescript que o que for retornado ali é desse tipo
// type predicate = (media is TVShow)
function isTVShow(media) {
    return media.episodeDuration !== undefined;
}
