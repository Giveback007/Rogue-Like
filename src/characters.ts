const getObj = (character: string, action: string, frames: number) =>
    ({ 
        frames, img: require(`./assets/characters/${character}/${character}-${action} [${frames}].png`)
    })

export const heroSprite = {
    standing: getObj('hero', 'standing', 4),
    walking: getObj('hero', 'walking', 6),
    attack: getObj('hero', 'attack', 8)
}