interface IGetCharacters {
    type: 'getCharacters',
    payload: string
}

interface IGetCharacterById {
    type: 'getCharacterById',
    payload: string
}

export type Action = IGetCharacters | IGetCharacterById;