export interface cardHs{cardId:string,
    cardSet:string,
    collectible:boolean,
    dbfId:string,
    faction:string,
    health:Int16Array,
    img:string,
    imgGold:string,
    locale:string,
    name:string,
    playerClass:string,
    rarity:string,
    type:string,
    artist:string,
    cost:Int16Array,
    flavor:string,
    text:string,
}

export interface setHs {
    name:string,
    cards:Array<cardHs>
}